import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import NewsCategoryTabs from "@/components/NewsCategoryTabs";
import { redirect } from "next/navigation";

const STRAPI_URL = "http://localhost:1337"
const GRAPHQL_URL = `${STRAPI_URL}/graphql`

async function getIndustryNews(locale: string) {
  const query = `
    query GetIndustryNews($locale: I18NLocaleCode) {
      articles(
        locale: $locale,
        filters: { category: { name: { eq: "industry" } } }
      ) {
        documentId
        title
        slug
        category { name }
        author { name }
        publishedAt
        description
        cover { url }
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

export default async function IndustryNewsPage({ params, searchParams }: { params: { locale: string }, searchParams: { page?: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans";
  const articles = await getIndustryNews(locale);
  const pageSize = 50;
  const total = articles.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.max(1, Math.min(totalPages, parseInt(searchParams?.page || "1", 10)));
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const pageArticles = articles.slice(startIdx, endIdx);
  if (page > totalPages) {
    redirect(`/${locale}/news/industry?page=1`);
  }

  return (
    <PageLayout
      title={locale === "en" ? "Industry Information" : "行业资讯"}
      subtitle={locale === "en" ? "Learn about latest industry information" : "了解行业最新动态"}
      breadcrumbs={[
        { label: locale === "en" ? "News Center" : "新闻中心", href: `/${locale}/news.html` },
        { label: locale === "en" ? "Industry Information" : "行业资讯", href: `/${locale}/news/industry.html` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <NewsCategoryTabs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pageArticles.map((item: any) => (
          <div key={item.documentId} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                href={`/${locale}/news/industry/${item.slug}.html`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                {locale === "en" ? "Read More" : "阅读全文"}
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 mt-12">
        {page > 1 && (
          <Link
            href={`/${locale}/news/industry?page=${page - 1}.html`}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            {locale === "en" ? "Previous" : "上一页"}
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`/${locale}/news/industry?page=${i + 1}.html`}
            className={`px-3 py-2 rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {i + 1}
          </Link>
        ))}
        {page < totalPages && (
          <Link
            href={`/${locale}/news/industry?page=${page + 1}.html`}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            {locale === "en" ? "Next" : "下一页"}
          </Link>
        )}
      </div>
    </PageLayout>
  )
} 