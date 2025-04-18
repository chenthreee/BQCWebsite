"use client"

import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"

export default function OemServicePage() {
  // 添加状态来跟踪当前选中的服务类型
  const [activeService, setActiveService] = useState("oem") // 'oem' 或 'jdsm'
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 避免水合不匹配
  if (!mounted) {
    return null
  }
  const content = {
    zh: {
      title: "OEM代工服务",
      subtitle: "一站式电子产品制造解决方案",
      breadcrumbs: [
        { label: "服务", href: "/services" },
        { label: "OEM代工服务", href: "/services/oem" },
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
      }
    },
    en: {
      title: "OEM Manufacturing Services",
      subtitle: "One-stop electronic product manufacturing solution",
      breadcrumbs: [
        { label: "Services", href: "/services" },
        { label: "OEM Manufacturing Services", href: "/services/oem" },
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
      }
    }
  }

  return (
    <PageLayout
      title={content[language].title}
      subtitle={content[language].subtitle}
      breadcrumbs={content[language].breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].serviceType.title}</h2>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-white">
            <button
              onClick={() => setActiveService("oem")}
              className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${
                activeService === "oem" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {content[language].serviceType.oem}
            </button>
            <button
              onClick={() => setActiveService("jdsm")}
              className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${
                activeService === "jdsm" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {content[language].serviceType.jdsm}
            </button>
          </div>
        </div>

        {/* OEM代工服务内容 */}
        {activeService === "oem" && (
          <>
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  {content[language].oem.description.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt={content[language].title}
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
              <h2 className="text-3xl font-bold mb-8 text-center">{content[language].jdsm.intro.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    {content[language].jdsm.intro.description}
                  </p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt={content[language].jdsm.intro.title}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{content[language].jdsm.advantages.title}</h2>
              <div className="mb-8">
                {content[language].jdsm.advantages.description.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content[language].jdsm.advantages.cards.map((card, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Image src="/placeholder.svg?height=40&width=40" alt={card.title} width={40} height={40} />
                  </div>
                    <h3 className="text-xl font-bold mb-3 text-center">{card.title}</h3>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">JDSM服务流程</h2>
              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
                <div className="flex flex-col md:flex-row justify-between relative z-10">
                  {[1, 2, 3, 4, 5].map((step, index) => (
                    <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                        {step}
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-2">
                          {index === 0 && "需求分析"}
                          {index === 1 && "联合设计"}
                          {index === 2 && "原型验证"}
                          {index === 3 && "优化改进"}
                          {index === 4 && "批量生产"}
                        </h3>
                        <p className="text-gray-600 text-sm px-4">
                          {index === 0 && "深入了解客户需求"}
                          {index === 1 && "共同设计产品方案"}
                          {index === 2 && "快速制作原型验证"}
                          {index === 3 && "基于反馈优化设计"}
                          {index === 4 && "规模化生产交付"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">合作客户</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=客户${item}`}
                  alt={`客户${item}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">联系我们</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            如果您有{activeService === "oem" ? "OEM" : "JDSM"}
            代工需求，欢迎联系我们的服务团队，我们将为您提供专业的服务。
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            联系我们讨论您的项目
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
