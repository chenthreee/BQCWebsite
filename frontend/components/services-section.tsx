"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Lightbulb, Code, Cpu, Settings, FileCheck} from "lucide-react"
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
        "zh-Hans": "百千成电子提供专业的OEM代工服务和ODM研发服务，满足客户从产品设计到量产的全流程需求",
        "en": "BAIQIANCHENG Electronics provides professional OEM manufacturing services and ODM development services to meet customers' full-process needs from product design to mass production",
      },
      "oem.title": {
        "zh-Hans": "OEM代工服务",
        "en": "OEM Manufacturing Services",
      },
      "odm.title": {
        "zh-Hans": "ODM研发服务（BMS）",
        "en": "ODM Development Services (BMS)",
      },
      "oem.step1.title": {
        "zh-Hans": "PCB设计",
        "en": "PCB Design",
      },
      "oem.step1.desc": {
        "zh-Hans": "电路设计与PCB布局",
        "en": "Circuit Design & PCB Layout",
      },
      "oem.step2.title": {
        "zh-Hans": "SMT贴片",
        "en": "SMT Assembly",
      },
      "oem.step2.desc": {
        "zh-Hans": "高精度表面贴装",
        "en": "High-precision Surface Mount",
      },
      "oem.step3.title": {
        "zh-Hans": "整机组装",
        "en": "Complete Assembly",
      },
      "oem.step3.desc": {
        "zh-Hans": "自动化组装生产",
        "en": "Automated Assembly Production",
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
        "zh-Hans": "了解更多OEM代工服务",
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
        "zh-Hans": "深入理解需求",
        "en": "In-depth Requirement Understanding",
      },
      "odm.step2.title": {
        "zh-Hans": "方案设计",
        "en": "Solution Design",
      },
      "odm.step2.desc": {
        "zh-Hans": "技术方案设计",
        "en": "Technical Solution Design",
      },
      "odm.step3.title": {
        "zh-Hans": "研发开发",
        "en": "Development",
      },
      "odm.step3.desc": {
        "zh-Hans": "硬件软件开发",
        "en": "Hardware & Software Development",
      },
      "odm.step4.title": {
        "zh-Hans": "样机测试",
        "en": "Prototype Testing",
      },
      "odm.step4.desc": {
        "zh-Hans": "样机制作测试",
        "en": "Prototype Production & Testing",
      },
      "odm.step5.title": {
        "zh-Hans": "量产支持",
        "en": "Mass Production Support",
      },
      "odm.step5.desc": {
        "zh-Hans": "认证与量产",
        "en": "Certification & Mass Production",
      },
      "odm.adv.title": {
        "zh-Hans": "ODM研发优势",
        "en": "ODM Advantages",
      },
      "odm.adv1.title": {
        "zh-Hans": "多年研发经验",
        "en": "Years of R&D Experience",
      },
      "odm.adv1.desc": {
        "zh-Hans": "拥有15年以上电子产品研发经验，深入了解各类应用场景的技术需求",
        "en": "Over 15 years of experience in electronic product R&D, deeply understanding technical requirements of various application scenarios",
      },
      "odm.adv2.title": {
        "zh-Hans": "核心技术专利",
        "en": "Core Technology Patents",
      },
      "odm.adv2.desc": {
        "zh-Hans": "拥有60项以上核心技术专利，在硬件设计、嵌入式开发等领域具有深厚的技术积累",
        "en": "Over 60 core technology patents, with deep technical accumulation in hardware design and embedded development",
      },
      "odm.adv3.title": {
        "zh-Hans": "高比例研发人员",
        "en": "High Proportion of R&D Staff",
      },
      "odm.adv3.desc": {
        "zh-Hans": "研发人员占比30%，拥有丰富的硬件设计、嵌入式开发和系统设计经验",
        "en": "R&D staff account for 30%, with rich experience in hardware design, embedded development and system design",
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
      icon: "/placeholder.svg?height=80&width=80",
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
      icon: "/placeholder.svg?height=80&width=80",
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
      icon: "/placeholder.svg?height=80&width=80",
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
      icon: "/placeholder.svg?height=80&width=80",
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
        ? "Deep understanding of customer requirements, providing professional technical consultation and solution design to ensure product design meets market demands and technical requirements"
        : "深入理解客户需求，提供专业的技术咨询和解决方案设计，确保产品设计满足市场需求与技术要求",
      icon: <Lightbulb className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Requirement Research & Analysis", "Technical Feasibility Assessment", "Overall Solution Design", "Cost Optimization Suggestions", "Project Planning & Milestone Setting"]
        : ["需求调研与分析", "技术可行性评估", "整体方案设计", "成本优化建议", "项目规划与里程碑制定"],
    },
    {
      id: 2,
      title: locale === "en" ? "Hardware System Development" : "硬件系统开发",
      description: locale === "en"
        ? "Professional hardware system development team that can develop various customized hardware systems according to customer requirements, including circuit design and PCB layout"
        : "专业的硬件系统开发团队，可根据客户需求开发各类定制化硬件系统，包括电路设计和PCB布局",
      icon: <Cpu className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Circuit Schematic Design", "PCB Layout Design", "Hardware Testing & Verification", "Component Selection Optimization", "DFM Design Optimization"]
        : ["电路原理图设计", "PCB布局设计", "硬件测试与验证", "元器件选型优化", "DFM设计优化"],
    },
    {
      id: 3,
      title: locale === "en" ? "Embedded Software Development" : "嵌入式软件开发",
      description: locale === "en"
        ? "Provide high-quality embedded software development services, covering underlying drivers, middleware architecture and application layer development to ensure software performance and stability"
        : "提供高质量的嵌入式软件开发服务，涵盖底层驱动、中间层架构和应用层开发，确保软件性能和稳定性",
      icon: <Code className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Real-time Operating System (RTOS) Application Development", "Underlying Driver Development", "Communication Protocol Stack Implementation", "Algorithm Optimization & Porting", "Software Architecture Design"]
        : ["实时操作系统(RTOS)应用开发", "底层驱动开发", "通信协议栈实现", "算法优化与移植", "软件架构设计"],
    },
    {
      id: 4,
      title: locale === "en" ? "Prototype Production & Testing Verification" : "样机制作与测试验证",
      description: locale === "en"
        ? "Rapid prototype production and comprehensive testing verification services to help customers shorten product development cycles and identify and solve potential problems early"
        : "快速样机制作与全面的测试验证服务，帮助客户缩短产品开发周期，提前发现并解决潜在问题",
      icon: <Settings className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["Rapid Prototype Production", "Functional Testing & Verification", "Environmental Adaptability Testing", "Reliability & Life Testing", "EMC/EMI Testing Support"]
        : ["快速原型制作", "功能测试与验证", "环境适应性测试", "可靠性与寿命测试", "EMC/EMI测试支持"],
    },
    {
      id: 5,
      title: locale === "en" ? "Product Certification & Mass Production Support" : "产品认证与量产支持",
      description: locale === "en"
        ? "Assist customers in completing product certification and provide comprehensive technical support during mass production to ensure products smoothly enter the market"
        : "协助客户完成产品认证并提供量产阶段的全方位技术支持，确保产品顺利进入市场",
      icon: <FileCheck className="h-16 w-16 text-blue-600" />,
      features: locale === "en"
        ? ["CE/UL/FCC Certification Support", "Production Process Optimization", "Mass Production Testing Solution Design", "Product Iteration & Upgrade Support", "Technical Documentation Writing"]
        : ["CE/UL/FCC等认证支持", "生产工艺优化", "量产测试方案设计", "产品迭代升级支持", "技术文档编写"],
    },
  ]

  // 获取当前活动的服务数据
  const currentServices = activeService === "oem" ? oemServices : odmServices

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("section.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
              <div className="flex flex-col md:flex-row justify-between relative z-10">
                {[1, 2, 3, 4].map((step, index) => (
                  <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                      {step}
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-2">
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
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-blue-50 rounded-lg p-6 flex justify-center items-center">
                          <Image
                            src={service.icon || "/placeholder.svg"}
                            alt={service.title}
                            width={80}
                            height={80}
                            className="w-24 h-24 object-contain"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
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
                  <Link href={`/${locale}/services/oem.html`}>
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
          </>
        )}

        {/* ODM服务内容 */}
        {activeService === "odm" && (
          <>
            {/* 服务流程图 */}
            <div className="relative mb-20">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
              <div className="flex flex-col md:flex-row justify-between relative z-10">
                {[1, 2, 3, 4, 5].map((step, index) => (
                  <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                      {step}
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-2">
                        {index === 0 && t("odm.step1.title")}
                        {index === 1 && t("odm.step2.title")}
                        {index === 2 && t("odm.step3.title")}
                        {index === 3 && t("odm.step4.title")}
                        {index === 4 && t("odm.step5.title")}
                      </h3>
                      <p className="text-gray-600 text-sm px-4">
                        {index === 0 && t("odm.step1.desc")}
                        {index === 1 && t("odm.step2.desc")}
                        {index === 2 && t("odm.step3.desc")}
                        {index === 3 && t("odm.step4.desc")}
                        {index === 4 && t("odm.step5.desc")}
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
                    <span className="text-3xl font-bold">15+</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{t("odm.adv1.title")}</h4>
                  <p className="text-gray-600">{t("odm.adv1.desc")}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <span className="text-3xl font-bold">60+</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{t("odm.adv2.title")}</h4>
                  <p className="text-gray-600">
                    {t("odm.adv2.desc")}
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <span className="text-3xl font-bold">30%</span>
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
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-blue-50 rounded-lg p-6 flex justify-center items-center h-full">
                          {service.icon}
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
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
                  <Link href={`/${locale}/services/odm.html`}>
                    {t("odm.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                </div>
              </div>
            </div>

            {/* 案例展示 */}
            <div className="mt-20">
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
            </div>
          </>
        )}
      </div>

      {/* 背景装饰 */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl"></div>
    </section>
  )
}
