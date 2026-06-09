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
        "en": "Baiqiancheng Electronics is a one-stop manufacturing service provider specializing in SMT assembly and PCBA processing. Leveraging mature engineering capabilities and an automated manufacturing system, we offer global customers one-stop solutions from product design support (ODM/DFM) to high-volume OEM production and delivery. As a professional PCBA manufacturer, we have extensive engineering and manufacturing experience in energy storage BMS/PCS systems, industrial control equipment, intelligent robotic systems, and medical electronics modules. During product development, our engineering team provides circuit optimization and high-reliability PCB layout design support, enhancing the stability and manufacturability of complex electronic systems and accelerating their transition from R&D to mass production. In production, we operate multiple automated SMT lines equipped with high-precision placement equipment, capable of reliably handling complex processes such as 0.4 mm-pitch BGA components, high-density packages, and RF communication modules. With a daily placement capacity exceeding 30 million points, we can meet medium- to high-volume production demands while maintaining consistent quality and stable efficiency. Beyond PCB assembly, we provide system-level complete machine assembly and Box Build integration services, covering conformal coating, in-circuit testing (ICT), functional testing, and automated assembly. Supported by a robust quality management system, finished products undergo customized functional verification, reliability testing, and burn-in testing prior to shipment, ensuring reliable operation in industrial control, medical devices, intelligent robotics, and other applications.",
      },
      "section.customet.subtitle":{
        "zh-Hans": "百千成电子致力于为全球客户提供高品质的储能BMS系统和OEM制造服务，依托核心技术与严苛品质标准，以前沿研发实力引领行业高质量发展",
        "en": "BQC is committed to providing high-quality energy storage BMS systems and OEM manufacturing services to customers worldwide. Leveraging core technologies, rigorous quality standards, and cutting-edge R&D capabilities, we help drive high-quality development across the industry.",
      },
      "oem.title": {
        "zh-Hans": "OEM制造服务",
        "en": "OEM Manufacturing Service",
      },
      "odm.title": {
        "zh-Hans": "ODM研发服务（BMS）",
        "en": "ODM R&D Service (BMS)",
      },
      "oem.step1.title": {
        "zh-Hans": "PCBA加工设计",
        "en": "PCBA Design & Processing",
      },
      "oem.step1.desc": {
        "zh-Hans": "电路设计与PCBA加工布局",
        "en": "Circuit design & PCBA layout optimization",
      },
      "oem.step2.title": {
        "zh-Hans": "SMT贴片厂工艺",
        "en": "Precision SMT Assembly Process",
      },
      "oem.step2.desc": {
        "zh-Hans": "SMT高精度表面贴装",
        "en": "High-precision SMT component mounting",
      },
      "oem.step3.title": {
        "zh-Hans": "整机组装",
        "en": "Box Build & Complete Product Assembly",
      },
      "oem.step3.desc": {
        "zh-Hans": "SMT加工自动化组装生产",
        "en": "Automated assembly after SMT processing",
      },
      "oem.step4.title": {
        "zh-Hans": "测试包装",
        "en": "Full Testing & Packaging",
      },
      "oem.step4.desc": {
        "zh-Hans": "全面测试与包装",
        "en": "Comprehensive product testing and final packaging",
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
        "en": "Demand Analysis",
      },
      "odm.step1.desc": {
        "zh-Hans": "深刻理解客户需求",//深刻理解客户需求
        "en": "In-depth understanding of customer requirements",
      },
      "odm.step2.title":{
        "zh-Hans":"技术预研",
        "en":"Preliminary Technical Research"
      },
      "odm.step2.desc":{
        "zh-Hans":"关键技术研究，技术可行性分验证",//关键技术研究，技术可行性分验证
        "en":"Research on key technologies and verification of technical feasibility"
      },
      "odm.step3.title": {
        "zh-Hans": "方案设计",
        "en": "Solution Design",
      },
      "odm.step3.desc": {
        "zh-Hans": "PCBA核心器件选型和产品规格制定",//核心器件选型和产品规格制定
        "en": "Selection of core PCBA components and definition of product specifications",
      },
      "odm.step4.title": {
        "zh-Hans": "研发开发",
        "en": "R&D Development",
      },
      "odm.step4.desc": {
        "zh-Hans": "硬件软件结构设计",//硬件软件结构设计
        "en": "Hardware, software, and mechanical design",
      },
      "odm.step5.title": {
        "zh-Hans": "样机测试",
        "en": "Prototype Testing",
      },
      "odm.step5.desc": {
        "zh-Hans": "功能及性能测试",
        "en": "Functional and performance testing",
      },
      "odm.step6.title": {
        "zh-Hans": "产品认证",
        "en": "Product Certification",
      },
      "odm.step6.desc": {
        "zh-Hans": "UL、CE等认证支持",
        "en": "Support for UL, CE, and other certifications",
      },
      "odm.step7.title": {
        "zh-Hans": "量产支持",
        "en": "Mass Production Support",
      },
      "odm.step7.desc": {
        "zh-Hans": "PCBA物料采购 SMT贴片插件后焊测试喷涂组装",//物料采购 贴片插件后焊测试喷涂组装
        "en": "PCBA material procurement, SMT assembly, through-hole soldering, post-assembly testing, conformal coating, and final assembly",
      },
      "odm.adv.title": {
        "zh-Hans": "ODM研发优势",
        "en": "ODM R&D Advantages",
      },
      "odm.adv1.title": {
        "zh-Hans": "研发资金投入",
        "en": "R&D Investment",
      },
      "odm.adv1.desc": {
        "zh-Hans": "百千成电子持续加大研发团队建设、工程技术能力提升与关键制造设备升级投入，每年将营业收入的 5% 用于研发及技术创新相关领域。",
        "en": "BQC Electronics keeps scaling up investment in R&D team development, improvement of engineering and technical capabilities as well as upgrading of core manufacturing equipment. The company allocates 5% of its annual operating revenue to R&D and technological innovation initiatives.",
      },
      "odm.adv2.title": {
        "zh-Hans": "研发人员占比",
        "en": "Proportion of R&D Staff",
      },
      "odm.adv2.desc": {
        "zh-Hans": "百千成电子拥有覆盖硬件、软件、结构与测试验证的研发团队，研发人员占公司总人数的 30%。在ODM研发项目中，团队可围绕客户产品需求，提供方案设计、元器件选型、BOM优化、样机验证及DFM评估等支持，并结合PCBA加工和SMT贴片加工经验，使产品设计在研发阶段就更贴近后续制造与交付要求。",
        "en": "BQC Electronics has an R&D team covering hardware, software, mechanical structure as well as test & verification disciplines, with R&D personnel accounting for 30% of the company’s total workforce. For ODM development projects, the team delivers full-spectrum technical support per customer specifications, including schematic design, component selection, BOM optimization, prototype verification and DFM assessment. Leveraging in-house expertise in PCBA and SMT assembly, the team optimizes product design at the R&D phase to align with downstream production and delivery requirements.",
      },
      "odm.adv3.title": {
        "zh-Hans": "核心专利技术",
        "en": "Core Patented Technologies",
      },
      "odm.adv3.desc": {
        "zh-Hans": "百千成电子拥有 60 余项技术专利，技术积累覆盖硬件设计、嵌入式开发、测试验证及制造工艺等方向。这些研发与工程经验可应用于产品功能实现、结构优化、测试方案规划和量产风险预判，并在后续SMT贴片、PCBA加工及质量管控过程中形成有效支撑，帮助客户提升产品可靠性与批量生产一致性。",
        "en": "BQC Electronics holds more than 60 technical patents, with accumulated know-how spanning hardware design, embedded development, test verification and manufacturing processes. Such R&D and engineering expertise facilitates product function realization, structural optimization, test scheme formulation and mass-production risk assessment. It also provides robust technical backup throughout subsequent SMT mounting, PCBA fabrication and quality control procedures, helping customers enhance product reliability and consistency in volume production.",
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
        ? "We provide professional circuit design and PCB layout services ranging from schematic capture to PCB routing to guarantee product performance and reliability."
        : "提供专业的电路设计与PCB布局服务，从原理图设计到PCB布局，确保产品性能与可靠性",
      icon: <Layers className="h-16 w-16 text-blue-600" />,   //pcb图标
      features: locale === "en"
        ? ["Multi-layer PCB design & layout", "High-speed signal integrity analysis", "Power integrity analysis", "EMC/EMI optimization design", "Thermal analysis & thermal dissipation design"]
        : ["多层PCB设计与布局", "高速信号完整性分析", "电源完整性分析", "EMC/EMI设计优化", "热分析与散热设计"],
    },
    {
      id: 2,
      title: locale === "en" ? "SMT Assembly Production" : "SMT贴片生产",
      description: locale === "en"
        ? "We deploy advanced automated SMT production lines to deliver high-precision & high-efficiency surface mount services for diversified electronic product manufacturing requirements."
        : "采用先进的SMT生产线，提供高精度、高效率的表面贴装技术服务，满足各类电子产品的生产需求",
      icon: <Cpu className="h-16 w-16 text-blue-600" />,   // SMT
      features: locale === "en"
        ? ["High-precision SMT component placement", "Complex package processing for BGA / CSP / QFN", "Lead-free Process Support", "3D SPI solder paste inspection", "AOI automated optical inspection"]
        : ["高精度SMT贴片", "BGA/CSP/QFN等复杂封装处理", "无铅工艺支持", "3D SPI锡膏检测", "AOI自动光学检测"],
    },
    {
      id: 3,
      title: locale === "en" ? "Complete Assembly & Testing" : "整机组装测试",
      description: locale === "en"
        ? "We offer full-process assembly services from finished PCBA to end-product, covering functional testing, burn-in testing and packaging to secure consistent product quality."
        : "提供从PCBA到整机的全流程组装服务，包括功能测试、老化测试、包装等环节，确保产品质量",
      icon: <Package className="h-16 w-16 text-blue-600" />,   // 组装
      features: locale === "en"
        ? ["Automated assembly production lines", "Functional test & burn-in reliability test", "ESD-controlled workshop environment", "Full product traceability management system", "Custom packaging & logistic support"]
        : ["自动化组装生产线", "功能测试与老化测试", "防静电工作环境", "可追溯性管理系统", "包装与物流服务"],
    },
    {
      id: 4,
      title: locale === "en" ? "Quality Control System" : "质量控制体系",
      description: locale === "en"
        ? "We implement rigorous full-process quality control covering incoming raw materials through finished goods delivery to ensure products comply with international standards."
        : "严格的质量控制体系，从原材料进厂到成品出货的全流程质量管控，确保产品符合国际标准",
      icon: <ShieldCheck className="h-16 w-16 text-blue-600" />,   //质量
      features: locale === "en"
        ? ["ISO9001 certified quality management system", "Production processes compliant with IPC specifications", "Incoming quality inspection & supplier management", "In-process quality control", "Finished product inspection & reliability verification"]
        : ["ISO9001质量管理体系", "IPC标准生产工艺", "来料检验与供应商管理", "过程质量控制", "成品检验与可靠性测试"],
    },
  ]
  

  // ODM服务数据
  const odmServices = [
    {
      id: 1,
      title: locale === "en" ? "Demand Analysis & Solution Design" : "需求分析与方案设计",
      description: locale === "en"
        ? "BQC Electronics gets involved in customer demand analysis and solution design at the initial stage of ODM projects. In combination with product application scenarios, performance specifications, cost targets and mass production roadmap, we assist customers in core component selection, product specification definition, hardware architecture design and software function planning. Meanwhile, DFM manufacturability, SMT process compatibility, test verification plan and PCBA processing stability are included in upfront design evaluation. This ensures the finalized solution complies with technical and market requirements while securing excellent manufacturability for mass production."
        : "百千成电子在ODM项目初期即参与客户需求分析与方案设计，结合产品应用场景、性能要求、成本目标及量产规划，协助客户完成核心元器件选型、产品规格制定、硬件架构设计和软件功能规划。同时，我们会将DFM可制造性、SMT贴片工艺适配性、测试验证方案及PCBA加工稳定性纳入前期设计评估，确保产品方案既满足技术和市场需求，也具备良好的量产可行性。",
      icon: <Lightbulb className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Requirement analysis", "Technical feasibility evaluation", "Core component selection", "Product specification definition", "Integrated solution design"]
        : ["需求分析", "技术可行性评估", "核心器件选型", "产品规格制定", "整体方案设计"],
    },
    {
      id: 2,
      title: locale === "en" ? "Hardware System Development" : "硬件系统开发",
      description: locale === "en"
        ? "BQC Electronics is staffed with a professional hardware development team capable of developing customized PCBA products in accordance with customer requirements."
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
        ? "BQC Electronics delivers embedded software development services covering bottom-level drivers, middleware architecture and application-layer functions. We assist customers with hardware joint debugging, communication control, function implementation and system stability optimization."
        : "百千成电子提供覆盖底层驱动、中间层架构和应用层功能的嵌入式软件开发支持，可协助客户完成硬件联调、通信控制、功能实现和系统稳定性优化。",
      icon: <CodeXml className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["System architecture design", "Driver development & hardware adaptation", "Middleware & protocol stack development", "Application & algorithm implementation", "Tool & cloud software development","System debugging & validation","Product certification & compliance support","Production integration & maintenance support"]
        : ["方案与架构设计", "驱动开发与硬件适配", "中间件与协议栈开发", "应用于算法实现", "工具与云端软件开发","整机调试与验证","产品认证与合规支持","生产导入与维护支持"],
    },
    {
      id: 4,
      title: locale === "en" ? "Mechanical Design" : "结构设计",
      description: locale === "en"
        ? "BQC Electronics provides mechanical design, 3D modeling and assembly validation services for ODM projects to help customers optimize product layout, thermal design and production assembly solutions."
        : "百千成电子可为ODM项目提供结构设计、3D建模及装配验证支持，帮助客户优化产品空间布局、散热设计和生产装配方案。",
      icon: <Box className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Product structure planning & appearance review", "Mechanical design & optimization", "3D modeling & assembly validation", "Mold & manufacturing feasibility assessment", "Prototype fabrication & structural verification"]
        : ["产品结构规划与外观评审", "机械结构设计与优化", "3D建模与装配验证", "模具与制造可行性评估", "样机制作与结构验证"],
    },
    {
      id: 5,
      title: locale === "en" ? "Prototype Fabrication & Test Verification" : "样机制作与测试验证",
      description: locale === "en"
        ? "BQC Electronics provides rapid prototyping and systematic test verification services to support customers in prototype production, functional testing, DFM analysis and design optimization. Backed by rich experience in PCBA fabrication, SMT assembly and testing validation, we promptly identify design and manufacturing risks at the early product development phase, improve prototype verification efficiency and lay a solid foundation for stable mass production afterward."
        : "百千成电子提供快速原型制作与系统化测试验证服务，支持客户完成样机制造、功能测试、DFM分析和设计优化。依托PCBA加工、SMT贴片加工及测试验证经验，我们可在产品早期阶段快速识别设计与制造风险，帮助客户提升样机验证效率，并为后续稳定量产打好基础。",
      icon: <Settings className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Rapid prototyping", "Functional & performance testing", "Environmental & reliability testing", "Aging & lifespan testing", "EMC/EMI testing & optimization"]
        : ["快速原型制作", "功能与性能测试", "环境与可靠性测试", "老化与寿命测试", "EMC/EMI测试与整改优化"],
    },
    {
      id: 5,
      title: locale === "en" ? "Product Certification & Mass Production Support" : "产品认证与量产支持",
      description: locale === "en"
        ? "BQC Electronics assists customers in product certification implementation. Drawing on our extensive experience in PCBA fabrication, SMT assembly and test verification, we offer full-lifecycle mass-production support including material preparation, process evaluation, manufacturing and quality control. This enables efficient, stable and compliant product rollout from certification to bulk delivery."
        : "百千成电子可协助客户完成产品认证导入，并结合PCBA加工、SMT贴片加工及测试验证经验，为后续量产提供物料准备、工艺评估、生产制造和质量管控支持，确保产品从认证到批量交付过程更加高效、稳定、合规。",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t("section.title")}</h2>
          <p className="text-gray-500 text-center max-w-3xl mx-auto ">
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
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">{t("oem.clients.title")}</h3>
              <p className="text-gray-500 text-center max-w-3xl mx-auto mb-10">
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
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">{t("odm.adv.title")}</h3>
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
