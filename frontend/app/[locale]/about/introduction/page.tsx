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
          "深圳市百千成电子有限公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS\\逆变器、智能机器人电路板PCBA设计制造代工企业。公司研发团队可为客户提供储能BMS技术方案咨询、框图设计及器件选型、硬件开发（原理图设计、PCB Layout）、软件及算法开发、器件优化替代、DFM可制造性设计分析、快速制样验证、全自动化烧录测试设计制作等全面研发支持服务。",
          "同时，公司生产基地设备齐全，深圳基地拥有24条高速SMT贴片线、4条波峰焊线、4条后焊线和10条三防喷涂线；马来西亚槟城基地拥有4条高速SMT贴片线、2条全自动插件线和2条三防喷涂线。",
          "可为客户提供元器件采购、贴片、后焊、测试以及喷涂、成品组装等一站式OEM生产制造服务。",
          "公司已通过ISO9001、IATF16949、ISO14001管理体系；并已导入MES管理系统，生产、管理科学规范，全流程数字化可追溯体系确保每片PCBA板高品质交付。已经为国际电力大储前5、船舶储能前3等超过50家国内外各大知名储能客户设计开发、生产制造BMS产品超35GWh+。为国内扫地机器人第1品牌、割草机器人第1品牌等各行业智能机器人客户制造出货PCBA线路板500万+",
          "公司研发、销售、采购位于深圳南山高新科技园旁的西丽睿园，两大制造基地，分别位于深圳光明和马来西亚槟城，现拥有高素质的管理技术人员和员工队伍900多人。",

          // ====== 你新增的中文内容 ======
          "◆ 百千成（BQC）：自2003年起，值得信赖的电子制造合作伙伴。作为领先的电子制造服务（EMS）供应商，深圳市百千诚电子有限公司（BQC Electronics）提供全方位的印刷电路板组装（PCBA）、机械设计与组装、整机组装及测试服务。业务广泛涵盖储能（BMS）、工业控制器、消费电子、通信电子、医疗设备及定制化电子等多个行业。",
          
          <Image
          key="factory-img-zh"
          src="/images/about/companyIntroduction/cover.png"   // 同样改成你的英文图片路径或 URL
          alt="BQC Malaysia Factory"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg my-6 mx-auto"
          />,
        
          "◆ 我司马来西亚PCBA工厂已于2024年5月成功启动大规模生产，目前配置如下：",
          <ul key="zh-ms-lines" className="list-disc pl-6 space-y-1 font-medium">
            <li>4条全自动SMT生产线</li>
            <li>1条自动THT生产线</li>
            <li>日产能达864万贴片点</li>
          </ul>,
           <Image
           key="factory-img-zh-2"
           src="/images/about/companyIntroduction/2.png"   // 同样改成你的英文图片路径或 URL
           alt="BQC Malaysia Factory"
           width={1000}
           height={600}
           className="rounded-lg shadow-lg my-6 mx-auto"
           />,
           <Image
           key="factory-img-zh-3"
           src="/images/about/companyIntroduction/3.png"   // 同样改成你的英文图片路径或 URL
           alt="BQC Malaysia Factory"
           width={1000}
           height={600}
           className="rounded-lg shadow-lg my-6 mx-auto"
           />,
          "此次战略扩张显著增强了我们服务全球客户的能力，具体体现在：",
          <ul key="zh-strategy" className="list-disc pl-6 space-y-1 font-medium text-xl">
            <li>提升制造灵活性</li>
            <li>双产地生产保障连续性</li>
            <li>快速响应东南亚市场需求</li>
          </ul>,

          <p key="zh-core-title" className="font-bold text-xl mt-6">BQC Tech 核心优势</p>,
          <p key="zh-core-1" className="font-semibold text-xl">1. 全流程定制与制造能力</p>,
          "提供从联合设计（JDSM）、OEM代工到PCBA全制程的一站式服务，覆盖消费电子、储能BMS、机器人、医疗及汽车电子等多领域。",
          <p key="zh-core-2" className="font-semiboldtext-xl">2. 深厚的技术与工程资源</p>,
          "拥有超过35名研发与工程人员，涵盖硬件、软件、结构、ID/MD设计及验证团队，支持客户完成产品从概念到量产的全过程。",
          <p key="zh-core-3" className="font-semibold text-xl">3. 关键元器件供应链优势</p>,
          "与ST、NXP、ADI、TI等国际一线芯片原厂及代理商深度合作，享有优先采购权和稳定供应支持，具备国产替代方案能力，有效应对缺料和降本需求。",
          <p key="zh-core-4" className="font-semibold text-xl">4. 规模化制造与质量保障</p>,
          "深圳工厂年产能达35GWh+，拥有22条SMT产线和完善的检测体系；马来西亚工厂辐射东南亚及欧美市场，均通过ISO9001/14001、IATF16949、ISO13485等认证。",
          <p key="zh-core-5" className="font-semibold text-xl">5. 储能与机器人领域的领先经验</p>,
          "已成为全球储能BMS前三及扫地机器人头部品牌的核心供应商，服务多家全球TOP10集成商与品牌客户。",
          <p key="zh-core-6" className="font-semibold text-xl">6. 自动化与数字化管理</p>,
          "自主研发自动化编程与测试设备，引入MES、OA等数字化系统，实现制造过程高效透明、可追溯。",
          <p key="zh-core-7" className="font-semibold text-xl">7. 环境友好与企业社会责任</p>,
          "秉持“共享、贡献、诚信、客户第一”的价值观，致力于通过技术创新推动碳中和，践行可持续制造。",
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
          "Shenzhen Baiqiancheng Electronic Co., Ltd is specializing in the design and manufacture of BMS, PCS/inverter, and intelligent robot PCBA design and manufacturing with over 22 years of history. We are committed to delivering high-quality products and efficient services.",
          "Our production base is well-equipped. The Shenzhen factory including 24 high-speed SMT lines, 4 wave soldering lines, 4 hand-soldering lines, and 10 conformal coating lines, The Malaysia factory including 4 advanced SMT production lines, 2 automatic DIP lines, and 2 conformal coating lines. It enable us to provide one-stop OEM solutions tailored to your specific needs.",
          "At the same time, our R&D team can provide the comprehensive R&D support services include:",
          <ul key="en-rd-services" className="list-disc pl-6 space-y-1 font-medium">
            <li>Energy storage BMS technical consulting</li>
            <li>Block diagram design and component selection</li>
            <li>Hardware development (schematic design, PCB layout)</li>
            <li>Software and algorithm development</li>
            <li>Component optimization and replacement</li>
            <li>Design for Manufacturing (DFM) analysis</li>
            <li>Quick-turn prototype and verification</li>
            <li>Automated programming and testing</li>
          </ul>,
          "We’re also approved for ISO9001, IATF16949, and ISO14001; and has implemented the MES system for scientific and standardized production and management. The comprehensive digital traceability system ensures the high-quality delivery of each PCBA board. We’re already designed, developed, and manufactured BMS products for more than 50 renowned domestic and foreign energy storage customers, including Top 5 international On-grid electricity energy storage and Top 3 marine energy storage companies (the relevant yield is equivalent to 35GWh). And manufactured and shipped over 5 million+ PCBA for Intelligent Robots customers in various industries, including the Top 1 domestic sweeping robots and the Top 1 mowing robots.",
          "BQC's R&D, sales and procurement are located in Xili Ruiyuan next to Shenzhen Nanshan High-tech Park. And the two major manufacturing bases are located in Gongming, Shenzhen and Penang, Malaysia. It currently boasts a workforce of over 900 highly qualified management, technical personnel and employees.",

          // ====== Your new English content ======
          "◆ BQC: Your Trusted Electronics Manufacturing Partner Since 2003. As an electronic manufacturing services (EMS) leading supplier, Shenzhen Baiqiancheng Electronic Co., Ltd. (BQC Electronics) offers a full range services of printed circuit board assembly (PCBA), mechanical design and assembly, box build and testing. And a broad range of industries involved, such as energy storage (BMS), industrial controller, consumer electronics, communication electronics, medical devices and customized electronics.",
          <Image
          key="factory-img-en"
          src="/images/about/companyIntroduction/cover.png"   // 同样改成你的英文图片路径或 URL
          alt="BQC Malaysia Factory"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg my-6 mx-auto"
          />,
          "◆ Our Malaysia PCBA factory successfully commenced mass production in May 2024, currently operating with:",
          <ul key="en-ms-lines" className="list-disc pl-6 space-y-1 font-medium text-xl">
            <li>4 fully automated SMT lines</li>
            <li>1 automated THT line</li>
            <li>Daily production capacity of 8.64 million placement points</li>
          </ul>,
           <Image
           key="factory-img-en-2"
           src="/images/about/companyIntroduction/2.png"   // 同样改成你的英文图片路径或 URL
           alt="BQC Malaysia Factory"
           width={1000}
           height={600}
           className="rounded-lg shadow-lg my-6 mx-auto"
           />,
           <Image
           key="factory-img-en-3"
           src="/images/about/companyIntroduction/3.png"   // 同样改成你的英文图片路径或 URL
           alt="BQC Malaysia Factory"
           width={1000}
           height={600}
           className="rounded-lg shadow-lg my-6 mx-auto"
           />,
          "This strategic expansion enhances our ability to serve global customers with:",
          <ul key="en-strategy" className="list-disc pl-6 space-y-1 font-medium text-xl">
            <li>Increased manufacturing flexibility</li>
            <li>Dual-location production continuity</li>
            <li>Southeast Asia market responsiveness</li>
          </ul>,

          <p key="en-core-title" className="font-bold text-xl mt-6">BQC Tech Core Strengths</p>,
          <p key="en-core-1" className="font-semibold text-xl">End-to-End Customization and Manufacturing Capabilities</p>,
          "We provide one-stop services from joint design (JDSM), OEM manufacturing, to full-range PCBA processes, covering diverse fields such as consumer electronics, energy storage BMS, robotics, medical devices, and automotive electronics.",
          <p key="en-core-2" className="font-semibold text-xl">Strong Technical and Engineering Expertise</p>,
          "With over 35 R&D and engineering professionals specializing in hardware, software, structural design, ID/MD, and validation, we support customers throughout the entire product development cycle—from concept to mass production.",
          <p key="en-core-3" className="font-semibold text-xl">Key Component Supply Chain Advantages</p>,
          "We maintain deep collaborations with leading international chip suppliers and distributors, including ST, NXP, ADI, and TI, ensuring priority procurement and stable supply support. We also offer domestic alternative solutions to address material shortages and cost reduction needs.",
          <p key="en-core-4" className="font-semibold text-xl">Large-Scale Manufacturing and Quality Assurance</p>,
          "Our Shenzhen facility boasts an annual capacity of 35GWh+, with 22 SMT lines and a comprehensive quality inspection system. Our Malaysia plant serves Southeast Asian and European/American markets, with certifications including ISO9001/14001, IATF16949, and ISO13485.",
          <p key="en-core-5" className="font-semibold text-xl">Leading Expertise in Energy Storage and Robotics</p>,
          "We are a core supplier to top global energy storage BMS integrators (ranked top 3) and leading robotic vacuum brands, serving multiple top 10 global integrators and branded customers.",
          <p key="en-core-6" className="font-semibold text-xl">Automation and Digital Management</p>,
          "We develop in-house automated programming and testing equipment and utilize digital systems such as MES and OA to ensure efficient, transparent, and traceable manufacturing processes.",
          <p key="en-core-7" className="font-semibold text-xl">Eco-Friendliness and Social Responsibility</p>,
          "Guided by our values of “Sharing, Contribution, Integrity, and Customer First,” we are committed to achieving carbon neutrality through technological innovation and sustainable manufacturing practices.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
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
  
        <div>
          <video
            src="/Company%20introduction%20video.mp4"
            controls
            width={800}
            height={600}
            className="rounded-lg shadow-lg "
            poster="/images/about/companyIntroduction/cover.png"
          >
            您的浏览器不支持视频播放。
          </video>
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
