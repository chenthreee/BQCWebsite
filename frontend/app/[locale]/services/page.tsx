"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const content = {
  "zh-Hans": {
    title: "服务",
    subtitle: "百千成电子的专业服务与解决方案",
    breadcrumbs: [{ label: "服务", href: "/zh-Hans/services.html" }],
    services: [
      {
        title: "ODM研发服务",
        desc: "百千成电子拥有专业的研发团队，提供从需求分析、方案设计到样机制作、量产支持的一站式ODM研发服务，帮助客户快速实现产品创新。",
        link: "/zh-Hans/services/odm.html",
        linkText: "了解详情",
        image: "/images/services/odm.png",
        alt: "ODM研发服务"
      },
      {
        title: "OEM制造服务",
        desc: "百千成电子提供从PCB设计、SMT贴片到整机组装的全流程OEM制造服务，以先进的生产设备和严格的质量控制体系，为客户提供高品质的电子制造服务。",
        link: "/zh-Hans/services/oem.html",
        linkText: "了解详情",
        image: "/images/services/oem.png",
        alt: "OEM制造服务"
      }
    ],
    advantagesTitle: "服务优势",
    advantages: [
      { title: "专业团队", desc: "拥有一支由博士、硕士等高学历人才组成的专业研发团队，技术实力雄厚。", image: "/images/services/team.png", alt: "专业团队" },
      { title: "先进设备", desc: "配备先进的研发设备和生产线，确保产品设计与制造的高品质。", image: "/images/services/equipment.png", alt: "先进设备" },
      { title: "质量保证", desc: "严格的质量控制体系，从设计到生产的每一个环节都精益求精。", image: "/images/services/quality.png", alt: "质量保证" },
      { title: "快速响应", desc: "高效的项目管理和快速响应机制，确保项目按时交付。", image: "/images/services/response.png", alt: "快速响应" },
    ],
    contact: {
      title: "联系我们",
      description: "如果您有产品开发需求，欢迎联系我们的服务团队，我们将为您提供专业的技术咨询和解决方案。",
      buttonText: "联系我们讨论您的项目",
      href: "/zh-Hans/contact.html"
    }
  },
  en: {
    title: "Services",
    subtitle: "BQC Electronics' Professional Services and Solutions",
    breadcrumbs: [{ label: "Services", href: "/en/services.html" }],
    services: [
      {
        title: "ODM R&D Service",
        desc: "BQC Electronics has a professional R&D team, providing one-stop ODM services from requirement analysis, solution design to prototyping and mass production support, helping customers quickly realize product innovation.",
        link: "/en/services/odm.html",
        linkText: "Learn More",
        image: "/images/services/odm.png",
        alt: "ODM R&D Service"
      },
      {
        title: "OEM Manufacturing Service",
        desc: "BQC Electronics provides full-process OEM services from PCB design, SMT to final assembly, with advanced equipment and strict quality control to deliver high-quality electronic manufacturing services.",
        link: "/en/services/jdsm-oem.html",
        linkText: "Learn More",
        image: "/images/services/oem.png",
        alt: "OEM Manufacturing Service"
      }
    ],
    advantagesTitle: "Service Advantages",
    advantages: [
      { title: "Professional Team", desc: "A professional R&D team composed of PhDs and Masters, with strong technical strength.", image: "/images/services/team.png", alt: "Professional Team" },
      { title: "Advanced Equipment", desc: "Equipped with advanced R&D equipment and production lines to ensure high-quality design and manufacturing.", image: "/images/services/equipment.png", alt: "Advanced Equipment" },
      { title: "Quality Assurance", desc: "Strict quality control system, excellence in every step from design to production.", image: "/images/services/quality.png", alt: "Quality Assurance" },
      { title: "Quick Response", desc: "Efficient project management and quick response mechanism to ensure on-time delivery.", image: "/images/services/response.png", alt: "Quick Response" },
    ],
    contact: {
      title: "Contact Us",
      description: "If you have product development needs, please contact our service team. We will provide you with professional technical consultation and solutions.",
      buttonText: "Contact Us to Discuss Your Project",
      href: "/en/contact.html"
    }
  }
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const currentContent = content[locale]
  // 动态生成面包屑和跳转链接，保证 locale 正确
  const breadcrumbs = [
    {
      label: locale === "en" ? "Services" : "服务",
      href: locale === "en" ? "/en/services" : "/zh-Hans/services.html"
    }
  ]
  const services = currentContent.services.map(service => ({
    ...service,
    link: locale === "en"
      ? service.link.replace("/zh-Hans/", "/en/")
      : service.link.replace("/en/", "/zh-Hans/")
  }))

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={breadcrumbs}
      backgroundImage="/images/services/servicesBreadcrumb.png"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {services.map((service, idx) => (
          <Link key={idx} href={service.link}>
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
            <div className="h-64 overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.desc}</p>
              <Link href={service.link} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {service.linkText}
                <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">{currentContent.advantagesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentContent.advantages.map((adv, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image src={adv.image} alt={adv.alt} width={70} height={70} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{adv.title}</h3>
              <p className="text-gray-700 text-center">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">{currentContent.contact.title}</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {currentContent.contact.description}
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href={currentContent.contact.href}>
            {currentContent.contact.buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </PageLayout>
  )
} 