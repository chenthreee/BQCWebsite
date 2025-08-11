"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const translations: Record<string, Record<string, string>> = {
  "title": {
    "zh-Hans": "产品中心",
    "en": "Products Center",
  },
  "subtitle": {
    "zh-Hans": "百千成电子的创新产品与解决方案",
    "en": "Innovative Products & Solutions of BAIQIANCHENG Electronics",
  },
  "viewProducts": {
    "zh-Hans": "查看产品",
    "en": "View Products",
  },
  // 产品分类
  "bms.title": { "zh-Hans": "储能BMS", "en": "Energy Storage BMS" },
  "bms.desc": { "zh-Hans": "电池管理系统解决方案", "en": "Battery Management System Solutions" },
  "pcs.title": { "zh-Hans": "储能PCS", "en": "Energy Storage PCS" },
  "pcs.desc": { "zh-Hans": "高性能的储能变流器系统", "en": "High-performance Energy Storage Converter System" },
  "robot.title": { "zh-Hans": "智能控制系统", "en": "Intelligent Control System" },
  "robot.desc": { "zh-Hans": "先进的智能控制解决方案", "en": "Advanced Intelligent Control Solutions" },
  "icb.title": { "zh-Hans": "工业控制板", "en": "Industrial Control Boards" },
  "icb.desc": { "zh-Hans": "可靠稳定的工业控制板卡", "en": "Reliable and Stable Industrial Control Boards" },
  "medical.title": { "zh-Hans": "医疗设备", "en": "Medical Devices" },
  "medical.desc": { "zh-Hans": "专业可靠的医疗设备控制解决方案", "en": "Professional and Reliable Medical Device Control Solutions" },
}

export default function ProductsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const t = (key: string): string => {
    return translations[key]?.[locale] || key
  }
  const productCategories = [
    {
      title: t("bms.title"),
      description: t("bms.desc"),
      href: `/${locale}/products/energy-storage-bms.html`,
      image: "/images/products/energy-storage-bms.png",
    },
    {
      title: t("pcs.title"),
      description: t("pcs.desc"),
      href: `/${locale}/products/energy-storage-pcs.html`,
      image: "/images/products/pcs.png",
    },
    {
      title: t("robot.title"),
      description: t("robot.desc"),
      href: `/${locale}/products/intelligent-robot-systems.html`,
      image: "/images/products/intelligent-robot-systems.png",
    },
    {
      title: t("icb.title"),
      description: t("icb.desc"),
      href: `/${locale}/products/industrial-control-boards.html`,
      image: "/images/products/industrial-control-boards.png",
    },
    {
      title: t("medical.title"),
      description: t("medical.desc"),
      href: `/${locale}/products/medical-devices.html`,
      image: "/images/products/medical-devices.png",
    },
  ]

  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[{ label: t("title"), href: `/${locale}/products.html` }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((category, index) => (
          <Link key={index} href={category.href} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <div className="text-blue-600 flex items-center font-medium">
                  {t("viewProducts")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  )
} 