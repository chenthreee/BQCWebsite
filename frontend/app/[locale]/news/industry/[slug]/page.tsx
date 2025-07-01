import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"

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

async function getAllIndustryNewsSlugs(locale: string) {
  const query = `
    query($locale: I18NLocaleCode) {
      articles(
        locale: $locale,
        filters: { category: { name: { eq: "industry" } } },
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
    return <div>{locale === "en" ? "Article not found" : "未找到该新闻"}</div>
  }

  // 获取所有行业资讯slug和title
  const allArticles = await getAllIndustryNewsSlugs(locale);
  const currentIndex = allArticles.findIndex((a: any) => a.slug === params.slug);
  const prev = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const next = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <PageLayout
      title={article.title}
      subtitle={article.description || ""}
      breadcrumbs={[
        { label: locale === "en" ? "News Center" : "新闻中心", href: `/${locale}/news` },
        { label: locale === "en" ? "Industry News" : "行业资讯", href: `/${locale}/news/industry` },
        { label: article.title, href: `/${locale}/news/industry/${params.slug}` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
            {article.category?.name}
          </span>
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{article.publishedAt?.slice(0, 10)}</span>
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
                  href={`/${locale}/news/industry/${prev.slug}`}
                  className="inline-flex items-center px-5 py-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all text-base font-medium shadow-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  {locale === "en" ? "Previous" : "上一篇"}：{prev.title}
                </Link>
              </div>
            )}
            {/* 分隔线，仅桌面端显示且有上一篇和下一篇时显示 */}
            {prev && next && <div className="hidden md:block w-px bg-gray-200 mx-4" />}
            {next && (
              <div className={`md:w-1/2 md:text-right flex items-center ${prev ? "justify-end" : "md:justify-end justify-end md:ml-auto"}`}>
                <Link
                  href={`/${locale}/news/industry/${next.slug}`}
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
    </PageLayout>
  )
} 