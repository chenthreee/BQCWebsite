"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Lightbulb, Code, Cpu, Settings, FileCheck, Layers, Package, ShieldCheck ,Box, CodeXml} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function ServicesSection() {
  const pathname = usePathname()
  const locale = pathname.split("/")[1] === "en" ? "en" : "zh-Hans"
  
  const [activeService, setActiveService] = useState("oem") // 'oem' or 'odm'
  const [activeTab, setActiveTab] = useState(0)

  // 翻译函数
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      "section.title": {
        "zh-Hans": "我们的服务",
        "en": "Our Services",
      },
      

      "section.subtitle": {
        "zh-Hans": "百千成电子是一家专注于 SMT贴片与PCBA加工的一站式制造服务企业，依托成熟的工程能力与自动化制造体系，为全球客户提供从 产品设计支持（ODM / DFM）到规模化量产交付（OEM） 的一站式解决方案。作为专业PCBA加工厂，公司在储能BMS/PCS系统、工业控制设备、智能机器人及医疗电子模块等领域积累了丰富的工程与制造经验。产品开发阶段，百千成电子工程团队可提供 电路优化与高可靠性PCB布局设计支持，帮助客户提升复杂电子系统的稳定性与可制造性，加速产品从研发到量产的落地。在制造环节，公司拥有多条自动化 SMT贴片生产线，配备高精度贴装设备，可稳定处理 0.4mm间距BGA器件、高密度封装元件及RF通信模块 等复杂工艺需求。作为经验丰富的 SMT贴片加工厂，百千成电子SMT贴片 日产能超过3000万点，能够满足中高批量电子产品的制造需求，并保持稳定的生产效率与质量一致性。除PCB组装外，公司还提供 系统级整机组装与Box Build集成制造服务，涵盖三防漆涂覆、ICT在线测试、功能测试及自动化装配等关键工序。依托完善的质量管理体系，产品在出货前将根据需要进行功能验证、可靠性测试及老化测试，确保电子产品在工业控制、医疗设备及智能机器人等应用场景中的稳定运行。",
        "en": "Electronics (BQC) is a one-stop electronics manufacturing service provider specializing in SMT assembly and PCBA manufacturing. Leveraging strong engineering expertise and advanced automated production systems, BQC provides global customers with integrated solutions ranging from product design support (ODM/DFM) to high-volume OEM production and delivery. As an experienced PCBA manufacturer, the company has built extensive expertise in applications such as energy storage BMS/PCS systems, industrial control equipment, intelligent robotic systems, and medical electronic modules.During the product development stage, BQC’s engineering team provides circuit optimization and high-reliability PCB layout design support, helping customers enhance system stability and manufacturability while accelerating the transition from prototype development to mass production. In manufacturing, the company operates multiple automated SMT production lines equipped with high-precision placement systems capable of handling 0.4 mm pitch BGA components, high-density packages, and RF communication modules. As a professional SMT assembly manufacturer, BQC achieves a daily SMT placement capacity of over 30 million components, enabling efficient production for medium- to high-volume electronics programs while maintaining consistent product quality and manufacturing efficiency.Beyond PCB assembly, BQC also offers system-level integration and box-build manufacturing services, including conformal coating, ICT testing, functional testing, and automated assembly processes. Supported by a comprehensive quality management system, products undergo functional verification, reliability testing, and burn-in testing when required, ensuring stable performance in demanding applications such as industrial control systems, medical devices, and intelligent robotics.",
      },
      "section.customet.subtitle":{
        "zh-Hans": "百千成电子致力于为全球客户提供高品质的储能BMS系统和PCBA/SMT贴片OEM制造服务，以先进技术引领行业发展。",
        "en": "BAIQIANCHENG Electronics is committed to providing high-quality energy storage BMS systems and PCBA/SMT assembly OEM manufacturing services for global customers, leading the industry with advanced technology.",
      },
      "oem.title": {
        "zh-Hans": "OEM制造服务",
        "en": "OEM Manufacturing Services",
      },
      "odm.title": {
        "zh-Hans": "ODM研发服务（BMS）",
        "en": "ODM Development Services (BMS)",
      },
      "oem.step1.title": {
        "zh-Hans": "PCBA加工设计",
        "en": "PCBA Processing & Design",
      },
      "oem.step1.desc": {
        "zh-Hans": "电路设计与PCBA加工布局",
        "en": "Circuit Design & PCBA Processing Layout",
      },
      "oem.step2.title": {
        "zh-Hans": "SMT贴片厂工艺",
        "en": "SMT Assembly Factory Process",
      },
      "oem.step2.desc": {
        "zh-Hans": "SMT高精度表面贴装",
        "en": "SMT High-precision Surface Mounting Technology",
      },
      "oem.step3.title": {
        "zh-Hans": "整机组装",
        "en": "Complete Assembly",
      },
      "oem.step3.desc": {
        "zh-Hans": "SMT加工自动化组装生产",
        "en": "SMT Processing Automated Assembly Production",
      },
      "oem.step4.title": {
        "zh-Hans": "测试包装",
        "en": "Testing & Packaging",
      },
      "oem.step4.desc": {
        "zh-Hans": "全面测试与包装",
        "en": "Comprehensive Testing & Packaging",
      },
      "oem.features.title": {
        "zh-Hans": "服务特点：",
        "en": "Service Features:",
      },
      "oem.button": {
        "zh-Hans": "了解更多OEM制造服务",
        "en": "Learn More about OEM Services",
      },
      "oem.clients.title": {
        "zh-Hans": "合作客户",
        "en": "Our Clients",
      },
      "odm.step1.title": {
        "zh-Hans": "需求分析",
        "en": "Requirement Analysis",
      },
      "odm.step1.desc": {
        "zh-Hans": "深刻理解客户需求",//深刻理解客户需求
        "en": "In-depth understanding of customer needs",
      },
      "odm.step2.title":{
        "zh-Hans":"技术预研",
        "en":"Technology Research"
      },
      "odm.step2.desc":{
        "zh-Hans":"关键技术研究，技术可行性分验证",//关键技术研究，技术可行性分验证
        "en":"Key technolohy study and feasibility validation"
      },
      "odm.step3.title": {
        "zh-Hans": "方案设计",
        "en": "Solution Design",
      },
      "odm.step3.desc": {
        "zh-Hans": "PCBA核心器件选型和产品规格制定",//核心器件选型和产品规格制定
        "en": "Core component selection and product specification definition",
      },
      "odm.step4.title": {
        "zh-Hans": "研发开发",
        "en": "R&D Development",
      },
      "odm.step4.desc": {
        "zh-Hans": "硬件软件结构设计",//硬件软件结构设计
        "en": "Hardware, software, and structural design",
      },
      "odm.step5.title": {
        "zh-Hans": "样机测试",
        "en": "Prototype Testing",
      },
      "odm.step5.desc": {
        "zh-Hans": "功能及性能测试",
        "en": "Functional and performance verification",
      },
      "odm.step6.title": {
        "zh-Hans": "产品认证",
        "en": "Product Certification",
      },
      "odm.step6.desc": {
        "zh-Hans": "UL、CE等认证支持",
        "en": "UL, CE and other compliance support",
      },
      "odm.step7.title": {
        "zh-Hans": "量产支持",
        "en": "Mass Production Support",
      },
      "odm.step7.desc": {
        "zh-Hans": "PCBA物料采购 SMT贴片插件后焊测试喷涂组装",//物料采购 贴片插件后焊测试喷涂组装
        "en": "PCBA Material Sourcing, SMT, THT, testing, coating, and assembly",
      },
      "odm.adv.title": {
        "zh-Hans": "ODM研发优势",
        "en": "ODM Advantages",
      },
      "odm.adv1.title": {
        "zh-Hans": "研发资金投入",
        "en": "R&D Investment",
      },
      "odm.adv1.desc": {
        "zh-Hans": "百千成电子每年将营业收入的 5% 投入研发团队建设与设备升级，持续强化产品研发与技术创新能力。依托公司 20 余年 PCBA 加工生产经验，我们在产品设计、制造及测试全流程严格把控，确保产品性能稳定可靠。",
        "en": "5% of annual revenue is dedicated to R&D, supporting continuous investment in talent and advanced equipment.",
      },
      "odm.adv2.title": {
        "zh-Hans": "研发人员占比",
        "en": "R&D Team Ratio",
      },
      "odm.adv2.desc": {
        "zh-Hans": "百千成电子拥有一支经验丰富的研发团队，研发人员占公司总人数的 30%，涵盖硬件、软件、结构、算法等多个领域，为公司PCBA 加工、SMT 贴片加工业务提供坚实的技术保障。",
        "en": "R&D professionals make up 30% of the total staff, covering hardware, software, structure, and algorithm development to ensure strong project capability.",
      },
      "odm.adv3.title": {
        "zh-Hans": "核心专利技术",
        "en": "Core Technology Patents",
      },
      "odm.adv3.desc": {
        "zh-Hans": "百千成电子拥有 60 项以上核心技术专利，在硬件设计、嵌入式开发等领域具备深厚技术积累，为SMT 贴片加工和PCBA 加工提供坚实技术保障。",
        "en": "Over 60 core technology patents demonstrate deep expertise in hardware design and embedded system development.",
      },
      "odm.features.title": {
        "zh-Hans": "服务内容：",
        "en": "Service Content:",
      },
      "odm.button": {
        "zh-Hans": "了解更多ODM研发服务",
        "en": "Learn More about OEM Services",
      },
      "odm.cases.title": {
        "zh-Hans": "成功案例",
        "en": "Success Cases",
      },
      "odm.case1.title": {
        "zh-Hans": "工业控制系统",
        "en": "Industrial Control System",
      },
      "odm.case1.desc": {
        "zh-Hans": "为某制造企业定制开发的工业控制系统，实现生产线自动化控制与数据采集，提升生产效率30%",
        "en": "Customized industrial control system for a manufacturing enterprise, realizing production line automation and data acquisition, improving production efficiency by 30%",
      },
      "odm.case2.title": {
        "zh-Hans": "智能监控设备",
        "en": "Smart Monitoring Device",
      },
      "odm.case2.desc": {
        "zh-Hans": "为安防行业客户开发的智能监控设备，集成多种传感器与AI算法，实现智能识别与预警功能",
        "en": "Smart monitoring device developed for security industry customers, integrating multiple sensors and AI algorithms for intelligent recognition and early warning",
      },
      "odm.case3.title": {
        "zh-Hans": "物联网终端设备",
        "en": "IoT Terminal Device",
      },
      "odm.case3.desc": {
        "zh-Hans": "为物联网应用场景开发的低功耗终端设备，支持多种无线通信协议，电池寿命可达3年",
        "en": "Low-power IoT terminal device developed for IoT application scenarios, supporting multiple wireless communication protocols, with a battery life of up to 3 years",
      },
      "odm.case.button": {
        "zh-Hans": "查看详情",
        "en": "View Details",
      },
    }
    return translations[key]?.[locale] || key
  }

  // OEM服务数据
  const oemServices = [
    {
      id: 1,
      title: locale === "en" ? "PCB Design & Layout" : "PCB设计与布局",
      description: locale === "en" 
        ? "Provide professional circuit design and PCB layout services, from schematic design to PCB layout, ensuring product performance and reliability"
        : "提供专业的电路设计与PCB布局服务，从原理图设计到PCB布局，确保产品性能与可靠性",
      icon: <Layers className="h-16 w-16 text-blue-600" />,   //pcb图标
      features: locale === "en"
        ? ["Multi-layer PCB Design & Layout", "High-speed Signal Integrity Analysis", "Power Integrity Analysis", "EMC/EMI Design Optimization", "Thermal Analysis & Heat Dissipation Design"]
        : ["多层PCB设计与布局", "高速信号完整性分析", "电源完整性分析", "EMC/EMI设计优化", "热分析与散热设计"],
    },
    {
      id: 2,
      title: locale === "en" ? "SMT Assembly Production" : "SMT贴片生产",
      description: locale === "en"
        ? "Using advanced SMT production lines to provide high-precision, high-efficiency surface mount technology services to meet the production needs of various electronic products"
        : "采用先进的SMT生产线，提供高精度、高效率的表面贴装技术服务，满足各类电子产品的生产需求",
      icon: <Cpu className="h-16 w-16 text-blue-600" />,   // SMT
      features: locale === "en"
        ? ["High-precision SMT Assembly", "BGA/CSP/QFN Complex Package Processing", "Lead-free Process Support", "3D SPI Solder Paste Inspection", "AOI Automatic Optical Inspection"]
        : ["高精度SMT贴片", "BGA/CSP/QFN等复杂封装处理", "无铅工艺支持", "3D SPI锡膏检测", "AOI自动光学检测"],
    },
    {
      id: 3,
      title: locale === "en" ? "Complete Assembly & Testing" : "整机组装测试",
      description: locale === "en"
        ? "Provide full-process assembly services from PCBA to complete units, including functional testing, aging testing, packaging and other processes to ensure product quality"
        : "提供从PCBA到整机的全流程组装服务，包括功能测试、老化测试、包装等环节，确保产品质量",
      icon: <Package className="h-16 w-16 text-blue-600" />,   // 组装
      features: locale === "en"
        ? ["Automated Assembly Production Line", "Functional Testing & Aging Testing", "Anti-static Work Environment", "Traceability Management System", "Packaging & Logistics Services"]
        : ["自动化组装生产线", "功能测试与老化测试", "防静电工作环境", "可追溯性管理系统", "包装与物流服务"],
    },
    {
      id: 4,
      title: locale === "en" ? "Quality Control System" : "质量控制体系",
      description: locale === "en"
        ? "Strict quality control system, full-process quality control from raw material entry to finished product shipment, ensuring products meet international standards"
        : "严格的质量控制体系，从原材料进厂到成品出货的全流程质量管控，确保产品符合国际标准",
      icon: <ShieldCheck className="h-16 w-16 text-blue-600" />,   //质量
      features: locale === "en"
        ? ["ISO9001 Quality Management System", "IPC Standard Production Process", "Incoming Inspection & Supplier Management", "Process Quality Control", "Finished Product Inspection & Reliability Testing"]
        : ["ISO9001质量管理体系", "IPC标准生产工艺", "来料检验与供应商管理", "过程质量控制", "成品检验与可靠性测试"],
    },
  ]
  

  // ODM服务数据
  const odmServices = [
    {
      id: 1,
      title: locale === "en" ? "Requirement Analysis & Solution Design" : "需求分析与方案设计",
      description: locale === "en"
        ? "Deeply understand customer needs to deliver comprehensive hardware and software design solutions including core component selection and product specification definition, ensuring products meet both technical and market requirements."
        : "百千成电子作为专业的SMT贴片和PCBA加工厂，深刻理解客户PCBA加工需求，提供核心器件选型和产品规格制定，硬件软件整体方案设计，确保产品设计满足技术要求和市场需求，同时充分考虑后续 SMT贴片生产与PCBA加工的制造可行性。",
      icon: <Lightbulb className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Requirement analysis", "Technical feasibility evaluation", "Core component selection", "Product specification definition", "Integrated solution design"]
        : ["需求分析", "技术可行性评估", "核心器件选型", "产品规格制定", "整体方案设计"],
    },
    {
      id: 2,
      title: locale === "en" ? "Hardware System Development" : "硬件系统开发",
      description: locale === "en"
        ? "A professional hardware development team providing customized hardware solutions tailored to client requirements."
        : "百千成电子拥有专业的硬件系统开发团队，可根据客户需求开发各类定制化PCBA产品",
      icon: <Cpu className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Schematic design", "PCB layout design", "Hardware testing & validation", "Component selection optimization", "DFM manufacturability analysis & improvement"]
        : ["原理图设计", "PCB布局设计", "硬件测试与验证", "元器件选型优化", "DFM可制造性分析优化"],
    },
    {
      id: 3,
      title: locale === "en" ? "Embedded Software Development" : "嵌入式软件开发",
      description: locale === "en"
        ? "Providing high-quality embedded software development services covering low-level drivers, middleware architecture, and application layers to ensure excellent performance and stability."
        : "百千成电子提供高质量的嵌入式软件开发服务，涵盖底层驱动、中间层架构和应用层开发，确保软件性能良好和稳定性，为后续的PCBA加工与生产提供坚实的技术基础。",
      icon: <CodeXml className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["System architecture design", "Driver development & hardware adaptation", "Middleware & protocol stack development", "Application & algorithm implementation", "Tool & cloud software development","System debugging & validation","Product certification & compliance support","Production integration & maintenance support"]
        : ["方案与架构设计", "驱动开发与硬件适配", "中间件与协议栈开发", "应用于算法实现", "工具与云端软件开发","整机调试与验证","产品认证与合规支持","生产导入与维护支持"],
    },
    {
      id: 4,
      title: locale === "en" ? "Structural Design" : "结构设计",
      description: locale === "en"
        ? "Delivering structural solutions that balance functionality, and manufacturability."
        : "百千成电子专注于为客户提供符合功能性与可制造性的结构解决方案，涵盖从SMT贴片加工到完整的PCBA组装全过程，确保在设计阶段已考虑到生产的可行性与后续制造流程。我们提供3D建模与装配配件验证，并结合SMT贴片厂的生产需求，优化结构设计，提升产品性能与制造效率。",
      icon: <Box className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Product structure planning & appearance review", "Mechanical design & optimization", "3D modeling & assembly validation", "Mold & manufacturing feasibility assessment", "Prototype fabrication & structural verification"]
        : ["产品结构规划与外观评审", "机械结构设计与优化", "3D建模与装配验证", "模具与制造可行性评估", "样机制作与结构验证"],
    },
    {
      id: 5,
      title: locale === "en" ? "Prototype Fabrication & Testing Validation" : "样机制作与测试验证",
      description: locale === "en"
        ? "Providing rapid prototyping and comprehensive testing services to accelerate product development, identify potential issues early, and ensure design feasibility and reliability."
        : "百千成电子提供快速原型制作与系统化测试验证服务，涵盖从SMT贴片加工到PCBA加工的全流程。我们为客户提供从样机制造到功能验证的全过程支持，确保产品设计的可行性与市场需求的匹配。通过专业的PCBA加工厂技术支持，结合DFM分析，帮助客户在早期阶段快速识别并解决设计问题，确保产品在后续生产中具备稳定的性能和可靠性。",
      icon: <Settings className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Rapid prototyping", "Functional & performance testing", "Environmental & reliability testing", "Aging & lifespan testing", "EMC/EMI testing & optimization"]
        : ["快速原型制作", "功能与性能测试", "环境与可靠性测试", "老化与寿命测试", "EMC/EMI测试与整改优化"],
    },
    {
      id: 5,
      title: locale === "en" ? "Product Certification & Mass Production Support" : "产品认证与量产支持",
      description: locale === "en"
        ? "Assisting customers with product certification and providing end-to-end technical support during mass production to ensure smooth manufacturing and rapid market entry."
        : "百千成电子协助客户完成各类产品认证，并在量产阶段提供涵盖从物料采，SMT贴片加工到完整PCBA加工的全流程支持，确保产品在生产过程中的质量与合规性。",
      icon: <FileCheck className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Certification & compliance consulting", "Certification & compliance consulting", "Process integration & optimization", "Automated programming & testing equipment design", "Supply chain & material sustainability support","Quality traceability & after-sales support"]
        : ["产品认证与合规咨询", "认证测试与整改支持", "工艺导入与制程优化", "自动化烧录设备设计制作", "供应链与物料可持续性支持","品质追溯与售后支持"],
    },
  ]

  // 获取当前活动的服务数据
  const currentServices = activeService === "oem" ? oemServices : odmServices

  // 合作客户数据 这里需要修改 pls这个客户不要 海辰也不要
  const clients = [
    { id: 1, name: "ABB", logo: "/images/BrandLogo/ABB.png" },
    { id: 2, name: "AgileX", logo: "/images/BrandLogo/Agilex.png" },
    { id: 3, name: "Costco", logo: "/images/BrandLogo/Costco.png" },
    { id: 4, name: "eSolutions", logo: "/images/BrandLogo/eSolutions free2move.png" },
    { id: 5, name: "EVE", logo: "/images/BrandLogo/EVE.png" },
    { id: 6, name: "Fenecon", logo: "/images/BrandLogo/FENECON.png" },
    { id: 7, name: "GE", logo: "/images/BrandLogo/GE.png"},
    { id: 8, name: "GivEnergy", logo:"/images/BrandLogo/GivEnergy.png"},
    { id: 9, name: "Mammotion", logo:"/images/BrandLogo/MAMMOTION.png"},
    { id: 10, name: "Narwal", logo:"/images/BrandLogo/Narwal.png"},
    { id: 11, name: "Nidec", logo:"/images/BrandLogo/Nidec.png"},
    { id: 12, name: "nLIGHT", logo:"/images/BrandLogo/nLIGHT.png"}
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("section.title")}</h2>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto">
            {t("section.subtitle")}
          </p>

          {/* 服务类型选择器 */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex rounded-md shadow-sm p-1 bg-white">
              <button
                onClick={() => {
                  setActiveService("oem")
                  setActiveTab(0)
                }}
                className={cn(
                  "px-6 py-3 text-lg font-medium rounded-md transition-colors",
                  activeService === "oem" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
                )}
              >
                {t("oem.title")}
              </button>
              <button
                onClick={() => {
                  setActiveService("odm")
                  setActiveTab(0)
                }}
                className={cn(
                  "px-6 py-3 text-lg font-medium rounded-md transition-colors",
                  activeService === "odm" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
                )}
              >
                {t("odm.title")}
              </button>
            </div>
          </div>
        </div>

        {/* OEM服务内容 */}
        {activeService === "oem" && (
          <>
            {/* 服务流程图 */}
            <div className="relative mb-20">
              <div className="hidden md:block absolute top-[80px] left-0 right-0 h-1 bg-blue-200 z-0"></div>
              <div className="flex flex-col md:flex-row justify-between relative z-10">
                {[1, 2, 3, 4].map((step, index) => (
                  <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                      {step}
                    </div>
                    <div className="text-center max-w-[140px]">
                      <h3 className="font-bold text-base mb-2 whitespace-normal break-words">
                        {index === 0 && t("oem.step1.title")}
                        {index === 1 && t("oem.step2.title")}
                        {index === 2 && t("oem.step3.title")}
                        {index === 3 && t("oem.step4.title")}
                      </h3>
                      <p className="text-gray-600 text-sm px-4">
                        {index === 0 && t("oem.step1.desc")}
                        {index === 1 && t("oem.step2.desc")}
                        {index === 2 && t("oem.step3.desc")}
                        {index === 3 && t("oem.step4.desc")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 服务详情选项卡 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-wrap border-b">
                {oemServices.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "px-6 py-4 text-lg font-medium transition-colors",
                      index === activeTab
                        ? "text-blue-600 border-b-2 border-blue-600 -mb-[2px]"
                        : "text-gray-600 hover:text-blue-500",
                    )}
                  >
                    {service.title}
                  </button>
                ))}
              </div>

              {/* 服务内容 */}
              <div className="p-8">
                {oemServices.map((service, index) => (
                  <div
                    key={service.id}
                    className={cn(
                      "transition-opacity duration-300",
                      index === activeTab ? "block opacity-100" : "hidden opacity-0",
                    )}
                  >
                    <div className="flex flex-col md:flex-row items-stretch gap-8">
                      <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-blue-50 rounded-lg flex justify-center items-center h-full">
                          {service.icon}
                        </div>
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-700 mb-6">{service.description}</p>

                        <h4 className="font-bold text-lg mb-3">{t("oem.features.title")}</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 text-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={`/${locale}/services/oem.html`} rel="nofollow">
                    {t("oem.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                </div>
              </div>
            </div>

            {/* 合作客户 */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-10">{t("oem.clients.title")}</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 text-center">
                {t("section.customet.subtitle")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {clients.map((client) => (
                  <div key={client.id} className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 w-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={180}
                        height={65}
                        className="max-h-24 w-auto object-contain transition-all"
                      />
                    </div>
                    <p className="mt-2 text-md font-semibold text-gray-1000 text-center">{client.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ODM服务内容 */}
        {activeService === "odm" && (
          <>
            {/* 服务流程图 */}
            <div className="relative mb-20">
              <div className="hidden md:block absolute top-[80px] left-0 right-0 h-1 bg-blue-200 z-0"></div>
              <div className="flex flex-col md:flex-row justify-between relative z-10">
                {[1, 2, 3, 4, 5, 6,7].map((step, index) => (
                  <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6">
                      {step}
                    </div>
                    <div className="text-center max-w-[140px]">
                      <h3 className="font-bold text-base mb-2 whitespace-normal break-words">
                        {index === 0 && t("odm.step1.title")}
                        {index === 1 && t("odm.step2.title")}
                        {index === 2 && t("odm.step3.title")}
                        {index === 3 && t("odm.step4.title")}
                        {index === 4 && t("odm.step5.title")}
                        {index === 5 && t("odm.step6.title")}
                        {index === 6 && t("odm.step7.title") }
                      </h3>
                      <p className="text-gray-600 text-xs px-2 whitespace-normal break-words leading-relaxed">
                        {index === 0 && t("odm.step1.desc")}
                        {index === 1 && t("odm.step2.desc")}
                        {index === 2 && t("odm.step3.desc")}
                        {index === 3 && t("odm.step4.desc")}
                        {index === 4 && t("odm.step5.desc")}
                        {index === 5 && t("odm.step6.desc")}
                        {index === 6 && t("odm.step7.desc")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 我们的优势 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-10">{t("odm.adv.title")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <span className="text-3xl font-bold">5%</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{t("odm.adv1.title")}</h4>
                  <p className="text-gray-600">{t("odm.adv1.desc")}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <span className="text-3xl font-bold">30%</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{t("odm.adv2.title")}</h4>
                  <p className="text-gray-600">
                    {t("odm.adv2.desc")}
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <span className="text-3xl font-bold">60+</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{t("odm.adv3.title")}</h4>
                  <p className="text-gray-600">{t("odm.adv3.desc")}</p>
                </div>
              </div>
            </div>

            {/* 服务详情选项卡 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-wrap border-b overflow-x-auto scrollbar-hide">
                {odmServices.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "px-4 py-4 text-md font-medium transition-colors whitespace-nowrap",
                      index === activeTab
                        ? "text-blue-600 border-b-2 border-blue-600 -mb-[2px]"
                        : "text-gray-600 hover:text-blue-500",
                    )}
                  >
                    {service.title}
                  </button>
                ))}
              </div>

              {/* 服务内容 */}
              <div className="p-8">
                {odmServices.map((service, index) => (
                  <div
                    key={service.id}
                    className={cn(
                      "transition-opacity duration-300",
                      index === activeTab ? "block opacity-100" : "hidden opacity-0",
                    )}
                  >
                    <div className="flex flex-col md:flex-row items-stretch gap-8">
                      <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-blue-50 rounded-lg  flex justify-center items-center h-full">
                          {service.icon}
                        </div>
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-700 mb-6">{service.description}</p>

                        <h4 className="font-bold text-lg mb-3">{t("odm.features.title")}</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 text-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={`/${locale}/services/odm.html`} rel="nofollow" >
                    {t("odm.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                </div>
              </div>
            </div>

            {/* 案例展示 */}
            {/* <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-10">{t("odm.cases.title")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: t("odm.case1.title"),
                    description: t("odm.case1.desc"),
                  },
                  {
                    title: t("odm.case2.title"),
                    description: t("odm.case2.desc"),
                  },
                  {
                    title: t("odm.case3.title"),
                    description: t("odm.case3.desc"),
                  },
                ].map((case_, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-gray-200">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=案例${index + 1}`}
                        alt={case_.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3">{case_.title}</h4>
                      <p className="text-gray-600 mb-4">{case_.description}</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                        {t("odm.case.button")}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </>
        )}
      </div>

      {/* 背景装饰 */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl"></div>
    </section>
  )
}
