import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import NewsCategoryTabs from "@/components/NewsCategoryTabs";
const STRAPI_URL = "http://localhost:1337"
const GRAPHQL_URL = `${STRAPI_URL}/graphql`

async function getAllNews() {
  const query = `
    query {
      articles {
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
    body: JSON.stringify({ query }),
    cache: "no-store"
  })
  const { data } = await res.json()
  return data.articles
}

export default async function NewsPage() {
  const allNews = await getAllNews()

  return (
    <PageLayout
      title="新闻中心"
      subtitle="了解百千成电子最新动态与行业资讯"
      breadcrumbs={[{ label: "新闻中心", href: "/news" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      {/* 新闻分类标签 */}
      <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
        <Link href="/news" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          全部新闻
        </Link>
        <Link href="/news/domestic" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          国内新闻
        </Link>
        <Link href="/news/overseas" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          海外新闻
        </Link>
      </div>

      {/* 置顶新闻 */}
      {allNews.length > 0 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full">
              {allNews[0].cover?.url ? (
                <Image
                  src={STRAPI_URL + allNews[0].cover.url}
                  alt={allNews[0].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">无封面</span>
                </div>
              )}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                  {allNews[0].category?.name}
                </span>
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{allNews[0].publishedAt?.slice(0, 10)}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{allNews[0].author?.name}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{allNews[0].title}</h2>
              <p className="text-gray-700 mb-6">{allNews[0].description}</p>
              <Link
                href={`/news/${allNews[0].category?.name === 'overseas' ? 'overseas' : 'domestic'}/${allNews[0].slug}`}
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                阅读全文
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 新闻列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allNews.slice(1).map((news: any) => (
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
                  <span className="text-gray-400">无封面</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                  {news.category?.name}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{news.publishedAt?.slice(0, 10)}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{news.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{news.description}</p>
              <Link
                href={`/news/${news.category?.name === 'overseas' ? 'overseas' : 'domestic'}/${news.slug}`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                阅读全文
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
