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

export default async function NewsDetailPage({ params }: { params: { slug: string, locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans";
  const article = await getArticleBySlug(params.slug, locale);

  if (!article) {
    return <div>{locale === "en" ? "Article not found" : "未找到该新闻"}</div>
  }

  return (
    <PageLayout
      title={article.title}
      subtitle={article.description || ""}
      breadcrumbs={[
        { label: locale === "en" ? "News Center" : "新闻中心", href: `/${locale}/news` },
        { label: locale === "en" ? "Company News" : "公司新闻", href: `/${locale}/news/company` },
        { label: article.title, href: `/${locale}/news/company/${params.slug}` },
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
          <Link href={`/${locale}/news/company`} className="text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeft className="mr-1 h-4 w-4" />
            {locale === "en" ? "Back to Company News" : "返回公司新闻列表"}
          </Link>
        </div>
      </div>
    </PageLayout>
  )
} 