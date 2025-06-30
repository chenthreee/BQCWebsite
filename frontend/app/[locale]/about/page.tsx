"use client"

import { HeroSection } from "@/components/hero-section"
import { MainNavigation } from "@/components/main-navigation"
import { ProductSection } from "@/components/product-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import Image from "next/image"
import Link from "next/link"
import { Mail, MessageCircle, ArrowUp } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  "company.name": {
    "zh-Hans": "百千成电子",
    "en": "BAIQIANCHENG Electronics",
  },
  "company.description": {
    "zh-Hans": "专注于储能BMS系统研发与OEM代工服务的高新技术企业",
    "en": "High-tech enterprise focusing on energy storage BMS development and OEM manufacturing services",
  },
  "footer.products": {
    "zh-Hans": "产品与服务",
    "en": "Products & Services",
  },
  "footer.about": {
    "zh-Hans": "关于我们",
    "en": "About Us",
  },
  "footer.contact": {
    "zh-Hans": "联系我们",
    "en": "Contact Us",
  },
  "footer.copyright": {
    "zh-Hans": "版权所有.",
    "en": "All rights reserved.",
  },
  "footer.legal": {
    "zh-Hans": "法律声明",
    "en": "Legal",
  },
  "footer.privacy": {
    "zh-Hans": "隐私政策",
    "en": "Privacy Policy",
  },
  // Footer 产品与服务
  "footer.products.bms": { "zh-Hans": "储能BMS", "en": "Energy Storage BMS" },
  "footer.products.ems": { "zh-Hans": "储能EMS（总控）", "en": "Energy Storage EMS (Master Control)" },
  "footer.products.pcs": { "zh-Hans": "储能PCS", "en": "Energy Storage PCS" },
  "footer.products.robot": { "zh-Hans": "智能机器人系统", "en": "Intelligent Robot System" },
  // Footer 关于我们
  "footer.about.intro": { "zh-Hans": "简介", "en": "Introduction" },
  "footer.about.values": { "zh-Hans": "核心价值观", "en": "Core Values" },
  "footer.about.history": { "zh-Hans": "发展历程", "en": "Development History" },
  "footer.about.management": { "zh-Hans": "管理系统", "en": "Management System" },
  // Footer 联系我们
  "footer.contact.rd": { "zh-Hans": "研发中心", "en": "R&D Center" },
  "footer.contact.factorycn": { "zh-Hans": "深圳工厂", "en": "Shenzhen Factory" },
  "footer.contact.factorymy": { "zh-Hans": "马来西亚工厂", "en": "Malaysia Factory" },
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const t = (key: string): string => {
    return translations[key]?.[locale] || key
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <HeroSection />
      <main className="flex-1">
        <ProductSection />
        <ServicesSection />
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
              <Link href={`/${locale}`} className="inline-block mb-6">
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
                  <Link href={`/${locale}/products/bms`} className="text-gray-400 hover:text-white">
                    {t("footer.products.bms")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/products/energy-storage-bms/energy-storage-ems`} className="text-gray-400 hover:text-white">
                    {t("footer.products.ems")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/products/pcs`} className="text-gray-400 hover:text-white">
                    {t("footer.products.pcs")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/products/robot`} className="text-gray-400 hover:text-white">
                    {t("footer.products.robot")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.about")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${locale}/about/introduction`} className="text-gray-400 hover:text-white">
                    {t("footer.about.intro")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about/values`} className="text-gray-400 hover:text-white">
                    {t("footer.about.values")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about/history`} className="text-gray-400 hover:text-white">
                    {t("footer.about.history")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about/management`} className="text-gray-400 hover:text-white">
                    {t("footer.about.management")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${locale}/contact/rd`} className="text-gray-400 hover:text-white">
                    {t("footer.contact.rd")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact/factory-cn`} className="text-gray-400 hover:text-white">
                    {t("footer.contact.factorycn")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact/factory-my`} className="text-gray-400 hover:text-white">
                    {t("footer.contact.factorymy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <span className="text-gray-400 text-sm">
                  {locale === "en" ? "Global / English" : "中国大陆 / 简体中文"}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                © 2024 {t("company.name")}. {t("footer.copyright")}
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href={`/${locale}/legal`} className="text-gray-400 hover:text-white text-sm">
                {t("footer.legal")}
              </Link>
              <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white text-sm">
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 