"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"

export default function CoreValuesPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const content = {
    zh: {
      title: "核心价值观",
      subtitle: "我们的企业文化与价值理念",
      breadcrumbs: [
        { label: "关于我们", href: "/about" },
        { label: "核心价值观", href: "/about/core-values" },
      ],
      values: [
        {
          title: "诚实",
          description: "不欺骗顾客，不欺骗同事，不欺骗供应商。"
        },
        {
          title: "分享",
          description: "与全体员工分享利润，欢迎优秀的管理人员持有公司股份。"
        },
        {
          title: "反馈",
          description: "以碳峰值和碳中和为目标，以创新为动力，以储能为基础，回馈国家和社会。"
        },
        {
          title: "顾客至上",
          description: "反对以老板、研发、制造为中心。对内以客户代表为中心，对外以客户为中心。"
        }
      ]
    },
    en: {
      title: "Core Values",
      subtitle: "Our Corporate Culture and Value Principles",
      breadcrumbs: [
        { label: "About Us", href: "/about" },
        { label: "Core Values", href: "/about/core-values" },
      ],
      values: [
        {
          title: "Be Honest",
          description: <span className="text-lg font-medium">Don't cheat customers, Don't cheat colleagues, Don't cheat suppliers.</span>
        },
        {
          title: "Share",
          description: <span className="text-lg font-medium">Share profit with all employees, and welcome excellent management staff to hold share of the company.</span>
        },
        {
          title: "Feedback",
          description: <span className="text-lg font-medium">Take carbon peaking and carbon neutrality as the goal, powered by innovation and based on energy storage to feed back the country and society.</span>
        },
        {
          title: "Customer-first",
          description: <span className="text-lg font-medium">Opposing taking the boss, R&D, and manufacturing as the center. Taking customers representative as the center internally, and taking customers as the center externally.</span>
        }
      ]
    }
  }

  const currentContent = language === "zh" ? content.zh : content.en

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      {/* <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
        <p className="text-xl text-gray-700">
          以创新科技引领储能行业发展，为全球客户提供安全可靠的储能解决方案和高品质的电子制造服务。
        </p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <Image
            src="/placeholder.svg?height=600&width=800"
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
