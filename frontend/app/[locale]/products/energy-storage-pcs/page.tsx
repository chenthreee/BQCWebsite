"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "储能PCS", en: "Energy Storage PCS" },
  subtitle: { zh: "高性能的储能变流器系统", en: "High-performance Energy Storage Converter System" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_pcs: { zh: "储能PCS", en: "Energy Storage PCS" },
  what_is_pcs: { zh: "什么是PCS系统？", en: "What is a PCS System?" },
  what_is_pcs_p1: { zh: "PCS（Power Conversion System）储能变流器系统是储能系统的核心设备，负责实现直流与交流电能的双向转换，是连接电池系统与电网的桥梁。", en: "PCS (Power Conversion System) is the core device of energy storage systems, responsible for bidirectional DC-AC conversion, bridging batteries and the grid." },
  what_is_pcs_p2: { zh: "一个高性能的PCS系统具有高效率、高可靠性、低谐波、快速响应等特点，能够满足各类储能应用场景的需求。", en: "A high-performance PCS features high efficiency, reliability, low harmonics, and fast response, meeting various energy storage application needs." },
  what_is_pcs_p3: { zh: "百千成电子的储能PCS系统采用先进的电力电子技术和控制算法，为客户提供高效、可靠、智能的电能转换解决方案。", en: "BAIQIANCHENG's PCS uses advanced power electronics and control algorithms to provide efficient, reliable, and intelligent power conversion solutions." },
  core_functions: { zh: "PCS系统核心功能", en: "Core Functions of PCS System" },
  bidirectional: { zh: "双向变换", en: "Bidirectional Conversion" },
  bidirectional_desc: { zh: "实现直流与交流电能的双向转换，支持电池充电和放电过程。", en: "Bidirectional DC-AC conversion, supporting battery charging and discharging." },
  grid_support: { zh: "电网支撑", en: "Grid Support" },
  grid_support_desc: { zh: "提供电网调频、调压、无功补偿等辅助服务，支持电网稳定运行。", en: "Provides grid frequency/voltage regulation, reactive power compensation, supporting grid stability." },
  island: { zh: "孤岛运行", en: "Island Operation" },
  island_desc: { zh: "支持离网运行模式，在电网故障时为重要负载提供不间断电源。", en: "Supports off-grid mode, providing uninterrupted power during grid faults." },
  protect: { zh: "保护功能", en: "Protection" },
  protect_desc: { zh: "提供过压、欠压、过流、过温等多重保护功能，确保系统安全运行。", en: "Provides overvoltage, undervoltage, overcurrent, overtemperature protection for safe operation." },
  series: { zh: "产品系列", en: "Product Series" },
  commercial: { zh: "工商业储能PCS", en: "Commercial & Industrial PCS" },
  commercial_desc: { zh: "功率范围30kW-500kW，适用于工商业储能系统，具有高效率、高可靠性、低谐波等特点。", en: "30kW-500kW, for commercial/industrial storage, high efficiency, reliability, low harmonics." },
  power: { zh: "电力储能PCS", en: "Power Storage PCS" },
  power_desc: { zh: "功率范围500kW-5MW，适用于电力储能系统，具有模块化设计、高功率密度、快速响应等特点。", en: "500kW-5MW, for power storage, modular design, high density, fast response." },
  home: { zh: "家用储能PCS", en: "Home Storage PCS" },
  home_desc: { zh: "功率范围3kW-20kW，适用于家庭储能系统，具有体积小、噪音低、易安装等特点。", en: "3kW-20kW, for home storage, compact, low noise, easy installation." },
  microgrid: { zh: "微电网PCS", en: "Microgrid PCS" },
  microgrid_desc: { zh: "功率范围50kW-1MW，适用于微电网系统，具有并离网无缝切换、多机并联、黑启动等特点。", en: "50kW-1MW, for microgrids, seamless grid/off-grid, parallel, black start." },
  details: { zh: "查看详情", en: "View Details" },
  tech_adv: { zh: "技术优势", en: "Technical Advantages" },
  adv_efficiency: { zh: "高效率", en: "High Efficiency" },
  adv_efficiency_desc: { zh: "采用先进的电力电子拓扑结构和控制算法，转换效率高达98.5%，大幅降低能量损耗。", en: "Advanced topology and control, up to 98.5% efficiency, greatly reducing losses." },
  adv_reliable: { zh: "高可靠性", en: "High Reliability" },
  adv_reliable_desc: { zh: "采用冗余设计和高可靠性元器件，MTBF超过10万小时，确保系统长期稳定运行。", en: "Redundant design, high-reliability components, MTBF over 100,000 hours for long-term stability." },
  adv_smart: { zh: "智能控制", en: "Smart Control" },
  adv_smart_desc: { zh: "采用先进的数字控制技术，实现快速响应和精准控制，支持多种运行模式和控制策略。", en: "Advanced digital control for fast, precise operation, supporting multiple modes and strategies." },
}

export default function EnergyStoragePcsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products` },
        { label: t("breadcrumb_pcs"), href: `/${locale}/products/energy-storage-pcs` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("what_is_pcs")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("what_is_pcs_p1")}</p>
            <p className="text-lg text-gray-700 mb-4">{t("what_is_pcs_p2")}</p>
            <p className="text-lg text-gray-700">{t("what_is_pcs_p3")}</p>
          </div>
          <div>
            <Image src="/placeholder.svg?height=600&width=800" alt="PCS系统示意图" width={800} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("core_functions")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("bidirectional")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("bidirectional")}</h4>
              <p className="text-gray-700">{t("bidirectional_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("grid_support")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("grid_support")}</h4>
              <p className="text-gray-700">{t("grid_support_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("island")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("island")}</h4>
              <p className="text-gray-700">{t("island_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("protect")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("protect")}</h4>
              <p className="text-gray-700">{t("protect_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("series")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("commercial")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("commercial")}</h3>
              <p className="text-gray-700 mb-4">{t("commercial_desc")}</p>
              <Link href={`/${locale}/products/energy-storage-pcs/commercial`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("power")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("power")}</h3>
              <p className="text-gray-700 mb-4">{t("power_desc")}</p>
              <Link href={`/${locale}/products/energy-storage-pcs/power`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("home")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("home")}</h3>
              <p className="text-gray-700 mb-4">{t("home_desc")}</p>
              <Link href={`/${locale}/products/energy-storage-pcs/home`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("microgrid")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("microgrid")}</h3>
              <p className="text-gray-700 mb-4">{t("microgrid_desc")}</p>
              <Link href={`/${locale}/products/energy-storage-pcs/microgrid`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("tech_adv")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt={t("adv_efficiency")} width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{t("adv_efficiency")}</h3>
            <p className="text-gray-700">{t("adv_efficiency_desc")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt={t("adv_reliable")} width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{t("adv_reliable")}</h3>
            <p className="text-gray-700">{t("adv_reliable_desc")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt={t("adv_smart")} width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{t("adv_smart")}</h3>
            <p className="text-gray-700">{t("adv_smart_desc")}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 