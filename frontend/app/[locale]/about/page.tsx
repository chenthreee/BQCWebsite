"use client"

import PageLayout from "@/components/page-layout"
import Link from "next/link"
import { ArrowRight, Users, Award, Shield, Globe, CheckCircle, HeartHandshakeIcon } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function AboutPage() {
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

  const locale = language === "en" ? "en" : "zh-Hans"

  const content = {
    zh: {
      title: "关于我们",
      subtitle: "了解百千成电子的企业文化与发展历程",
      companyName: "百千成电子",
      intro1: "深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS/逆变器、智能机器人电路板PCBA设计制造代工企业。",
      intro2: "公司已通过ISO9001、IATF16949、ISO14001管理体系认证，拥有完整的数字化管理平台，确保每片PCBA板高品质交付。",
      learnMore: "了解更多详情",
      videoUnsupported: "您的浏览器不支持视频播放。",
      statsTitle: "数据统计",
      stats: [
        { number: "22+", label: "年行业经验", description: "深耕储能BMS领域" },
        { number: "35GWh+", label: "累计装机量", description: "储能BMS产品装机容量" },
        { number: "800+", label: "员工团队", description: "高素质技术人员" },
        { number: "50+", label: "知名客户", description: "国内外储能客户" },
      ],
      advantagesTitle: "核心优势",
      advantages: [
        {
          title: "技术领先",
          description: "拥有经验丰富的研发团队，专注储能BMS、EMS、PCS等核心产品创新"
        },
        {
          title: "品质保证",
          description: "通过多项国际认证，建立完整的质量管理体系和数字化追溯系统"
        },
        {
          title: "全球布局",
          description: "深圳和马来西亚两大制造基地，服务全球50+知名储能客户"
        }
      ],
      sectionsTitle: "了解更多",
      sections: [
        {
          title: "公司介绍",
          description: "了解百千成电子的发展历程与企业文化",
          link: "/about/introduction",
          icon: Users,
          color: "from-blue-300 to-blue-400",
        },
        {
          title: "核心价值观",
          description: "我们的企业文化与价值理念",
          link: "/about/core-values",
          icon: HeartHandshakeIcon,
          color: "from-blue-300 to-blue-400",
        },
        {
          title: "发展历程",
          description: "百千成电子的成长与发展历程",
          link: "/about/development-history",
          icon: Globe,
          color: "from-blue-400 to-blue-500",
        },
        {
          title: "管理系统",
          description: "公司的管理体系与质量控制",
          link: "/about/management-system",
          icon: Shield,
          color: "from-blue-500 to-blue-600",
        },
        {
          title: "制造能力",
          description: "先进的生产设备与制造工艺",
          link: "/about/manufacturing-capabilities",
          icon: CheckCircle,
          color: "from-blue-600 to-blue-700",
        },
        {
          title: "资质证书",
          description: "公司获得的各类资质认证",
          link: "/about/certificates",
          icon: Award,
          color: "from-blue-700 to-blue-800",
        },
      ],
      readMore: "了解更多"
    },
    en: {
      title: "About Us",
      subtitle: "Learn about BQC Electronics' corporate culture and development history",
      companyName: "BQC Electronics",
      intro1: "Shenzhen Baiqiancheng Electronics Co., Ltd. was founded in 2003, specializing in the design and manufacturing of energy storage lithium battery BMS, PCS/inverters, and intelligent robot circuit board PCBA design and OEM manufacturing.",
      intro2: "The company has passed ISO9001, IATF16949, and ISO14001 management system certifications, and has a complete digital management platform to ensure high-quality delivery of each PCBA board.",
      learnMore: "Learn More",
      videoUnsupported: "Your browser does not support video playback.",
      statsTitle: "Key Statistics",
      stats: [
        { number: "22+", label: "Years of Experience", description: "Deep expertise in energy storage BMS" },
        { number: "35GWh+", label: "Installed Capacity", description: "Energy storage BMS product installations" },
        { number: "800+", label: "Employee Team", description: "Highly skilled technical personnel" },
        { number: "50+", label: "Renowned Clients", description: "Domestic and international energy storage customers" },
      ],
      advantagesTitle: "Core Advantages",
      advantages: [
        {
          title: "Technological Leadership",
          description: "Experienced R&D team focused on innovation in core products such as energy storage BMS, EMS, and PCS"
        },
        {
          title: "Quality Assurance",
          description: "Multiple international certifications with a complete quality management system and digital traceability"
        },
        {
          title: "Global Presence",
          description: "Two manufacturing bases in Shenzhen and Malaysia, serving 50+ renowned global energy storage clients"
        }
      ],
      sectionsTitle: "Learn More",
      sections: [
        {
          title: "Company Introduction",
          description: "Learn about BQC Electronics' development history and corporate culture",
          link: "/about/introduction",
          icon: Users,
          color: "from-blue-300 to-blue-400",
        },
        {
          title: "Core Values",
          description: "Our corporate culture and value principles",
          link: "/about/core-values",
          icon: HeartHandshakeIcon,
          color: "from-blue-300 to-blue-400",
        },
        {
          title: "Development History",
          description: "BQC Electronics' growth and development journey",
          link: "/about/development-history",
          icon: Globe,
          color: "from-blue-400 to-blue-500",
        },
        {
          title: "Management System",
          description: "Company management system and quality control",
          link: "/about/management-system",
          icon: Shield,
          color: "from-blue-500 to-blue-600",
        },
        {
          title: "Manufacturing Capabilities",
          description: "Advanced production equipment and manufacturing processes",
          link: "/about/manufacturing-capabilities",
          icon: CheckCircle,
          color: "from-blue-600 to-blue-700",
        },
        {
          title: "Certificates",
          description: "Company's various qualification certifications",
          link: "/about/certificates",
          icon: Award,
          color: "from-blue-700 to-blue-800",
        },
      ],
      readMore: "Read More"
    }
  }

  const currentContent = language === "en" ? content.en : content.zh

  const breadcrumbs = [
    { label: currentContent.title, href: language === "en" ? "/en/about" : "/zh-Hans/about" },
  ]

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={breadcrumbs}
      backgroundImage="/images/about/aboutBreadcrumb.png"
    >
      {/* 公司概览 */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">{currentContent.companyName}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {currentContent.intro1}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {currentContent.intro2}
            </p>
            <div className="flex items-center">
              <Link
                href={`/${locale}/about/introduction.html`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center shadow-lg hover:shadow-xl"
              >
                {currentContent.learnMore}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <video
              src="/Company%20introduction%20video.mp4"
              controls
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
              poster="/images/about/companyIntroduction/cover.png"
            >
              {currentContent.videoUnsupported}
            </video>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentContent.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2 text-slate-700">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 核心优势 */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{currentContent.advantagesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">{currentContent.advantages[0].title}</h3>
            <p className="text-gray-600">{currentContent.advantages[0].description}</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">{currentContent.advantages[1].title}</h3>
            <p className="text-gray-600">{currentContent.advantages[1].description}</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">{currentContent.advantages[2].title}</h3>
            <p className="text-gray-600">{currentContent.advantages[2].description}</p>
          </div>
        </div>
      </div>

      {/* 详细板块 */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{currentContent.sectionsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Link key={index} href={`/${locale}${section.link}.html`} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`h-48 bg-gradient-to-r ${section.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <IconComponent className="h-16 w-16 text-white relative z-10" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{section.title}</h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="text-blue-600 flex items-center font-medium group-hover:text-blue-800 transition-colors">
                      {currentContent.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </PageLayout>
  )
}
