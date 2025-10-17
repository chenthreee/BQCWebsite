"use client"

import PageLayout from "@/components/page-layout"
import { useEffect, useState } from "react"


export default function DevelopmentHistoryPage({ params }: { params: { locale: string } }) {
  //const { t, language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  const locale = params.locale === "en" ? "en" : "zh-Hans"
  useEffect(() => {
    setMounted(true)
  }, [])

  // 根据 URL 自动切换语言
  // useEffect(() => {
  //   if (pathname.startsWith("/en")) setLanguage("en")
  //   else if (pathname.startsWith("/zh-Hans")) setLanguage("zh-Hans")
  //   else setLanguage("zh")
  // }, [pathname, setLanguage])

  if (!mounted) {
    return null
  }

  const content = {
    zh: {
      title: "发展历程",
      subtitle: "百千成电子的成长与发展",
      breadcrumb:[
        {label:"关于我们",href:"/zh-Hans/about.html"},
        {label:"发展历程",href:"/zh-Hans/about/development-history.html"}
      ],
      overview: {
        title: "我们的历程",
        desc: [
            "深圳市百千成电子有限公司于2003年7月在深圳龙岗坂田正式成立，深耕新能源与智能机器能人领域二十余载，是兼具技术实力与国际视野的综合型企业。",
            "公司早期聚焦太阳能光伏逆变器研发制造，2006年相关业务占比超五成，并成功通过ISO9001国际认证，夯实品质根基。",
            "随着行业趋势与市场需求变化，公司逐步拓展业务边界：在新能源领域，延伸至储能BMS（电池管理系统）、船舶储能BMS、小型电动船推进系统等细分赛道；在智能装备领域，切入猫砂盆机器人、扫地机器人等消费级智能产品领域，客户群体广泛覆盖欧洲、美洲及中国本土市场，形成多元化、全球化的业务格局。",
            "公司持续升级管理体系，先后通过ISO13485、ISO14001及IATF16949认证。2024年发展迈入新台阶：马来西亚工厂成立，标志着国际化布局深化；同年，储能BMS客户累计装机量突破35GWh+，彰显在储能领域的核心竞争力。"
        ]
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
        { year: "2013.03", title: "开始为欧洲客户设计制造储能BMS" },
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
        { year: "2024", title: "马来西亚工厂成立" },
        {year:"2024.12",title:"储能BMS客户累计装机量35GWh+"}
      ]
    },
    en: {
      title: "Development History",
      subtitle: "Growth and Development of BQC Electronics",
      breadcrumb:[
        {label:"About Us",href:"/en/about.html"},
        {label:"Development History",href:"/en/about/development-history.html"}
      ],
      overview: {
        title: "Our Journey",
        desc: [
            "Founded in July 2003 in Bantian, Longgang, Shenzhen, we have specialized in the new energy and intelligent robot sectors for over 20 years, evolving into a comprehensive enterprise with strong technical capabilities and global vision.",
            "In our early phase, we focused on R&D and manufacturing of solar PV inverters. By 2006, this business accounted for over 50% of our total, and we obtained ISO 9001 certifications to solidify our quality foundation.",
            "In line with the evolution of industry trends and market demands, we have gradually expanded our business scope. In the new energy field, we cover energy storage BMS (Battery Management System), marine energy storage BMS and small electric boat propulsion systems; in the intelligent equipment field, we cover consumer products like cat litter robots and floor-sweeping robots. Our customers span Europe, the Americas and the domestic China, forming a diversified global layout.",

        ]
      },
      future: {
        title: "Future Outlook",
        description: "BQC Electronics will continue to uphold its core values of 'Integrity, Share, Contribution, and Customer-first', continuously improving technical capabilities and product quality to provide better products and services for global customers and contribute to the development of clean energy."
      },
      milestones: [
        { year: "2003.07", title: "BQC was established in Bantian Shenzhen" },
        { year: "2004.01", title: "Design & Manufacture solar PV (DE)" },
        { year: "2005.10", title: "Certified to ISO9001" },
        { year: "2006.06", title: "PV inverters hit 50% turnover" },
        { year: "2007.12", title: "Moved to new workshop in Changzhen, Guangming district" },
        { year: "2009.03", title: "Design & Manufacture Small Electric Boat Propulsion Systems BMS (EU)" },
        { year: "2012.08", title: "Design & Manufacture Cat Litter Robots for overseas customers" },
        { year: "2013.03", title: "Design & Manufacture BEES BMS (EU)" },
        { year: "2015.04", title: "Certified to ISO13485" },
        { year: "2015.06", title: "Design & Manufacture industrial BESS BMS(North American)" },
        { year: "2016.01", title: "Manufacture Cat Litter Robots (CN)" },
        { year: "2016.08", title: "Manufacture Hotel Robots PCBA" },
        { year: "2017.05", title: "Manufacture Floor Sweeping Robots (CN)" },
        { year: "2018.07", title: "Certified to ISO14001" },
        { year: "2018.11", title: "Manufacture Robot Lawn Mowers (CN)" },
        { year: "2019.01", title: "Certified to IATF16949" },
        { year: "2019.03", title: "Design & Manufacture marine BESS BMS (North EU)" },
        { year: "2023.12", title: "BMS related yield: 35GWh+" },
        { year: "2024", title: "BQC Plant in Malaysia was founded" },
        {year:"2024.12",title:"BMS related yield: 35GWh+"}
      ]
    }
  }

  // const currentContent = language === "en" ? content.en : content.zh
  const currentContent=locale=="en"?content.en:content.zh

  // const breadcrumbs = [
  //   { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
  //   { label: t("about.breadcrumbs.developmentHistory"), href: language === "en" ? "/en/about/development-history" : "/zh-Hans/about/development-history" },
  // ]

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumb}
      backgroundImage="/images/about/developHistory/developHistoryBreadcrumb.png"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">{currentContent.overview.title}</h2>
          <div className="space-y-3 text-gray-500 text-sm max-w-3xl mx-auto text-left">
            {(currentContent.overview.desc as string[]).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
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