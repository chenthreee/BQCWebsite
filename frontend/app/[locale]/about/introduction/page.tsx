"use client"

import PageLayout from "@/components/page-layout"
import { useLanguage } from "@/components/language-context"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

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
      overview: {
        title: "公司概况",
        paragraphs: [
          // ====== 保留原有中文介绍 ======
          "深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS\逆变器、智能机器人电路板PCBA设计制造企业。公司研发团队可为客户提供储能BMS技术方案咨询、框图设计及器件选型、硬件开发（原理图设计、PCB Layout）、软件及算法开发、器件优化替代、DFM可制造性设计分析、快速制样验证、全自动化烧录测试设计制作等全面研发支持服务。",
          "同时，公司生产基地设备齐全，深圳基地拥有24条高速SMT贴片线、4条波峰焊线、4条后焊线和10条三防喷涂线；马来西亚槟城基地拥有4条高速SMT贴片线、2条全自动插件线和2条三防喷涂线。可为客户提供元器件采购、贴片、后焊、测试以及喷涂、成品组装等一站式OEM生产制造服务。",
          <div key="video-zh" className="flex justify-center my-6">
            <video
              src="/Company%20introduction%20video.mp4"
              controls
              width={1000}
              height={600}
              className="rounded-lg shadow-lg"
              poster="/images/about/companyIntroduction/cover.png"
            >
              您的浏览器不支持视频播放。
            </video>
          </div>,
          
          "公司已通过ISO9001、ISO14001、ISO13485、IATF16949、管理体系；并已导入MES管理系统，生产、管理科学规范，全流程数字化可追溯体系确保每片PCBA板高品质交付。已经为国际电力大储前5、船舶储能前3等超过50家国内外各大知名储能客户设计开发、生产制造BMS产品超50GWh+。为国内扫地机器人第1品牌、割草机器人第1品牌、人形机器人等各行业智能机器人客户制造出货PCBA线路板500万+",
          "公司研发、销售、采购位于深圳南山高新科技园旁的南山睿园，两大制造基地，分别位于深圳光明和马来西亚槟城，现拥有高素质的管理技术人员和员工队伍900多人。",
          <div key="factory-images-zh" className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/about/companyIntroduction/factory.png"
                alt="BQC Shenzhen Factory"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/about/companyIntroduction/malaysia.jpg"
                alt="BQC Malaysia Factory"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>,
          "在发展历程中，我们始终坚守“客户第一、诚信、分享、回馈”的企业核心价值观。以“尊重员工价值、赋能个体成长”为核心导向，公司持续为员工创造出更优质的工作环境与完善的福利待遇，注重打造自驱高效型团队，激发员工的创新意识和工作热情。我们坚信，唯有员工在工作中获得价值认同和幸福感，企业才能实现持久稳健发展。",
        ],
      },
    },
    en: {
      title: "Company Introduction",
      subtitle: "Learn about Baiqiancheng Electronics' development history and corporate culture",
      overview: {
        title: "Company Overview",
        paragraphs: [
          // ====== Keep original English overview ======
          "Founded in 2003, Shenzhen Baiqiancheng Electronics Co., Ltd. is a leading provider of Battery Management Systems (BMS) and PCBA (Printed Circuit Board Assembly) solutions for power conversion systems (PCS), inverters, and intelligent robots.",
          // Founded in 2003, Shenzhen Baiqiancheng Electronics Co., Ltd. is a professional enterprise engaged in the design and manufacturing of BMS (Battery Management System), as well as the design, manufacturing and OEM (Original Equipment Manufacturing) of PCBA (Printed Circuit Board Assembly) for PCS /inverters and intelligent robots.
          "With over two decades of experience, we specialize in both design and manufacturing, offering complete OEM and ODM services from concept development to mass production.",
          "Our R&D team delivers comprehensive engineering support, including:",
          <ul key="en-rd-services" className="list-disc pl-6 space-y-2 text-gray-700 text-xl">
            <li>Energy storage BMS consulting</li>
            <li>Circuit architecture and component selection</li>
            <li>Hardware and software development</li>
            <li>Algorithm design and optimization</li>
            <li>Component substitution and cost-down engineering</li>
            <li>DFM (Design for Manufacturing) analysis</li>
            <li>Rapid prototyping and product verification</li>
            <li>Automated programming and testing</li>
          </ul>,
          <div key="en-manufacturing" className="my-4">
            <p className="text-gray-700 text-xl mb-2">Our manufacturing bases are equipped with advanced production facilities to ensure precision, flexibility, and reliability:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-xl mb-3">
              <li><strong>Shenzhen, China:</strong> 24 high-speed SMT lines, 4 wave soldering lines, 4 hand-soldering lines, and 10 conformal coating lines.</li>
              <li><strong>Malaysia:</strong> 4 SMT lines, 2 automatic DIP lines, and 2 conformal coating lines.</li>
            </ul>
            <p className="text-gray-700 text-xl">Combining strong R&D capabilities with extensive manufacturing resources, we provide one-stop OEM solutions tailored to meet the diverse needs of global partners.</p>
          </div>,         
          <div key="video-en" className="flex justify-center my-6">
            <video
              src="/Company%20introduction%20video.mp4"
              controls
              width={1000}
              height={600}
              className="rounded-lg shadow-lg"
              poster="/images/about/companyIntroduction/cover.png"
            >
              Your browser does not support video playback.
            </video>
          </div>,
          
           "BQC Electronics holds ISO9001, ISO14001, ISO13485 ans IATF16949 certifications and has implemented an advanced MES system to ensure standardized, traceable, and high-quality production. Every PCBA we deliver meets the highest quality standards.",
           "We have successfully designed, developed, and manufactured BMS products for over 50 leading energy storage clients, including Top 5 global on-grid and Top 3 marine energy storage companies, with a cumulative capacity of 50 GWh. Additionally, we have produced and shipped over 5 million PCBAs for intelligent robotics, serving industry leaders in robotic vacuum, mowing, and humanoid robot solutions.",
           "Our R&D, sales, and procurement teams are based in Xili Ruiyuan, Shenzhen, while our two main manufacturing facilities are located in Gongming, Shenzhen and Penang, Malaysia. With over 900 skilled professionals, we combine technical expertise, operational excellence, and innovation.",
           <div key="factory-images-zh" className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
           <div className="relative w-full h-[400px]">
             <Image
               src="/images/about/companyIntroduction/factory.png"
               alt="BQC Shenzhen Factory"
               fill
               className="rounded-lg shadow-lg object-cover"
             />
           </div>
           <div className="relative w-full h-[400px]">
             <Image
               src="/images/about/companyIntroduction/malaysia.jpg"
               alt="BQC Malaysia Factory"
               fill
               className="rounded-lg shadow-lg object-cover"
             />
           </div>
         </div>,
           "Throughout our development, we have always adhered to the core values of \" Customer-first, Integrity, Share and Contribution \". Guided by the core principle of \"Respecting Employee Value and Empowering Individual Growth\", the company continuously creates a better working environment and comprehensive welfare benefits for employees. It focuses on building a self-driven and highly efficient team, and inspiring employees' sense of innovation and work enthusiasm. We firmly believe that only when employees gain a sense of value recognition and happiness in their work can the enterprise achieve sustained and steady development."
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
      backgroundImage="/images/about/aboutBreadcrumb.png"
    >
      {/* 上半部分：左右分屏 */}
      <div className="grid grid-cols-1 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">{currentContent.overview.title}</h2>
          {currentContent.overview.paragraphs.slice(0, 5).map((paragraph, index) => (
            <div key={index} className="mb-4 leading-relaxed">
              {typeof paragraph === "string" ? (
                <p className="text-gray-700 text-xl">{paragraph}</p>
              ) : (
                paragraph
              )}
            </div>
          ))}
        </div>
      </div>
  
      {/* 下半部分：新增宣传内容，横向铺满 */}
      <div className="mt-12 max-w-none">
        {currentContent.overview.paragraphs.slice(5).map((paragraph, index) => (
          <div key={`extra-${index}`} className="mb-4 leading-relaxed">
            {typeof paragraph === "string" ? (
              <p className=" text-gray-700 text-xl">{paragraph}</p>
            ) : (
              paragraph
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  )
}  
