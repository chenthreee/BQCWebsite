"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "大型船舶储能BMS", en: "Large Ship Energy Storage BMS" },
  subtitle: { zh: "专为海洋环境设计的高可靠性船舶储能系统", en: "High-reliability Marine Energy Storage System for Ocean Environments" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_bms: { zh: "储能BMS", en: "Energy Storage BMS" },
  breadcrumb_large: { zh: "大型船舶储能BMS", en: "Large Ship BMS" },
  overview: { zh: "大型船舶储能BMS系统概述", en: "Overview of Large Ship BMS System" },
  overview_p1: { zh: "百千成电子的大型船舶储能BMS系统是专为海洋环境特殊要求设计的高可靠性电池管理系统，适用于大型客轮、货轮、邮轮等船舶的电力系统。", en: "BAIQIANCHENG's large ship BMS is designed for harsh marine environments, suitable for cruise ships, cargo ships, etc." },
  overview_p2: { zh: "我们的船舶储能BMS系统具备高防护等级、抗震动、抗盐雾腐蚀等特性，能够在恶劣的海洋环境中稳定运行，为船舶提供安全可靠的电力保障。", en: "Our BMS features high protection, anti-vibration, anti-corrosion, ensuring stable operation and reliable power for ships." },
  overview_p3: { zh: "作为船舶储能前3指定供应商，百千成电子已为全球众多大型船舶提供了可靠的BMS解决方案，累计装机量超过5GWh。", en: "As a top 3 supplier, BAIQIANCHENG has provided reliable BMS solutions for many large ships worldwide, with over 5GWh installed." },
  series: { zh: "产品系列", en: "Product Series" },
  cases: { zh: "应用案例", en: "Application Cases" },
  case_cruise: { zh: "大型邮轮案例", en: "Cruise Ship Case" },
  case_cruise_desc: { zh: "为某国际知名邮轮公司提供的3MWh船舶储能系统BMS解决方案，实现邮轮电力系统的峰值负荷管理和能源优化，降低燃油消耗30%以上。", en: "Provided a 3MWh BMS solution for a cruise company, enabling peak load management and energy optimization, reducing fuel consumption by 30%." },
  case_cargo: { zh: "大型货轮案例", en: "Cargo Ship Case" },
  case_cargo_desc: { zh: "为某国际航运公司提供的1.5MWh船舶储能系统BMS解决方案，实现货轮电力系统的智能管理和能源优化，降低运营成本25%以上。", en: "Provided a 1.5MWh BMS solution for a shipping company, enabling smart management and energy optimization, reducing costs by 25%." },
  details: { zh: "查看详情", en: "View Details" },
}

const products = [
  {
    id: "main-control-board",
    title: { zh: "船舶BMS主控制板", en: "Ship BMS Main Control Board" },
    image: "/placeholder.svg?height=300&width=300",
    specs: [
      { label: { zh: "处理器", en: "Processor" }, value: { zh: "32位ARM Cortex-M7", en: "32-bit ARM Cortex-M7" } },
      { label: { zh: "CAN接口", en: "CAN Interface" }, value: { zh: "4路", en: "4 channels" } },
      { label: { zh: "防护等级", en: "Protection Level" }, value: { zh: "IP65", en: "IP65" } },
      { label: { zh: "供电电压", en: "Power Supply" }, value: { zh: "24V DC", en: "24V DC" } },
    ],
  },
  // 其余产品同理...
]

export default function LargeShipBmsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  const localizedProducts = products.map((p) => ({
    ...p,
    title: p.title[locale],
    specs: p.specs.map((s) => ({ label: s.label[locale], value: s.value[locale] })),
  }))
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products` },
        { label: t("breadcrumb_bms"), href: `/${locale}/products/energy-storage-bms` },
        { label: t("breadcrumb_large"), href: `/${locale}/products/energy-storage-bms/large-ship` },
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
        <h2 className="text-3xl font-bold mb-8 text-center">{t("series")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/${locale}/products/energy-storage-bms/large-ship/${product.id}`}
              className="block group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">{product.title}</h3>
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
                alt={t("case_cruise")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_cruise")}</h3>
            <p className="text-gray-700 mb-4">{t("case_cruise_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/large-ship/case-cruise`}
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
                alt={t("case_cargo")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_cargo")}</h3>
            <p className="text-gray-700 mb-4">{t("case_cargo_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/large-ship/case-cargo`}
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