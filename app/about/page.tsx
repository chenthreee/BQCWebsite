"use client"

import { HeroSection } from "@/components/hero-section"
import { MainNavigation } from "@/components/main-navigation"
import { ProductSection } from "@/components/product-section"
import { AboutSection } from "@/components/about-section"
import { useLanguage } from "@/components/language-context"
import { ServicesSection } from "@/components/services-section"
import Image from "next/image"
import Link from "next/link"
import { Mail, MessageCircle, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { language, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // 避免水合不匹配
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <HeroSection />

      <main className="flex-1">
        {/* 产品中心 */}
        <ProductSection />

        {/* 服务中心 - 包含OEM代工和ODM研发 */}
        <ServicesSection />

        {/* 关于我们 */}
        <AboutSection />
      </main>

      {/* 侧边栏联系方式 */}
      <div className="fixed right-4 bottom-20 z-40 flex flex-col gap-2">
        <div className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 cursor-pointer group">
          <Mail className="h-6 w-6 text-blue-600" />
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg hidden group-hover:block whitespace-nowrap">
            <p className="font-bold text-sm">电子邮箱</p>
            <p className="text-sm">contact@baiqiancheng.com</p>
          </div>
        </div>
        <div className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 cursor-pointer group">
          <MessageCircle className="h-6 w-6 text-blue-600" />
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg hidden group-hover:block">
            <p className="font-bold text-sm">微信公众号</p>
            <div className="w-24 h-24 bg-gray-200"></div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50"
          aria-label="回到顶部"
        >
          <ArrowUp className="h-6 w-6 text-blue-600" />
        </button>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt={t("company.name")}
                  width={50}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-4">{t("company.description")}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.products")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/bms" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "储能BMS" : "Energy Storage BMS"}
                  </Link>
                </li>
                <li>
                  <Link href="/products/ems" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "储能EMS（总控）" : "Energy Storage EMS"}
                  </Link>
                </li>
                <li>
                  <Link href="/products/pcs" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "储能PCS" : "Energy Storage PCS"}
                  </Link>
                </li>
                <li>
                  <Link href="/products/robot" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "智能机器人系统" : "Intelligent Robot Systems"}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.about")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about/introduction" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "简介" : "Introduction"}
                  </Link>
                </li>
                <li>
                  <Link href="/about/values" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "核心价值观" : "Core Values"}
                  </Link>
                </li>
                <li>
                  <Link href="/about/history" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "发展历程" : "History"}
                  </Link>
                </li>
                <li>
                  <Link href="/about/management" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "管理系统" : "Management System"}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact/rd" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "研发中心" : "R&D Center"}
                  </Link>
                </li>
                <li>
                  <Link href="/contact/factory-cn" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "深圳工厂" : "Shenzhen Factory"}
                  </Link>
                </li>
                <li>
                  <Link href="/contact/factory-my" className="text-gray-400 hover:text-white">
                    {language === "zh" ? "马来西亚工厂" : "Malaysia Factory"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <span className="text-gray-400 text-sm">
                  {language === "zh" ? "中国大陆 / 简体中文" : "China Mainland / English"}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 {t("company.name")}. {t("footer.copyright")}
              </p>
            </div>

            <div className="flex space-x-4">
              <Link href="/legal" className="text-gray-400 hover:text-white text-sm">
                {t("footer.legal")}
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
