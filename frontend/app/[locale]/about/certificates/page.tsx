"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function CertificatesPage({params}:{params:{locale:string }}) {
  // const { t, language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  // const pathname = usePathname()
  const locale=params.locale==="en"?"en":"zh-Hans"

  useEffect(() => {
    setMounted(true)
  }, [])

  // 根据 URL 自动切换语言
  // useEffect(() => {
  //   if (pathname.startsWith("/en")) setLanguage("en")
  //   else setLanguage("zh")
  // }, [pathname, setLanguage])

  if (!mounted) {
    return null
  }

  // 证书内容（中英文）
  const content = {
    zh: {
      title:"资质证书",
      subtitle:"百千成电子的资质认证与荣誉",
      breadcrumbs:[
        {label:"关于我们",href:"/zh-Hans/about.html"},
        {label:"资质证书",href:"/zh-Hans/about/certificates.html"}
      ],
      overview: {
        title: "我们的资质",
        description: "百千成电子通过了多项国际认证和资质认定，证明了公司在质量管理、环境保护、职业健康安全等方面的卓越表现，以及在技术创新方面的实力。"
      },
      certificates: [
        {
          title: "IATF16949",
          description: "IATF16949 是国际汽车工作组制定的汽车行业质量管理体系标准，基于 ISO9001，增加行业特定要求。",
          image: "/images/about/certificates/IATF16949.png",
          issueDate: "2022年",
          validUntil: "2025年",
        },
        {
          title: "ISO9001",
          description: "ISO9001 是国际标准化组织制定的质量管理体系标准，强调以顾客为中心，注重持续改进。",
          image: "/images/about/certificates/ISO9001.png",
          issueDate: "2019年",
          validUntil: "2025年",
        },
        {
          title: "ISO13485",
          description: "ISO13485是适用于医疗器械法规环境的质量管理体系标准，强调风险管控与法规符合。",
          image: "/images/about/certificates/ISO13485.png",
          issueDate: "2015年",
          validUntil: "2027年",
        },
        {
          title: "ISO14001",
          description: "ISO14001是国际标准化组织制定的环境管理体系标准，助企业减环境影响，促可持续发展。",
          image: "/images/about/certificates/ISO14001.png",
          issueDate: "2018年",
          validUntil: "2027年",
        },
        {
          title: "UL",
          description: "UL是美国针对家用电动个人美容用品的安全标准，旨在保障产品使用安全。",
          image: "/images/about/certificates/UL895.png",
          issueDate: "2016年",
          validUntil: "2027年",
        },
      ],
      honors: {
        title: "企业荣誉",
        items: [
          {
            title: "高新技术企业",
            description: "国高证书即高新技术企业认定证书，证明企业符合国家高新技术领域要求，含金量高，可享多项政策优惠.",
            image: "/images/about/certificates/高新技术企业证书.png"
          },
          {
            title: "深圳市专精特新中小企业",
            description: "专精特新中小企业是专注于细分市场、创新能力强、市场占有率高、掌握关键核心技术、质量效益优的排头兵企业。",
            image: "/images/about/certificates/深圳市专精特新中小企业.png"
          },
          // {
          //   title: "待填写",
          //   description: "待填写",
          //   image: "/placeholder.svg"
          // }
        ]
      },
      dateLabels: {
        issueDate: "发证日期：",
        validUntil: "有效期至："
      }
    },
    en: {
      title:"Certificates",
      subtitle:"BQC Electronics Certifications and Honors",
      breadcrumbs:[
        {label:"About us",href:"/en/about.html"},
        {label:"Certificates",href:"/en/about/certificates.html"}
      ],
      overview: {
        title: "Our Qualifications",
        description: "BQC Electronics has obtained multiple international certifications, demonstrating our commitment to quality management, environmental protection, occupational health and safety, and technological innovation excellence."
      },
      certificates: [
        {
          title: "IATF16949",
          description: "IATF16949 is an automotive quality management system standard developed by the International Automotive Task Force, based on ISO9001 and adding industry-specific requirements.",
          image: "/images/about/certificates/IATF16949_en.png",
          issueDate: "2022",
          validUntil: "2025",
        },
        {
          title: "ISO9001",
          description: "ISO9001 is an international standard for quality management systems, emphasizing customer focus and continuous improvement.",
          image: "/images/about/certificates/ISO9001_en.png",
          issueDate: "2019",
          validUntil: "2025",
        },
        {
          title: "ISO13485",
          description: "ISO13485 is an international standard for quality management systems for medical devices, emphasizing risk control and compliance with regulations.",
          image: "/images/about/certificates/ISO13485_en.png",
          issueDate: "2015",
          validUntil: "2027",
        },
        {
          title: "ISO14001",
          description: "ISO14001 is an international standard for environmental management systems, helping businesses reduce environmental impact and promote sustainable development.",
            image: "/images/about/certificates/ISO14001_en.png",
            issueDate: "2018",
          validUntil: "2027",
        },
        {
          title: "UL",
          description: "UL is a safety standard for home electric personal grooming appliances in the United States, aimed at ensuring product safety.",
          image: "/images/about/certificates/UL895.png",
          issueDate: "2016",
          validUntil: "2027",
        },
      ],
      honors: {
        title: "Enterprise Honors",
        items: [
          {
            title: "High-Tech Enterprise",
            description: "The High-Tech Enterprise certificate is a certificate that proves that the enterprise meets the requirements of the national high-tech enterprise field, with high content and can enjoy multiple policy preferential.",
            image: "/images/about/certificates/高新技术企业证书.png"
          },
          {
            title: "Shenzhen Special New and Small Enterprises",
            description: "Specialized, refined, distinctive and innovative small and medium-sized enterprises are leading enterprises that focus on niche markets, have strong innovation capabilities, high market share, master key core technologies, and have excellent quality and efficiency",
            image: "/images/about/certificates/深圳市专精特新中小企业.png"
          },
          // {
          //   title: "To be filled",
          //   description: "To be filled",
          //   image: "/placeholder.svg"
          // }
        ]
      },
      dateLabels: {
        issueDate: "Issue Date: ",
        validUntil: "Valid Until: "
      }
    }
  }


  const currentContent=locale==="en" ? content.en : content.zh



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

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.honors.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentContent.honors.items.map((honor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md  overflow-hidden text-center p-16">
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