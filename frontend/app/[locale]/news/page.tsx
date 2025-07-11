import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import NewsCategoryTabs from "@/components/NewsCategoryTabs";
import { headers } from "next/headers";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { redirect } from "next/navigation";

const STRAPI_URL = "http://localhost:1337"
const GRAPHQL_URL = `${STRAPI_URL}/graphql`
console.log('SSR NewsPage loaded');

const categoryMap = {
  company: { "zh-Hans": "公司新闻", en: "Company News" },
  industry: { "zh-Hans": "行业资讯", en: "Industry Information" }
}

async function getAllNews(locale: string) {
  const query = `
    query GetAllNews($locale: I18NLocaleCode) {
      articles(locale: $locale) {
        documentId
        title
        slug
        description
        cover { url }
        category { name }
        author { name }
        publishedAt
      }
    }
  `
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { locale } }),
    cache: "no-store"
  })
  const { data } = await res.json()
  return data.articles
}

export default async function NewsPage({ params, searchParams }: { params: { locale: string }, searchParams: { page?: string } }) {
  console.log('params.locale:', params.locale);

  const locale = params.locale === "en" ? "en" : "zh-Hans";
  const allNews = await getAllNews(locale);
  const pageSize = 50;
  const total = allNews.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.max(1, Math.min(totalPages, parseInt(searchParams?.page || "1", 10)));
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const pageNews = allNews.slice(startIdx, endIdx);
  if (page > totalPages) {
    redirect(`/${locale}/news?page=1`);
  }

  return (
    <PageLayout
      title={locale === "en" ? "News Center" : "新闻中心"}
      subtitle={locale === "en" ? "Learn about the latest news and industry information of BQC Electronics" : "了解百千成电子最新动态与行业资讯"}
      breadcrumbs={[{ label: locale === "en" ? "News Center" : "新闻中心", href: "/news.html" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <LanguageSwitcher />
      <NewsCategoryTabs />

      {/* 置顶新闻 */}
      {page === 1 && pageNews.length > 0 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full">
              {pageNews[0].cover?.url ? (
                <Image
                  src={STRAPI_URL + pageNews[0].cover.url}
                  alt={pageNews[0].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">{locale === "en" ? "No Cover" : "无封面"}</span>
                </div>
              )}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                  {categoryMap[pageNews[0].category?.name as "company" | "industry"]?.[locale] || pageNews[0].category?.name}
                </span>
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{pageNews[0].publishedAt?.slice(0, 10)}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{pageNews[0].author?.name}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{pageNews[0].title}</h2>
              <p className="text-gray-700 mb-6">{pageNews[0].description}</p>
              <Link
                href={`/${locale}/news/${pageNews[0].category?.name === 'industry' ? 'industry' : 'company'}/${pageNews[0].slug}.html`}
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                {locale === "en" ? "Read More" : "阅读全文"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 新闻列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pageNews.slice(page === 1 ? 1 : 0).map((news: any) => (
          <div key={news.documentId} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              {news.cover?.url ? (
                <Image
                  src={STRAPI_URL + news.cover.url}
                  alt={news.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">{locale === "en" ? "No Cover" : "无封面"}</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                  {categoryMap[news.category?.name as "company" | "industry"]?.[locale] || news.category?.name}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{news.publishedAt?.slice(0, 10)}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{news.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{news.description}</p>
              <Link
                href={`/${locale}/news/${news.category?.name === 'industry' ? 'industry' : 'company'}/${news.slug}.html`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                {locale === "en" ? "Read More" : "阅读全文"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 分页器 */}
      <div className="flex justify-center items-center gap-2 mt-12">
        {page > 1 && (
          <Link
            href={`/${locale}/news?page=${page - 1}.html`}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            {locale === "en" ? "Previous" : "上一页"}
          </Link>
        )}
        {/* 页码显示 */}
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`/${locale}/news?page=${i + 1}.html`}
            className={`px-3 py-2 rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {i + 1}
          </Link>
        ))}
        {page < totalPages && (
          <Link
            href={`/${locale}/news?page=${page + 1}.html`}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            {locale === "en" ? "Next" : "下一页"}
          </Link>
        )}
      </div>
    </PageLayout>
  )
} 