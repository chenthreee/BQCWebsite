"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"


export default function ManagementSystemPage({params}:{params:{locale:string}}) {
  const locale=params.locale
  const language=locale==="en"?"en":"zh"

  const content = {
    zh: {
      title: "管理系统",
      subtitle: "百千成电子的数字化管理平台",
      breadcrumbs : [
        { label: "关于我们", href:  "/zh-Hans/about" },
        { label: "管理系统", href:  "/zh-Hans/about/management-system.html"},
      ],
      digitalPlatform: {
        title: "数字化管理平台",
        description: "百千成电子建立了完整的数字化管理平台，实现企业管理的信息化、智能化和高效化。",
        systems: [
          {
            title: "ERP系统",
            image:"/images/about/managementSystem/ERP.png",
            description:"ERP系统 是一种集成的、模块化的企业管理软件平台，旨在通过统一的数字化系统，整合企业核心业务流程（如财务、供应链、生产、销售、人力资源等），实现数据的实时共享与流程协同，从而优化资源配置、提升运营效率并支持战略决策。"
          },
          {
            title: "Office Anywhere",
            image:"/images/about/managementSystem/Office.png",
            description:"Office Anyware 是一种基于云计算和虚拟化技术的 智能办公解决方案，旨在实现 “任意设备、任意地点、任意时间” 的无缝办公体验。其核心是通过将办公环境（操作系统、应用软件、数据存储）部署在云端，让用户通过互联网安全接入虚拟工作空间，彻底摆脱物理设备与地理位置的限制。"
          },
          {
            title: "制造执行系统MES平台",
            image:"/images/about/managementSystem/mes.png",
            description:"制造执行系统（MES） 是面向生产车间层级的 实时监控与执行管理平台，通过连接企业计划层（如ERP）与生产设备，实现 生产全流程的数字化管控、过程追溯与动态优化，核心目标是缩短制造周期、提升良品率并降低资源浪费。"
          },
          {
            title: "KPI管理体系",
            image:"/images/about/managementSystem/kpi.png",
            description:"KPI管理体系 是一套基于 关键绩效指标（Key Performance Indicators） 的系统化方法，通过 目标分解→指标设计→过程监控→绩效评估→持续改进 的闭环机制，将组织战略转化为可量化、可执行、可追溯的运营管理工具，驱动团队聚焦核心价值创造并实现战略目标对齐。"
          },
        ]
      },
    },
    en: {
      title: "Management System",
      subtitle: "BQC Electronics Digital Management Platform",
      breadcrumbs : [
        { label: "About us", href: "/en/about"  },
        { label: "Management System", href:"/en/about/management-system.html" },
      ],
      digitalPlatform: {
        title: "Digital Management Platform",
        description: "BQC Electronics has established a comprehensive digital management platform to achieve informatization, intelligence, and efficiency in enterprise management.",
        systems: [
          {
            title: "ERP System",
            image:"/images/about/managementSystem/ERP.png",
            description:"ERP System is an integrated and modular enterprise management software platform, which aims to integrate the core business processes of enterprises (such as finance, supply chain, production, sales, human resources, etc.) through a unified digital system, realize real-time data sharing and process collaboration, so as to optimize resource allocation, improve operational efficiency and support strategic decision-making."
          },
          {
            title: "Office Anywhere",
            image:"/images/about/managementSystem/Office.png",
            description:"Office Anyware is a cloud-based and virtualization-based smart office solution designed to enable a seamless work experience on any device, anywhere, anytime. At its core, the office environment (operating system, application software, data storage) is deployed in the cloud, allowing users to securely access the virtual workspace through the Internet, completely free from the limitations of physical devices and geographical locations."
          },
          {
            title: "MES（Manufacturing Execution System）",
            image:"/images/about/managementSystem/mes.png",
            description:"Manufacturing Execution System (MES) is a real-time monitoring and execution management platform for the production floor level, which realizes digital control, process traceability and dynamic optimization of the whole production process by connecting the enterprise planning layer (such as ERP) and the production equipment, with the core goal of shortening the manufacturing cycle, improving the yield rate and reducing resource waste."
          },
          {
            title: "KPI Management System",
            image:"/images/about/managementSystem/kpi.png",
            description:"KPI management system is a set of systematic methods based on key performance indicators, through the closed-loop mechanism of objective decomposition→ indicator design→ process monitoring→ performance evaluation → continuous improvement, transforming organizational strategy into quantifiable, executable and traceable operation management tools, driving the team to focus on core value creation and achieve strategic goal."
          },
        ]
      },
    }
  }

  const currentContent = language === "en" ? content.en : content.zh

 

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/images/about/managementSystem/managementBreadcrumbs.png"
    >
     
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.digitalPlatform.title}</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          {currentContent.digitalPlatform.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentContent.digitalPlatform.systems.map((system, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Image 
                src={system.image} 
                alt={system.title} 
                width={35} 
                height={35}
              />
            </div>
            <h3 className="text-xl font-bold">{system.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{system.description}</p>
        </div>
      ))}
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center mb-12">
        <Image
          src="/about/management-system-banner.jpg"
          alt="管理系统平台图片"
          width={800}
          height={320}
          className="rounded-lg shadow-lg object-cover mb-6"
        />
        <p className="text-gray-600 text-lg text-center max-w-2xl">
          这里是管理系统平台的整体介绍文案（可自定义）。
        </p>
      </div> */}
    </PageLayout>
  )
} 