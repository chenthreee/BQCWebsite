"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"
import { productsData } from "@/utils/productsData"

const translations: Record<string, Record<string, string>> = {
  subtitle: { zh: "储能EMS系统产品详情", en: "Energy Storage EMS Product Details" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_bms: { zh: "储能BMS", en: "Energy Storage BMS" },
  breadcrumb_ems: { zh: "储能EMS", en: "Energy Storage EMS" },
  back: { zh: "返回产品列表", en: "Back to Product List" },
  features: { zh: "主要特点", en: "Main Features" },
  applications: { zh: "应用场景", en: "Applications" },
  specifications: { zh: "技术规格", en: "Specifications" },
  faqs: { zh: "常见问答", en: "FAQs" },
  certificates: { zh: "产品资质", en: "Certificates" },
  certified: { zh: "通过 IATF16949、ISO13485、ISO9001、ISO14001、SA8000 认证", en: "Certified by IATF16949, ISO13485, ISO9001, ISO14001, SA8000" },
  factory: { zh: "13,000 平方米厂房，18条SMT生产线等", en: "13,000㎡ factory, 18 SMT lines, etc." },
  team: { zh: "专业研发团队，提供硬件/软件/结构设计等", en: "Professional R&D team for hardware/software/structure design, etc." },
}

export default function ProductDetailPage({ params }: { params: { locale: string; productId: string } }) {
  const { locale = "zh", productId } = params
  const t = (key: string) => translations[key]?.[locale] || key
  const product = productsData[productId as keyof typeof productsData]
  if (!product) return notFound()
  return (
    <PageLayout
      title={product.title}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products` },
        { label: t("breadcrumb_bms"), href: `/${locale}/products/energy-storage-bms` },
        { label: t("breadcrumb_ems"), href: `/${locale}/products/energy-storage-bms/energy-storage-ems` },
        { label: product.model, href: `/${locale}/products/energy-storage-bms/energy-storage-ems/${productId}` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-6">
        <Link href={`/${locale}/products/energy-storage-bms/energy-storage-ems`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("back")}
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex items-center justify-center bg-gray-50">
            <Image src={product.image || "/placeholder.svg"} alt={product.model} width={500} height={500} className="max-w-full h-auto object-contain" />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{product.model}</h2>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <h3 className="text-xl font-bold mb-3">{t("features")}</h3>
            <ul className="space-y-2 mb-6">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mb-3">{t("applications")}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.applications.map((application: string, index: number) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{application}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">{t("specifications")}</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">参数</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">规格</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {product.specifications.map((spec: any, index: number) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{spec.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {product.faqs && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">{t("faqs")}</h2>
          <div className="space-y-6 bg-white rounded-lg shadow-md p-8">
            {product.faqs.map((faq: any, index: number) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{t("certificates")}</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="aspect-[3/4] relative">
              <Image src="/images/about/certificates/ISO9001.png" alt="ISO9001认证" fill className="object-contain rounded-lg shadow-md" />
            </div>
            <div className="aspect-[3/4] relative">
              <Image src="/images/about/certificates/ISO13485.png" alt="ISO13485认证" fill className="object-contain rounded-lg shadow-md" />
            </div>
            <div className="aspect-[3/4] relative">
              <Image src="/images/about/certificates/IATF16949.png" alt="IATF16949认证" fill className="object-contain rounded-lg shadow-md" />
            </div>
            <div className="aspect-[3/4] relative">
              <Image src="/images/about/certificates/ISO14001.png" alt="ISO14001认证" fill className="object-contain rounded-lg shadow-md" />
            </div>
            <div className="aspect-[3/4] relative">
              <Image src="/images/about/certificates/SA8000.png" alt="SA8000认证" fill className="object-contain rounded-lg shadow-md" />
            </div>
            <div className="aspect-[3/4] relative">
              <Image src="/images/about/certificates/IKEA.png" alt="IKEA认证" fill className="object-contain rounded-lg shadow-md" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />{t("certified")}</p>
            <p className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />{t("factory")}</p>
            <p className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />{t("team")}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 