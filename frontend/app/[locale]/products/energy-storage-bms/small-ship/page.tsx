"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "小型船舶储能BMS", en: "Small Ship Energy Storage BMS" },
  subtitle: { zh: "为小型船舶提供高效可靠的电池管理系统", en: "Efficient and Reliable BMS for Small Ships" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_bms: { zh: "储能BMS", en: "Energy Storage BMS" },
  breadcrumb_small: { zh: "小型船舶储能BMS", en: "Small Ship BMS" },
  overview: { zh: "小型船舶储能BMS系统概述", en: "Overview of Small Ship BMS System" },
  overview_p1: { zh: "百千成电子的小型船舶储能BMS系统是专为游艇、渔船、小型客船等小型船舶设计的高效可靠电池管理系统，适用于船舶主推进系统或辅助电力系统。", en: "BAIQIANCHENG's small ship BMS is designed for yachts, fishing boats, and small passenger ships, suitable for main or auxiliary power systems." },
  overview_p2: { zh: "我们的小型船舶BMS系统体积小、重量轻、功耗低，同时具备高防护等级、抗震动、抗盐雾腐蚀等特性，能够在恶劣的海洋环境中稳定运行。", en: "Our BMS is compact, lightweight, low-power, with high protection, anti-vibration, anti-corrosion, for harsh marine environments." },
  overview_p3: { zh: "百千成电子已为全球众多小型船舶提供了可靠的BMS解决方案，帮助客户实现船舶电气化和绿色航运。", en: "BAIQIANCHENG has provided reliable BMS solutions for many small ships worldwide, enabling electrification and green shipping." },
  features: { zh: "系统特点", en: "System Features" },
  mini: { zh: "小型化设计", en: "Miniaturized Design" },
  mini_desc: { zh: "体积小、重量轻，适合空间有限的小型船舶安装使用。", en: "Small size, light weight, suitable for limited space installation." },
  low_power: { zh: "低功耗设计", en: "Low Power Design" },
  low_power_desc: { zh: "采用低功耗设计，静态功耗低至10mW，延长船舶续航能力。", en: "Low power design, static consumption as low as 10mW, extends endurance." },
  waterproof: { zh: "防水防尘", en: "Waterproof & Dustproof" },
  waterproof_desc: { zh: "IP67防护等级，完全防水防尘，适应恶劣海洋环境。", en: "IP67 protection, fully waterproof and dustproof for harsh marine environments." },
  easy_install: { zh: "易于安装", en: "Easy Installation" },
  easy_install_desc: { zh: "模块化设计，即插即用，易于安装和维护，降低使用成本。", en: "Modular design, plug and play, easy to install and maintain, reduces cost." },
  series: { zh: "产品系列", en: "Product Series" },
  cases: { zh: "应用案例", en: "Application Cases" },
  case_yacht: { zh: "电动游艇案例", en: "Electric Yacht Case" },
  case_yacht_desc: { zh: "为某豪华游艇制造商提供的100kWh船舶储能系统BMS解决方案，实现游艇的全电动推进系统，零排放、低噪音，提升用户体验。", en: "Provided a 100kWh BMS solution for a yacht manufacturer, enabling all-electric propulsion, zero emissions, low noise, improved experience." },
  case_fishing: { zh: "电动渔船案例", en: "Electric Fishing Boat Case" },
  case_fishing_desc: { zh: "为某渔业公司提供的50kWh船舶储能系统BMS解决方案，实现渔船的混合动力系统，降低燃油消耗40%以上，减少运营成本。", en: "Provided a 50kWh BMS solution for a fishery, enabling hybrid power, reducing fuel consumption by 40%, lowering costs." },
  details: { zh: "查看详情", en: "View Details" },
}

const products = [
  {
    id: "bms-m50",
    model: { zh: "BMS-M50", en: "BMS-M50" },
    image: "/placeholder.svg?height=600&width=800",
    desc: { zh: "50kWh小型船舶储能系统，适用于游艇、小型渔船等，支持16串锂电池组管理。", en: "50kWh system for yachts, small fishing boats, supports 16-series lithium battery management." },
  },
  // 其余产品同理...
]

export default function SmallShipBmsPage({ params }: { params: { locale: string } }) {
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
        { label: t("breadcrumb_small"), href: `/${locale}/products/energy-storage-bms/small-ship` },
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
                <Image src="/placeholder.svg?height=30&width=30" alt={t("mini")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("mini")}</h4>
              <p className="text-gray-700">{t("mini_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("low_power")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("low_power")}</h4>
              <p className="text-gray-700">{t("low_power_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("waterproof")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("waterproof")}</h4>
              <p className="text-gray-700">{t("waterproof_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("easy_install")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("easy_install")}</h4>
              <p className="text-gray-700">{t("easy_install_desc")}</p>
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
                  href={`/${locale}/products/energy-storage-bms/small-ship/${product.id}.html`}
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
                alt={t("case_yacht")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_yacht")}</h3>
            <p className="text-gray-700 mb-4">{t("case_yacht_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/small-ship/case-yacht.html`}
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
                alt={t("case_fishing")}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_fishing")}</h3>
            <p className="text-gray-700 mb-4">{t("case_fishing_desc")}</p>
            <Link
              href={`/${locale}/products/energy-storage-bms/small-ship/case-fishing.html`}
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