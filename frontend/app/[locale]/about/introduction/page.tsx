

import PageLayout from "@/components/page-layout"
import Image from "next/image"

export default function CompanyIntroductionPage({ params }: { params: { locale: string } }) {
  const locale = params.locale
  const language = locale === "en" ? "en" : "zh"

  
  const content = {
    zh: {
      title: "公司介绍",
      main:"关于我们",
      subtitle: "了解百千成电子的发展历程与企业文化",
      sections: [
        {
          title: "一、公司概况",
          content: [
            "深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS\逆变器、智能机器人电路板PCBA设计制造企业。"
          ]
        },
        {
          title: "二、研发支持服务",
          content: [
            "公司研发团队可为客户提供储能BMS技术方案咨询、框图设计及器件选型、硬件开发（原理图设计、PCB Layout）、软件及算法开发、器件优化替代、DFM可制造性设计分析、快速制样验证、全自动化烧录测试设计制作等全面研发支持服务，为后续高品质SMT贴片加工与量产交付奠定坚实基础.。"
          ]
        },
        {
          title: "三、生产基地与制造服务",
          content: [
            "公司生产基地设备齐全，深圳基地拥有24条高速SMT贴片线、4条波峰焊线、4条后焊线和10条三防喷涂线；马来西亚槟城基地拥有4条高速SMT贴片线、2条全自动插件线和2条三防喷涂线。百千成电子可为客户提供元器件采购、贴片、后焊、测试以及喷涂、成品组装等一站式OEM生产制造服务。",
            <div key="video-zh" className="flex justify-center my-6">
              <video
                src="/Company%20introduction%20video-web.mp4"
                controls
                preload="metadata"
                playsInline
                width={1000}
                height={600}
                className="w-full max-w-[1000px] h-auto rounded-lg shadow-lg"
                poster="/images/about/companyIntroduction/cover.png"
              >
                您的浏览器不支持视频播放。
              </video>
            </div>
          ]
        },
        {
          title: "四、资质认证与客户成果",
          content: [
            "公司已通过ISO9001、ISO14001、ISO13485、IATF16949、管理体系；并已导入MES管理系统，生产、管理科学规范，全流程数字化可追溯体系确保每片PCBA板高品质交付。已经为国际电力大储前5、船舶储能前3等超过50家国内外各大知名储能客户设计开发、生产制造BMS产品超50GWh+。为国内扫地机器人第1品牌、割草机器人第1品牌、人形机器人等各行业智能机器人客户制造出货PCBA线路板500万+"
          ]
        },
        {
          title: "五、公司布局与团队规模",
          content: [
            "百千成电子研发、销售、采购位于深圳南山高新科技园旁的南山睿园，两大制造基地，分别位于深圳光明和马来西亚槟城，现拥有高素质的管理技术人员和员工队伍900多人。",
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
                  src="/images/about/companyIntroduction/malaysia2.png"
                  alt="BQC Malaysia Factory"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ]
        },
        {
          title: "六、企业价值观与员工发展",
          content: [
            "在发展历程中，我们始终坚守\"客户第一、诚信、分享、回馈\"的企业核心价值观。以\"尊重员工价值、赋能个体成长\"为核心导向，公司持续为员工创造出更优质的工作环境与完善的福利待遇，注重打造自驱高效型团队，激发员工的创新意识和工作热情。我们坚信，唯有员工在工作中获得价值认同和幸福感，企业才能实现持久稳健发展。"
          ]
        }
      ]
    },
    en: {
      title: "Company Introduction",
      main:"About Us",
      subtitle: "Learn about Baiqiancheng Electronics' development history and corporate culture",
      sections: [
        {
          title: "I. Company Overview",
          content: [
            "Shenzhen Baiqiancheng Electronics Co., Ltd. was founded in 2003. It is a high-tech enterprise specializing in the design and manufacture of BMS for energy storage lithium batteries, as well as PCBA design and manufacturing for PCS inverters and intelligent robotics applications."
          ]
        },
        {
          title: "II. R&D Support Services",
          content: [
            "Our professional R&D team provides one-stop R&D support services, including:",
            <ul key="en-rd-services" className="list-disc pl-6 space-y-2 text-gray-700 text-xl mt-3">
              <li>Energy storage BMS technical consulting</li>
              <li>Block diagram design and component selection</li>
              <li>Hardware (schematic design and PCB layout) and software development</li>
              <li>Algorithm design and optimization</li>
              <li>Component optimization and replacement</li>
              <li>DFM (Design for Manufacturing) analysis</li>
              <li>Rapid prototyping and product verification</li>
              <li>Automated programming and testing</li>
            </ul>,
            " These services lay a solid foundation for high-quality SMT assembly and reliable mass production."
          ]
        },
        {
          title: "III. Production Base & Manufacturing Services",
          content: [
            <div key="en-manufacturing" className="space-y-3">
              <p className="text-gray-700 text-xl">Our manufacturing bases are equipped with advanced production facilities to ensure precision, flexibility, and reliability:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-xl">
                <li><strong>Shenzhen, China:</strong> 24 high-speed SMT lines, 4 wave soldering lines, 4 post-soldering lines, and 10 conformal coating lines.</li>
                <li><strong>Malaysia:</strong> 4 high-speed SMT lines, 2 fully automated through-hole insertion lines, and 2 conformal coating lines.</li>
              </ul>
              <p className="text-gray-700 text-xl">Baiqiancheng Electronics provides one-stop OEM manufacturing services covering component sourcing, SMT assembly, post-soldering, functional testing, conformal coating, and finished product assembly.</p>
            </div>,
            <div key="video-en" className="flex justify-center my-6">
              <video
                src="/Company%20introduction%20video-web.mp4"
                controls
                preload="metadata"
                playsInline
                width={1000}
                height={600}
                className="w-full max-w-[1000px] h-auto rounded-lg shadow-lg"
                poster="/images/about/companyIntroduction/cover.png"
              >
                Your browser does not support video playback.
              </video>
            </div>
          ]
        },
        {
          title: "IV. Certifications and Customer Achievements",
          content: [
            "The company is certified to ISO 9001, ISO 14001, ISO 13485, and IATF 16949 management system standards. Meanwhile, we have implemented an MES management system to support standardized production and refined management. Our full-process digital traceability system helps ensure the high-quality delivery of every PCBA.",
            "To date, we have provided BMS R&D and manufacturing services to more than 50 well-known energy storage customers in China and overseas, including customers among the leading players in large-scale power storage and marine energy storage, with cumulative delivered capacity exceeding 50 GWh. For intelligent robotics applications, including leading brands in robotic vacuum cleaners, robotic lawn mowers, and humanoid robots, we have shipped more than 5 million PCBA units."
          ]
        },
        {
          title: "V. Company Footprint and Team Size",
          content: [
            "Our R&D, sales, and procurement teams are located at Nanshan Ruiyuan, adjacent to Nanshan High-Tech Industrial Park in Shenzhen. The company operates two major manufacturing bases in Guangming, Shenzhen and Penang, Malaysia, with more than 900 employees across management, engineering, and production teams.",
            <div key="factory-images-en" className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
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
                  src="/images/about/companyIntroduction/malaysia2.png"
                  alt="BQC Malaysia Factory"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ]
        },
        {
          title: "VI. Corporate Values and Employee Development",
          content: [
            "Throughout our development, we have consistently upheld the core values of Customer First, Integrity, Sharing, and Giving Back. Guided by the philosophy of \"Respecting employee value and empowering individual growth,\" the company continuously creates a superior working environment and comprehensive benefits for employees. We focus on building a self-driven and efficient team while stimulating employees’ innovation awareness and work enthusiasm. We firmly believe that only when employees feel valued and fulfilled at work can the company achieve sustainable and steady growth."
          ]
        }
      ]
    },
  }

  const currentContent = language === "en" ? content.en : content.zh

  
  // const breadcrumbs = [
  //   { label: t("about.breadcrumbs.main"), href: language === "en" ? "/en/about" : "/zh-Hans/about" },
  //   { label: t("about.breadcrumbs.intro"), href: language === "en" ? "/en/about/introduction" : "/zh-Hans/about/introduction" },
  // ]

  const breadcrumbs = [
    { label:currentContent.main, href: language === "en" ? "/en/about" : "/zh-Hans/about" },
    { label: currentContent.title, href: language === "en" ? "/en/about/introduction" : "/zh-Hans/about/introduction" },
  ]

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={breadcrumbs}
      backgroundImage="/images/about/aboutBreadcrumb.png"
    >
      <div className="max-w-6xl mx-auto">
        {currentContent.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-780">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="leading-relaxed">
                  {typeof item === "string" ? (
                    <p className="text-gray-700 text-xl">{item}</p>
                  ) : (
                    item
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}  
