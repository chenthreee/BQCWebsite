import React from "react"
import Link from "next/link"
import { Calendar, TrendingUp } from "lucide-react"

interface NewsSectionProps {
  locale: string
  t: (key: string) => string
}

export const NewsSection: React.FC<NewsSectionProps> = ({ locale, t }) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("news.center.title")}</h2>
        <p className="text-xl text-gray-600 mb-2">{t("news.center.subtitle")}</p>
        <p className="text-gray-500 max-w-3xl mx-auto">{t("news.center.description")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 国内新闻 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">公司新闻</h3>
          </div>
          <p className="text-gray-600 mb-6">了解百千成电子公司最新动态、产品发布和合作伙伴关系</p>
          <Link
            href={`/${locale}/news/company`}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            查看更多 →
          </Link>
        </div>
        {/* 行业新闻 */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">行业新闻</h3>
          </div>
          <p className="text-gray-600 mb-6">关注储能行业发展趋势、技术创新和市场分析</p>
          <Link
            href={`/${locale}/news/industry`}
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            查看更多 →
          </Link>
        </div>
      </div>
      {/* 最新新闻预览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">公司新闻</span>
            <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3">
              百千成电子获得新一轮融资，加速储能技术研发
            </h4>
            <p className="text-gray-600 text-sm">
              2024年12月，百千成电子成功完成新一轮融资，将用于加强储能BMS技术研发...
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-green-600 font-medium">行业动态</span>
            <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3">储能行业迎来政策利好，市场前景广阔</h4>
            <p className="text-gray-600 text-sm">国家发改委发布储能产业发展指导意见，为行业发展提供政策支持...</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-purple-600 font-medium">技术分享</span>
            <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3">BMS技术在大型储能系统中的应用与挑战</h4>
            <p className="text-gray-600 text-sm">随着储能系统规模不断扩大，BMS技术面临新的挑战和机遇...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
) 