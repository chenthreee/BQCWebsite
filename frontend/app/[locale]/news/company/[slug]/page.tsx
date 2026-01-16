import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation";

const STRAPI_URL = "http://localhost:1337"
const GRAPHQL_URL = `${STRAPI_URL}/graphql`

async function getArticleBySlug(slug: string, locale: string) {
  const query = `
    query($slug: String!, $locale: I18NLocaleCode) {
      articles(filters: { slug: { eq: $slug } }, locale: $locale) {
        documentId
        title
        category { name }
        author { name }
        publishedAt
        description
        blocks {
          __typename
          ... on ComponentSharedMedia {
            file { url }
          }
          ... on ComponentSharedRichText {
            body
          }
        }
      }
    }
  `
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { slug, locale } }),
    cache: "no-store"
  })
  const { data } = await res.json()
  if (!data || !data.articles || !data.articles.length) {
    return null
  }
  return data.articles[0]
}

async function getAllCompanyNewsSlugs(locale: string) {
  const query = `
    query($locale: I18NLocaleCode) {
      articles(
        locale: $locale,
        filters: { category: { name: { eq: "company" } } },
        sort: "publishedAt:desc"
      ) {
        slug
        title
      }
    }
  `;
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { locale } }),
    cache: "no-store"
  });
  const { data } = await res.json();
  return data.articles || [];
}

export default async function NewsDetailPage({ params }: { params: { slug: string, locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans";
  const article = await getArticleBySlug(params.slug, locale);
  if (!article) {
    notFound();
  }
  const allArticles = await getAllCompanyNewsSlugs(locale);
  const currentIndex = allArticles.findIndex((a: any) => a.slug === params.slug);
  const prev = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const next = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const category = article.category?.name;
  const relatedArticles = category ? await (async () => {
    const query = `
      query($category: String!, $slug: String!, $locale: I18NLocaleCode) {
        articles(
          filters: {
            category: { name: { eq: $category } }
            slug: { ne: $slug }
          }
          locale: $locale
          sort: "publishedAt:desc"
          pagination: { limit: 1 }
        ) {
          slug
          title
          description
          cover { url }
        }
      }
    `;
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { category, slug: params.slug, locale } }),
      cache: "no-store"
    });
    const { data } = await res.json();
    return data.articles || [];
  })() : [];

  return (
    <PageLayout
      title={article.title}
      subtitle={article.description || ""}
      breadcrumbs={[
        { label: locale === "en" ? "News Center" : "新闻中心", href: `/${locale}/news` },
        { label: locale === "en" ? "Company News" : "公司新闻", href: `/${locale}/news/company.html` },
        { label: article.title, href: `/${locale}/news/company/${params.slug}.html` },
      ]}
      backgroundImage="/images/news/newsBreadcrumb.png"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
            {article.category?.name}
          </span>
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }) : ""}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{article.author?.name}</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

        <div className="mb-8">
          {article.blocks.map((block: any, idx: number) => {
            if (block.__typename === "ComponentSharedMedia" && block.file?.url) {
              return (
                <div key={idx} className="mb-6">
                  <Image
                    src={STRAPI_URL + block.file.url}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              )
            }
            if (block.__typename === "ComponentSharedRichText") {
              return (
                <div key={idx} className="prose max-w-none mb-6 whitespace-pre-line">
                  {block.body}
                </div>
              )
            }
            return null
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row w-full items-stretch gap-4 md:gap-0">
            {prev && (
              <div className="md:w-1/2 md:text-left mb-2 md:mb-0 flex items-center">
                <Link
                  href={`/${locale}/news/company/${prev.slug}.html`}
                  className="inline-flex items-center px-5 py-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all text-base font-medium shadow-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  {locale === "en" ? "Previous" : "上一篇"}：{prev.title}
                </Link>
              </div>
            )}
            {/* 分隔线，仅桌面端显示且有上一篇和下一篇时显示  */}
            {prev && next && <div className="hidden md:block w-px bg-gray-200 mx-4" />}
            {next && (
              <div className={`md:w-1/2 md:text-right flex items-center ${prev ? "justify-end" : "md:justify-end justify-end md:ml-auto"}`}>
                <Link
                  href={`/${locale}/news/company/${next.slug}.html`}
                  className="inline-flex items-center px-5 py-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all text-base font-medium shadow-sm"
                >
                  {locale === "en" ? "Next" : "下一篇"}：{next.title}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 推荐新闻区块 */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">{locale === "en" ? "Related News" : "同分类推荐"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((item: any) => (
              <div key={item.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-100">
                  {item.cover?.url ? (
                    <Image
                      src={STRAPI_URL + item.cover.url}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-400">{locale === "en" ? "No Cover" : "无封面"}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
                  <Link
                    href={`/${locale}/news/company/${item.slug}.html`}
                    className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                  >
                    {locale === "en" ? "Read More" : "阅读全文"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  )
} 