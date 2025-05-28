import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import NewsCategoryTabs from "@/components/NewsCategoryTabs";
import { Calendar, User, ArrowRight } from "lucide-react"

const STRAPI_URL = "http://localhost:1337"

export default async function OverseasNewsPage() {
  // 获取 Strapi 数据
  const res = await fetch(
    `${STRAPI_URL}/api/articles?populate[cover][fields][0]=url&populate[category][fields][0]=name&filters[category][name][$eq]=overseas`,
    { cache: "no-store" }
  )
  const data = await res.json()
  const articles = data.data

  return (
    <PageLayout
      title="海外新闻"
      subtitle="了解百千成电子海外最新动态"
      breadcrumbs={[
        { label: "新闻中心", href: "/news" },
        { label: "海外新闻", href: "/news/overseas" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item: any) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <span className="text-gray-400">无封面</span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
              <Link
                href={`/news/overseas/${item.slug}`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                阅读全文
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
