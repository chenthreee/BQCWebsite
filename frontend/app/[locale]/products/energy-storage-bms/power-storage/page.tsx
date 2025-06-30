"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "电力大储BMS", en: "Power Storage BMS" },
  subtitle: { zh: "高可靠性电力储能电池管理系统", en: "High-reliability Power Storage Battery Management System" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_bms: { zh: "储能BMS", en: "Energy Storage BMS" },
  breadcrumb_power: { zh: "电力大储BMS", en: "Power Storage BMS" },
  overview: { zh: "电力大储BMS系统概述", en: "Overview of Power Storage BMS System" },
  overview_desc: { zh: "这里建议放一段关于电力大储的介绍", en: "It is recommended to put an introduction about power storage here." },
  series: { zh: "产品系列", en: "Product Series" },
  cases: { zh: "应用案例", en: "Application Cases" },
  case_grid: { zh: "电网调峰调频案例", en: "Grid Peak Shaving & Frequency Regulation Case" },
  case_grid_desc: { zh: "为某省电网公司提供的100MWh电力储能系统BMS解决方案，实现电网削峰填谷、调频调压等功能，提高电网稳定性和经济性。", en: "Provided a 100MWh power storage BMS solution for a provincial grid company, achieving peak shaving, frequency/voltage regulation, and improving grid stability and economy." },
  case_renewable: { zh: "可再生能源并网案例", en: "Renewable Energy Grid Connection Case" },
  case_renewable_desc: { zh: "为某光伏发电站提供的50MWh电力储能系统BMS解决方案，解决光伏发电波动性问题，提高可再生能源并网质量和利用率。", en: "Provided a 50MWh power storage BMS solution for a PV plant, solving volatility and improving grid quality and utilization." },
  details: { zh: "查看详情", en: "View Details" },
}

const products = [
  {
    id: "factory-parks",
    model: { zh: "工厂园区储能", en: "Factory ParkStorage" },
    image: "/placeholder.svg?height=300&width=300",
    specs: [
      { label: { zh: "CPU", en: "CPU" }, value: { zh: "四核1.5GHZ", en: "Quad-core 1.5GHZ" } },
      { label: { zh: "内存", en: "Memory" }, value: { zh: "2G+8G", en: "2G+8G" } },
      { label: { zh: "LCD", en: "LCD" }, value: { zh: "10寸", en: "10 inch" } },
      { label: { zh: "这些部分也需要重新收集数据", en: "These parts need to be re-collected, format varies" }, value: { zh: "每份文档格式都不太一样 写上来会很杂乱", en: "Each document format is different, listing here would be messy" } },
    ],
  },
  // 其余产品同理...
]

export default function PowerStorageBmsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  // 产品多语言处理
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
        { label: t("breadcrumb_products"), href: `/${locale}/products` },
        { label: t("breadcrumb_bms"), href: `/${locale}/products/energy-storage-bms` },
        { label: t("breadcrumb_power"), href: `/${locale}/products/energy-storage-bms/power-storage` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("overview")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("overview_desc")}</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/${locale}/products/energy-storage-bms/power-storage/${product.id}`}
              className="block group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
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
                alt={t("case_grid")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_grid")}</h3>
            <p className="text-gray-700 mb-4">{t("case_grid_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/power-storage/case-grid`}
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
                alt={t("case_renewable")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_renewable")}</h3>
            <p className="text-gray-700 mb-4">{t("case_renewable_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/power-storage/case-renewable`}
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