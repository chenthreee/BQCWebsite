"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, TrendingUp, Shield, Globe, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const sections = [
    {
      title: "公司介绍",
      description: "了解百千成电子的发展历程与企业文化",
      link: "/about/introduction",
      image: "/placeholder.svg?height=400&width=600",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "核心价值观",
      description: "我们的企业文化与价值理念",
      link: "/about/core-values",
      image: "/placeholder.svg?height=400&width=600",
      icon: Award,
      color: "from-green-500 to-green-600",
    },
    {
      title: "战略定位",
      description: "公司的发展战略与市场定位",
      link: "/about/strategic-positioning",
      image: "/placeholder.svg?height=400&width=600",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "发展历程",
      description: "百千成电子的成长与发展历程",
      link: "/about/development-history",
      image: "/placeholder.svg?height=400&width=600",
      icon: Globe,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "管理系统",
      description: "公司的管理体系与质量控制",
      link: "/about/management-system",
      image: "/placeholder.svg?height=400&width=600",
      icon: Shield,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "制造能力",
      description: "先进的生产设备与制造工艺",
      link: "/about/manufacturing-capabilities",
      image: "/placeholder.svg?height=400&width=600",
      icon: CheckCircle,
      color: "from-red-500 to-red-600",
    },
    {
      title: "资质证书",
      description: "公司获得的各类资质认证",
      link: "/about/certificates",
      image: "/placeholder.svg?height=400&width=600",
      icon: Award,
      color: "from-indigo-500 to-indigo-600",
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
            <h2 className="text-3xl font-bold mb-6">百千成电子</h2>
            <p className="text-lg text-gray-700 mb-6">
              深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS/逆变器、智能机器人电路板PCBA设计制造代工企业。
            </p>
            <p className="text-lg text-gray-700 mb-6">
              公司已通过ISO9001、IATF16949、ISO14001管理体系认证，拥有完整的数字化管理平台，确保每片PCBA板高品质交付。
            </p>
            <div className="flex items-center">
              <Link
                href="/about/introduction.html"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                了解更多详情
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=500&width=700"
              alt="百千成电子公司"
              width={700}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 数据统计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 核心优势 */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">核心优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">技术领先</h3>
            <p className="text-gray-600">拥有经验丰富的研发团队，专注储能BMS、EMS、PCS等核心产品创新</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">品质保证</h3>
            <p className="text-gray-600">通过多项国际认证，建立完整的质量管理体系和数字化追溯系统</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">全球布局</h3>
            <p className="text-gray-600">深圳和马来西亚两大制造基地，服务全球50+知名储能客户</p>
          </div>
        </div>
      </div>

      {/* 详细板块 */}

      <div>
        <h2 className="text-3xl font-bold text-center mb-12">了解更多</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Link key={index} href={section.link} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className={`h-48 bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                    <IconComponent className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                    <p className="text-gray-700 mb-4">{section.description}</p>
                    <div className="text-blue-600 flex items-center font-medium group-hover:text-blue-800">
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
