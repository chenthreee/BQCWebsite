"use client"

import  PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"

export default function StrategicPositioningPage() {
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
      title: "战略定位",
      subtitle: "百千成电子的发展战略与市场定位",
      breadcrumbs: [
        { label: "关于我们", href: "/about" },
        { label: "战略定位", href: "/about/strategic-positioning" },
      ],
      strategic: {
        title: "战略定位",
        sections: [
          {
            title: "电力大储BMS定制化设计",
            items: [
              "帮助客户拥有自己的BMS和研发团队",
              "更好的兼容性、更快地现场问题解决",
              "国际电力大储前5、船舶储能前3指定供应商"
            ]
          },
          {
            title: "电路板代工",
            items: [
              "全球最大BMS定制化设计代工企业",
              "国内扫地机器人第1品牌指定供应商"
            ]
          }
        ]
      }
    },
    en: {
      title: "Strategic Positioning",
      subtitle: "Development Strategy and Market Positioning of BQC Electronics",
      breadcrumbs: [
        { label: "About Us", href: "/about" },
        { label: "Strategic Positioning", href: "/about/strategic-positioning" },
      ],
      strategic: {
        title: "Strategic Positioning",
        sections: [
          {
            title: <span className="inline-block w-full">Design for customized BMS (On-grid energy storage)</span>,
            items: [
              <span className="text-lg">Help customers have their own BMS and R&D team</span>,
              <span className="text-lg">Better compatibility and faster field problem resolution</span>,
              <span className="text-lg">Int'l on-grid energy storage top 5, Marine energy storage top 3 designated supplier</span>
            ]
          },
          {
            title: <span className="inline-block w-full">PCBA OEM service</span>,
            items: [
              <span className="text-lg">The world's largest BMS customization & OEM supplier</span>,
              <span className="text-lg">The designated supplier of TOP 1 brand of domestic robot vacuum cleaner</span>
            ]
          }
        ]
      }
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt={language === "zh" ? "战略定位" : "Strategic Positioning"}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{currentContent.strategic.title}</h2>
          <div className="space-y-8">
            {currentContent.strategic.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border-2 border-blue-600 overflow-hidden">
                <h3 className="text-xl font-bold p-4 bg-white border-b border-blue-600">
                  {typeof section.title === 'string' ? section.title : section.title}
                </h3>
                <ul className="p-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        {typeof item === 'string' ? (
                          <p className="text-gray-700">{item}</p>
                        ) : (
                          item
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
