"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ManufacturingCapabilitiesPage() {
  const { t, language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (pathname.startsWith("/en")) setLanguage("en")
    else setLanguage("zh")
  }, [pathname, setLanguage])
  
  if (!mounted) {
    return null
  }

  const content = {
    zh: {
      title: "制造能力",
      subtitle: "百千成电子的生产设备与制造工艺",
      workshops: {
        title: "生产车间",
        desc: "自动化生产线，保障高效与高品质。",
        items: [
          {
            count: "22",
            title: "SMT车间",
            description: "BQC拥有22个自动化SMT生产线，日生产能力4500万点每天"
          },
          {
            count: "8",
            title: "DIP车间",
            description: "后焊线4条，手工焊线4条"
          },
          {
            count: "3",
            title: "产品组装线",
            description: "成品组装生产线3条"
          },
          {
            count: "4",
            title: "功能测试线",
            description: "功能测试生产线4条"
          }
        ]
      },
      equipment: {
        title: "主要设备",
        desc: "先进设备提升生产效率与产品一致性。",
        items: [
          {
            title: "松下&雅马哈贴片机30台",
            description: "配备高精度贴片机，可实现高速、高精度的元器件贴装。"
          },
          {
            title: "回流焊炉10台",
            description: "采用先进的回流焊设备，确保焊接质量。"
          },
          {
            title: "PCB自动上料机22台和自动印刷机22台",
            description: "自动化设备提高生产效率和产品一致性。"
          },
          {
            title: "波峰焊4台",
            description: "用于通孔元器件的焊接，确保焊接质量。"
          },
          {
            title: "AOI探测器36台",
            description: "自动光学检测设备，用于检查焊接质量。"
          },
          {
            title: "X-RAY测试仪",
            description: ""
          },
          {
            title: "SPI焊膏检测12套",
            description: "用于检测锡膏印刷质量，确保焊接可靠性。"
          },
          {
            title: "ICT机器",
            description: ""
          }
        ]
      },
      mountingRange: {
        title: "有效安装组件封装范围",
        desc: "支持多种封装类型，满足不同产品需求。",
        description: "01005 to 2512; QFP, QFN, CSP, TSOP, SOJ, BGA, uBGA, etc."
      },
      parameters: {
        title: "装片运载能力参数",
        desc: "高精度与高速度兼备，适应多样化生产。",
        pcb: {
          title: "PCB参数",
          items: [
            "PCB电路板尺寸: 50 * 50 mm-L630mm * W490mm",
            "PCB层: 1 ~ 16层",
            "PCB厚度: 0.3mm-6.0mm"
          ]
        },
        component: {
          title: "组件参数",
          items: [
            "芯片精度: 激光识别±0.05mm，图像识别±0.03mm",
            "安装速度: 0.09s/片",
            "组件尺寸: 0.6 * 0.3毫米- 33.5 * 33.5毫米",
            "组件高度: 6mm（最大）",
            "Pin脚距: 0.65mm以上激光识别；高分辨率VCS 0.2毫米",
            "球型间距: 激光识别1.0以上，高分辨率VCS 0.25mm"
          ]
        }
      },
    },
    en: {
      title: "Manufacturing Capabilities",
      subtitle: "BQC Electronics Production Equipment and Manufacturing Process",
      workshops: {
        title: "Production Workshops",
        desc: "Automated production lines ensure efficiency and quality.",
        items: [
          {
            count: "22",
            title: "SMT Workshop",
            description: "BQC possesses of 22 completely automated SMT production lines, the daily production capacity of which is 45 million dots per day"
          },
          {
            count: "8",
            title: "DIP Workshop",
            description: "THT (4) and Manual Soldering (4)"
          },
          {
            count: "3",
            title: "Product Assembly",
            description: "Finished product assembling (3)"
          },
          {
            count: "4",
            title: "Testing Lines",
            description: "Functional Test (4)"
          }
        ]
      },
      equipment: {
        title: "Major Equipment",
        desc: "Advanced equipment improves efficiency and consistency.",
        items: [
          {
            title: "Panasonic&YAMAHA Chip Mounter 30 sets",
            description: "Equipped with high-precision mounting machines for high-speed, precise component placement."
          },
          {
            title: "Reflow Soldering Oven 10 sets",
            description: "Using advanced reflow soldering equipment to ensure soldering quality."
          },
          {
            title: "PCB Auto Load machine 22 sets&Auto-Printing Machine 22 sets",
            description: "Automated equipment improves production efficiency and product consistency."
          },
          {
            title: "Wave soldering oven 4 sets",
            description: "Used for through-hole component soldering, ensuring soldering quality."
          },
          {
            title: "AOI Detector 36 sets",
            description: "Automated optical inspection equipment for checking soldering quality."
          },
          {
            title: "X-RAY test machine",
            description: ""
          },
          {
            title: "SPI Solder Paste Inspection 12 sets",
            description: "Used for inspecting solder paste printing quality to ensure soldering reliability."
          },
          {
            title: "ICT machine",
            description: ""
          }
        ]
      },
      mountingRange: {
        title: "Effective Mounting Component Package Range",
        desc: "Supports various package types to meet diverse product needs.",
        description: "01005 to 2512; QFP, QFN, CSP, TSOP, SOJ, BGA, uBGA, etc."
      },
      parameters: {
        title: "Mounting Capacity Parameters",
        desc: "Combines high precision and speed for versatile production.",
        pcb: {
          title: "PCB Parameters",
          items: [
            "PCB board size: 50 * 50 mm-L630mm * W490mm",
            "PCB layers: 1 ~ 16 layers",
            "PCB thickness: 0.3mm-6.0mm"
          ]
        },
        component: {
          title: "Component Parameters",
          items: [
            "Chip accuracy: Laser recognition ±0.05mm, Image recognition ±0.03mm",
            "Mounting speed: 0.09s/piece",
            "Component size: 0.6 * 0.3mm - 33.5 * 33.5mm",
            "Component height: 6mm (max)",
            "Pin pitch: 0.65mm and above laser recognition; High resolution VCS 0.2mm",
            "Ball pitch: Laser recognition 1.0 and above, High resolution VCS 0.25mm"
          ]
        }
      },
    }
  }

  const currentContent = language === "en" ? content.en : content.zh

  const breadcrumbs = [
    { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
    { label: t("about.breadcrumbs.manufacturingCapabilities"), href: language === "en" ? "/en/about/manufacturing-capabilities" : "/zh-Hans/about/manufacturing-capabilities" },
  ]

  return (
    <PageLayout
      title={t("about.manufacturingCapabilities.title")}
      subtitle={t("about.manufacturingCapabilities.subtitle")}
      breadcrumbs={breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="space-y-16">
        {/* 生产车间 */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.workshops.title}</h2>
          <p className="text-center text-gray-500 text-sm mb-6">{currentContent.workshops.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.workshops.items.map((workshop, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{workshop.count}</div>
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-gray-600">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 主要设备 */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.equipment.title}</h2>
          <p className="text-center text-gray-500 text-sm mb-6">{currentContent.equipment.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentContent.equipment.items.map((equipment, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{equipment.title}</h3>
                {equipment.description && <p className="text-gray-600">{equipment.description}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* 有效安装组件封装范围 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.mountingRange.title}</h2>
          <p className="text-center text-gray-500 text-sm mb-4">{currentContent.mountingRange.desc}</p>
          <p className="text-lg text-center text-gray-700">{currentContent.mountingRange.description}</p>
        </div>

        {/* 装片运载能力参数 */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.parameters.title}</h2>
          <p className="text-center text-gray-500 text-sm mb-6">{currentContent.parameters.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{currentContent.parameters.pcb.title}</h3>
              <ul className="space-y-2">
                {currentContent.parameters.pcb.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{currentContent.parameters.component.title}</h3>
              <ul className="space-y-2">
                {currentContent.parameters.component.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 