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
            count: "24",
            title: "SMT车间",
            description: "BQC拥有24个自动化SMT生产线，日生产能力5800,000点每天"
          },
          {
            count: "12",
            title: "涂料车间",
            description: "涂料线12条，日生产能力每天2万件产品"
          },
          {
            count: "8",
            title: "DIP车间",
            description: "插件线4条，日生产能力1500,000点每天；后焊焊线44条，日生产能力500,000点每天"
          },
          {
            count: "5",
            title: "功能测试线",
            description: "功能测试生产线5条，每天2万件产品"
          },
          {
            count: "4",
            title: "产品组装线",
            description: "成品组装生产线4条,每天2万件产品"
          },
        ]
      },
      equipment: {
        title: "主要设备",
        desc: "先进设备提升生产效率与产品一致性。",
        items: [
          {
            title: "高速贴片机50台",
            description: "写描述",
            image: "/images/about/manufacturing/High-speed-mounter.png"
          },
          {
            title: "自动印刷机20台",
            description: "写描述",
            image: "/images/about/manufacturing/Automatic printing machine.png"
          },
          {
            title: "10温区热风回流焊（可加氮气）12台",
            description: "写描述",
            image: "/images/about/manufacturing/temperature zone hot air reflow soldering.png"
          },
          {
            title: "波峰焊4台",
            description: "写描述",
            image: "/images/about/manufacturing/Wave soldering.png"
          },
          {
            title: "自动插件机1台",
            description: "写描述",
            image: "/images/about/manufacturing/Automatic plug-in machine.png"
          },
          {
            title: "3D X-RAY",
            description: "写描述",
            image: "/images/about/manufacturing/3D X-RAY.png"
          },
          {
            title: "3D SPI 8台",
            description: "写描述",
            image: "/images/about/manufacturing/3D SPI.png"
          },
          {
            title: "FAI首件检测仪4台",
            description: "写描述",
            image: "/images/about/manufacturing/FAI First Article Tester.png"
          },
          {
            title: "视觉高精度点胶机",
            description: "写描述",
            image: "/images/about/manufacturing/Vision High Precision Dispenser.png"
          },
          {
            title: "3D AOI",
            description: "写描述",
            image: "/images/about/manufacturing/3D AOI.png"
          },
          {
            title: "在线AOI 6台",
            description: "写描述",
            image: "/images/about/manufacturing/Online AOI.png"
          },
          {
            title: "离线AOI 20台",
            description: "写描述",
            image: "/images/about/manufacturing/Offline AOI.png"
          },
          {
            title: "影像测量仪（二次元）",
            description: "写描述",
            image: "/images/about/manufacturing/Image Measuring Instruments.png"
          },
          {
            title: "恒温恒湿试验箱",
            description: "写描述",
            image: "/images/about/manufacturing/Constant temperature and humidity test chamber.png"
          },
          {
            title: "ROHS测试仪",
            description: "写描述",
            image: "/images/about/manufacturing/ROHS Tester.png"
          },
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
          title: "PCB参数基本信息",
          items: [
            "•	PCB电路板最大生产板尺寸:",
            "     -1.	常规制程能力：545*650",
            "     -2.	极限制程能力：620*2300",
            "•	PCB层数:",
            "     -1.	常规制程能力：26层",
            "     -2.	极限制程能力：48层",
            "•	PCB厚度:",
            "     -1.	最小完成板厚(mm)：常规制程能力-0.1, 极限制程能力-0.05",
            "     -2.	最小完成板厚(mm)：常规制程能力-6.3, 极限制程能力-8.0",
            "•	内层最小芯板厚度(mm):",
            "     -1.	常规制程能力：0.075",
            "     -2.	极限制程能力：0.05",
            "•	最小介质层厚度(mm):",
            "     -1.	常规制程能力：0.075",
            "     -2.	极限制程能力：0.05",
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
            count: "24",
            title: "SMT Workshop",
            description: "BQC has 24 automated SMT lines with a daily production capacity of 58 million points per day"
          },
          {
            count: "12",
            title: "Conformal Coating Lines",
            description: "12 coating lines with a daily production capacity of 20,000 pieces/day"
          },
          {
            count: "8",
            title: "DIP Workshop",
            description: "4 THT Production Lines, 1.5million points per day. 4 Hand Soldering Lines, 0.5million points per day."
          },
          {
            count: "5",
            title: "Functional Test Lines",
            description: "Functional test line 4 pcs, 20,000 pieces/day"
          },
          {
            count: "4",
            title: "Product assembly line",
            description: "4 assembly lines for finished products, 20,000 pieces/day"
          }
        ]
      },
      equipment: {
        title: "Major Equipment",
        desc: "Advanced equipment improves efficiency and consistency.",
        items: [
          {
            title: "High-speed mounter 50 sets",
            description: "write something",
            image: "/images/about/manufacturing/High-speed-mounter.png"
          },
          {
            title: "Automatic printing machine 20 sets",
            description: "write something",
            image: "/images/about/manufacturing/Automatic printing machine.png"
          },
          {
            title: "10 temperature zone hot air reflow soldering (can add nitrogen) 12 sets",
            description: "write something",
            image: "/images/about/manufacturing/temperature zone hot air reflow soldering.png"
          },
          {
            title: "Wave soldering 4 sets",
            description: "write something",
            image: "/images/about/manufacturing/Wave soldering.png"
          },
          {
            title: "Automatic plug-in machine 1 set",
            description: "write something",
            image: "/images/about/manufacturing/Automatic plug-in machine.png"
          },
          {
            title: "3D X-RAY",
            description: "write something",
            image: "/images/about/manufacturing/3D X-RAY.png"
          },
          {
            title: "3D SPI 8 sets",
            description: "write something",
            image: "/images/about/manufacturing/3D SPI.png"
          },
          {
            title: "FAI First Article Tester 4 sets",
            description: "write something",
            image: "/images/about/manufacturing/FAI First Article Tester.png"
          },
          {
            title: "Vision High Precision Dispenser",
            description: "write something",
            image: "/images/about/manufacturing/Vision High Precision Dispenser.png"
          },
          {
            title: "3D AOI",
            description: "write something",
            image: "/images/about/manufacturing/3D AOI.png"
          },
          {
            title: "Online AOI 6 sets",
            description: "write something",
            image: "/images/about/manufacturing/Online AOI.png"
          },
          {
            title: "Offline AOI 20 sets",
            description: "write something",
            image: "/images/about/manufacturing/Offline AOI.png"
          },
          {
            title: "Image Measuring Instruments (Secondary Elements)）",
            description: "write something",
            image: "/images/about/manufacturing/Image Measuring Instruments.png"
          },
          {
            title: "Constant temperature and humidity test chamber",
            description: "write something",
            image: "/images/about/manufacturing/Constant temperature and humidity test chamber.png"
          },
          {
            title: "ROHS Tester",
            description: "write something",
            image: "/images/about/manufacturing/ROHS Tester.png"
          },
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
          title: "PCB Parameter Basic Information",
          items: [
            "•	Max Production Panel Size:",
            "     -1.	Standard Capability：545*650",
            "     -2.	Best Capability：620*2300",
            "•	Layer Count(max):",
            "     -1.	Standard Capability：26 layers",
            "     -2.	Best Capability：48 layers",
            "•	Board Thickness:",
            "     -1.	Min finished board thickness(mm)：Standard Capability-0.1, Best Capability-0.05",
            "     -2.	Max finished board thickness(mm)：Standard Capability-6.3, Best Capability-8.0",
            "•	 Min Core Thickness(I/L)(mm):",
            "     -1.	Standard Capability：0.075",
            "     -2.	Best Capability：0.05",
            "•   Min Core Dielectric Thickness(mm):",
            "     -1.	Standard Capability：0.075",
            "     -2.	Best Capability：0.05",
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
      backgroundImage="/images/about/manufacturing/manufacturing-banner.png"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.equipment.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 overflow-hidden mb-4">
                  <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
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