"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function OdmServicePage() {
  const params = useParams()
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const content = {
    "zh-Hans": {
      title: "百千成JDSM联合设计制造服务",
      subtitle: "Join Design Smart Manufacture 深度协作服务",
      breadcrumbs: [
        { label: "服务", href: "/zh-Hans/services.html" },
        { label: "JDSM联合设计制造服务", href: "/zh-Hans/services/odm.html" },
      ],
      whyChoose: {
        title: "为何选择百千成？",
        items: [
          "联合设计优势：早期介入设计阶段，避免后期变更成本",
          "全流程效率：从设计到认证的闭环服务，缩短产品上市周期30%+",
          "成本竞争力：器件替代方案+原厂级供应链，降低BOM成本15%-30%",
          "行业背书：成功服务新能源/医疗/智能家居等高端制造领域"
        ]
      },
      serviceOverview: {
        title: "服务概述",
        subtitle: "JDSM模式：Join Design Smart Manufacture深度协作服务",
        description: "服务本质：",
        phases: [
          {
            title: "设计阶段",
            content: "共同定义产品方案（需求分析→方案设计）"
          },
          {
            title: "制造阶段", 
            content: "开发制造一体化（DFM同步工程→量产支持）"
          }
        ]
      },
      team: {
        title: "专业团队保障",
        description: "30+人资深研发技术团队"
      },
      coreCapabilities: {
        title: "核心能力",
        subtitle: "全生命周期技术支持",
        sections: [
          {
            title: "电子开发",
            items: [
              {
                category: "硬件",
                details: "原理图设计、元器件选型与Pin-to-Pin替代"
              },
              {
                category: "嵌入式开发",
                details: "单片机固件、蓝牙/Wi-Fi等无线方案"
              }
            ]
          },
          {
            title: "结构开发",
            items: [
              {
                category: "塑料/金属件ID/MD设计",
                details: ""
              },
              {
                category: "模具开发与注塑工艺优化",
                details: ""
              }
            ]
          },
          {
            title: "精密制造",
            items: [
              {
                category: "DFM可制造性分析",
                details: ""
              },
              {
                category: "自动化烧录及测试设备开发",
                details: ""
              }
            ]
          }
        ],
        certification: {
          title: "支持全球认证，助力产品合规上市",
          items: [
            "CE/FCC/UL（安全）",
            "RoHS/REACH（环保）",
            "FDA（医疗）等"
          ]
        }
      },
      industryExpertise: {
        title: "重点行业解决方案",
        industries: [
          {
            field: "新能源",
            products: "储能BMS（电力大储/通讯基站/工商业/船舶/家储）等"
          },
          {
            field: "医疗电子",
            products: "呼吸机/血糖仪/体温计/心率检测仪等"
          },
          {
            field: "智能家居",
            products: "扫地机器人/猫砂盆等"
          }
        ]
      },
      cooperationMode: {
        title: "合作模式（灵活引导）",
        modes: [
          "全案交付：需求→设计→制造→认证 全程托管",
          "模块化服务（可自由组合）：制造赋能"
        ],
        services: [
          "快速打样/PCB设计→原型验证",
          "批量生产→成品交付"
        ],
        image: "/images/services/odm/moudleservice_zh.png"
      },
      contact: {
        title: "联系我们",
        description: "如果您有产品开发需求，欢迎联系我们的JDSM服务团队，我们将为您提供专业的技术咨询和解决方案。",
        buttonText: "联系我们讨论您的项目",
        href: "/zh-Hans/contact.html"
      }
    },
    en: {
      title: "BQC JDSM Joint Design & Manufacturing Services",
      subtitle: "Join Design & Manufacture - Deep Collaboration Service",
      breadcrumbs: [
        { label: "Services", href: "/en/services.html" },
        { label: "JDSM Services", href: "/en/services/odm.html" },
      ],
      whyChoose: {
        title: "Why Choose BQC?",
        items: [
          "Joint Design Advantage: Early involvement in product design to avoid costly late-stage changes",
          "End-to-End Efficiency: Closed-loop service from design to certification, reducing time-to-market by 30%+",
          "Cost Competitiveness: Component alternatives + OEM-level supply chain, lowering BOM costs by 15%-30%",
          "Industry Recognition: Proven expertise in high-end manufacturing (new energy/medical/smart home electronics)"
        ]
      },
      serviceOverview: {
        title: "Service Overview",
        subtitle: "JDSM Model: Join Design & Manufacture – deep collaboration service",
        description: "Core Value:",
        phases: [
          {
            title: "Design Phase",
            content: "Co-define product solutions (requirement analysis → design → prototype validation)"
          },
          {
            title: "Manufacturing Phase",
            content: "Integrated development & production (DFM concurrent engineering → mass production support)"
          }
        ]
      },
      team: {
        title: "Expert Team",
        description: "30+ senior R&D engineers"
      },
      coreCapabilities: {
        title: "Core Capabilities",
        subtitle: "Full-Lifecycle Technical Support",
        sections: [
          {
            title: "Electronics Development",
            items: [
              {
                category: "Hardware",
                details: "Schematic/PCB design, component selection & Pin-to-Pin alternatives"
              },
              {
                category: "Embedded Systems",
                details: "MCU firmware, Bluetooth/Wi-Fi wireless solutions"
              }
            ]
          },
          {
            title: "Mechanical Development",
            items: [
              {
                category: "Plastic/metal part ID/MD design",
                details: ""
              },
              {
                category: "Mold development & injection molding optimization",
                details: ""
              }
            ]
          },
          {
            title: "Manufacturing Enablement",
            items: [
              {
                category: "Rapid prototyping",
                details: ""
              },
              {
                category: "DFM analysis",
                details: ""
              },
              {
                category: "Automated programming & test equipment development",
                details: ""
              }
            ]
          }
        ],
        certification: {
          title: "Global Certification Support",
          items: [
            "CE/FCC/UL (safety)",
            "RoHS/REACH (compliance)",
            "FDA (medical)"
          ]
        }
      },
      industryExpertise: {
        title: "Key Industry Solutions",
        industries: [
          {
            field: "New Energy",
            products: "Energy storage BMS (utility-scale/telecom/industrial/marine/home)"
          },
          {
            field: "Medical Electronics",
            products: "Ventilators/glucometers/thermometers/heart rate monitors"
          },
          {
            field: "Smart Home",
            products: "Robot vacuums/litter robots"
          }
        ]
      },
      cooperationMode: {
        title: "Collaboration Models",
        modes: [
          "Turnkey Solution: End-to-end management (requirements → design → manufacturing → certification)",
          "Modular Services: Customizable combinations"
        ],
        services: [
          "Design Services: Based on requirements",
          "Manufacturing: Based on customer designs"
        ],
        image: "/images/services/odm/moudleservice_en.png"
      },
      contact: {
        title: "Contact Us",
        description: "If you have product development needs, please contact our JDSM service team. We will provide you with professional technical consultation and solutions.",
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
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      {/* 为何选择百千成 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {currentContent.whyChoose.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {locale === "en" 
            ? "Discover the unique advantages that make BQC your ideal partner for joint design and manufacturing"
            : "了解百千成在联合设计制造方面的独特优势，成为您理想的合作伙伴"
          }
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <ul className="space-y-4">
            {currentContent.whyChoose.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 服务概述 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {currentContent.serviceOverview.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {locale === "en"
            ? "Comprehensive service model that integrates design and manufacturing for optimal results"
            : "整合设计与制造的综合服务模式，实现最优效果"
          }
        </p>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
            {currentContent.serviceOverview.subtitle}
          </h3>
          <p className="text-lg mb-6 text-center font-medium">
            {currentContent.serviceOverview.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentContent.serviceOverview.phases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-3 text-blue-600">{phase.title}</h4>
                <p className="text-gray-700">{phase.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 专业团队保障 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {currentContent.team.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {locale === "en"
            ? "Experienced professionals dedicated to delivering excellence in every project"
            : "经验丰富的专业团队，致力于为每个项目提供卓越服务"
          }
        </p>
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <p className="text-xl font-semibold text-blue-800">
            {currentContent.team.description}
          </p>
        </div>
      </div>

      {/* 核心能力 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {currentContent.coreCapabilities.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {locale === "en"
            ? "Comprehensive technical capabilities covering the entire product development lifecycle"
            : "覆盖产品开发全生命周期的综合技术能力"
          }
        </p>
        <h3 className="text-xl font-semibold mb-8 text-center text-gray-600">
          {currentContent.coreCapabilities.subtitle}
        </h3>
        
        <div className="space-y-8 mb-8">
          {currentContent.coreCapabilities.sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-blue-600">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.category}</span>
                      {item.details && <span className="text-gray-600">：{item.details}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 全球认证 */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="text-lg font-bold mb-4 text-green-800">
            {currentContent.coreCapabilities.certification.title}
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentContent.coreCapabilities.certification.items.map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 重点行业解决方案 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {currentContent.industryExpertise.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {locale === "en"
            ? "Tailored solutions for key industries with proven track record and expertise"
            : "针对重点行业的定制化解决方案，拥有丰富的经验和专业能力"
          }
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">行业领域</th>
                <th className="px-6 py-4 text-left font-semibold">典型产品</th>
              </tr>
            </thead>
            <tbody>
              {currentContent.industryExpertise.industries.map((industry, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 font-semibold text-blue-600">{industry.field}</td>
                  <td className="px-6 py-4">{industry.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 合作模式 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {currentContent.cooperationMode.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {locale === "en"
            ? "Flexible collaboration models to meet diverse customer needs and project requirements"
            : "灵活的合作模式，满足不同客户需求和项目要求"
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 text-blue-600">服务模式</h3>
            <ul className="space-y-3">
              {currentContent.cooperationMode.modes.map((mode, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{mode}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 text-blue-600">核心服务</h3>
            <ul className="space-y-3">
              {currentContent.cooperationMode.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 合作模式图片 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center">
            <Image
              src={currentContent.cooperationMode.image}
              alt={currentContent.cooperationMode.title}
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>
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