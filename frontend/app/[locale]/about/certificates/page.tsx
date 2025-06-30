"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function CertificatesPage() {
  const { t, language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // 根据 URL 自动切换语言
  useEffect(() => {
    if (pathname.startsWith("/en")) setLanguage("en")
    else setLanguage("zh")
  }, [pathname, setLanguage])

  if (!mounted) {
    return null
  }

  // 证书内容（中英文）
  const content = {
    zh: {
      overview: {
        title: "我们的资质",
        description: "百千成电子通过了多项国际认证和资质认定，证明了公司在质量管理、环境保护、职业健康安全等方面的卓越表现，以及在技术创新方面的实力。"
      },
      certificates: [
        {
          title: "IATF16949",
          description: "这是IATF16949证书",
          image: "/images/about/certificates/IATF16949.png",
          issueDate: "2022年",
          validUntil: "2025年",
        },
        {
          title: "ISO9001",
          description: "这是ISO9001证书",
          image: "/images/about/certificates/ISO9001.png",
          issueDate: "2019年",
          validUntil: "2025年",
        },
        {
          title: "ISO13485",
          description: "这是ISO13485证书",
          image: "/images/about/certificates/ISO13485.png",
          issueDate: "2015年",
          validUntil: "2027年",
        },
        {
          title: "ISO14001",
          description: "这是ISO14001证书",
          image: "/images/about/certificates/ISO14001.png",
          issueDate: "2018年",
          validUntil: "2027年",
        },
      ],
      honors: {
        title: "企业荣誉",
        items: [
          {
            title: "高新技术企业",
            description: "2022年被评为高新技术企业。",
            image: "/images/about/certificates/高新技术企业证书.png"
          },
          {
            title: "待填写",
            description: "待填写",
            image: "/placeholder.svg"
          },
          {
            title: "待填写",
            description: "待填写",
            image: "/placeholder.svg"
          }
        ]
      },
      dateLabels: {
        issueDate: "发证日期：",
        validUntil: "有效期至："
      }
    },
    en: {
      overview: {
        title: "Our Qualifications",
        description: "BQC Electronics has obtained multiple international certifications, demonstrating our excellence in quality management, environmental protection, occupational health and safety, as well as our strength in technological innovation."
      },
      certificates: [
        {
          title: "IATF16949",
          description: "This is IATF16949 certificate",
          image: "/images/about/certificates/IATF16949_en.png",
          issueDate: "2022",
          validUntil: "2025",
        },
        {
          title: "ISO9001",
          description: "This is ISO9001 certificate",
          image: "/images/about/certificates/ISO9001_en.png",
          issueDate: "2019",
          validUntil: "2025",
        },
        {
          title: "ISO13485",
          description: "This is ISO13485 certificate",
          image: "/images/about/certificates/ISO13485_en.png",
          issueDate: "2015",
          validUntil: "2027",
        },
        {
          title: "ISO14001",
          description: "This is ISO14001 certificate",
          image: "/images/about/certificates/ISO14001_en.png",
          issueDate: "2018",
          validUntil: "2027",
        },
      ],
      honors: {
        title: "Enterprise Honors",
        items: [
          {
            title: "High-Tech Enterprise",
            description: "Recognized as High-Tech Enterprise in 2022",
            image: "/images/about/certificates/高新技术企业证书.png"
          },
          {
            title: "To be filled",
            description: "To be filled",
            image: "/placeholder.svg"
          },
          {
            title: "To be filled",
            description: "To be filled",
            image: "/placeholder.svg"
          }
        ]
      },
      dateLabels: {
        issueDate: "Issue Date: ",
        validUntil: "Valid Until: "
      }
    }
  }

  const currentContent = language === "zh" ? content.zh : content.en

  const breadcrumbs = [
    { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
    { label: t("about.breadcrumbs.certificates"), href: language === "en" ? "/en/about/certificates" : "/zh-Hans/about/certificates" },
  ]

  return (
    <PageLayout
      title={t("about.certificates.title")}
      subtitle={t("about.certificates.subtitle")}
      breadcrumbs={breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">{currentContent.overview.title}</h2>
        <p className="text-xl text-gray-700">
          {currentContent.overview.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {currentContent.certificates.map((certificate, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={600}
                height={400}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
              <p className="text-gray-700 mb-4">{certificate.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <div>{currentContent.dateLabels.issueDate}{certificate.issueDate}</div>
                <div>{currentContent.dateLabels.validUntil}{certificate.validUntil}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.honors.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentContent.honors.items.map((honor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image src={honor.image} alt={honor.title} width={40} height={40} />
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