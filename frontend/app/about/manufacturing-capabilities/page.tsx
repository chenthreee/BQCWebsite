"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"

export default function ManufacturingCapabilitiesPage() {
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
      title: "制造能力",
      subtitle: "百千成电子的生产设备与制造工艺",
      breadcrumbs: [
        { label: "关于我们", href: "/about" },
        { label: "制造能力", href: "/about/manufacturing-capabilities" },
      ],
      // overview: {
      //   title: "制造能力概述",
      //   description: [
      //     "百千成电子拥有先进的生产设备和完善的制造工艺，在深圳和马来西亚设有现代化工厂，为客户提供高品质的电子产品制造服务。",
      //     "公司引进了多条全自动SMT生产线和自动化组装设备，配备了先进的测试仪器和检测设备，确保产品品质和生产效率。",
      //     "我们严格执行IPC标准和ISO9001质量管理体系，从原材料进厂到成品出货的全过程进行严格控制，确保产品品质。"
      //   ]
      // },
      equipment: {
        title: "主要设备",
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
        description: "01005 to 2512; QFP, QFN, CSP, TSOP, SOJ, BGA, uBGA, etc."
      },
      parameters: {
        title: "装片运载能力参数",
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
      workshops: {
        title: "生产车间",
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
      }
    },
    en: {
      title: "Manufacturing Capabilities",
      subtitle: "BQC Electronics Production Equipment and Manufacturing Process",
      breadcrumbs: [
        { label: "About Us", href: "/about" },
        { label: "Manufacturing Capabilities", href: "/about/manufacturing-capabilities" },
      ],
      // overview: {
      //   title: "Manufacturing Overview",
      //   description: [
      //     "BQC Electronics has advanced production equipment and comprehensive manufacturing processes, with modern factories in Shenzhen and Malaysia, providing high-quality electronic product manufacturing services.",
      //     "The company has introduced multiple automated SMT production lines and assembly equipment, equipped with advanced testing instruments and inspection equipment to ensure product quality and production efficiency.",
      //     "We strictly implement IPC standards and ISO9001 quality management system, controlling the entire process from raw material entry to finished product delivery to ensure product quality."
      //   ]
      // },
      equipment: {
        title: "Major Equipment",
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
        title: "Available Mounting Components Encapsulation Range",
        description: "01005 to 2512; QFP, QFN, CSP, TSOP, SOJ, BGA, uBGA, etc."
      },
      parameters: {
        title: "Mounting Operational Capacity Parameters",
        pcb: {
          title: "PCB Parameters",
          items: [
            "PCB Dimension: 50*50mm-L630mm*W490mm",
            "PCB layers: 1~16 layers",
            "PCB Thickness: 0.3mm-6.0mm"
          ]
        },
        component: {
          title: "Component Parameters",
          items: [
            "Chip Accuracy: laser recognition ±0.05mm; image recognition ±0.03mm",
            "Mounting Speed: 0.09s/piece",
            "Component Size: 0.6*0.3mm-33.5*33.5mm",
            "Component Height: 6mm(max)",
            "Pin Spacing: laser recognition over 0.65mm; high resolution VCS 0.2mm",
            "Spherical Surface Spacing: laser recognition over 1.0; high resolution VCS 0.25mm"
          ]
        }
      },
      workshops: {
        title: "Production Workshops",
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
      }
    }
  }

  const currentContent = language === "zh" ? content.zh : content.en

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* <div>
          <h2 className="text-3xl font-bold mb-6">{currentContent.overview.title}</h2>
          {currentContent.overview.description.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </div> */}
        {/* <div>
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="制造能力"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div> */}
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.equipment.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.equipment.items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=600"
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

      <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.mountingRange.title}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-lg text-center font-semibold">{currentContent.mountingRange.description}</p>
      </div>

      <h2 className="text-3xl font-bold mb-8 mt-16 text-center">{currentContent.parameters.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">{currentContent.parameters.pcb.title}</h3>
          <ul className="space-y-2">
            {currentContent.parameters.pcb.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">{currentContent.parameters.component.title}</h3>
          <ul className="space-y-2">
            {currentContent.parameters.component.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 mt-16 text-center">{currentContent.workshops.title}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentContent.workshops.items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{item.count}</div>
              <div className="text-xl font-bold mb-1">{item.title}</div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
