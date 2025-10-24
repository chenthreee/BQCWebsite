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
        sections: [
          {
            image: "/images/services/1.png",
            imagePosition: "right",
            content: [
              "百千成（BQC）成立于2003年，是一家深耕22年的专业电子制造服务（EMS）供应商。我们以\"强研发 + 强制造\"的闭环能力，帮助客户将产品从设计验证快速推进到稳定量产。现有员工1000+，厂区总面积20,000㎡+（深圳15,000㎡、马来西亚槟城6,000㎡）。提供从元器件采购、PCBA贴片/插件到整机装配与功能/老化测试的一站式 OEM/ODM 交付，覆盖储能系统、AI智能机器人、医疗电子、汽车电子等高可靠领域，持续为海内外客户交付稳定、高质量的量产方案。",
              "产能与布局：",
              "• 中国·深圳（15,000㎡）：24 条 SMT、配套插件/手焊/测试/三防/组装/老化/包装一站式服务",
              "• 马来西亚·槟城（6,000㎡）：4 条 SMT，配套自动化插件机/手焊/测试/三防/组装/老化/包装一站式服务。",
              "满足东南亚、欧盟与美国的原产地与本地化交付需求，灵活应对关务与时效。"
            ]
          },
          {
            image: "/images/services/2.png",
            imagePosition: "left",
            content: [
              "质量与智能制造：",
              "我们以“设计即质量、制造即数据”为原则，贯穿 DFM→来料→贴片→焊接→测试→组装→老化→包装→出货全流程。工厂采用 SPI/AOI/X-Ray、ICT/FCT、自动化测试治具与 MES 追溯体系，批次级追踪物料、工序与参数，确保高一致性与可复制的量产品质。",
              "全面认证体系： ISO 9001｜IATF 16949｜ISO 13485｜ISO 14001｜RoHS/REACH｜IPC-A-610 Class II/III针对高可靠应用制定工艺窗口与失效分析流程，全流程质量把关"
            ]
          },
          {
            image: "/images/services/3.png",
            imagePosition: "right",
            content: [
              "增值服务（区别于传统EMS）：",
              "• DFM可制造性分析 ",
              "• 关键器件选型与风险评估 ",
              "• 长交期物料免费备货（基于年度预测与出货计划）",
              "• 定制测试系统：上位机+全自动测试治具，自动烧录与功能测试，降低认为误差",
              "• 灵活付款：基于保险批复提供更灵活的账期方案",
              "• 成本优化：在不改动设计的前提下进行PIN-to-PIN 国产/国际替代，BOM平均降本20-30%",
              "供应链与背书：",
              "服务覆盖AI 机器人与新能源等行业生态，量产验证充分；BMS 累计装机 35GWh+。与 NXP、ST、TI 等原厂及 Arrow / Future / Avnet 等全球代理深度合作，价格与交期更可控，计划更可预期,交付更准时。"
            ]
          }
        ]
      },
      serviceType: {
        title: "服务类型",
        oem: "OEM制造服务",
      },
      contact: {
        title: "联系我们",
        description: "如果您有产品生产需求，欢迎联系我们OEM服务团队，我们将为您提供专业的技术咨询和有竞争力的报价。",
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
        sections: [
          {
            image: "/images/services/1.png",
            imagePosition: "right",
            content: [
              "BQC, founded in 2003, is a professional Electronics Manufacturing Services (EMS) provider with 22 years of experience. With a “Strong R&D × Strong Manufacturing” closed-loop capability, we help customers accelerate products from design validation to stable mass production. We have 1,000+ employees and 20,000+ m² of manufacturing space (Shenzhen 15,000 m², Penang, Malaysia 6,000 m²). Our one-stop OEM/ODM offering covers component sourcing, PCBA SMT/THT, and box-build assembly with functional and burn-in testing, serving energy storage systems, intelligent AI robotics, medical electronics, and automotive electronics—consistently delivering reliable, high-quality volume production for customers worldwide.",
              "Capacity & Footprint：",
              "• Shenzhen, China (15,000 m²): 24 SMT lines, with end-to-end services including THT/insertion, hand soldering, testing, conformal coating, assembly, burn-in, and packing.",
              "• Penang, Malaysia (6,000 m²): 4 SMT lines, with automated THT insertion, hand soldering, testing, conformal coating, assembly, burn-in, and packing in a one-stop flow.",
              "Our dual-site setup meets country-of-origin and localization requirements for Southeast Asia, the European Union, and the United States, enabling flexible responses to customs, compliance, and lead-time needs."
            ]
          },
          {
            image: "/images/services/2.png",
            imagePosition: "left",
            content: [
              "Quality & Smart Manufacturing：",
              "We follow the principle of “quality by design, manufacturing by data” across the entire lifecycle: DFM → incoming inspection → SMT → soldering → testing → assembly → burn-in → packing → shipment. Our plants deploy SPI/AOI/X-Ray, ICT/FCT, automated test jigs, and an MES traceability system to track materials, processes, and parameters at the lot/batch level, ensuring high consistency and repeatable mass-production quality.",
              "Comprehensive Certifications: ISO 9001 | IATF 16949 | ISO 13485 | ISO 14001 | RoHS/REACH | IPC-A-610 Class II/III. For high-reliability applications, we define tight process windows and failure analysis procedures, enforcing end-to-end quality control.",
            ]
          },
          {
            image: "/images/services/3.png",
            imagePosition: "right",
            content: [
              "Value-Added Services (Beyond Traditional EMS)：",
              "• DFM (Design for Manufacturability) analys",
              "• Key component selection & risk assessment",
              "• Free stocking of long-lead materials (based on annual forecasts and shipment plans)",
              "• Custom test systems: host software + fully automatic test jigs for auto programming & functional testing, reducing human error",
              "• Flexible payment terms enabled by trade-credit/insurance approvals",
              "• Cost optimization: PIN-to-PIN domestic/international alternates without design changes, delivering 20-30% BOM savings",
              "Supply Chain & Endorsements：",
              "Our services span the AI-robotics and new-energy ecosystems and are fully validated in mass production; BMS deployments exceed 35 GWh cumulatively. We maintain deep partnerships with NXP, ST, TI, and global distributors such as Arrow, Future, and Avnet, enabling more controllable pricing and lead times, more predictable planning, and more on-time delivery."
            ]
          }
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
        {/* 只在 activeService 有值时渲染内容 */}
        {activeService && (
          <>
            {/* OEM代工服务内容 */}
            {activeService === "oem" && (
              <>
                <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto">
                  {currentContent.oem.sections.map((section, index) => (
                    <div
                      key={index}
                      className={`
                        ${index % 2 === 0 ? 'bg-gradient-to-r from-blue-50/30 to-transparent' : 'bg-gradient-to-l from-gray-50/50 to-transparent'}
                        rounded-2xl p-6 sm:p-8 lg:p-12
                        transition-all duration-500 hover:shadow-xl
                      `}
                    >
                      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                        section.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                      }`}>
                        {/* 文字内容 */}
                        <div className={`${section.imagePosition === "left" ? "lg:order-2" : "lg:order-1"} space-y-3 lg:space-y-4`}>
                          {section.content.map((paragraph, pIndex) => {
                            const isSubtitle = paragraph.endsWith('：') && paragraph.length < 50

                            return (
                              <p
                                key={pIndex}
                                className={`
                                  ${isSubtitle
                                    ? 'text-xl sm:text-2xl font-bold text-blue-700 mb-3 lg:mb-4 mt-6 lg:mt-8 first:mt-0 border-l-4 border-blue-500 pl-3 lg:pl-4'
                                    : 'text-base sm:text-lg text-gray-800 leading-relaxed hover:text-gray-900 transition-colors'
                                  }
                                `}
                              >
                                {paragraph}
                              </p>
                            )
                          })}
                        </div>

                        {/* 图片 */}
                        <div className={`${section.imagePosition === "left" ? "lg:order-1" : "lg:order-2"} relative group`}>
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                          <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl ring-1 ring-gray-200">
                            <Image
                              src={section.image}
                              alt={`OEM Service ${index + 1}`}
                              width={700}
                              height={500}
                              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

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