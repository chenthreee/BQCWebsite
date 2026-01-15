"use client"

import type { ReactNode } from "react"
import { MainNavigation } from "./main-navigation"
import Link from "next/link"
import LanguageSwitcher from "./LanguageSwitcher"
import { usePathname } from "next/navigation"

interface PageLayoutProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href: string }[]
  backgroundImage?: string
  children: ReactNode
  extraHeaderContent?: ReactNode
}

export default function PageLayout({
  title,
  subtitle,
  breadcrumbs,
  children,
  backgroundImage,
  extraHeaderContent,
}: PageLayoutProps) {
  const pathname = usePathname()
  const locale = pathname.split("/")[1] === "en" ? "en" : "zh-Hans"
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      "footer.copyright": {
        "zh-Hans": "© 2025 深圳市百千成电子有限公司. 版权所有.",
        "en": "© 2025 Shenzhen BAIQIANCHENG Electronics Co., Ltd. All rights reserved.",
      },
    }
    return translations[key]?.[locale] || key
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavigation />
      <header
        className="relative py-24 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${backgroundImage || "/placeholder.svg?height=1080&width=1920"})`,
        }}
      >
        {/* 黑色遮罩 */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* 内容区域 */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl relative">
            {extraHeaderContent}

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xl md:text-2xl mb-10">
                {subtitle}
              </p>
            )}

            {/* ✅ 面包屑：就在标题正下方 */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="absolute top-full mt-20 left-0 flex items-center text-sm text-gray-200/90">
                {breadcrumbs.map((item, index) => (
                  <span key={index} className="flex items-center">
                    <Link
                      href={item.href}
                      className="hover:underline hover:text-white font-semibold"
                    >
                      {item.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && (
                      <span className="mx-2 text-gray-400 font-semibold">&gt;</span>
                    )}
                  </span>
                ))}
              </nav>
            )}

          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">{children}</main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  )
}
