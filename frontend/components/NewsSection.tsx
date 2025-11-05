import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { STRAPI_URL, GRAPHQL_URL } from "@/lib/config"

// const STRAPI_URL = "http://localhost:1337"
// const GRAPHQL_URL = `${STRAPI_URL}/graphql`

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
  const [companyNews, setCompanyNews] = useState<any>(null)
  const [industryNews, setIndustryNews] = useState<any>(null)

  useEffect(() => {
    getAllNews(locale).then(newsList => {
      console.log("Fetched news data:", newsList);  // 添加日志
      setCompanyNews(newsList.find((n: any) => n.category?.name === "company"))
      setIndustryNews(newsList.find((n: any) => n.category?.name === "industry"))
    })
  }, [locale])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("news.center.title")}</h2>
          <p className="text-xl text-gray-600 mb-2">{t("news.center.subtitle")}</p>
          <p className="text-gray-500 max-w-3xl mx-auto">{t("news.center.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link
            href={`/${locale}/news/company.html`}
            rel="nofollow"
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 block"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t("news.company")}</h3>
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
              <h3 className="text-2xl font-bold text-gray-900">{t("news.industry")}</h3>
            </div>
            <p className="text-gray-600 mb-6">{t("news.industry.desc")}</p>
            <span className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
              {t("news.readMore")} →
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyNews && (
            <Link href={`/${locale}/news/company/${companyNews.slug}.html`} rel="nofollow" className="block">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="h-60 overflow-hidden bg-gray-100 flex items-center justify-center">
                  {companyNews.cover?.url ? (
                    <Image src={STRAPI_URL + companyNews.cover.url} alt={companyNews.title} width={800} height={240} className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-gray-400">无封面</span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{t("news.company")}</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3">{companyNews.title}</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{companyNews.description}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{companyNews.publishedAt?.slice(0, 10)}</span>
                  </div>
                  <span className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                    {t("news.readMore")} &rarr;
                  </span>
                </div>
              </div>
            </Link>
          )}
          {industryNews && (
            <Link href={`/${locale}/news/industry/${industryNews.slug}.html`} rel="nofollow" className="block">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="h-60 overflow-hidden bg-gray-100 flex items-center justify-center">
                  {industryNews.cover?.url ? (
                    <Image src={STRAPI_URL + industryNews.cover.url} alt={industryNews.title} width={800} height={240} className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-gray-400">无封面</span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-sm text-green-600 font-medium">{t("news.industry")}</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3">{industryNews.title}</h4>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{industryNews.description}</p>
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{industryNews.publishedAt?.slice(0, 10)}</span>
                  </div>
                  <span className="text-green-600 hover:text-green-800 flex items-center text-sm font-medium">
                    {t("news.readMore")} &rarr;
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
} 