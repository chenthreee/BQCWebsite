import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { STRAPI_URL, GRAPHQL_URL } from "@/lib/config"

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

interface NewsSectionProps {
  locale: string
}

export const NewsSection: React.FC<NewsSectionProps> = ({ locale }) => {
  const { t } = useLanguage();
  const [companyNewsList, setCompanyNewsList] = useState<any[]>([])
  const [industryNewsList, setIndustryNewsList] = useState<any[]>([])

  useEffect(() => {
    getAllNews(locale).then(newsList => {
      // 按发布时间降序排列，各取最新 4 条
      const sorted = [...newsList].sort(
        (a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      setCompanyNewsList(sorted.filter((n: any) => n.category?.name === "company").slice(0, 4))
      setIndustryNewsList(sorted.filter((n: any) => n.category?.name === "industry").slice(0, 6))
    })
  }, [locale])

  // 先放公司新闻 2 条，再放行业新闻 6 条
  const displayNews = [
    ...companyNewsList.slice(0, 2).map((n: any) => ({ ...n, _type: "company" })),
    ...industryNewsList.slice(0, 6).map((n: any) => ({ ...n, _type: "industry" })),
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t("news.center.title")}</h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto">{t("news.center.subtitle")}</p>
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-4">{t("news.center.description")}</p>
        </div>

        {/* 分类入口 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Link
            href={`/${locale}/news/company.html`}
            rel="nofollow"
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 block"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900">{t("news.company")}</h3>
            </div>
            <p className="text-gray-600 mb-6">{t("news.company.desc")}</p>
            <span className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              {t("news.readMore")} →
            </span>
          </Link>
          <Link
            href={`/${locale}/news/industry.html`}
            rel="nofollow"
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 block"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <span className="w-6 h-6 block bg-white rounded-full"></span>
              </div>
              <h3 className="text-base font-bold text-gray-900">{t("news.industry")}</h3>
            </div>
            <p className="text-gray-600 mb-6">{t("news.industry.desc")}</p>
            <span className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
              {t("news.readMore")} →
            </span>
          </Link>
        </div>

        {/* 新闻列表：最多 8 条，4列2行 */}
        {displayNews.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayNews.map((news: any) => {
              const isCompany = news._type === "company"
              const categoryLabel = isCompany ? t("news.company") : t("news.industry")
              const categoryColor = isCompany ? "text-blue-600" : "text-green-600"
              const hoverColor = isCompany ? "hover:text-blue-800" : "hover:text-green-800"
              const href = isCompany
                ? `/${locale}/news/company/${news.slug}.html`
                : `/${locale}/news/industry/${news.slug}.html`

              return (
                <Link key={news.documentId} href={href} className="block group">
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-44 overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {news.cover?.url ? (
                        <Image
                          src={STRAPI_URL + news.cover.url}
                          alt={news.title}
                          width={400}
                          height={176}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-gray-400">无封面</span>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <span className={`text-base font-medium ${categoryColor}`}>{categoryLabel}</span>
                      <h4 className="text-base font-bold text-gray-900 mt-1 mb-2 line-clamp-2 flex-1">{news.title}</h4>
                      <p className="text-gray-500 mb-3 line-clamp-2">{news.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-xs text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{news.publishedAt?.slice(0, 10)}</span>
                        </div>
                        <span className={`text-xs font-medium ${categoryColor} ${hoverColor}`}>
                          {t("news.readMore")} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
