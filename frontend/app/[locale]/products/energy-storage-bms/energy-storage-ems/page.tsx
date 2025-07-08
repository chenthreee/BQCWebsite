"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "储能EMS系统", en: "Energy Storage EMS System" },
  subtitle: { zh: "智能高效的能源管理系统解决方案", en: "Smart and Efficient Energy Management System Solution" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_bms: { zh: "储能BMS", en: "Energy Storage BMS" },
  breadcrumb_ems: { zh: "储能EMS", en: "Energy Storage EMS" },
  overview: { zh: "储能EMS系统概述", en: "Overview of Energy Storage EMS System" },
  overview_p1: { zh: "储能EMS（Energy Management System）是储能系统的核心控制中枢，负责系统的智能调度、运行优化和经济效益最大化。", en: "EMS (Energy Management System) is the core control center of energy storage systems, responsible for intelligent scheduling, operation optimization, and maximizing economic benefits." },
  overview_p2: { zh: "我们的EMS系统采用先进的人工智能算法，结合实时数据分析和预测技术，为不同规模的储能应用场景提供最优化的运行策略和管理方案。", en: "Our EMS uses advanced AI algorithms, real-time data analysis, and prediction to provide optimal strategies for various scenarios." },
  series: { zh: "产品系列", en: "Product Series" },
  cases: { zh: "应用案例", en: "Application Cases" },
  case_industrial: { zh: "工业园区EMS案例", en: "Industrial Park EMS Case" },
  case_industrial_desc: { zh: "为某大型工业园区提供的100MWh级储能EMS解决方案，实现园区配电网智能调度，年节省电费超过1000万元。", en: "Provided a 100MWh EMS solution for an industrial park, enabling smart grid scheduling, saving over 10 million RMB annually." },
  case_grid: { zh: "电网级EMS案例", en: "Grid-level EMS Case" },
  case_grid_desc: { zh: "为某省电网公司提供的500MWh储能调度EMS系统，实现电网削峰填谷、调频调压等功能，提高电网运行效率。", en: "Provided a 500MWh EMS for a provincial grid company, enabling peak shaving, frequency/voltage regulation, improving efficiency." },
  details: { zh: "查看详情", en: "View Details" },
}

const products = [
  {
    id: "industrial-ems",
    model: { zh: "工业园区EMS", en: "Industrial Park EMS" },
    image: "/placeholder.svg?height=300&width=300",
    specs: [
      { label: { zh: "处理器", en: "Processor" }, value: { zh: "四核1.5GHZ", en: "Quad-core 1.5GHZ" } },
      { label: { zh: "内存", en: "Memory" }, value: { zh: "4G+16G", en: "4G+16G" } },
      { label: { zh: "显示屏", en: "Display" }, value: { zh: "10.1寸触控屏", en: "10.1 inch touch screen" } },
      { label: { zh: "通信接口", en: "Communication" }, value: { zh: "以太网/4G/WiFi", en: "Ethernet/4G/WiFi" } },
    ],
  },
  // 其余产品同理...
]

export default function EnergyStorageEmsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  const localizedProducts = products.map((p) => ({
    ...p,
    model: p.model[locale],
    specs: p.specs.map((s) => ({ label: s.label[locale], value: s.value[locale] })),
  }))
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products.html` },
        { label: t("breadcrumb_bms"), href: `/${locale}/products/energy-storage-bms.html` },
        { label: t("breadcrumb_ems"), href: `/${locale}/products/energy-storage-bms/energy-storage-ems.html` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("overview")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("overview_p1")}</p>
            <p className="text-lg text-gray-700">{t("overview_p2")}</p>
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
        <h2 className="text-3xl font-bold mb-8 text-center">{t("series")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {localizedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/${locale}/products/energy-storage-bms/energy-storage-ems/${product.id}.html`}
              className="block group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-64">
                  <Image
                    src={product.image}
                    alt={product.model}
                    width={300}
                    height={300}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">{product.model}</h3>
                  <div className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
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
                alt={t("case_industrial")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_industrial")}</h3>
            <p className="text-gray-700 mb-4">{t("case_industrial_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/energy-storage-ems/case-industrial.html`}
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
                alt={t("case_grid")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_grid")}</h3>
            <p className="text-gray-700 mb-4">{t("case_grid_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/energy-storage-ems/case-grid.html`}
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