

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
            "深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS逆变器、智能机器人电路板PCBA设计制造的行业领先企业。"
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
            "公司制造实力雄厚，两大基地总面积达26,000多平方米。其中， 深圳厂区面积20,000多平方米，拥有24条高速SMT贴片线、4条波峰焊线、4条后焊线和10条三防喷涂线； 马来西亚厂区面积6,000平方米，拥有4条高速SMT贴片线、2条全自动插件线和2条三防喷涂线。百千成电子可为客户提供元器件采购、贴片、后焊、烧录、功能测试以及三防漆喷涂、成品组装等一站式OEM/EMS生产制造服务。",
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
            "公司已通过ISO9001、ISO14001、ISO13485、IATF16949等国际管理体系认证；并全面导入MES管理系统，生产与管理科学规范，全流程数字化可追溯体系确保每片PCBA板高品质交付。在储能领域，公司产品线全面覆盖电力大储、通讯基站储能、工商业储能、船舶储能以及家储等核心场景。目前已为国际电力大储前5、船舶储能前3等超过50家国内外各大知名储能客户设计开发、生产制造BMS产品超50GWh+。同时，为国内扫地机器人第1品牌、割草机器人第1品牌、人形机器人等各行业智能机器人客户制造出货PCBA线路板500万+。"
          ]
        },
        {
          title: "五、公司布局与团队规模",
          content: [
            "百千成电子研发、销售、采购中心位于深圳南山高新科技园旁的南山睿园，两大制造基地分别位于深圳光明和马来西亚槟城。随着业务的持续拓展，公司现拥有高素质的管理技术人员和员工队伍1,000多人。",
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
            "Founded in 2003, Shenzhen BQC Electronic Co., Ltd. is an industry-leading enterprise specializing in the design and manufacture of energy storage lithium battery BMS, as well as the PCBA design and manufacture for PCS inverters and intelligent robots."
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
              <p className="text-gray-700 text-xl">The company boasts robust manufacturing capabilities with two major bases covering a total area of over 26,000 square meters.</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-xl">
                <li><strong>Shenzhen, China:</strong> 24 high-speed SMT lines, 4 wave soldering lines, 4 hand soldering (post-soldering) lines, and 10 conformal coating lines.</li>
                <li><strong>Malaysia:</strong> 4 high-speed SMT lines, 2 fully automated DIP lines, and 2 conformal coating lines.</li>
              </ul>
              <p className="text-gray-700 text-xl">BQC provides customers with one-stop OEM/EMS manufacturing services, including component procurement, SMT, hand soldering (post-soldering) , programming , functional testing (FCT) , conformal coating, and finished product assembly.</p>
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
            "The company has passed international management system certifications including ISO9001, ISO14001, ISO13485, and IATF16949. We have fully implemented the MES management system, ensuring scientific and standardized production and management. A full-process digital traceability system ensures the high-quality delivery of every single PCBA.",
            "In the field of energy storage, the company's product line comprehensively covers core scenarios such as utility-scale energy storage , telecom base station energy storage , commercial & industrial (C&I) energy storage , marine energy storage , and residential energy storage . To date, BQC has designed, developed, and manufactured over 50GWh+ of BMS products for more than 50 renowned global energy storage customers, including the top 5 in international utility-scale energy storage and the top 3 in marine energy storage . Concurrently, we have manufactured and shipped over 5 million PCBA boards for various intelligent robot clients, including China's No.1 robotic vacuum brand, No.1 robotic lawn mower brand, and humanoid robot developers."
          ]
        },
        {
          title: "V. Company Footprint and Team Size",
          content: [
            "BQC's R&D, sales, and procurement centers are located at Nanshan Ruiyuan, adjacent to the Shenzhen Nanshan High-Tech Park. Our two manufacturing bases are situated in Guangming, Shenzhen, and Penang, Malaysia. Driven by continuous business expansion, the company now boasts a highly qualified management and technical team with a workforce of over 1,000 employees .",
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
            "Throughout our development, we have consistently adhered to our core corporate values: \"Customer First, Integrity,Sharing, and Giving Back.\" Guided by \"respecting employee value and empowering individual growth,\" the company continuously creates superior working environments and comprehensive welfare benefits. We focus on building selfdriven, highly efficient teams to stimulate employees' innovation awareness and work passion. We firmly believe that only when employees achieve value recognition and happiness in their work can the enterprise achieve sustainable and steady development."
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
