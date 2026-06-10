"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"


export default function ManufacturingCapabilitiesPage({params}:{params:{locale:string}}) {
  
  const locale=params.locale
  const language=locale==="en"?"en":"zh"

  const content = {
    zh: {
      title: "制造能力",
      subtitle: "百千成电子的生产设备与制造工艺",
      breadcrumbs:[
        {label:"关于我们",href:"/zh-Hans/about"},
        {label:"制造能力",href:"/zh-Hans/about/manufacturing-capabilities.html"}
      ],
      workshops: {
        title: "生产车间",
        desc: "自动化生产线，保障高效与高品质。",
        items: [
          {
            count: "24",
            title: "SMT车间",
            description: "BQC拥有24条自动化SMT生产线，日生产能力8,640,000点"  
          },{
            count: "8",
            title: "DIP车间",
            description: "插件线4条，日生产能力1500,000点每天；后焊线4条，日生产能力500,000点"
          },
          {
            count: "11",
            title: "喷涂车间",
            description: "喷涂线11条，日生产能力2万件产品"
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
            description: "配备高速精密贴片机，可实现大批量生产，高速度与高稳定性兼具",
            image: "/images/about/manufacturing/High-speed-mounter.jpg"
          },
          {
            title: "自动印刷机20台",
            description: "采用全自动丝网印刷设备，确保焊膏涂布均匀一致，提高生产效率与良率",
            image: "/images/about/manufacturing/Automatic printing machine.png"
          },
          {
            title: "10温区热风回流焊（可加氮气）12台",
            description: "10温区精密控温回流焊炉，支持氮气环境，有效保证焊接质量与可靠性",
            image: "/images/about/manufacturing/temperature zone hot air reflow soldering.png"
          },
          {
            title: "波峰焊4台",
            description: "高效节能波峰焊设备，适用于插件类元器件的批量化焊接",
            image: "/images/about/manufacturing/Wave soldering.png"
          },
          {
            title: "自动插件机1台",
            description: "实现元器件自动化插件，提升效率并降低人工误差",
            image: "/images/about/manufacturing/Automatic plug-in machine.png"
          },
          {
            title: "3D X-RAY",
            description: "三维X光检测系统，精准分析焊点及隐藏缺陷",
            image: "/images/about/manufacturing/3D X-RAY.png"
          },
          {
            title: "3D SPI 8台",
            description: "在线三维锡膏检测设备，实时监控印刷品质",
            image: "/images/about/manufacturing/3D SPI.png"
          },
          {
            title: "FAI首件检测仪4台",
            description: "快速完成首件检测，确保生产一致性与可靠性",
            image: "/images/about/manufacturing/FAI First Article Tester.png"
          },
          {
            title: "视觉高精度点胶机",
            description: "高精度视觉定位系统，实现均匀点胶，适配多种工艺需求",
            image: "/images/about/manufacturing/Vision High Precision Dispenser.png"
          },
          {
            title: "3D AOI",
            description: "三维自动光学检测，全面覆盖复杂焊接缺陷识别",
            image: "/images/about/manufacturing/3D AOI.png"
          },
          {
            title: "在线AOI 6台",
            description: "生产线实时检测，保障产品高良率",
            image: "/images/about/manufacturing/Online AOI.png"
          },
          {
            title: "离线AOI 20台",
            description: "灵活检测，支持多批次、多角度分析",
            image: "/images/about/manufacturing/Offline AOI.png"
          },
          {
            title: "影像测量仪（二次元）",
            description: "精密影像测量，确保尺寸与工艺符合标准",
            image: "/images/about/manufacturing/Image Measuring Instruments.png"
          },
          {
            title: "恒温恒湿试验箱",
            description: "模拟极端环境，测试产品可靠性与耐用性",
            image: "/images/about/manufacturing/Constant temperature and humidity test chamber.png"
          },
          {
            title: "ROHS测试仪",
            description: "快速检测有害物质，符合环保标准",
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
      talent: {
        title: "技术人才储备",
        desc: "专业团队支撑产品全生命周期开发。",
        description: "百千成电子拥有超过35名研发与工程人员，团队成员多数来自于985/211本硕，8年以上工作经验的老员工占比60%；涵盖硬件、软件、结构、ID/MD/SMT/PCBA设计及验证团队，支持客户完成从概念到量产的全过程。",
        image: "/images/about/manufacturing/talentDistribution_zh.png"
      },
    },
    en: {
      title: "Manufacturing Capabilities",
      subtitle: "Advanced Production Equipment & Manufacturing Processes of BQC",
      breadcrumbs:[
        {label:"About Us",href:"/en/about"},
        {label:"Manufacturing Capabilities",href:"/en/about/manufacturing-capabilities.html"}
      ],
      workshops: {
        title: "Production Workshops",
        desc: "Automated production lines ensuring efficiency and high quality",
        items: [
          {
            count: "24",
            title: "SMT Lines",
            description: "BQC operates 24 automated SMT production lines with a daily capacity of 8,640,000 solder joints"
          },
          
          {
            count: "8",
            title: "DIP Lines",
            description: "4 THT (through-hole insertion) lines with a daily capacity of 1,500,000 pins, plus 4 manual soldering lines with a daily capacity of 500,000 pins"
          },
          {
            count: "11",
            title: "Conformal Coating Lines",
            description: "11 coating production lines, with a daily production capacity of 20,000 units"
          },
          {
            count: "5",
            title: "Functional Test Lines",
            description: "5 functional testing lines, capable of testing 20,000 units per day"
          },
          {
            count: "4",
            title: "4 Product Assembly Lines",
            description: "4 final assembly lines, with a daily assembly capacity of 20,000 units"
          }
        ]
      },
      equipment: {
        title: "Core Equipment",
        desc: "Advanced equipment ensures high efficiency and consistent product quality",
        items: [
          {
            title: "50 High-Speed Pick-and-Place Machines",
            description: "Enabling high-precision, high-speed mass production with excellent stability",
            image: "/images/about/manufacturing/High-speed-mounter.jpg"
          },
          {
            title: "20 Automatic Solder Paste Printers",
            description: "Fully automated stencil printing systems ensure uniform solder paste deposition, improving efficiency and yield ",
            image: "/images/about/manufacturing/Automatic printing machine.png"
          },
          {
            title: "12 Ten-Temperature-Zone Reflow Ovens (Nitrogen Capable)",
            description: "Precision-controlled reflow systems with nitrogen support, ensuring superior soldering quality and reliability",
            image: "/images/about/manufacturing/temperature zone hot air reflow soldering.png"
          },
          {
            title: "4 Wave Soldering Machines",
            description: "High-efficiency wave soldering equipment designed for mass production of through-hole components",
            image: "/images/about/manufacturing/Wave soldering.png"
          },
          {
            title: "1 Automatic Insertion Machine",
            description: "Automated THT insertion reduces manual errors and improves production efficiency",
            image: "/images/about/manufacturing/Automatic plug-in machine.png"
          },
          {
            title: "3 3D X-Ray Inspection Systems",
            description: "Advanced inspection for precise analysis of solder joints and hidden defects",
            image: "/images/about/manufacturing/3D X-RAY.png"
          },
          {
            title: "8 3D SPI Systems",
            description: "Real-time solder paste inspection to ensure printing quality stability",
            image: "/images/about/manufacturing/3D SPI.png"
          },
          {
            title: "4 FAI (First Article Inspection) Systems",
            description: "Fast and accurate first-article verification to ensure production consistency",
            image: "/images/about/manufacturing/FAI First Article Tester.png"
          },
          {
            title: "High-Precision Vision Dispensing Systems",
            description: "Accurate adhesive dispensing with vision alignment for diverse process requirements",
            image: "/images/about/manufacturing/Vision High Precision Dispenser.png"
          },
          {
            title: "3D AOI Systems",
            description: "Comprehensive inspection of complex soldering defects using 3D optical imaging",
            image: "/images/about/manufacturing/3D AOI.png"
          },
          {
            title: "6 In-Line AOI Systems",
            description: "Real-time inline inspection ensuring high yield rates during production",
            image: "/images/about/manufacturing/Online AOI.png"
          },
          {
            title: "20 Offline AOI Systems",
            description: "Flexible multi-batch inspection for detailed quality analysis",
            image: "/images/about/manufacturing/Offline AOI.png"
          },
          {
            title: "2D Optical Measurement Systems",
            description: "High-precision dimensional measurement ensuring compliance with design specifications",
            image: "/images/about/manufacturing/Image Measuring Instruments.png"
          },
          {
            title: "Temperature & Humidity Test Chambers",
            description: "Simulating extreme environments to evaluate product reliability and durability",
            image: "/images/about/manufacturing/Constant temperature and humidity test chamber.png"
          },
          {
            title: "RoHS Testing Equipment",
            description: "Rapid detection of hazardous substances to ensure environmental compliance",
            image: "/images/about/manufacturing/ROHS Tester.png"
          },
        ]
      },
      mountingRange: {
        title: "Supported Component Packaging Range",
        desc: "Supports a wide range of package types to meet diverse product requirements:",
        description: "01005 to 2512; QFP, QFN, CSP, TSOP, SOJ, BGA, uBGA, etc."
      },
      parameters: {
        title: "PCB & Assembly Capability Parameters",
        desc: "Combines high precision and speed for versatile production.",
        pcb: {
          title: "PCBA Manufacturing Capability",
          items: [
            "•	PCB Manufacturing Capability",
            "     -1.	Standard process: 545 × 650 mm",
            "     -2.	Extended capability: 620 × 2300 mm",
            "•	Layer count:",
            "     -1.	Standard: up to 26 layers",
            "     -2.	Advanced capability: up to 48 layers",
            "•	PCB thickness:",
            "     -1.	Minimum finished thickness: 0.1 mm (standard), 0.05 mm (advanced)",
            "     -2.	Maximum thickness: 6.3 mm (standard), 8.0 mm (advanced)",
            "•	Inner core thickness:",
            "     -1.	0.075 mm (standard)",
            "     -2.	0.05 mm (advanced)",
            "•  Minimum dielectric thickness:",
            "     -1.	0.075 mm (standard)",
            "     -2.	0.05 mm (advanced)",
          ]
        },
        component: {
          title: "Assembly Capability",
          items: [
            "Chip placement accuracy: Laser recognition ±0.05mm, Vision recognition ±0.03mm",
            "Placement speed: 0.09 seconds/component",
            "Component size range: 0.6 × 0.3 mm to 33.5 × 33.5 mm",
            "Maximum component height: 6 mm",
            "Lead pitch: ≥0.65 mm (laser recognition); 0.2 mm (high-resolution vision system)",
            "BGA ball pitch: ≥1.0 mm (laser recognition); 0.25 mm (high-resolution vision system)"
          ]
        }
      },
      talent: {
        title: "Engineering & Technical Talent",
        desc: "Professional team supporting full product lifecycle development.",
        description: "BQC has a strong engineering and R&D team of over 35 professionals, most graduated from top-tier universities (Project 985/211 institutions). 60% of team members have over 8 years of industry experience. Expertise covers hardware, software, mechanical structure, ID/MD design, SMT, PCBA design, and validation. Supports customers throughout the entire product lifecycle—from concept development to mass production",
        image: "/images/about/manufacturing/talentDistribution_en.png"
      },
    }
  }

  const currentContent = language === "en" ? content.en : content.zh

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/images/about/manufacturing/manufacturing-banner.png"
    >
      <div className="space-y-16">
        {/* 生产车间 */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.workshops.title}</h2>
          <p className="text-center text-gray-500 text-sm mb-6">{currentContent.workshops.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
          {/* <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.parameters.title}</h2> */}
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

        {/* 技术人才储备 reserve of talents*/}
        <div >
          <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.talent.title}</h2>
          <p className="text-center text-gray-500 text-sm mb-8">{currentContent.talent.desc}</p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
              {currentContent.talent.description}
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={currentContent.talent.image}
                  alt={currentContent.talent.title}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 