import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import NewsCategoryTabs from "@/components/NewsCategoryTabs";

const STRAPI_URL = "http://localhost:1337"
const GRAPHQL_URL = `${STRAPI_URL}/graphql`

async function getOverseasNews(locale: string) {
  const query = `
    query GetOverseasNews($locale: I18NLocaleCode) {
      articles(
        locale: $locale,
        filters: { category: { name: { eq: \"overseas\" } } }
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

export default async function OverseasNewsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans";
  const articles = await getOverseasNews(locale);

  return (
    <PageLayout
      title={locale === "en" ? "Overseas News" : "海外新闻"}
      subtitle={locale === "en" ? "Learn about BQC Electronics' latest overseas news" : "了解百千成电子海外最新动态"}
      breadcrumbs={[
        { label: locale === "en" ? "News Center" : "新闻中心", href: `/${locale}/news` },
        { label: locale === "en" ? "Overseas News" : "海外新闻", href: `/${locale}/news/overseas` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <NewsCategoryTabs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item: any) => (
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
                href={`/${locale}/news/overseas/${item.slug}`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                {locale === "en" ? "Read More" : "阅读全文"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
} 