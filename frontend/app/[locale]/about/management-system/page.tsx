"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ManagementSystemPage() {
  const { t, language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // 根据 URL 自动切换语言
  useEffect(() => {
    if (pathname.startsWith("/en")) setLanguage("en")
    else setLanguage("zh")
  }, [pathname, setLanguage])

  if (!mounted) {
    return null
  }

  const content = {
    zh: {
      title: "管理系统",
      subtitle: "百千成电子的数字化管理平台",
      digitalPlatform: {
        title: "数字化管理平台",
        description: "百千成电子建立了完整的数字化管理平台，实现企业管理的信息化、智能化和高效化。",
        systems: [
          {
            title: "ERP系统",
          },
          {
            title: "Office Anywhere",
          },
          {
            title: "MES系统",
          },
          {
            title: "KPI系统",
          }
        ]
      },
    },
    en: {
      title: "Management System",
      subtitle: "BQC Electronics Digital Management Platform",
      digitalPlatform: {
        title: "Digital Management Platform",
        description: "BQC Electronics has established a comprehensive digital management platform to achieve informatization, intelligence, and efficiency in enterprise management.",
        systems: [
          {
            title: "ERP System",
          },
          {
            title: "Office Anywhere",
          },
          {
            title: "MES System",
          },
          {
            title: "KPI System",
          }
        ]
      },
    }
  }

  const currentContent = language === "en" ? content.en : content.zh

  const breadcrumbs = [
    { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
    { label: t("about.breadcrumbs.managementSystem"), href: language === "en" ? "/en/about/management-system" : "/zh-Hans/about/management-system" },
  ]

  return (
    <PageLayout
      title={t("about.managementSystem.title")}
      subtitle={t("about.managementSystem.subtitle")}
      breadcrumbs={breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.digitalPlatform.title}</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          {currentContent.digitalPlatform.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentContent.digitalPlatform.systems.map((system, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Image 
                    src="/placeholder.svg?height=30&width=30" 
                    alt={system.title} 
                    width={30} 
                    height={30}
                  />
                </div>
                <h3 className="text-xl font-bold">{system.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
} 