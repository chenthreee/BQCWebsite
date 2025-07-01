"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function CompanyIntroductionPage() {
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

  const content = {
    zh: {
      title: "公司介绍",
      subtitle: "了解百千成电子的发展历程与企业文化",
      breadcrumbs: [
        { label: "关于我们", href: "/about" },
        { label: "公司介绍", href: "/about/introduction" },
      ],
      overview: {
        title: "公司概况",
        paragraphs: [
          "深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS\\逆变器、智能机器人电路板PCBA设计制造代工企业。公司研发团队可为客户提供储能BMS技术方案咨询、框图设计及器件选型、硬件开发（原理图设计、PCB Layout）、软件及算法开发、器件优化替代、DFM可制造性设计分析、快速制样验证、全自动化烧录测试设计制作等全面研发支持服务。同时，公司生产基地设备齐全，拥有22条高速SMT贴片线、4条波峰焊线、4条后焊线和7条三防喷涂线，可为客户提供元器件采购、贴片、后焊、测试以及喷涂、成品组装等一站式OEM生产制造服务。",
          "公司已通过ISO9001、IATF16949、ISO14001管理体系；并已导入MES管理系统，生产、管理科学规范，全流程数字化可追溯体系确保每片PCBA板高品质交付。已经为国际电力大储前5、船舶储能前3等超过50家国内外各大知名储能客户设计开发、生产制造BMS产品超35GWh+。为国内扫地机器人第1品牌、割草机器人第1品牌等各行业智能机器人客户制造出货PCBA线路板500万+",
          "公司研发、销售、采购位于深圳南山高新科技园旁的西丽睿园，两大制造基地，分别位于深圳公明和马来西亚槟城，现拥有高素质的管理技术人员和员工队伍800多人。",
        ],
      },
    },
    en: {
      title: "Company Introduction",
      subtitle: "Learn about Baiqiancheng Electronics' development history and corporate culture",
      breadcrumbs: [
        { label: "About Us", href: "/about" },
        { label: "Company Introduction", href: "/about/introduction" },
      ],
      overview: {
        title: "Company Overview",
        paragraphs: [
          <span className="text-lg font-medium">
            "Shenzhen Baiqiancheng Electronic Co., Ltd is specializing in the design and manufacture of BMS, PCS/inverter, and intelligent robot PCBA design and manufacturing with over 21 years of history. We are committed to delivering high-quality products and efficient services. Our advanced manufacturing capabilities, including 22 high-speed SMT lines, 4 wave soldering lines, 4 hand-soldering lines, and 7 conformal coating lines, enable us to provide one-stop OEM solutions tailored to your specific needs."
          </span>,
          <div className="space-y-2">
            <p className="font-semibold text-lg">At the same time, our R&D team can provide comprehensive R&D support services including:</p>
            <ul className="list-disc pl-6 space-y-1 font-medium">
              <li>Energy storage BMS technical consulting</li>
              <li>Block diagram design and component selection</li>
              <li>Hardware development (schematic design, PCB layout)</li>
              <li>Software and algorithm development, Component optimization and replacement</li>
              <li>Design for Manufacturing (DFM) analysis</li>
              <li>Quick-turn prototype and verification</li>
              <li>Automated programming and testing</li>
            </ul>
          </div>,
          <span className="text-lg font-semibold">
            "We're also approved for ISO9001, IATF16949, and ISO14001; and has implemented the MES system for scientific and standardized production and management. The comprehensive digital traceability system ensures the high-quality delivery of each PCBA board. We're already designed, developed, and manufactured BMS products for more than 50 renowned domestic and foreign energy storage customers, including Top 5 international On-grid electricity energy storage and Top 3 marine energy storage companies (the relevant yield is equivalent to 35GWh). And manufactured and shipped over 5 million+ PCBA for Intelligent Robots customers in various industries, including the Top 1 domestic sweeping robots and the Top 1 mowing robots."
          </span>,
          <span className="text-lg font-semibold">
            "BQC's R&D, sales and procurement are located in Xili Ruiyuan next to Shenzhen Nanshan High-tech Park. And the two major manufacturing bases are located in Gongming, Shenzhen and Penang, Malaysia. It currently boasts a workforce of over 800 highly qualified management, technical personnel and employees."
          </span>,
        ],
      },
    },
  }

  const currentContent = language === "en" ? content.en : content.zh

  const breadcrumbs = [
    { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
    { label: t("about.breadcrumbs.intro"), href: language === "en" ? "/en/about/introduction" : "/zh-Hans/about/introduction" },
  ]

  return (
    <PageLayout
      title={t("about.introduction.title")}
      subtitle={t("about.introduction.subtitle")}
      breadcrumbs={breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">{currentContent.overview.title}</h2>
          {currentContent.overview.paragraphs.map((paragraph, index) => (
            <div key={index} className="mb-4">
              {typeof paragraph === 'string' ? (
                <p className="text-lg text-gray-700">{paragraph}</p>
              ) : (
                paragraph
              )}
            </div>
          ))}
        </div>
        <div>
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt={language === "zh" ? "百千成电子公司总部" : "Baiqiancheng Electronics Headquarters"}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </PageLayout>
  )
} 