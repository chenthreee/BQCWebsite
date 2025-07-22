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
        description: "百千成于 2003 年 7 月在深圳龙岗坂田成立，深耕新能源与智能装备领域二十余年。早期聚焦太阳能光伏逆变器研发制造，2006 年相关业务占比超五成，并通过 ISO9001 等多项国际认证。此后逐步拓展至船舶储能 BMS、小型电动船推进系统等新能源产品，以及猫砂盆机器人、扫地机器人等智能装备领域，客户覆盖欧、美、中多地。2023 年储能 BMS 累计装机量突破 35GWh，2024 年马来西亚工厂成立，进一步完善全球化布局，成为兼具技术实力与国际视野的综合型企业。"
      },
      future: {
        title: "未来展望",
        description: "百千成电子将继续秉承诚信、分享、回馈、客户第一的核心价值观，不断提升技术实力和产品品质，为全球客户提供更优质的产品和服务，为清洁能源的发展贡献力量。"
      },
      milestones: [
        { year: "2003.07", title: "百千成在龙岗坂田成立" },
        { year: "2004.01", title: "为德国客户设计制造太阳能光伏逆变器" },
        { year: "2005.10", title: "通过ISO9001质量认证" },
        { year: "2006.06", title: "太阳能光伏逆变器销售额占比超50%" },
        { year: "2007.12", title: "迁入长圳新工厂" },
        { year: "2009.03", title: "开始为欧洲客户设计制造小型电动船推进系统电池BMS" },
        { year: "2012.08", title: "开始为海外客户设计制造猫砂盆机器人" },
        { year: "2013.03", title: "开始为欧洲客户设计制造船舶储能BMS" },
        { year: "2015.04", title: "通过 ISO13485认证" },
        { year: "2015.06", title: "开始为北美客户设计制造储能BMS" },
        { year: "2016.01", title: "开始为国内客户制造猫砂盆机器人" },
        { year: "2016.08", title: "开始为酒店机器人客户制造PCBA" },
        { year: "2017.05", title: "开始为国内客户制造扫地机器人" },
        { year: "2018.07", title: "通过ISO14001认证" },
        { year: "2018.11", title: "开始为国内客户制造割草机器人" },
        { year: "2019.01", title: "通过IATF16949 认证" },
        { year: "2019.03", title: "为北欧客户设计制造船舶储能BMS" },
        { year: "2023.12", title: "储能BMS客户累计装机量35GWh+" },
        { year: "2024", title: "马来西亚工厂成立" }
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
        description: "Founded in Bantian, Shenzhen in July 2003, BQC has specialized in new energy and intelligent robot for over 20 years. Initially focusing on R&D and manufacturing of solar PV inverters—accounting for over 50% of its business by 2006—it has earned certifications like ISO9001. Expanding into new energy products (marine energy storage BMS, small electric boat systems) and intelligent robot (cat litter robots, floor sweepers), it serves clients across Europe, America, and China. With cumulative energy storage BMS installations exceeding 35GWh by 2023, BQC strengthened its global presence in 2024 by establishing a Malaysia plant, emerging as a tech-driven, internationally focused enterprise."
      },
      future: {
        title: "Future Outlook",
        description: "BQC Electronics will continue to uphold its core values of 'Integrity, Share, Contribution, and Customer-first', continuously improving technical capabilities and product quality to provide better products and services for global customers and contribute to the development of clean energy."
      },
      milestones: [
        { year: "2003.07", title: "BQC was established in Bantian Shenzhen" },
        { year: "2004.01", title: "Design & Manufacture solar PV (DE)" },
        { year: "2005.10", title: "Approved by ISO9001" },
        { year: "2006.06", title: "PV inverters hit 50% turnover" },
        { year: "2007.12", title: "Moved to new workshop in Changzhen, Guangming district" },
        { year: "2009.03", title: "Design & Manufacture Small Electric Boat Propulsion Systems BMS (EU)" },
        { year: "2012.08", title: "Design & Manufacture Cat Litter Robots for overseas customers" },
        { year: "2013.03", title: "Design & Manufacture marine BESS BMS (EU)" },
        { year: "2015.04", title: "Approved by ISO13485" },
        { year: "2015.06", title: "Design & Manufacture industrial BESS BMS(North American)" },
        { year: "2016.01", title: "Manufacture Cat Litter Robots (CN)" },
        { year: "2016.08", title: "Manufacture Hotel Robots PCBA" },
        { year: "2017.05", title: "Manufacture Floor Sweeping Robots (CN)" },
        { year: "2018.07", title: "Approved by ISO14001" },
        { year: "2018.11", title: "Manufacture Robot Lawn Mowers (CN)" },
        { year: "2019.01", title: "Approved by IATF16949" },
        { year: "2019.03", title: "Design & Manufacture marine BESS BMS (North EU)" },
        { year: "2023.12", title: "BMS related yield: 35GWh+" },
        { year: "2024", title: "BQC Plant in Malaysia was founded" }
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
        <p className="text-xl text-gray-700">
          {currentContent.overview.description}
        </p>
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
                  <div className="overflow-hidden">
                    {/* <Image
                      //src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    /> */}
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
