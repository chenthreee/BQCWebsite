"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "通讯基站储能BMS", en: "Communication Base Station BMS" },
  subtitle: { zh: "为通讯基站提供可靠的备电系统解决方案", en: "Reliable Backup Power Solution for Communication Base Stations" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_bms: { zh: "储能BMS", en: "Energy Storage BMS" },
  breadcrumb_comm: { zh: "通讯基站储能BMS", en: "Communication Base Station BMS" },
  overview: { zh: "通讯基站储能BMS系统概述", en: "Overview of Communication Base Station BMS System" },
  overview_p1: { zh: "百千成电子的通讯基站储能BMS系统是专为通讯基站备电系统设计的高可靠性电池管理系统，适用于4G/5G基站、微波站、卫星地面站等通讯设施。", en: "BAIQIANCHENG's BMS is designed for backup power in 4G/5G base stations, microwave stations, satellite ground stations, etc." },
  overview_p2: { zh: "我们的通讯基站BMS系统具备远程监控、故障预警和智能维护功能，能够确保通讯系统在市电中断时持续稳定运行，提高通讯网络的可靠性。", en: "Our BMS features remote monitoring, fault warning, and smart maintenance, ensuring stable operation during power outages and improving network reliability." },
  overview_p3: { zh: "百千成电子已为全球众多通讯运营商提供了可靠的基站备电BMS解决方案，累计装机量超过10GWh。", en: "BAIQIANCHENG has provided reliable BMS solutions for many telecom operators worldwide, with over 10GWh installed." },
  features: { zh: "系统特点", en: "System Features" },
  reliable: { zh: "高可靠性", en: "High Reliability" },
  reliable_desc: { zh: "采用冗余设计和故障诊断技术，MTBF超过20万小时，确保通讯系统持续稳定运行。", en: "Redundant design and fault diagnosis, MTBF over 200,000 hours, ensures stable operation." },
  remote: { zh: "远程监控", en: "Remote Monitoring" },
  remote_desc: { zh: "支持4G/5G、NB-IoT等多种通信方式，实现电池系统的远程监控和管理。", en: "Supports 4G/5G, NB-IoT, etc., for remote monitoring and management." },
  smart: { zh: "智能维护", en: "Smart Maintenance" },
  smart_desc: { zh: "具备故障预警和自诊断功能，支持预测性维护，降低维护成本。", en: "Fault warning, self-diagnosis, predictive maintenance, reduces costs." },
  wide_temp: { zh: "宽温域适应", en: "Wide Temperature Adaptation" },
  wide_temp_desc: { zh: "工作温度范围-40℃~+85℃，适应各种恶劣气候环境。", en: "Operating range -40℃~+85℃, suitable for harsh climates." },
  series: { zh: "产品系列", en: "Product Series" },
  cases: { zh: "应用案例", en: "Application Cases" },
  case_5g: { zh: "5G基站备电案例", en: "5G Base Station Backup Case" },
  case_5g_desc: { zh: "为某通讯运营商提供的5G基站备电系统BMS解决方案，实现基站8小时以上的备电能力，确保通讯网络的高可靠性。", en: "Provided a 5G base station backup BMS solution for a telecom operator, enabling 8+ hours backup, ensuring high reliability." },
  case_data: { zh: "数据中心备电案例", en: "Data Center Backup Case" },
  case_data_desc: { zh: "为某大型数据中心提供的备电系统BMS解决方案，实现数据中心关键设备的不间断电源供应，确保数据安全和业务连续性。", en: "Provided a backup BMS solution for a large data center, ensuring uninterrupted power for critical equipment, data safety, and business continuity." },
  details: { zh: "查看详情", en: "View Details" },
}

const products = [
  {
    id: "bms-t48",
    model: { zh: "BMS-T48", en: "BMS-T48" },
    image: "/placeholder.svg?height=600&width=800",
    desc: { zh: "48V通讯基站备电系统，适用于小型基站和微波站，支持16串磷酸铁锂电池组管理。", en: "48V backup system for small base stations and microwave stations, supports 16-series LiFePO4 battery management." },
  },
  // 其余产品同理...
]

export default function CommunicationBaseBmsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  const localizedProducts = products.map((p) => ({
    ...p,
    model: p.model[locale],
    desc: p.desc[locale],
  }))
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products` },
        { label: t("breadcrumb_bms"), href: `/${locale}/products/energy-storage-bms` },
        { label: t("breadcrumb_comm"), href: `/${locale}/products/energy-storage-bms/communication-base` },
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
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt={t("title")}
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("features")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("reliable")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("reliable")}</h4>
              <p className="text-gray-700">{t("reliable_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("remote")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("remote")}</h4>
              <p className="text-gray-700">{t("remote_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("smart")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("smart")}</h4>
              <p className="text-gray-700">{t("smart_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("wide_temp")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("wide_temp")}</h4>
              <p className="text-gray-700">{t("wide_temp_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("series")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localizedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.model}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.model}</h3>
                <p className="text-gray-700 mb-4">{product.desc}</p>
                <Link
                  href={`/${locale}/products/energy-storage-bms/communication-base/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                >
                  {t("details")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("cases")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("case_5g")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_5g")}</h3>
            <p className="text-gray-700 mb-4">{t("case_5g_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/communication-base/case-5g`}
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
            >
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("case_data")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_data")}</h3>
            <p className="text-gray-700 mb-4">{t("case_data_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/communication-base/case-data-center`}
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
            >
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 