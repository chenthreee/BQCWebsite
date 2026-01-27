import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { certificatesData, honorsData } from "@/data/certificates"


export default function CertificatesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const language = locale === "en" ? "en" : "zh"

  // 使用共享数据
  const certificates = locale === "en" ? certificatesData.en : certificatesData.zh
  const honors = locale === "en" ? honorsData.en : honorsData.zh

  // 页面内容（中英文）
  const content = {
    zh: {
      title: "资质证书",
      subtitle: "百千成电子的资质认证与荣誉",
      breadcrumbs: [
        { label: "关于我们", href: "/zh-Hans/about" },
        { label: "资质证书", href: "/zh-Hans/about/certificates.html" }
      ],
      overview: {
        title: "我们的资质",
        description: "百千成电子通过了多项国际认证和资质认定，证明了公司在质量管理、环境保护、职业健康安全等方面的卓越表现，以及在技术创新方面的实力。"
      },
      honorsTitle: "企业荣誉",
      viewDetails: "查看详情"
    },
    en: {
      title: "Certificates",
      subtitle: "BQC Electronics Certifications and Honors",
      breadcrumbs: [
        { label: "About us", href: "/en/about" },
        { label: "Certificates", href: "/en/about/certificates.html" }
      ],
      overview: {
        title: "Our Qualifications",
        description: "BQC Electronics has obtained multiple international certifications, demonstrating our commitment to quality management, environmental protection, occupational health and safety, and technological innovation excellence."
      },
      honorsTitle: "Enterprise Honors",
      viewDetails: "View Details"
    }
  }


  const currentContent = locale === "en" ? content.en : content.zh



  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/images/about/aboutBreadcrumb.png"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">{currentContent.overview.title}</h2>
        <p className="text-xl text-gray-700">
          {currentContent.overview.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {certificates.map((certificate, index) => (
          <Link
            key={certificate.id}
            href={`/${locale}/about/certificates/${certificate.id}.html`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          >
            <div className="h-64 overflow-hidden">
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={600}
                height={400}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {certificate.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{certificate.description}</p>
              <div className="text-blue-600 font-medium flex items-center">
                {currentContent.viewDetails}
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.honorsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {honors.map((honor, index) => (
            <div key={honor.id} className="bg-white rounded-lg shadow-md  overflow-hidden text-center p-16">
              <div className="h-40 overflow-hidden ">
                <Image src={honor.image} alt={honor.title} width={300} height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{honor.title}</h3>
              <p className="text-gray-700">{honor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
} 