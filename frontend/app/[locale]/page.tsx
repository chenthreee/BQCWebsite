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
import { CertificatesSection } from "@/components/certificates-section"

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
  "footer.about.intro": { "zh-Hans": "公司介绍", "en": "Introduction" },
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
  // mainNav 相关 key
  "mainNav.about.manufacturing": {
    "zh-Hans": "制造能力",
    "en": "Manufacturing Capabilities"
  },
  "mainNav.about.certificates": {
    "zh-Hans": "资质证书",
    "en": "Certificates"
  },
  "mainNav.products.industrial": {
    "zh-Hans": "工业控制板",
    "en": "Industrial Control Boards"
  },
  "mainNav.products.medical": {
    "zh-Hans": "医疗设备",
    "en": "Medical Devices"
  },
  "mainNav.services": {
    "zh-Hans": "服务",
    "en": "Services"
  },
  "mainNav.services.odm": {
    "zh-Hans": "ODM研发服务（围绕储能）",
    "en": "ODM Development Services (Energy Storage)"
  },
  "mainNav.services.oem": {
    "zh-Hans": "OEM代工服务",
    "en": "OEM Manufacturing Services"
  },
  "mainNav.news.company": {
    "zh-Hans": "公司新闻",
    "en": "Company News"
  },
  "mainNav.news.industry": {
    "zh-Hans": "行业资讯",
    "en": "Industry Information"
  },
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
        <CertificatesSection />
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
            {/* 公司信息 */}
            <div>
              <h1 className="sr-only">{t("company.name")}</h1>
              <Link href={`/${locale}`} rel="nofollow" className="inline-block mb-6">
                <Image src="/BQCLogo.png" alt={t("company.name")}
                  title={t("company.name")}
                  width={50} height={50} className="h-10 w-auto" />
              </Link>
              <p className="text-gray-400 mb-4">{t("company.description")}</p>
              <div className="mt-4">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-400 hover:text-white hover:font-bold transition"
                title="Sitemap"
              >
                sitemap.xml
              </a>
            </div>
            </div>
            
            {/* 关于我们 */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.about")}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/about/introduction`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.about.intro")}</Link></li>
                <li><Link href={`/${locale}/about/core-values`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.about.values")}</Link></li>
                <li><Link href={`/${locale}/about/development-history`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.about.history")}</Link></li>
                <li><Link href={`/${locale}/about/management-system`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.about.management")}</Link></li>
                <li><Link href={`/${locale}/about/manufacturing-capabilities`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.about.manufacturing") || "制造能力"}</Link></li>
                <li><Link href={`/${locale}/about/certificates`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.about.certificates") || "资质证书"}</Link></li>
              </ul>
            </div>
            {/* 产品中心 */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.products")}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/products/energy-storage-bms`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.products.bms")}</Link></li>
                <li><Link href={`/${locale}/products/energy-storage-ems`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.products.ems")}</Link></li>
                <li><Link href={`/${locale}/products/energy-storage-pcs`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.products.pcs")}</Link></li>
                <li><Link href={`/${locale}/products/intelligent-robot-systems`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.products.robot")}</Link></li>
                <li><Link href={`/${locale}/products/industrial-control-boards`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.products.industrial") || "工业控制板"}</Link></li>
                <li><Link href={`/${locale}/products/medical-devices`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.products.medical") || "医疗设备"}</Link></li>
              </ul>
            </div>
            {/* 服务 */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("mainNav.services") || "服务"}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/services/odm`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.services.odm") || "ODM研发服务（围绕储能）"}</Link></li>
                <li><Link href={`/${locale}/services/oem`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.services.oem") || "OEM代工服务"}</Link></li>
              </ul>
            </div>
            {/* 新闻中心 */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("news.center.title")}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/news/company`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.news.company") || "公司新闻"}</Link></li>
                <li><Link href={`/${locale}/news/industry`} rel="nofollow" className="text-gray-400 hover:text-white">{t("mainNav.news.industry") || "行业资讯"}</Link></li>
              </ul>
            </div>
            {/* 联系我们 */}
            <div>
              <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/contact#rd-center`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.contact.rd")}</Link></li>
                <li><Link href={`/${locale}/contact#shenzhen-factory`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.contact.factorycn")}</Link></li>
                <li><Link href={`/${locale}/contact#malaysia-factory`} rel="nofollow" className="text-gray-400 hover:text-white">{t("footer.contact.factorymy")}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">{t("footer.copyright")}</p>
            <Link href={`/${locale}/legal`} rel="nofollow" className="text-gray-400 hover:text-white ml-4">{t("footer.legal")}</Link>
            <Link href={`/${locale}/privacy`} rel="nofollow" className="text-gray-400 hover:text-white ml-4">{t("footer.privacy")}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}