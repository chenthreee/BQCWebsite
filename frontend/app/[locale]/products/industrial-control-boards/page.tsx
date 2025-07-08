"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "工业控制板", en: "Industrial Control Boards" },
  subtitle: { zh: "可靠稳定的工业控制板卡", en: "Reliable and Stable Industrial Control Boards" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_icb: { zh: "工业控制板", en: "Industrial Control Boards" },
  overview: { zh: "工业控制板概述", en: "Overview of Industrial Control Boards" },
  overview_p1: { zh: "百千成电子的工业控制板是专为工业自动化、智能装备、物联网等领域设计的高性能、高可靠性控制板卡，是各类智能设备的\"大脑\"。", en: "BAIQIANCHENG's industrial control boards are designed for industrial automation, smart equipment, IoT, serving as the 'brain' of smart devices." },
  overview_p2: { zh: "我们的工业控制板采用先进的嵌入式技术和工业级元器件，具有高性能、高可靠性、高抗干扰性等特点，能够在恶劣的工业环境中稳定运行。", en: "Our boards use advanced embedded tech and industrial-grade components, featuring high performance, reliability, and anti-interference for harsh environments." },
  overview_p3: { zh: "凭借多年的技术积累和行业经验，百千成电子已成为工业控制板领域的领先企业，为众多客户提供了优质的产品和服务。", en: "With years of experience, BAIQIANCHENG is a leader in industrial control boards, serving many clients with quality products and services." },
  features: { zh: "产品特点", en: "Product Features" },
  high_performance: { zh: "高性能", en: "High Performance" },
  high_performance_desc: { zh: "采用高性能处理器和优化的硬件架构，提供强大的计算和控制能力。", en: "High-performance processors and optimized hardware for powerful computing and control." },
  high_reliability: { zh: "高可靠性", en: "High Reliability" },
  high_reliability_desc: { zh: "采用工业级元器件和严格的质量控制，确保在恶劣环境下长期稳定运行。", en: "Industrial-grade components and strict QC for long-term stability in harsh environments." },
  anti_interference: { zh: "高抗干扰性", en: "High Anti-interference" },
  anti_interference_desc: { zh: "采用先进的抗干扰设计和防护措施，确保在电磁干扰环境下稳定工作。", en: "Advanced anti-interference design and protection for stable operation in EMI environments." },
  rich_interfaces: { zh: "丰富接口", en: "Rich Interfaces" },
  rich_interfaces_desc: { zh: "提供丰富的通信接口和I/O接口，支持多种通信协议，易于集成和扩展。", en: "Rich communication and I/O interfaces, supporting various protocols, easy to integrate and expand." },
  series: { zh: "产品系列", en: "Product Series" },
  general: { zh: "通用控制板", en: "General Control Board" },
  general_desc: { zh: "适用于各类工业控制场景的通用控制板，提供强大的计算能力和丰富的接口，支持多种操作系统和开发环境。", en: "General board for various industrial scenarios, powerful computing, rich interfaces, supports multiple OS and environments." },
  motion: { zh: "运动控制板", en: "Motion Control Board" },
  motion_desc: { zh: "专为运动控制应用设计的控制板，支持多轴联动、插补运算、PID控制等功能，适用于数控机床、机器人等领域。", en: "Designed for motion control, supports multi-axis, interpolation, PID, for CNC, robotics, etc." },
  communication: { zh: "通信控制板", en: "Communication Control Board" },
  communication_desc: { zh: "专为工业通信应用设计的控制板，支持多种工业通信协议，如Modbus、Profibus、EtherCAT等，适用于工业网关、数据采集等领域。", en: "For industrial communication, supports Modbus, Profibus, EtherCAT, for gateways, data acquisition, etc." },
  iot: { zh: "物联网控制板", en: "IoT Control Board" },
  iot_desc: { zh: "专为物联网应用设计的控制板，集成多种无线通信模块，如WiFi、蓝牙、4G/5G等，支持云平台连接，适用于智能家居、智能农业等领域。", en: "For IoT, integrates WiFi, Bluetooth, 4G/5G, supports cloud, for smart home, agriculture, etc." },
  details: { zh: "查看详情", en: "View Details" },
  cases: { zh: "应用案例", en: "Application Cases" },
  case_industrial: { zh: "工业自动化案例", en: "Industrial Automation Case" },
  case_industrial_desc: { zh: "为某制造企业提供的生产线控制系统，采用我司通用控制板作为核心控制单元，实现了生产过程的全自动化控制。", en: "Production line control for a manufacturer, using our general board, achieving full automation." },
  case_equipment: { zh: "智能装备案例", en: "Smart Equipment Case" },
  case_equipment_desc: { zh: "为某设备制造商提供的数控机床控制系统，采用我司运动控制板作为核心控制单元，实现了高精度、高效率的加工控制。", en: "CNC control for an equipment manufacturer, using our motion board, achieving high-precision, efficient control." },
  case_iot: { zh: "物联网案例", en: "IoT Case" },
  case_iot_desc: { zh: "为某农业企业提供的智能农业控制系统，采用我司物联网控制板作为核心控制单元，实现了农业生产环境的智能监控和控制。", en: "Smart agriculture control for an agriculture company, using our IoT board, enabling smart monitoring and control." },
}

export default function IndustrialControlBoardsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products.html` },
        { label: t("breadcrumb_icb"), href: `/${locale}/products/industrial-control-boards.html` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("overview")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("overview_p1")}</p>
            <p className="text-lg text-gray-700 mb-4">{t("overview_p2")}</p>
            <p className="text-lg text-gray-700">{t("overview_p3")}</p>
          </div>
          <div>
            <Image src="/placeholder.svg?height=600&width=800" alt={t("title")} width={800} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("features")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("high_performance")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("high_performance")}</h4>
              <p className="text-gray-700">{t("high_performance_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("high_reliability")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("high_reliability")}</h4>
              <p className="text-gray-700">{t("high_reliability_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("anti_interference")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("anti_interference")}</h4>
              <p className="text-gray-700">{t("anti_interference_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("rich_interfaces")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("rich_interfaces")}</h4>
              <p className="text-gray-700">{t("rich_interfaces_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("series")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("general")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("general")}</h3>
              <p className="text-gray-700 mb-4">{t("general_desc")}</p>
              <Link href={`/${locale}/products/industrial-control-boards/general.html`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("motion")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("motion")}</h3>
              <p className="text-gray-700 mb-4">{t("motion_desc")}</p>
              <Link href={`/${locale}/products/industrial-control-boards/motion.html`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("communication")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("communication")}</h3>
              <p className="text-gray-700 mb-4">{t("communication_desc")}</p>
              <Link href={`/${locale}/products/industrial-control-boards/communication.html`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("iot")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("iot")}</h3>
              <p className="text-gray-700 mb-4">{t("iot_desc")}</p>
              <Link href={`/${locale}/products/industrial-control-boards/iot.html`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("cases")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=400&width=600" alt={t("case_industrial")} width={600} height={400} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_industrial")}</h3>
            <p className="text-gray-700 mb-4">{t("case_industrial_desc")}</p>
            <Link href={`/${locale}/products/industrial-control-boards/case-industrial.html`} className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=400&width=600" alt={t("case_equipment")} width={600} height={400} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_equipment")}</h3>
            <p className="text-gray-700 mb-4">{t("case_equipment_desc")}</p>
            <Link href={`/${locale}/products/industrial-control-boards/case-equipment.html`} className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=400&width=600" alt={t("case_iot")} width={600} height={400} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_iot")}</h3>
            <p className="text-gray-700 mb-4">{t("case_iot_desc")}</p>
            <Link href={`/${locale}/products/industrial-control-boards/case-iot.html`} className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 