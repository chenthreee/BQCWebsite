"use client"

import { HeroSection } from "@/components/hero-section"
import { MainNavigation } from "@/components/main-navigation"
import { ProductSection } from "@/components/product-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Image from "next/image"
import Link from "next/link"
import { Mail, MessageCircle, ArrowUp } from "lucide-react"
import { NewsSection } from "@/components/NewsSection"
import { useLanguage } from "@/components/language-context"

// 翻译字典
const translations: Record<string, Record<string, string>> = {
  // Company info
  "company.name": {
    "zh-Hans": "百千成电子",
    "en": "BAIQIANCHENG Electronics",
  },
  "company.slogan": {
    "zh-Hans": "智能储能系统解决方案专家",
    "en": "Expert in Intelligent Energy Storage Solutions",
  },
  "company.description": {
    "zh-Hans": "专注于储能BMS系统研发与OEM代工服务的高新技术企业",
    "en": "High-tech enterprise focusing on energy storage BMS development and OEM manufacturing services",
  },
  "button.learnMore": {
    "zh-Hans": "了解更多",
    "en": "Learn More",
  },
  "scroll.down": {
    "zh-Hans": "向下滚动",
    "en": "Scroll Down",
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
    "zh-Hans": "© 2024 百千成电子. 版权所有.",
    "en": "© 2024 BAIQIANCHENG Electronics. All rights reserved.",
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
  // 新闻中心板块
  "news.center.title": { "zh-Hans": "新闻中心", "en": "News Center" },
  "news.center.subtitle": { "zh-Hans": "了解最新动态", "en": "Stay Updated" },
  "news.center.description": { "zh-Hans": "获取百千成电子最新资讯、行业动态和技术分享", "en": "Get the latest news, industry trends and technical insights from BQC Electronics" },
}

export default function HomePage({ params }: { params: { locale: string } }) {
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
        {/* 产品中心 */}
        <ProductSection />

        {/* 服务中心 - 包含OEM代工和ODM研发 */}
        <ServicesSection />
        
        {/* 新闻中心 */}
        <NewsSection locale={locale}/>
        
        {/* 关于我们 */}
        <AboutSection />

        {/* 资质证书板块 */}
        {(() => {
          const { t, language } = useLanguage();
          // 证书数据
          const certificates = [
            {
              image: "/images/about/certificates/IATF16949.png",
              title: language === "en" ? "IATF16949" : "IATF16949",
            },
            {
              image: "/images/about/certificates/ISO9001.png",
              title: language === "en" ? "ISO9001" : "ISO9001",
            },
            {
              image: "/images/about/certificates/ISO13485.png",
              title: language === "en" ? "ISO13485" : "ISO13485",
            },
            {
              image: "/images/about/certificates/ISO14001.png",
              title: language === "en" ? "ISO14001" : "ISO14001",
            },
          ];
          return (
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("about.certificates.title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {certificates.map((cert, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
                      <div className="h-48 w-full flex items-center justify-center bg-gray-100">
                        <img src={cert.image} alt={cert.title} className="object-contain h-full p-4" />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
            {/* 公司信息 */}
            <div className="lg:col-span-2">
              <Link href={`/${locale}`} className="inline-block mb-6">
                <Image src="/BQCLogo.png" alt={t("company.name")}
                  width={50} height={50} className="h-10 w-auto" />
              </Link>
              <p className="text-gray-400 mb-4">{t("company.description")}</p>
            </div>
            {/* 关于我们 */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.about")}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/about/introduction`} className="text-gray-400 hover:text-white">{t("footer.about.intro")}</Link></li>
                <li><Link href={`/${locale}/about/core-values`} className="text-gray-400 hover:text-white">{t("footer.about.values")}</Link></li>
                <li><Link href={`/${locale}/about/development-history`} className="text-gray-400 hover:text-white">{t("footer.about.history")}</Link></li>
                <li><Link href={`/${locale}/about/management-system`} className="text-gray-400 hover:text-white">{t("footer.about.management")}</Link></li>
              </ul>
            </div>
            {/* 联系我们 */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/contact/rd`} className="text-gray-400 hover:text-white">{t("footer.contact.rd")}</Link></li>
                <li><Link href={`/${locale}/contact/factorycn`} className="text-gray-400 hover:text-white">{t("footer.contact.factorycn")}</Link></li>
                <li><Link href={`/${locale}/contact/factorymy`} className="text-gray-400 hover:text-white">{t("footer.contact.factorymy")}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">{t("footer.copyright")}</p>
            <Link href={`/${locale}/legal`} className="text-gray-400 hover:text-white ml-4">{t("footer.legal")}</Link>
            <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white ml-4">{t("footer.privacy")}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}