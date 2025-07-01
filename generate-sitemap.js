const fs = require("fs");
const path = require("path");

// 你的站点根域名
const DOMAIN = "http://192.168.8.97:3000";

// 静态页面
const staticRoutes = [
  "",
  "/zh-Hans",
  "/en",
  "/zh-Hans/products",
  "/en/products",
  "/zh-Hans/services",
  "/en/services",
  "/zh-Hans/about",
  "/en/about",
  "/zh-Hans/news",
  "/en/news",
  "/zh-Hans/contact",
  "/en/contact",
];

// 动态产品详情页（可从数据库/接口/本地数据读取，这里举例写死）
const productDetails = [
  // 中文
  "/zh-Hans/products/energy-storage-bms/power-storage",
  "/zh-Hans/products/energy-storage-bms/large-ship",
  "/zh-Hans/products/energy-storage-bms/small-ship",
  "/zh-Hans/products/energy-storage-bms/communication-base",
  "/zh-Hans/products/energy-storage-bms/energy-storage-ems",
  "/zh-Hans/products/energy-storage-pcs",
  "/zh-Hans/products/intelligent-robot-systems",
  "/zh-Hans/products/industrial-control-boards",
  "/zh-Hans/products/medical-devices",
  // 英文
  "/en/products/energy-storage-bms/power-storage",
  "/en/products/energy-storage-bms/large-ship",
  "/en/products/energy-storage-bms/small-ship",
  "/en/products/energy-storage-bms/communication-base",
  "/en/products/energy-storage-bms/energy-storage-ems",
  "/en/products/energy-storage-pcs",
  "/en/products/intelligent-robot-systems",
  "/en/products/industrial-control-boards",
  "/en/products/medical-devices",
];

// 合并所有路由
const allRoutes = [...staticRoutes, ...productDetails];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "./frontend/public/sitemap.xml"), xml);
console.log("sitemap.xml 生成成功！");