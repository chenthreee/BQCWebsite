const fs = require("fs");
const path = require("path");

const DOMAIN = process.env.SITEMAP_DOMAIN || "http://192.168.8.97:3000";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || "http://192.168.8.97:1337";
const GRAPHQL_URL = `${STRAPI_URL}/graphql`;

const CHANGEFREQ = "always";
const LASTMOD = new Date().toISOString().split("T")[0];
const SUPPORTED_LOCALES = ["zh-Hans", "en"];

const APP_DIR = path.join(__dirname, "./frontend/app");
const SITEMAP_OUTPUT = path.join(__dirname, "./frontend/public/sitemap.xml");

// 手动收录动态加载的页（如果数据库没连接上读不出来会来这里拿网站的地址。)
//但是正常得把数据库打通，不然加一篇新闻就得改一次很麻烦，不利于维护吧。改一次就得找一次我
// ）
const manualDynamicRoutes = [
  // "/zh-Hans/about/certificates/123.html",
  // "/en/about/certificates/123.html",
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function normalizeRoute(route) {
  if (!route) {
    return "";
  }

  const normalized = route.replace(/\\/g, "/").replace(/\/+/g, "/");
  if (normalized === "/") {
    return "";
  }

  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}

function isIgnoredSegment(segment) {
  if (!segment) {
    return true;
  }

  
  return (
    (segment.startsWith("(") && segment.endsWith(")")) ||
    segment.startsWith("@") ||
    segment.startsWith("_")
  );
}

function hasUnsupportedDynamicSegment(segments) {
  return segments.some((seg) => /^\[.*\]$/.test(seg) && seg !== "[locale]");
}

function expandLocaleSegments(segments) {
  const results = [[]];

  for (const seg of segments) {
    if (seg === "[locale]") {
      const next = [];
      for (const base of results) {
        for (const locale of SUPPORTED_LOCALES) {
          next.push([...base, locale]);
        }
      }
      results.splice(0, results.length, ...next);
      continue;
    }

    if (/^\[.*\]$/.test(seg)) {
      return [];
    }

    for (const base of results) {
      base.push(seg);
    }
  }

  return results.map((parts) => normalizeRoute(parts.join("/")));
}

function discoverRoutesFromApp() {
  const pageFiles = walk(APP_DIR).filter((file) => /(^|\\|\/)page\.tsx$/.test(file));
  const staticRoutes = new Set();
  const dynamicTemplates = new Set();

  for (const file of pageFiles) {
    const relativeDir = path.relative(APP_DIR, path.dirname(file));
    const rawSegments = relativeDir ? relativeDir.split(path.sep) : [];
    const cleanSegments = rawSegments.filter((seg) => !isIgnoredSegment(seg));

    if (hasUnsupportedDynamicSegment(cleanSegments)) {
      dynamicTemplates.add(normalizeRoute(cleanSegments.join("/")));
      continue;
    }

    const expandedRoutes = expandLocaleSegments(cleanSegments);
    for (const route of expandedRoutes) {
      staticRoutes.add(route);
    }
  }

  return {
    staticRoutes: Array.from(staticRoutes),
    dynamicTemplates,
  };
}

async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`GraphQL HTTP ${res.status}`);
  }

  const json = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  return json.data || {};
}

function makeHtmlPath(pathname) {
  const route = normalizeRoute(pathname);
  if (!route) {
    return "";
  }

  return route.endsWith(".html") ? route : `${route}.html`;
}

async function getNewsDynamicRoutes(dynamicTemplates) {
  const result = [];

  const query = `
    query($locale: I18NLocaleCode) {
      articles(locale: $locale, pagination: { limit: 1000 }) {
        slug
        category { name }
      }
    }
  `;

  for (const locale of SUPPORTED_LOCALES) {
    const data = await fetchGraphQL(query, { locale });
    const articles = data.articles || [];

    for (const article of articles) {
      const slug = article?.slug;
      const category = article?.category?.name;
      if (!slug || !category) {
        continue;
      }

      const template = normalizeRoute(`[locale]/news/${category}/[slug]`);
      if (!dynamicTemplates.has(template)) {
        continue;
      }

      result.push(makeHtmlPath(`/${locale}/news/${category}/${slug}`));
    }
  }

  return result;
}

async function getProductDynamicRoutes(dynamicTemplates) {
  const result = [];

  const query = `
    query($locale: I18NLocaleCode) {
      products(locale: $locale, pagination: { limit: 1000 }) {
        slug
        category { name }
        sub_category { name }
      }
    }
  `;

  for (const locale of SUPPORTED_LOCALES) {
    const data = await fetchGraphQL(query, { locale });
    const products = data.products || [];

    for (const product of products) {
      const slug = product?.slug;
      const category = product?.category?.name;
      const subCategory = product?.sub_category?.name;

      if (!slug || !category) {
        continue;
      }

      if (subCategory) {
        const templateWithSub = normalizeRoute(`[locale]/products/${category}/${subCategory}/[slug]`);
        if (dynamicTemplates.has(templateWithSub)) {
          result.push(makeHtmlPath(`/${locale}/products/${category}/${subCategory}/${slug}`));
          continue;
        }
      }

      const templateWithoutSub = normalizeRoute(`[locale]/products/${category}/[slug]`);
      if (dynamicTemplates.has(templateWithoutSub)) {
        result.push(makeHtmlPath(`/${locale}/products/${category}/${slug}`));
      }
    }
  }

  return result;
}

function getPriority(route) {
  const depth = route
    .split("/")
    .filter((segment) => segment && segment.trim() !== "").length;

  if (depth <= 2) {
    return "1.0";
  }

  const reduced = 1.0 - (depth - 2) * 0.2;
  return Math.max(0.1, reduced).toFixed(1);
}

async function generateSitemap() {
  const { staticRoutes, dynamicTemplates } = discoverRoutesFromApp();

  let newsRoutes = [];
  let productRoutes = [];

  try {
    [newsRoutes, productRoutes] = await Promise.all([
      getNewsDynamicRoutes(dynamicTemplates),
      getProductDynamicRoutes(dynamicTemplates),
    ]);
  } catch (error) {
    console.warn("[sitemap] Dynamic slug fetch failed, fallback to static routes only:", error.message);
  }

  const allRoutes = Array.from(
    new Set([...staticRoutes, ...newsRoutes, ...productRoutes, ...manualDynamicRoutes].map(normalizeRoute))
  )
    .filter((route) => route !== undefined && route !== null)
    .sort((a, b) => a.localeCompare(b));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <priority>${getPriority(route)}</priority>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${CHANGEFREQ}</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  fs.writeFileSync(SITEMAP_OUTPUT, xml);
  console.log(
    `sitemap.xml generated: total=${allRoutes.length}, static=${staticRoutes.length}, news=${newsRoutes.length}, products=${productRoutes.length}`
  );
}

generateSitemap().catch((error) => {
  console.error("sitemap generate failed:", error);
  process.exitCode = 1;
});
