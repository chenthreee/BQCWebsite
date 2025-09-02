"use client"

import PageLayout from "@/components/page-layout"
import Link from "next/link"
import { ArrowRight, Users, Award, Shield, Globe, CheckCircle } from "lucide-react"
import { usePathname } from "next/navigation"

export default function AboutPage() {
  const pathname = usePathname()
  const locale = pathname.split("/")[1] === "en" ? "en" : "zh-Hans"
  const sections = [
    {
      title: "公司介绍",
      description: "了解百千成电子的发展历程与企业文化",
      link: "/about/introduction",
      image: "/placeholder.svg?height=400&width=600",
      icon: Users,
      color: "from-blue-300 to-blue-400",
    },
    {
      title: "核心价值观",
      description: "我们的企业文化与价值理念",
      link: "/about/core-values",
      image: "/placeholder.svg?height=400&width=600",
      icon: Award,
      color: "from-blue-300 to-blue-400",
    },
    {
      title: "发展历程",
      description: "百千成电子的成长与发展历程",
      link: "/about/development-history",
      image: "/placeholder.svg?height=400&width=600",
      icon: Globe,
      color: "from-blue-400 to-blue-500",
    },
    {
      title: "管理系统",
      description: "公司的管理体系与质量控制",
      link: "/about/management-system",
      image: "/placeholder.svg?height=400&width=600",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "制造能力",
      description: "先进的生产设备与制造工艺",
      link: "/about/manufacturing-capabilities",
      image: "/placeholder.svg?height=400&width=600",
      icon: CheckCircle,
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "资质证书",
      description: "公司获得的各类资质认证",
      link: "/about/certificates",
      image: "/placeholder.svg?height=400&width=600",
      icon: Award,
      color: "from-blue-700 to-blue-800",
    },
  ]

  const stats = [
    { number: "21+", label: "年行业经验", description: "深耕储能BMS领域" },
    { number: "35GWh+", label: "累计装机量", description: "储能BMS产品装机容量" },
    { number: "800+", label: "员工团队", description: "高素质技术人员" },
    { number: "50+", label: "知名客户", description: "国内外储能客户" },
  ]

  return (
    <PageLayout
      title="关于我们"
      subtitle="了解百千成电子的企业文化与发展历程"
      breadcrumbs={[{ label: "关于我们", href: "/about" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      {/* 公司概览 */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">百千成电子</h2>
            <p className="text-lg text-gray-700 mb-6">
              深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS/逆变器、智能机器人电路板PCBA设计制造代工企业。
            </p>
            <p className="text-lg text-gray-700 mb-6">
              公司已通过ISO9001、IATF16949、ISO14001管理体系认证，拥有完整的数字化管理平台，确保每片PCBA板高品质交付。
            </p>
            <div className="flex items-center">
              <Link
                href={`/${locale}/about/introduction.html`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center shadow-lg hover:shadow-xl"
              >
                了解更多详情
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
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
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
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">核心优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">技术领先</h3>
            <p className="text-gray-600">拥有经验丰富的研发团队，专注储能BMS、EMS、PCS等核心产品创新</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">品质保证</h3>
            <p className="text-gray-600">通过多项国际认证，建立完整的质量管理体系和数字化追溯系统</p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">全球布局</h3>
            <p className="text-gray-600">深圳和马来西亚两大制造基地，服务全球50+知名储能客户</p>
          </div>
        </div>
      </div>

      {/* 详细板块 */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">了解更多</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
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
                      了解更多
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
