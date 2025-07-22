"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function DevelopmentHistoryPage() {
  const { t, language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // 根据 URL 自动切换语言
  useEffect(() => {
    if (pathname.startsWith("/en")) setLanguage("en")
    else if (pathname.startsWith("/zh-Hans")) setLanguage("zh-Hans")
    else setLanguage("zh")
  }, [pathname, setLanguage])

  if (!mounted) {
    return null
  }

  const content = {
    zh: {
      title: "发展历程",
      subtitle: "百千成电子的成长与发展",
      overview: {
        title: "我们的历程",
        desc: {
          zh: "百千成于 2003 年 7 月在深圳龙岗坂田成立，深耕新能源与智能装备领域二十余年。早期聚焦太阳能光伏逆变器研发制造，2006 年相关业务占比超五成，并通过 ISO9001 等多项国际认证。此后逐步拓展至船舶储能 BMS、小型电动船推进系统等新能源产品，以及猫砂盆机器人、扫地机器人等智能装备领域，客户覆盖欧、美、中多地。2023 年储能 BMS 累计装机量突破 35GWh，2024 年马来西亚工厂成立，进一步完善全球化布局，成为兼具技术实力与国际视野的综合型企业。",
          "zh-Hans": "百千成于 2003 年 7 月在深圳龙岗坂田成立，深耕新能源与智能装备领域二十余年。早期聚焦太阳能光伏逆变器研发制造，2006 年相关业务占比超五成，并通过 ISO9001 等多项国际认证。此后逐步拓展至船舶储能 BMS、小型电动船推进系统等新能源产品，以及猫砂盆机器人、扫地机器人等智能装备领域，客户覆盖欧、美、中多地。2023 年储能 BMS 累计装机量突破 35GWh，2024 年马来西亚工厂成立，进一步完善全球化布局，成为兼具技术实力与国际视野的综合型企业。",
          en: "Founded in Bantian, Shenzhen in July 2003, BQC has specialized in new energy and intelligent robot for over 20 years. Initially focusing on R&D and manufacturing of solar PV inverters—accounting for over 50% of its business by 2006—it has earned certifications like ISO9001. Expanding into new energy products (marine energy storage BMS, small electric boat systems) and intelligent robot (cat litter robots, floor sweepers), it serves clients across Europe, America, and China. With cumulative energy storage BMS installations exceeding 35GWh by 2023, BQC strengthened its global presence in 2024 by establishing a Malaysia plant, emerging as a tech-driven, internationally focused enterprise."
        }
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
      overview: {
        title: "Our Journey",
        desc: {
          zh: "见证百千成电子的发展与成长，了解我们的重要里程碑和创新历程。",
          en: "Founded in Bantian, Shenzhen in July 2003, BQC has specialized in new energy and intelligent robot for over 20 years. Initially focusing on R&D and manufacturing of solar PV inverters—accounting for over 50% of its business by 2006—it has earned certifications like ISO9001. Expanding into new energy products (marine energy storage BMS, small electric boat systems) and intelligent robot (cat litter robots, floor sweepers), it serves clients across Europe, America, and China. With cumulative energy storage BMS installations exceeding 35GWh by 2023, BQC strengthened its global presence in 2024 by establishing a Malaysia plant, emerging as a tech-driven, internationally focused enterprise."
        }
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

  const currentContent = language === "en" ? content.en : content.zh

  const breadcrumbs = [
    { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
    { label: t("about.breadcrumbs.developmentHistory"), href: language === "en" ? "/en/about/development-history" : "/zh-Hans/about/development-history" },
  ]

  return (
    <PageLayout
      title={t("about.developmentHistory.title")}
      subtitle={t("about.developmentHistory.subtitle")}
      breadcrumbs={breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">{currentContent.overview.title}</h2>
          <p className="text-gray-500 text-center mb-8 text-sm">
              {currentContent.overview.desc[language as keyof typeof currentContent.overview.desc]}
          </p> 
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 -translate-x-1/2"></div>
          <div className="space-y-12">
            {currentContent.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg top-8"></div>
                <div className="w-1/2 px-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.future.title}</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            {currentContent.future.description}
          </p>
        </div>
      </div>
    </PageLayout>
  )
} 