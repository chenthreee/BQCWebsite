"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"

export default function DevelopmentHistoryPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const content = {
    zh: {
      title: "发展历程",
      subtitle: "百千成电子的成长与发展",
      breadcrumbs: [
        { label: "关于我们", href: "/about" },
        { label: "发展历程", href: "/about/development-history" },
      ],
      overview: {
        title: "我们的历程",
        // description: "百千成电子自2003年成立以来，经过二十余年的发展，已成为储能领域的领先企业，这是我们不断创新、不断进取的历程。"
      },
      future: {
        title: "未来展望",
        description: "百千成电子将继续秉承诚实、分享、反馈、顾客至上的核心价值观，不断提升技术实力和产品品质，为全球客户提供更优质的产品和服务，为清洁能源的发展贡献力量。"
      },
      milestones: [
        {
          year: "2003.07",
          title: "百千成在龙岗坂田成立",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2004.01",
          title: "为德国客户设计制造太阳能光伏逆变器",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2005.01",
          title: "通过ISO9001质量认证",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2006.06",
          title: "太阳能光伏逆变器销售额占比超50%",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2007.12",
          title: "迁入长圳新工厂",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2009.03",
          title: "开始为欧洲客户设计制造小型电动船推进系统电池BMS",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2012.08",
          title: "开始为海外客户设计制造猫砂盆机器人",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2013.03",
          title: "开始为欧洲客户设计制造船舶储能BMS",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2015.04",
          title: "通过 ISO13485认证",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2015.06",
          title: "开始为北美客户设计制造储能BMS",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2016.01",
          title: "开始为国内客户制造猫砂盆机器人",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2016.08",
          title: "开始为酒店机器人客户制造PCBA",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2017.05",
          title: "开始为国内客户制造扫地机器人",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2018.07",
          title: "通过ISO14001认证",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2018.11",
          title: "开始为国内客户制造割草机器人",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2019.01",
          title: "通过IATF16949 认证",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2019.03",
          title: "为北欧客户设计制造船舶储能BMS",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2023.12",
          title: "储能BMS客户累计装机量35GWh+",
          image: "/placeholder.svg?height=300&width=400",
        }
      ]
    },
    en: {
      title: "Development History",
      subtitle: "Growth and Development of BQC Electronics",
      breadcrumbs: [
        { label: "About Us", href: "/about" },
        { label: "Development History", href: "/about/development-history" },
      ],
      overview: {
        title: "Our Journey",
        // description: "Since its establishment in 2003, BQC Electronics has grown into a leading enterprise in the energy storage field through over two decades of continuous innovation and progress."
      },
      future: {
        title: "Future Outlook",
        description: "BQC Electronics will continue to uphold its core values of 'Honesty, Sharing, Feedback, and Customer First', continuously improving technical capabilities and product quality to provide better products and services for global customers and contribute to the development of clean energy."
      },
      milestones: [
        {
          year: "2003.07",
          title: "BQC was established in Bantian Shenzhen",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2004.01",
          title: "Design & Manufacture solar PV (DE)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2005.01",
          title: "Approved by ISO9001",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2006.06",
          title: "PV inverters hit 50% turnover",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2007.12",
          title: "Moved to new workshop in Changzhen, Guangming district",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2009.03",
          title: "Design & Manufacture Small Electric Boat Propulsion Systems BMS (EU)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2012.08",
          title: "Design & Manufacture Cat Litter Robots for overseas customers",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2013.03",
          title: "Design & Manufacture marine BESS BMS (EU)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2015.04",
          title: "Approved by ISO13485",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2015.06",
          title: "Design & Manufacture industrial BESS BMS(North American)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2016.01",
          title: "Manufacture Cat Litter Robots (CN)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2016.08",
          title: "Manufacture Hotel Robots PCBA",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2017.05",
          title: "Manufacture Floor Sweeping Robots (CN)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2018.07",
          title: "Approved by ISO14001",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2018.11",
          title: "Manufacture Robot Lawn Mowers (CN)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2019.01",
          title: "Approved by IATF16949",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2019.03",
          title: "Design & Manufacture marine BESS BMS (North EU)",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          year: "2023.12",
          title: "BMS related yield: 35GWh+",
          image: "/placeholder.svg?height=300&width=400",
        }
      ]
    }
  }

  const currentContent = language === "zh" ? content.zh : content.en

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">{currentContent.overview.title}</h2>
        {/* <p className="text-xl text-gray-700">
          {currentContent.overview.description}
        </p> */}
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
        <div className="space-y-16">
          {currentContent.milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
              </div>
              <div className="md:w-1/2 md:px-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-bold mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">{currentContent.future.title}</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          {currentContent.future.description}
        </p>
      </div>
    </PageLayout>
  )
}
