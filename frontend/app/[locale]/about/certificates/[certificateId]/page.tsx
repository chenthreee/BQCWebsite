import type { Metadata } from "next"
import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { certificatesData, honorsData } from "@/data/certificates"


export async function generateStaticParams() {
  const certificateIds = certificatesData.zh.map((cert) => cert.id)
  const honorIds = honorsData.zh.map((honor) => honor.id)
  const allIds = [...certificateIds, ...honorIds]
  const locales = ["zh-Hans", "en"]

  return locales.flatMap((locale) =>
    allIds.map((id) => ({
      locale,
      certificateId: id,
    }))
  )
}


function getCertificateById(id: string, locale: string) {
  const certData = locale === "en" ? certificatesData.en : certificatesData.zh
  const honorData = locale === "en" ? honorsData.en : honorsData.zh

  // 先从证书数据中查找
  let certificate = certData.find((cert) => cert.id === id)

  // 如果没找到，再从荣誉数据中查找
  if (!certificate) {
    certificate = honorData.find((honor) => honor.id === id)
  }

  return certificate
}


// export async function generateMetadata(
//   { params }: { params: { certificateId: string; locale: string } }
// ): Promise<Metadata> {
//   const locale = params.locale === "en" ? "en" : "zh-Hans"
//   const certificate = getCertificateById(params.certificateId, locale)

//   if (!certificate) return {}

//   const brandSuffix =
//     locale === "en"
//       ? " | BAIQIANCHENG Electronics"
//       : "-~C5P"

//   const seoTitle = `${certificate.title}${brandSuffix}`
//   const seoDescription = certificate.description || ""
//   const seoKeywords = certificate.title

//   return {
//     title: seoTitle,
//     description: seoDescription,
//     keywords: seoKeywords,
//     openGraph: {
//       title: seoTitle,
//       description: seoDescription,
//     },
//   }
// }

export default async function CertificateDetailPage({
  params,
}: {
  params: { certificateId: string; locale: string }
}) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const certificate = getCertificateById(params.certificateId, locale)

  if (!certificate) {
    notFound()
  }

  const labels = {
    zh: {
      backToCertificates: "返回资质证书",
      aboutUs: "关于我们",
      certificates: "资质证书",
      fullName: "完整名称",
      scope: "适用范围",
      certificationBody: "认证机构",
      issueDate: "发证日期",
      validUntil: "有效期至",
      benefits: "认证优势",
      requirements: "认证要求",
      overview: "认证概述",
    },
    en: {
      backToCertificates: "Back to Certificates",
      aboutUs: "About Us",
      certificates: "Certificates",
      fullName: "Full Name",
      scope: "Scope",
      certificationBody: "Certification Body",
      issueDate: "Issue Date",
      validUntil: "Valid Until",
      benefits: "Benefits",
      requirements: "Requirements",
      overview: "Overview",
    },
  }

  const currentLabels = locale === "en" ? labels.en : labels.zh

  return (
    <PageLayout
      title={certificate.title}
      subtitle={certificate.detailedInfo?.fullName || certificate.title}
      breadcrumbs={[
        {
          label: currentLabels.aboutUs,
          href: `/${locale}/about`,
        },
        {
          label: currentLabels.certificates,
          href: `/${locale}/about/certificates.html`,
        },
        {
          label: certificate.title,
          href: `/${locale}/about/certificates/${params.certificateId}.html`,
        },
      ]}
      backgroundImage="/images/about/aboutBreadcrumb.png"
    >
      {/* 返回按钮 */}
      <div className="mb-6">
        <Link
          href={`/${locale}/about/certificates.html`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {currentLabels.backToCertificates}
        </Link>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
          {/* 左侧：证书图片 */}
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6">
            <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={600}
                height={800}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>

          {/* 右侧：证书详细信息 */}
          <div className="flex flex-col justify-start">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              {certificate.title}
            </h1>

            {/* 认证概述 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {currentLabels.overview}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {certificate.description}
              </p>
            </div>

            {/* 基本信息 */}
            <div className="space-y-4 mb-6">
              {certificate.detailedInfo?.fullName && (
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-1">
                    {currentLabels.fullName}
                  </h3>
                  <p className="text-gray-800">
                    {certificate.detailedInfo.fullName}
                  </p>
                </div>
              )}

              {certificate.detailedInfo?.scope && (
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-1">
                    {currentLabels.scope}
                  </h3>
                  <p className="text-gray-800">{certificate.detailedInfo.scope}</p>
                </div>
              )}

              {certificate.detailedInfo?.certificationBody && (
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-1">
                    {currentLabels.certificationBody}
                  </h3>
                  <p className="text-gray-800">
                    {certificate.detailedInfo.certificationBody}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-1">
                    {currentLabels.issueDate}
                  </h3>
                  <p className="text-gray-800">{certificate.issueDate}</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-1">
                    {currentLabels.validUntil}
                  </h3>
                  <p className="text-gray-800">{certificate.validUntil}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 认证优势和要求 - 全宽显示 */}
        {(certificate.detailedInfo?.benefits ||
          certificate.detailedInfo?.requirements) && (
          <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 认证优势 */}
              {certificate.detailedInfo?.benefits && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-1 h-6 bg-blue-500 mr-3"></span>
                    {currentLabels.benefits}
                  </h2>
                  <ul className="space-y-2">
                    {certificate.detailedInfo.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <span className="text-blue-500 mr-2 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 认证要求 */}
              {certificate.detailedInfo?.requirements && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="w-1 h-6 bg-green-500 mr-3"></span>
                    {currentLabels.requirements}
                  </h2>
                  <ul className="space-y-2">
                    {certificate.detailedInfo.requirements.map(
                      (requirement, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700"
                        >
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span>{requirement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
