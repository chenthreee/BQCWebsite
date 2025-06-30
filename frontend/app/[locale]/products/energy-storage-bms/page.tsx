"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "储能BMS系统", en: "Energy Storage BMS System" },
  subtitle: { zh: "安全可靠的电池管理系统解决方案", en: "Safe and Reliable Battery Management System Solutions" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_bms: { zh: "储能BMS", en: "Energy Storage BMS" },
  what_is_bms: { zh: "什么是BMS系统？", en: "What is a BMS System?" },
  what_is_bms_p1: { zh: "BMS（Battery Management System）电池管理系统是连接电池和用户的重要纽带，主要负责电池的监测、保护、均衡和管理等功能。", en: "BMS (Battery Management System) is a crucial link between batteries and users, mainly responsible for monitoring, protection, balancing, and management of batteries." },
  what_is_bms_p2: { zh: "一个优秀的BMS系统能够准确监测电池状态，保护电池免受过充、过放、过流、过温等伤害，延长电池寿命，提高系统安全性和可靠性。", en: "An excellent BMS can accurately monitor battery status, protect batteries from overcharge, overdischarge, overcurrent, and overheating, extend battery life, and improve system safety and reliability." },
  what_is_bms_p3: { zh: "百千成电子拥有15年以上BMS系统研发经验，为客户提供安全可靠、性能卓越的储能BMS解决方案。", en: "BAIQIANCHENG Electronics has over 15 years of BMS R&D experience, providing customers with safe, reliable, and high-performance energy storage BMS solutions." },
  core_functions: { zh: "BMS系统核心功能", en: "Core Functions of BMS System" },
  monitor: { zh: "监测功能", en: "Monitoring" },
  monitor_desc: { zh: "实时监测电池电压、电流、温度等参数，准确计算SOC、SOH等状态。", en: "Real-time monitoring of battery voltage, current, temperature, and accurate calculation of SOC, SOH, etc." },
  protect: { zh: "保护功能", en: "Protection" },
  protect_desc: { zh: "提供过充、过放、过流、过温等多重保护，确保电池安全运行。", en: "Provides multiple protections such as overcharge, overdischarge, overcurrent, and overheating to ensure safe battery operation." },
  balance: { zh: "均衡功能", en: "Balancing" },
  balance_desc: { zh: "采用主动均衡技术，平衡各单体电池电压，提高电池组一致性和使用寿命。", en: "Uses active balancing technology to equalize cell voltages, improving consistency and lifespan." },
  communication: { zh: "通信功能", en: "Communication" },
  communication_desc: { zh: "支持CAN、RS485等多种通信协议，实现与上位机和其他设备的数据交互。", en: "Supports CAN, RS485, and other protocols for data exchange with host and other devices." },
  series: { zh: "产品系列", en: "Product Series" },
  power_bms: { zh: "电力储能BMS系列", en: "Power Storage BMS Series" },
  power_bms_desc: { zh: "专为大型电力储能系统设计的高可靠性BMS解决方案，支持多串并联电池组管理，具备高精度SOC估算和均衡功能。", en: "High-reliability BMS for large-scale power storage, supporting multi-string battery management, high-precision SOC estimation, and balancing." },
  ship_bms: { zh: "船舶储能BMS系列", en: "Marine Storage BMS Series" },
  ship_bms_desc: { zh: "针对海洋环境特殊要求设计的船舶储能BMS系统，具备高防护等级、抗震动、抗盐雾腐蚀等特性。", en: "Marine BMS designed for harsh environments, featuring high protection, anti-vibration, and anti-corrosion." },
  large_ship: { zh: "大型船舶BMS", en: "Large Ship BMS" },
  small_ship: { zh: "小型船舶BMS", en: "Small Ship BMS" },
  base_bms: { zh: "通信基站BMS系列", en: "Telecom Base Station BMS Series" },
  base_bms_desc: { zh: "为通信基站备电系统设计的高可靠性BMS，具备远程监控、故障预警和智能维护功能。", en: "Reliable BMS for telecom base stations, with remote monitoring, fault warning, and smart maintenance." },
  ems: { zh: "储能EMS（总控）", en: "Energy Storage EMS (Master Control)" },
  ems_desc: { zh: "智能高效的能源管理系统，实现储能系统的智能调度和管理，优化能源使用效率。", en: "Smart and efficient EMS for intelligent scheduling and management of energy storage systems." },
  details: { zh: "查看详情", en: "View Details" },
  tech_adv: { zh: "技术优势", en: "Technical Advantages" },
  adv_algo: { zh: "高精度算法", en: "High-precision Algorithm" },
  adv_algo_desc: { zh: "自主研发的SOC估算算法，精度高达±2%，准确把握电池状态，提高系统可靠性。", en: "Self-developed SOC estimation algorithm with ±2% accuracy, improving reliability." },
  adv_balance: { zh: "主动均衡技术", en: "Active Balancing Technology" },
  adv_balance_desc: { zh: "采用高效能量传输的主动均衡技术，均衡效率高达95%，有效提高电池组一致性和使用寿命。", en: "Efficient active balancing technology with up to 95% efficiency, improving consistency and lifespan." },
  adv_reliable: { zh: "高可靠性设计", en: "High Reliability Design" },
  adv_reliable_desc: { zh: "采用冗余设计和故障诊断技术，MTBF超过10万小时，确保系统长期稳定运行。", en: "Redundant design and fault diagnosis, MTBF over 100,000 hours, ensuring long-term stability." },
}

export default function EnergyStorageBmsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products` },
        { label: t("breadcrumb_bms"), href: `/${locale}/products/energy-storage-bms` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("what_is_bms")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("what_is_bms_p1")}</p>
            <p className="text-lg text-gray-700 mb-4">{t("what_is_bms_p2")}</p>
            <p className="text-lg text-gray-700">{t("what_is_bms_p3")}</p>
          </div>
          <div>
            <Image src="/placeholder.svg?height=600&width=800" alt="BMS系统示意图" width={800} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("core_functions")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("monitor")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("monitor")}</h4>
              <p className="text-gray-700">{t("monitor_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("protect")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("protect")}</h4>
              <p className="text-gray-700">{t("protect_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("balance")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("balance")}</h4>
              <p className="text-gray-700">{t("balance_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("communication")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("communication")}</h4>
              <p className="text-gray-700">{t("communication_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("series")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("power_bms")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("power_bms")}</h3>
              <p className="text-gray-700 mb-4">{t("power_bms_desc")}</p>
              <Link href={`/${locale}/products/energy-storage-bms/power-storage`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("ship_bms")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("ship_bms")}</h3>
              <p className="text-gray-700 mb-4">{t("ship_bms_desc")}</p>
              <div className="flex space-x-4">
                <Link href={`/${locale}/products/energy-storage-bms/large-ship`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                  {t("large_ship")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href={`/${locale}/products/energy-storage-bms/small-ship`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                  {t("small_ship")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("base_bms")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("base_bms")}</h3>
              <p className="text-gray-700 mb-4">{t("base_bms_desc")}</p>
              <Link href={`/${locale}/products/energy-storage-bms/communication-base`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("ems")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("ems")}</h3>
              <p className="text-gray-700 mb-4">{t("ems_desc")}</p>
              <Link href={`/${locale}/products/energy-storage-bms/energy-storage-ems`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
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
              <Image src="/placeholder.svg?height=40&width=40" alt={t("adv_algo")} width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{t("adv_algo")}</h3>
            <p className="text-gray-700">{t("adv_algo_desc")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt={t("adv_balance")} width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{t("adv_balance")}</h3>
            <p className="text-gray-700">{t("adv_balance_desc")}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt={t("adv_reliable")} width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">{t("adv_reliable")}</h3>
            <p className="text-gray-700">{t("adv_reliable_desc")}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 