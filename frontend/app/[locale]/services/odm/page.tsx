"use client"

import PageLayout from "@/components/page-layout"
import { CheckCircle, ArrowRight, Lightbulb, Code, Box, TestTube, Award, Factory ,Cpu, Pyramid,CodeXml} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function OdmServicePage() {
  const params = useParams()
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const content = {
    "zh-Hans": {
      title: "ODM研发服务",
      subtitle: "从产品定义到量产交付的全流程一站式ODM研发解决方案",
      intro: {
        title: "服务概述",
        description:
          "百千成电子提供覆盖硬件、软件、结构、测试、认证到量产交付的完整ODM研发服务，同时支持灵活的JDSM（联合设计与选择性制造）模式，满足不同客户的定制化需求。",
      },
      process: {
        title: "ODM研发服务",
        steps: [
          {
            icon: Lightbulb,
            title: "1. 产品定义与方案规划",
            subtitle: "Product Definition & Planning",
            items: [
              "深入了解客户需求，明确产品目标、应用场景与性能指标",
              "进行可行性分析、项目立项与整体研发路径规划",
              "输出系统架构草案与开发周期计划"
            ],
          },
          {
            icon: Cpu,
            title: "2. 硬件系统设计",
            subtitle: "Hardware System Design",
            items: [
              "负责电路原理图设计、PCB Layout、核心器件选型与BOM成本优化",
              "支持高速信号、功率模块、BMS控制、通信接口等复杂系统设计",
              "提供UL/CE标准电气安全设计与EMC预防方案"
            ],
          },
          {
            icon: CodeXml,
            title: "3. 嵌入式软件开发",
            subtitle: "Embedded Software Development",
            items: [
              "开发底层驱动、中间件、通信协议栈与上层应用逻辑",
              "支持RTOS/Linux平台，具备CAN、RS485、Ethernet、BLE、Wi-Fi等协议经验",
              "提供算法优化、数据采集、远程监控与系统升级功能"
            ],
          },
          {
            icon: Pyramid,
            title: "4. 结构设计",
            subtitle: "Mechanical & Structural Design",
            items: [
              "进行外观与结构规划，兼顾美学、功能性与可制造性",
              "输出可量产化3D图纸及模具可行性分析（DFM）"
            ],
          },
          {
            icon: TestTube,
            title: "5. 样机制作与测试验证",
            subtitle: "Prototyping & Testing Validation",
            items: [
              "快速实现样机制作，进行结构与功能验证",
              "执行环境、性能、可靠性、EMC/EMI等系统化测试"
            ],
          },
          {
            icon: Award,
            title: "6.  量产制造与生产优化支持",
            subtitle: "Product Certification & MP Support",
            items: [
              "建立完善的生产追溯体系（MES），确保质量可控与可追溯",
              "提供工艺优化、DFM分析、ATE自动测试治具开发、试产验证与制程标准化",
              "通过数据分析、良率提升与工艺改进，保障量产一致性、良率及供应链稳定性",
            ],
          },
          {
            icon: Factory,
            title: "7. 产品认证与售后技术支持",
            subtitle: "Mass Production & Lifecycle Support",
            items: [
              "提供UL、CE、FCC 等产品认证与合规测试",
              "提供认证阶段的样机测试、整改建议及相关技术文件准备支持",
              "提供售后技术支持与版本迭代服务，客户少操心、少踩坑，产品更耐用、更好卖",
            ],
          },
        ],
      },
      cooperationMode: {
        title: "合作模式",
        models: [
          {
            title: "ODM（Original Design Manufacturing）",
            description:
              "提供从产品定义、设计开发、认证量产、到售后服务的全流程一站式服务。客户专注销售、运营和行业方案，仅提出产品需求，即可获得完整可交付产品，整体投入产出比更高。",
          },
          {
            title: "JDSM（Joint Design & Selected Manufacturing）",
            description:
              "与客户团队联合开发，提供部分研发服务（如硬件、软件、结构、测试或认证等服务）。客户有针对性的补齐短板，投入灵活，预算可控，同时兼顾效率与技术主导权。",
          },
        ],
        summary:
          "通过 ODM + JDSM 的灵活合作方式，为客户提供成熟的研发平台，分享技术经验、量产经验和供应链经验，降低项目风险，控制项目成本。客户既可以把产品完整托付，也可以按需“点单”式合作，以更少的投入、更短的时间，把更成熟、更易量产的产品推向市场。", 
      },
      ipPolicy: {
        title: "知识产权开放政策",
        description:
          "BQC在ODM及JDSM合作中始终秉持开放透明的原则，在项目完成后，可根据双方约定向客户开放并共享全部原始设计资料，包括但不限于：",
        items: ["设计方案", "BOM表（物料清单）", "PCB原理图与Layout文件", "软件源代码", "ID/结构图纸", "测试报告"],
        conclusion: "确保客户对产品拥有完整的知识产权与后续可持续开发能力。",
      },
      contact: {
        title: "联系我们",
        description:
          "如果您有产品开发需求，欢迎联系我们的ODM服务团队，我们将为您提供专业的技术咨询和解决方案。",
        buttonText: "联系我们讨论您的项目",
        href: "/zh-Hans/contact.html"
      },
    },

    en: {
      title: "ODM R&D Services",
      subtitle: "One-stop ODM R&D solution from product definition to mass production delivery",
      intro: {
        title: "Service Overview",
        description:
          "BQC Electronics provides complete ODM R&D services covering hardware, software, structure, testing, certification to mass production delivery. We also support flexible JDSM (Joint Design & Selected Manufacturing) mode to meet different customers' customization needs.",
      },
      process: {
        title: "ODM R&D Services",
        steps: [
          {
            icon: Lightbulb,
            title: "1. Product Definition & Planning",
            subtitle: "Product Definition & Planning",
            items: [
              "Deeply understand customer needs to define product objectives, application scenarios, and performance targets.",
              "Conduct feasibility analysis, project initiation, and overall R&D roadmap planning.",
              "Deliver system architecture outline and development timeline.",
            ],
          },
          {
            icon: Cpu,
            title: "2. Hardware System Design",
            subtitle: "Hardware System Design",
            items: [
              "Responsible for schematic design, PCB layout, core component selection, and BOM cost optimization.",
              "Supporting complex system designs including high-speed signals, power modules, BMS control, and communication interfaces.",
              "Providing UL/CE-compliant electrical safety design and EMC preventive solutions.",
            ],
          },
          {
            icon: Code,
            title: "3. Embedded Software Development",
            subtitle: "Embedded Software Development",
            items: [
              "Develop low-level drivers, middleware, communication protocol stacks, and application logic.",
              "Support RTOS/Linux platforms with expertise in CAN, RS485, Ethernet, BLE, and Wi-Fi protocols.",
              "Provide algorithm optimization, data acquisition, remote monitoring, and system upgrade capabilities.",

            ],
          },
          {
            icon: Box,
            title: "4. Mechanical & Structural Design",
            subtitle: "Mechanical & Structural Design",
            items: [
              "Conduct appearance and structural design balancing aesthetics, functionality, and manufacturability.",
              "Deliver mass-production-ready 3D drawings and mold feasibility analysis (DFM).",
            ],
          },
          {
            icon: TestTube,
            title: "5. Prototyping & Testing Validation",
            subtitle: "Prototyping & Testing Validation",
            items: [
              "Rapidly build prototypes for structural and functional verification.",
              "Perform comprehensive testing including environmental, performance, reliability, and EMC/EMI validation.",

            ],
          },
          {
            icon: Award,
            title: "6. MP manufacturing & Production Optimization Support",
            subtitle: "MP manufacturing & Production Optimization Support",
            items: [
              "Establish a complete production traceability system (MES) to ensure quality control and traceability.",
              "Provide process optimization, DFM analysis, ATE fixture development, pilot run validation, and process standardization.",
              "Through data analysis, process improvement and equipment optimization, ensure the consistency of mass production, yield rate and the stability of the supply chain.",
            ],
          },
          {
            icon: Factory,
            title: "7. Product Certification & After-sales Technical Support",
            subtitle: "Product Certification & After-sales Technical Support",
            items: [
              "Provide UL, CE, FCC, and other product certifications and compliance testing.",
              "Provide support for sample machine testing during the certification stage, provide rectification suggestions, and prepare relevant technical documents.",
              "Provide after-sales technical support and product iteration services, customers worry less and avoid pitfalls, products are more durable and better sold.",
            ],
          },
        ],
      },
      cooperationMode: {
        title: "Collaboration Models",
        models: [
          {
            title: "ODM (Original Design Manufacturing)",
            description:
              "We offer a full-process one-stop service covering product definition, design and development, certification and mass production, as well as after-sales service. Customers can focus on sales, operation and industry solutions. They only need to present product requirements and can obtain complete deliverable products. The overall input-output ratio is higher.",
          },
          {
            title: " JDSM (Joint Design & Selected Manufacturing)",
            description:
              "Jointly develop with the client team and provide some research and development services (such as hardware, software, structure, testing or certification services). The client focuses on filling the weak points, with flexible investment, controllable budget, and also takes into account efficiency and technical dominance.",
          },
        ],
        summary:
          "Through the flexible cooperation model of ODM + JDSM, we provide customers with a mature R&D platform, share technical experience, mass production experience and supply chain experience, reduce project risks and control project costs. Customers can either entrust the entire product to us or cooperate on a \"custom order\" basis as needed. With less investment and shorter time, they can bring more mature and easier-to-produce products to the market.",
      },
      ipPolicy: {
        title: "Intellectual Property Open Policy",
        description:
          "BQC always adheres to the principle of openness and transparency in ODM and JDSM cooperation. After project completion, according to mutual agreement, we can open and share all original design materials to customers, including but not limited to:",
        items: [
          "Design Scheme",
          "BOM (Bill of Materials)",
          "PCB schematics and layout files",
          "Software source code",
          "ID/structural drawings",
          "Test reports",
        ],
        conclusion:
          "Ensuring customers have complete intellectual property rights and subsequent sustainable development capabilities for products.",
      },
      contact: {
        title: "Contact Us",
        description:
          "If you have product development needs, please contact our ODM service team. We will provide you with professional technical consultation and solutions.",
        buttonText: "Contact Us to Discuss Your Project",
        href: "/zh-Hans/contact.html"
      },
    },
  }

  const currentContent = content[locale]

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={[
        {
          label: locale === "en" ? "Services" : "服务",
          href: `/${locale}/services.html`,
        },
        {
          label: currentContent.title,
          href: `/${locale}/services/odm.html`,
        },
      ]}
      backgroundImage="/images/services/odmBreadcrumb.png"
    >
      {/* 服务概述
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.intro.title}</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 text-center leading-relaxed">{currentContent.intro.description}</p>
        </div>
      </div> */}

      {/* ODM研发流程 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.process.title}</h2>
        <div className="space-y-6">
          {currentContent.process.steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    {/* <p className="text-sm text-gray-500 mb-3">{step.subtitle}</p> */}
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-[1px]" />
                          <span className="text-gray-1800 text-[18px] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 合作模式 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.cooperationMode.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentContent.cooperationMode.models.map((model, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">{model.title}</h3>
              <p className="text-gray-1800 text-[18px] leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-1800 leading-relaxed text-center">
            {currentContent.cooperationMode.summary}
          </p>
        </div>
      </div>

      {/* 知识产权开放政策 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.ipPolicy.title}</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-1800 mb-6">{currentContent.ipPolicy.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {currentContent.ipPolicy.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 font-semibold text-center">
            {currentContent.ipPolicy.conclusion}
          </p>
        </div>
      </div>

      {/* 联系我们 */}
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
