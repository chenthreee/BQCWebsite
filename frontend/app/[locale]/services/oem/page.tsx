"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function OemServicePage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const [mounted, setMounted] = useState(false)
  const [activeService, setActiveService] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    setActiveService("oem")
  }, [])

  if (!mounted) {
    return (
      <PageLayout
        title=""
        subtitle=""
        breadcrumbs={[]}
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      >
        <div className="min-h-screen"></div>
      </PageLayout>
    )
  }


  const content = {
    "zh-Hans": {
      title: "OEM制造服务",
      subtitle: "一站式电子产品制造解决方案",
      breadcrumbs: [
        { label: "服务", href: "/zh-Hans/services.html" },
        { label: "OEM制造服务", href: "/zh-Hans/services/oem.html" },
      ],
      oem: {
        description: [
          "百千成（BQC）是一家拥有22年经验的专业电子制造服务（EMS）提供商，我们以\"强研发 + 强制造\"的闭环能力，帮助客户把产品从设计验证快速推进到稳定量产。",
          "我们专注电子制造服务（EMS），提供从PCBA到整机组装与功能测试的一站式OEM/ODM交付，覆盖储能系统、智能机器人、医疗电子、汽车电子等高可靠领域。",
          "质量与认证：",
          "ISO9001｜ISO13485｜ISO14001｜IATF16949，严格过程控制与可持续制造。",
          "双基地产能：",
          "• 深圳总部（15,000㎡）：24条全自动SMT、4条插件、3条组装、11条三防、4条功能测试及老化房。",
          "• 马来西亚槟城（6,000㎡）：4条SMT、插件/手焊/功能测试/三防线/组装线，满足东南亚与欧美原产地与本地化需求。",
          "工艺与检测能力：",
          "SPI、AOI、X-Ray、ICT、BGA返修、自动点胶、回流/波峰焊、镭雕、老化、三防喷涂——全流程质量把关，面向高可靠应用。",
          "智能制造与可追溯：",
          "• MES：实时采集生产/测试数据，整机级追溯与质量可视化。",
          "• ERP/KPI/OA/U9：供应链与项目并行管理，提升交付效率。",
          "增值服务（区别于传统EMS）：",
          "• DFM可制造性分析 • 核心器件选型与风险评估 ",
          "• 长交期物料免费备货（基于年度预测与出货计划）",
          "• 自主测试系统：定制上位机与全自动化测试架，自动烧录与测试，降低人为误差。",
          "• 成本优化：在不改动设计的前提下，以PIN TO PIN国产/国际替代，平均节省BOM 20%–30%。",
          "供应链与规模背书：",
          "BMS累计装机量 35GWh+；与 NXP、ST、TI 等原厂建立稳定合作，获得价格与交期支持，保障计划可控、交付准时。",
          "我们做的不是单点加工，而是\"设计导入—制造—测试—交付—持续优化\"的闭环 EMS 方案，让产品更快、更稳、更具性价比地量产落地。"
        ]
      },
      // jdsm: {
      //   intro: {
      //     title: "JDSM代工服务",
      //     description: [
      //       "JDSM（Joint Design & Manufacturing，联合设计制造），是一种强调“设计+制造”一体化的服务模式。与传统的代工不同，JDSM不仅仅是单纯的生产制造，而是从产品的概念与设计阶段就与客户紧密协作。制造商会深入了解客户的需求与应用场景，在产品规划、功能定义、结构设计、材料选择等环节提供专业建议和技术支持。",
      //       "在这一模式下，客户与制造商共同确定产品的设计方案和技术规格。制造商凭借自身的工程能力和制造经验，能够在设计早期就提出优化建议，帮助客户避免潜在的设计缺陷，提升产品的可制造性和可靠性。",
      //       "同时，JDSM制造商不仅负责后续的生产制造，还会在样机验证、试产、批量生产以及质量管控等全过程中参与其中。这种模式可以显著缩短研发周期，降低产品开发风险，并确保最终产品能够快速、高效地推向市场。",
      //       "简而言之，JDSM是一种覆盖 设计、验证、制造、量产 的全流程协作服务，为客户提供更加全面和高附加值的解决方案。"
      //     ]

      //   },
      //   advantages: {
      //     title: "JDSM服务优势",
      //     description: [
      //       "百千成与客户共同设计产品，凭借丰富的技术经验和专业知识提供技术支持和定制化生产服务。百千成得到了TI、 Microchip 、 Silergy等原厂的以及Avnet、Arrow等代理商的特别优先支持。为您提供核心器件选型替代，帮您找到pin对pin的替代，解决元件停产、缺货等问题，在保证质量的同时降低生产成本缩短交货时间。",
      //       "同时，百千成的研发团队配备软件，硬件及结构工程师：可根据客户需求产出原理图和进行PCB的layout布局设计；同时可产品做塑料或五金外壳ID及MD设计。满足市场需求和个性化要求，提升产品竞争力。"
      //     ],
      //     cards: [
      //       {
      //         title: "优化设计",
      //         description: "结合制造经验优化产品设计，提高产品性能和可靠性，降低生产成本。"
      //       },
      //       {
      //         title: "缩短周期",
      //         description: "设计和制造并行进行，缩短产品开发周期，加快产品上市时间。"
      //       },
      //       {
      //         title: "降低风险",
      //         description: "早期发现并解决设计问题，降低后期修改成本和风险。"
      //       }
      //     ]
      //   }
      // },
      serviceType: {
        title: "服务类型",
        oem: "OEM制造服务",
        //jdsm: "JDSM代工"
      },
      contact: {
        title: "联系我们",
        description: "如果您有产品开发需求，欢迎联系我们的OEM服务团队，我们将为您提供专业的技术咨询和解决方案。",
        buttonText: "联系我们讨论您的项目",
        href: "/zh-Hans/contact.html"
      }
    },
    en: {
      title: "OEM Manufacturing Services",
      subtitle: "One-stop electronic product manufacturing solution",
      breadcrumbs: [
        { label: "Services", href: "/en/services.html" },
        { label: "OEM Manufacturing Services", href: "/en/services/oem.html" },
      ],
      oem: {
        description: [
          "BQC is a professional Electronics Manufacturing Services (EMS) provider with 22 years of industry experience.With a “Strong R&D + Strong Manufacturing” closed-loop capability, we help customers accelerate their products from design validation to stable mass production efficiently and reliably.",
          "We specialize in end-to-end EMS solutions, offering one-stop OEM/ODM services from PCBA manufacturing to full box build and functional testing.",
          "Our expertise covers energy storage systems, intelligent robotics, medical electronics, and automotive electronics — all high-reliability sectors requiring precision and consistency.",
          "Quality & Certifications：",
          "ISO9001｜ISO13485｜ISO14001｜IATF16949,ensuring strict process control, traceable quality, and sustainable manufacturing practices.",
          "Dual Manufacturing Bases：",
          "• Shenzhen Headquarters (15,000㎡)： 24 SMT lines (fully automated), 4 DIP lines, 3 assembly lines, 11 conformal coating lines, 4 functional testing & aging rooms.",
          "• Penang, Malaysia (6,000㎡)： 4 SMT lines, DIP / hand soldering / functional testing / conformal coating / assembly, Serving localization and origin requirements for Southeast Asia, Europe, and the U.S.",
          "Process & Inspection Capabilities：",
          "SPI | AOI | X-Ray | ICT | BGA Rework | Auto Dispensing | Reflow & Wave Soldering | Laser Marking | Aging | Conformal Coating --Ensuring end-to-end quality control for high-reliability applications.",
          "Smart Manufacturing & Traceability：",
          "• MES：Real-time production and testing data collection with full product traceability and visualized quality management.",
          "• ERP/KPI/OA/U9：Integrated systems for synchronized supply chain and project management — ensuring on-time and efficient delivery.",
          "Value-Added Services (Beyond Traditional EMS)：",
          "• DFM & manufacturability analysis.",
          "• Critical component selection and risk assessment. ",
          "• Free buffer stock for long lead-time materials (based on forecast & shipment plan).",
          "• Custom test systems: upper computer + automated fixtures for auto-programming and testing, minimizing human error.",
          "•Cost optimization: PIN-to-PIN local/international part substitution without design change — saving 20-30% on BOM cost on average.",
          "Supply Chain & Proven Experience：",
          "Over 35 GWh of BMS shipments in total. Long-term cooperation with semiconductor leaders such as NXP, STMicroelectronics, and Texas Instruments. Strong supply chain support for price stability and predictable lead times.",
          "We don’t just provide single-point processing  — we deliver a closed-loop EMS solution that covers Design Integration → Manufacturing → Testing → Delivery → Continuous Optimization, helping your products reach mass production faster, more reliably, and more cost-effectively."
        ]
      },
      // jdsm: {
      //   intro: {
      //     title: "JDSM Services",
      //     description: "JDSM（Join DeSign Manufacture） emphasizes working closely with customers during the product design stage to jointly determine the product's design plan and specifications. JDSM manufacturers are not only responsible for manufacturing but also participate in the entire process of product design, providing customers with more comprehensive services."
      //   },
      //   advantages: {
      //     title: "JDSM Advantages",
      //     description: [
      //       "BQC designs products with customers and provides technical support and customized production services with rich technical experience and expertise. BQC has received special priority support from original manufacturers such as TI, Microchip, Silergy, and agents such as Avnet and Arrow. It provides you with core component selection and replacement, helps you find pin-to-pin replacement, solves problems such as component discontinuation and shortage, and reduces production costs and shortens delivery time while ensuring quality.",
      //       "At the same time, BQC's R&D team is equipped with software, hardware and structural engineers: they can produce schematics and PCB layout design according to customer needs; at the same time, they can design plastic or hardware shell ID and MD for products. Meet market demand and personalized requirements and enhance product competitiveness."
      //     ],
      //     cards: [
      //       {
      //         title: "Optimized Design",
      //         description: "Optimize product design based on manufacturing experience, improve product performance and reliability, reduce production costs."
      //       },
      //       {
      //         title: "Shortened Cycle",
      //         description: "Design and manufacturing proceed in parallel, shortening product development cycle and accelerating time to market."
      //       },
      //       {
      //         title: "Reduced Risk",
      //         description: "Early detection and resolution of design issues, reducing later modification costs and risks."
      //       }
      //     ]
      //   }
      // },
      serviceType: {
        title: "Service Types",
        oem: "OEM Services",
        // jdsm: "JDSM Services"
      },
      contact: {
        title: "Contact Us",
        description: "If you have product development needs, please contact our OEM service team. We will provide you with professional technical consultation and solutions.",
        buttonText: "Contact Us to Discuss Your Project",
        href: "/en/contact.html"
      }
    }
  }

  const currentContent = content[locale]

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/images/services/oemBreadcrumb.png"
    >
      <div className="mb-16">
        {/* <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.serviceType.title}</h2> */}
        {/* <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-white">
            <button
              onClick={() => setActiveService("oem")}
              className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${activeService === "oem" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {currentContent.serviceType.oem}
            </button>
            <button
              onClick={() => setActiveService("jdsm")}
              className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${activeService === "jdsm" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {currentContent.serviceType.jdsm}
            </button>
          </div>
        </div> */}

        {/* 只在 activeService 有值时渲染内容 */}
        {activeService && (
          <>
            {/* OEM代工服务内容 */}
            {activeService === "oem" && (
              <>
                <div className="mb-16">
                  <div className="mb-12">
                    <div className="relative">
                      <Image
                        src="/images/services/servicesBreadcrumb.png"
                        alt={currentContent.title}
                        width={700}
                        height={500}
                        className="rounded-lg shadow-lg float-right ml-6 mb-4"
                      />
                      {currentContent.oem.description.map((paragraph, index) => {
                        const isSubtitle = paragraph.endsWith('：') && paragraph.length < 50
                        return (
                          <p
                            key={index}
                            className={`text-lg ${isSubtitle
                                ? 'font-bold text-gray-900 mb-2 mt-6 first:mt-0'
                                : 'text-gray-700 mb-4'
                              }`}
                          >
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </div>

                </div>
              </>
            )}

            {/* JDSM代工服务内容 */}
            {/* {activeService === "jdsm" && (
              <>
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.jdsm.intro.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-lg text-gray-700 mb-4">
                        {currentContent.jdsm.intro.description}
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/images/services/oemBreadcrumb.png"
                        alt={currentContent.jdsm.intro.title}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 text-center">{currentContent.jdsm.advantages.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      {currentContent.jdsm.advantages.description.map((desc, idx) => (
                        <p key={idx} className="text-lg text-gray-700 mb-4">{desc}</p>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {currentContent.jdsm.advantages.cards.map((card, idx) => (
                        <div key={idx} className="bg-blue-600/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-blue-200">
                          <h3 className="text-xl font-bold mb-2 text-blue-700">{card.title}</h3>
                          <p className="text-gray-800">{card.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )} */}
          </>
        )}
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