"use client"

import { useParams } from "next/navigation"
import PageLayout  from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function OdmServicePage() {
  const params = useParams()
  const locale = params.locale === "en" ? "en" : "zh"
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
      title: "ODM研发服务（BMS）",
      subtitle: "一站式电子产品研发解决方案",
      breadcrumbs: [
        { label: "服务", href: "/services" },
        { label: "ODM研发服务（BMS）", href: "/services/odm" },
      ],
      intro: {
        title: "BQC 提供BMS PCBA ODM服务",
        description: "深圳市百千成电子有限公司是全球最大的BMS ODM制造商，是国际电力大储前5、船舶储能前3指定供应商，拥有超过21年的经验。我们为电力大储提供定制设计服务，我们强大的研发能力帮助客户拥有自己的BMS和研发团队，更好更快地解决现场问题。"
      },
      hardware: {
        title: "硬件设计能力",
        sections: [
          {
            title: "1. 核心器件选型及框图",
            alt: "核心器件选型及框图",
            image: "/images/about/services/odm/key_components_zh.png"
          },
          {
            title: "2. 原理图",
            alt: "原理图",
            image: "/images/about/services/odm/schematic_zh_en.png"
          },
          {
            title: "3. PCB 布局",
            alt: "PCB 布局",
            image: "/images/about/services/odm/PCB_layout_zh_en.png"
          }
        ]
      },
      software: {
        title: "软件开发",
        steps: {
          title: "开发步骤",
          items: [
            "需求分析：确定电池监测、管理策略、安全要求等",
            "系统设计：设计软件架构、数据流程和用户界面",
            "编码实现：编写代码，数据采集、状态评估、控制算法等",
            "测试验证：单元测试、集成测试和系统测试",
            "集成调试：集成并调试，确保软件与硬件良好协作",
            "部署维护：部署并进行定期的软件维护和更新"
          ]
        },
        advantages: {
          title: "开发优势",
          items: [
            "高安全性：精度3%，确保电池在安全的工作范围内",
            "延长寿命：优化充放电策略，平衡电池组单体，延长使用寿命",
            "提升性能：自动监测和调整电池状态，优化性能，提高能量利用率",
            "减少成本：有效的电池管理，减少维护成本",
            "用户友好：提供界面，实时监控电池状态和性能",
            "适应性强：电池系统定制开发，满足特定需求"
          ]
        }
      },
      enclosure: {
        title: "外壳设计",
        sections: [
          {
            title: "1. 外观设计",
            alt: "外观设计1"
          },
          {
            title: "2. MD设计",
            alt: "MD设计"
          }
        ]
      },
      automation: {
        title: "自动化烧录和测试设备",
        description: "用气动顶针替代手动插拔连接器，通过编程实现自动烧录和测试，用电脑程序替代人工操作，缩短生产时间和减少人为不良"
      },
      dfm: {
        title: "DFM可制造性设计分析",
        image: "/images/about/services/odm/DFM_zh.png"
      },
      contact: {
        title: "联系我们",
        description: "如果您有产品开发需求，欢迎联系我们的ODM服务团队，我们将为您提供专业的技术咨询和解决方案。",
        buttonText: "联系我们讨论您的项目",
        href: "/contact"
      }
    },
    en: {
      title: "ODM R&D Services（BMS）",
      subtitle: "One-stop electronic product R&D solution",
      breadcrumbs: [
        { label: "Services", href: "/services" },
        { label: "ODM R&D Services", href: "/services/odm" },
      ],
      intro: {
        title: "BQC Provides BMS PCBA ODM Services",
        description: "Shenzhen Baiqiancheng Electronic Co., Ltd. is one of the world's largest BMS ODM manufacturers, a designated supplier for the top 5 international power energy storage and top 3 marine energy storage companies, with over 21 years of experience. We provide customized design services for power energy storage, and our strong R&D capabilities help customers have their own BMS and R&D teams to better and faster solve on-site problems."
      },
      hardware: {
        title: "Hardware Design Capabilities",
        sections: [
          {
            title: "1. Core Component Selection and Block Diagram",
            alt: "Core Component Selection and Block Diagram",
            image: "/images/about/services/odm/key_components_en.png"
          },
          {
            title: "2. Schematic Design",
            alt: "Schematic Design",
            image: "/images/about/services/odm/schematic_zh_en.png"
          },
          {
            title: "3. PCB Layout",
            alt: "PCB Layout",
            image: "/images/about/services/odm/PCB_layout_zh_en.png"
          }
        ]
      },
      software: {
        title: "Software Development",
        steps: {
          title: "Development Steps",
          items: [
            "Requirements Analysis: Determine battery monitoring, management strategies, safety requirements, etc.",
            "System Design: Design software architecture, data flow, and user interface",
            "Coding Implementation: Write code for data acquisition, status assessment, control algorithms, etc.",
            "Testing and Verification: Unit testing, integration testing, and system testing",
            "Integration and Debugging: Integrate and debug to ensure good cooperation between software and hardware",
            "Deployment and Maintenance: Deploy and perform regular software maintenance and updates"
          ]
        },
        advantages: {
          title: "Development Advantages",
          items: [
            "High Safety: 3% accuracy, ensuring batteries operate within a safe working range",
            "Extended Lifespan: Optimize charging and discharging strategies, balance battery cells, extend service life",
            "Enhanced Performance: Automatically monitor and adjust battery status, optimize performance, improve energy utilization",
            "Cost Reduction: Effective battery management, reduced maintenance costs",
            "User-Friendly: Provide interface for real-time monitoring of battery status and performance",
            "High Adaptability: Customized development of battery systems to meet specific requirements"
          ]
        }
      },
      enclosure: {
        title: "Enclosure Design",
        sections: [
          {
            title: "1. Appearance Design",
            alt: "Appearance Design 1"
          },
          {
            title: "2. MD Design",
            alt: "MD Design"
          }
        ]
      },
      automation: {
        title: "Automated Programming and Testing Equipment",
        description: "Using pneumatic pogo pins instead of manual connector insertion and removal, achieving automated programming and testing through programming, replacing manual operations with computer programs, shortening production time and reducing human-caused defects"
      },
      dfm: {
        title: "DFM (Design for Manufacturing) Analysis",
        image: "/images/about/services/odm/DFM_en.png"
      },
      contact: {
        title: "Contact Us",
        description: "If you have product development needs, please contact our ODM service team. We will provide you with professional technical consultation and solutions.",
        buttonText: "Contact Us to Discuss Your Project",
        href: "/en/contact"
      }
    }
  }

  const currentContent = content[locale]

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {currentContent.intro.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {currentContent.intro.description}
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt={currentContent.intro.title}
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {currentContent.hardware.title}
        </h2>
        <div className="space-y-12">
          {currentContent.hardware.sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <div className="flex justify-center">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {currentContent.software.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{currentContent.software.steps.title}</h3>
            <ul className="space-y-2">
              {currentContent.software.steps.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">{currentContent.software.advantages.title}</h3>
            <ul className="space-y-2">
              {currentContent.software.advantages.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {currentContent.enclosure.title}
        </h2>
        <div className="space-y-12">
          {currentContent.enclosure.sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <div className="flex justify-center">
                <Image
                  src="/images/about/services/odm/ID_zh_en.png"
                  alt={section.alt}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {currentContent.automation.title}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-6 text-center">
            {currentContent.automation.description}
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/about/services/odm/automatic_programming_zh_en.png"
              alt={currentContent.automation.title}
              width={600}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {currentContent.dfm.title}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center">
            <Image
              src={currentContent.dfm.image}
              alt={currentContent.dfm.title}
              width={800}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">{currentContent.contact.title}</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {currentContent.contact.description}
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href={currentContent.contact.href}>
            {currentContent.contact.buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </PageLayout>
  )
}
