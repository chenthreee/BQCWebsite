"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function CoreValuesPage() {
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
      title: "核心价值观",
      subtitle: "我们的企业文化与价值理念",
      values: [
        {
          title: "诚信",
          description: "不欺客户，不欺同事，不欺供方"
        },
        {
          title: "分享",
          description: "员工共享企业盈利，企业欢迎优秀员工持股"
        },
        {
          title: "回馈",
          description: "以双碳为目标，以创新为动力，以储能为根基，反哺国家及社会"
        },
        {
          title: "客户第一",
          description: "反对以上司、研发、制造为中心，内部以客户代表为中心，外部以客户为中心"
        }
      ],
      image: "/images/about/coreValue/coreValue.png"
    },
    en: {
      title: "Core Values",
      subtitle: "Our Corporate Culture and Value Principles",
      values: [
        {
          title: "Integrity",
          description: <span className="text-lg font-medium"> Sincere dealings with customers, colleagues & suppliers.</span>
        },
        {
          title: "Share",
          description: <span className="text-lg font-medium">Profit-sharing benefits all employees; outstanding managers are invited to participate in equity ownership.</span>
        },
        {
          title: "Contribution",
          description: <span className="text-lg font-medium">Strive to achieve carbon peaking and neutrality through technological innovation and energy storage advancements, thereby contributing to sustainable development and social well-being.</span>
        },
        {
          title: "Customer-first",
          description: <span className="text-lg font-medium">we center on internal customer representatives for internal alignment and real customers for decision-making, rather than prioritizing leadership, R&D, and manufacturing. </span>
        }
      ],
      image: "/images/about/coreValue/coreValue.png"
    }
  }

  const currentContent = language === "en" ? content.en : content.zh

  const breadcrumbs = [
    { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
    { label: t("about.breadcrumbs.coreValues"), href: language === "en" ? "/en/about/core-values" : "/zh-Hans/about/core-values" },
  ]

  return (
    <PageLayout
      title={t("about.coreValues.title")}
      subtitle={t("about.coreValues.subtitle")}
      breadcrumbs={breadcrumbs}
      backgroundImage="/images/about/coreValue/breadcrumb.png"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <Image
            src={currentContent.image}
            alt={language === "zh" ? "企业文化" : "Corporate Culture"}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{currentContent.title}</h2>
          <div className="space-y-6">
            {currentContent.values.map((value, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  {typeof value.description === 'string' ? (
                    <p className="text-gray-700">{value.description}</p>
                  ) : (
                    value.description
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 