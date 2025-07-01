"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle, ArrowRight} from "lucide-react"
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
      title: "OEM代工服务",
      subtitle: "一站式电子产品制造解决方案",
      breadcrumbs: [
        { label: "服务", href: "/zh-Hans/services" },
        { label: "OEM代工服务", href: "/zh-Hans/services/oem" },
      ],
      oem: {
        description: [
          "百千成是一家OEM电子印刷电路板组装制造商，营业模式包含OEM和JDSM。在储能BMS/PACK、清洁能源、智能机器人系统、通风设备、工业控制、医疗、汽车电子这些方面都有显著优势。BQC在PCBA制造这一行业从事了21年，拥有成熟的技术，完整的供应链。",
          "公司主要与欧美合作，制造的产品都要进行严格质量检验，确保产品符合客户的要求和行业标准。公司提供灵活定制服务，如样品制作，小批量制作，大批量生产，以满足不同客户的个性化要求。",
          "在OEM模式下，百千成根据客户提供的产品设计图纸、技术规范、原材料或零部件要求等进行生产制造。并进行严格的质量测试，确保产品符合标准，并最终将产品交付给客户。并且工厂通过了IS09001, ISO13485, ISO14001, IATF16949等认证体系。"
        ]
      },
      jdsm: {
        intro: {
          title: "JDSM代工服务",
          description: "JDSM（Join Design Manufacture），又称联合设计。强调与客户共同设计服务制造，即在产品设计阶段就与客户紧密合作，共同确定产品的设计方案和规格。在此模式下，百千成不仅负责生产制造，还参与到产品设计的全过程中，为客户提供更加全面的服务。"
        },
        advantages: {
          title: "JDSM服务优势",
          description: [
            "百千成与客户共同设计产品，凭借丰富的技术经验和专业知识提供技术支持和定制化生产服务。百千成得到了TI、 Microchip 、 Silergy等原厂的以及Avnet、Arrow等代理商的特别优先支持。为您提供核心器件选型替代，帮您找到pin对pin的替代，解决元件停产、缺货等问题，在保证质量的同时降低生产成本缩短交货时间。",
            "同时，百千成的研发团队配备软件，硬件及结构工程师：可根据客户需求产出原理图和进行PCB的layout布局设计；同时可产品做塑料或五金外壳ID及MD设计。满足市场需求和个性化要求，提升产品竞争力。"
          ],
          cards: [
            {
              title: "优化设计",
              description: "结合制造经验优化产品设计，提高产品性能和可靠性，降低生产成本。"
            },
            {
              title: "缩短周期",
              description: "设计和制造并行进行，缩短产品开发周期，加快产品上市时间。"
            },
            {
              title: "降低风险",
              description: "早期发现并解决设计问题，降低后期修改成本和风险。"
            }
          ]
        }
      },
      serviceType: {
        title: "服务类型",
        oem: "OEM代工服务",
        jdsm: "JDSM代工"
      },
      contact: {
        title: "联系我们",
        description: "如果您有产品开发需求，欢迎联系我们的OEM服务团队，我们将为您提供专业的技术咨询和解决方案。",
        buttonText: "联系我们讨论您的项目",
        href: "/zh-Hans/contact"
      }
    },
    en: {
      title: "OEM Manufacturing Services",
      subtitle: "One-stop electronic product manufacturing solution",
      breadcrumbs: [
        { label: "Services", href: "/en/services" },
        { label: "OEM Manufacturing Services", href: "/en/services/oem" },
      ],
      oem: {
        description: [
          "BQC is an OEM electronic printed circuit board assembly manufacturer, with business models including OEM and JDSM. It has significant advantages in energy storage BMS/PACK, clean energy, intelligent robot systems, ventilation equipment, industrial control, medical, and automotive electronics. BQC has been engaged in the PCBA manufacturing industry for 21 years and has mature technology and a complete supply chain.",
          "The company mainly cooperates with Europe and the United States, and the manufactured products must undergo strict quality inspection to ensure that the products meet customer requirements and industry standards. The company provides flexible customization services such as sample production, small batch production, and large batch production to meet the personalized requirements of different customers.",
          "Under the OEM model, BQC manufactures according to the product design drawings, technical specifications, raw materials or parts requirements provided by customers. And conduct strict quality testing to ensure that the products meet the standards and finally deliver the products to customers. And the factory has passed IS09001, ISO13485, ISO14001, IATF16949 and other certification systems."
        ]
      },
      jdsm: {
        intro: {
          title: "JDSM Services",
          description: "JDSM (Join Design Manufacture), also known as joint design. It emphasizes joint design service manufacturing with customers, that is, working closely with customers in the product design stage to jointly determine the design plan and specifications of the product. In this model, BQC is not only responsible for production and manufacturing, but also participates in the entire process of product design to provide customers with more comprehensive services."
        },
        advantages: {
          title: "JDSM Advantages",
          description: [
            "BQC designs products with customers and provides technical support and customized production services with rich technical experience and expertise. BQC has received special priority support from original manufacturers such as TI, Microchip, Silergy, and agents such as Avnet and Arrow. It provides you with core component selection and replacement, helps you find pin-to-pin replacement, solves problems such as component discontinuation and shortage, and reduces production costs and shortens delivery time while ensuring quality.",
            "At the same time, BQC's R&D team is equipped with software, hardware and structural engineers: they can produce schematics and PCB layout design according to customer needs; at the same time, they can design plastic or hardware shell ID and MD for products. Meet market demand and personalized requirements and enhance product competitiveness."
          ],
          cards: [
            {
              title: "Optimized Design",
              description: "Optimize product design based on manufacturing experience, improve product performance and reliability, reduce production costs."
            },
            {
              title: "Shortened Cycle",
              description: "Design and manufacturing proceed in parallel, shortening product development cycle and accelerating time to market."
            },
            {
              title: "Reduced Risk",
              description: "Early detection and resolution of design issues, reducing later modification costs and risks."
            }
          ]
        }
      },
      serviceType: {
        title: "Service Types",
        oem: "OEM Services",
        jdsm: "JDSM Services"
      },
      contact: {
        title: "Contact Us",
        description: "If you have product development needs, please contact our OEM service team. We will provide you with professional technical consultation and solutions.",
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
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.serviceType.title}</h2>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-white">
            <button
              onClick={() => setActiveService("oem")}
              className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${
                activeService === "oem" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {currentContent.serviceType.oem}
            </button>
            <button
              onClick={() => setActiveService("jdsm")}
              className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${
                activeService === "jdsm" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {currentContent.serviceType.jdsm}
            </button>
          </div>
        </div>

        {/* 只在 activeService 有值时渲染内容 */}
        {activeService && (
          <>
            {/* OEM代工服务内容 */}
            {activeService === "oem" && (
              <>
                <div className="mb-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                      {currentContent.oem.description.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-700 mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div>
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt={currentContent.title}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* JDSM代工服务内容 */}
            {activeService === "jdsm" && (
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
                        src="/placeholder.svg?height=600&width=800"
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
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                          <p className="text-gray-700">{card.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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