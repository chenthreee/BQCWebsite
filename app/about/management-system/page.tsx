"use client"

import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"

export default function ManagementSystemPage() {
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
      title: "管理系统",
      //subtitle: "百千成电子的管理体系与质量控制",
      breadcrumbs: [
        { label: "关于我们", href: "/about" },
        { label: "管理系统", href: "/about/management-system" },
      ],
      digitalPlatform: {
        title: "数字化管理平台",
        description: "百千成电子建立了完整的数字化管理平台，实现企业管理的信息化、智能化和高效化。",
        systems: [
          {
            title: "ERP系统",
            //description: "企业资源计划系统，整合公司人力、财务、物料、生产等资源，实现高效协同管理。"
          },
          {
            title: "Office Anywhere",
            //description: "移动办公系统，支持随时随地办公，提高工作效率和响应速度。"
          },
          {
            title: "MES系统",
            //description: "制造执行系统，实现生产过程的实时监控、质量追溯和数据分析。"
          },
          {
            title: "KPI系统",
            //description: "关键绩效指标系统，科学评估部门和员工表现，促进持续改进。"
          }
        ]
      },
     
    },
    en: {
      title: "Management System",
      //subtitle: "Management System and Quality Control of BQC Electronics",
      breadcrumbs: [
        { label: "About Us", href: "/about" },
        { label: "Management System", href: "/about/management-system" },
      ],
      digitalPlatform: {
        title: "Digital Management Platform",
        description: "BQC Electronics has established a comprehensive digital management platform to achieve informatization, intelligence, and efficiency in enterprise management.",
        systems: [
          {
            title: "ERP System",
           // description: "Enterprise Resource Planning system integrates company resources including human resources, finance, materials, and production for efficient collaborative management."
          },
          {
            title: "Office Anywhere",
           // description: "Mobile office system supporting work from anywhere, improving work efficiency and response speed."
          },
          {
            title: "MES System",
           // description: "Manufacturing Execution System enables real-time monitoring, quality traceability, and data analysis of production processes."
          },
          {
            title: "KPI System",
           // description: "Key Performance Indicator system scientifically evaluates department and employee performance to promote continuous improvement."
          }
        ]
      },
    
    }
  }

  const currentContent = language === "zh" ? content.zh : content.en

  return (
    <PageLayout
      title={currentContent.title}
      //subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
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
              {/* <p className="text-gray-700">{system.description}</p> */}
            </div>
          ))}
        </div>
      </div>


      <div className="max-w-4xl mx-auto mb-16">
        <div>
          <Image
            src="/images/image_Management_platform.png?height=600&width=800 items-center"
            alt="管理体系"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

    </PageLayout>
  )
}
