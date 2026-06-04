"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Settings, Lightbulb, Globe, Shield, Award, Users, Leaf, CheckCheckIcon } from "lucide-react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

// 数字计数器组件
function Counter({ end, duration = 2000, suffix = "", className }: CounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // 使用缓动函数使动画更自然
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className={cn("text-5xl md:text-6xl font-bold", className)}>
      {count}
      {suffix}
    </div>
  )
}

export function AboutSection() {
  const pathname = usePathname()
  const locale = pathname.split("/")[1] === "en" ? "en" : "zh-Hans"
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      "about.title": { "zh-Hans": "关于我们", en: "About Us" },
      "about.desc": {
        "zh-Hans":
          "百千成电子拥有超过35名研发与工程人员，涵盖硬件、软件、结构、ID/MD/SMT/PCBA设计及验证团队，支持客户完成从概念到量产的全过程",
        en: "BQC Electronics has over 35 R&D and engineering professionals consisting of hardware, software, mechanical, ID/MD as well as SMT & PCBA design and verification teams, enabling full-cycle customer project support from conceptual design through mass production.",
      },
      "about.stat1.title": { "zh-Hans": "BMS研发经验", en: "BMS R&D Experience" },
      "about.stat1.bottom": { "zh-Hans": "年专业经验", en: "Years of Experience" },
      "about.stat2.title": { "zh-Hans": "专利技术", en: "Patented Technology" },
      "about.stat2.bottom": { "zh-Hans": "项核心专利", en: "Core Patents" },
      "about.stat3.title": { "zh-Hans": "全球客户", en: "Global Clients" },
      "about.stat3.bottom": { "zh-Hans": "家合作伙伴", en: "Partners" },
      "about.stat4.title": { "zh-Hans": "研发人员", en: "R&D Staff" },
      "about.stat4.bottom": { "zh-Hans": "占比", en: "Proportion" },
      "about.mission.title": { "zh-Hans": "百千成电子八大核心优势", en: "BQC’s Eight Core Strengths" },
      "about.advantage1.title": {
        "zh-Hans": "全流程定制与制造能力",
        en: "Full-Cycle Customization & Manufacturing Capabilities",
      },
      "about.advantage1.desc": {
        "zh-Hans":
          "百千成电子提供从联合设计（JDSM）到PCBA集成量产交付的一站式整体解决方案，覆盖储能 BMS、智能机器人、医疗电子、汽车电子及高端消费电子等核心领域。",
        en: "BQC Electronics delivers one-stop integrated solutions ranging from joint design service (JDSM) to integrated PCBA mass production delivery, focusing on core sectors including energy storage BMS, intelligent robots, medical electronics, automotive electronics and high-end consumer electronics.",
      },
      "about.advantage2.title": { "zh-Hans": "深厚的技术与工程实力", en: "Solid Technical & Engineering Strength" },
      "about.advantage2.desc": {
        "zh-Hans":
          "百千成电子拥有超过35名研发与工程人员，涵盖硬件、软件、结构、ID/MD/SMT/PCBA设计及验证团队，支持客户完成从概念到量产的全过程。",
        en: "The company employs more than 35 R&D and engineering specialists across hardware, embedded software, mechanical structure, ID/MD, SMT and PCBA design & validation teams, supporting clients through the entire project lifecycle from concept formulation to volume manufacturing.",
      },
      "about.advantage3.title": { "zh-Hans": "关键元器件供应链优势", en: "Competitive Supply Chain for Key Components" },
      "about.advantage3.desc": {
        "zh-Hans":
          "百千成电子与ST、NXP、ADI、TI等国际厂商及代理商深度合作，享有优先采购权与稳定供应支持，具备国产替代方案能力，保障PCBA稳定供货与成本优化。",
        en: "BQC maintains in-depth partnerships with global semiconductor manufacturers and authorized distributors including ST, NXP, ADI and TI. We enjoy priority sourcing and stable component supply alongside mature domestic alternative solutions to stabilize PCBA delivery and optimize overall product cost.",
      },
      "about.advantage4.title": {
        "zh-Hans": "规模化制造与质量保障",
        en: "Large-Scale Production & Reliable Quality Assurance",
      },
      "about.advantage4.desc": {
        "zh-Hans":
          "百千成电子深圳与马来西亚双智造基地协同布局，拥有规模化精密制造能力与完善验证体系，海内外产能联动交付，两地核心体系均通过 ISO9001及ISO13485认证。",
        en: "With dual smart manufacturing bases in Shenzhen, China and Malaysia, BQC realizes coordinated high-precision mass production and comprehensive validation systems to fulfill global order demands. Both facilities are certified with ISO9001 and ISO13485 quality management systems.",
      },
      "about.advantage5.title": {
        "zh-Hans": "储能与机器人领域的领先经验",
        en: "Proven Leading Expertise in Energy Storage & Roboticss",
      },
      "about.advantage5.desc": {
        "zh-Hans": "百千成电子已成为全球储能BMS前三及扫地机器人头部品牌的核心供应商，服务多家全球TOP10集成商与品牌客户。",
        en: "We serve as a core supplier for top-three global energy storage BMS manufacturers and leading robotic vacuum brands, partnering with multiple world’s top 10 system integrators and branded clients.",
      },
      "about.advantage6.title": { "zh-Hans": "自动化与数字化管理", en: "Automated & Digitalized Production Management" },
      "about.advantage6.desc": {
        "zh-Hans": "百千成电子自研自动化程控与测试平台，搭载 MES、OA 等数字化管理系统，实现 PCBA 全流程智能化管控、工艺透明与品质全程可追溯。",
        en: "In-house developed automatic programming and testing platforms together with digital management systems such as MES and OA enable intelligent full-process PCBA control, open production workflow and end-to-end traceability of all quality records.",
      },
      "about.advantage7.title": {
        "zh-Hans": "环境友好与企业社会责任",
        en: "Eco-friendly Operation & Corporate Social Responsibility",
      },
      "about.advantage7.desc": {
        "zh-Hans": "百千成电子始终秉持 客户第一、诚信、分享、回馈 的价值观，致力于通过PCBA加工技术创新推动碳中和，践行可持续制造。",
        en: "BQC Electronics adheres to the core values of Customer-oriented, Integrity, Sharing and Social Feedback. We commit to advancing carbon neutrality via technological innovation in PCBA processing and practicing sustainable manufacturing.",
      },
      "about.advantage8.title":{
        "zh-Hans":"严苛的行业标准合规与定制化质量管控",
        en:"Strict Compliance with Industrial Standards & Customized Quality Control",
      },
      "about.advantage8.desc":{
        "zh-Hans":"质控团队采用 X 射线检测、自动光学检测（AOI）、功能测试系统等先进设备，在生产各环节开展多维度检验，确保产品不良率低于行业基准。同时与客户建立联合质量评审机制，主动预判潜在风险并持续优化产品质量，为高标准应用场景提供可靠制造保障",
        en:"Our QC team deploys advanced testing equipment including X-Ray inspection equipment, AOI (Automated Optical Inspection) and dedicated functional test systems to implement multi-stage in-process inspections across all production procedures, keeping defect rate below industrial average benchmarks. Meanwhile, we establish joint quality review mechanisms with customers to proactively identify potential risks and continuously upgrade product quality, delivering reliable manufacturing support for high-standard application scenarios.",
      },

      "about.learnMore": { "zh-Hans": "了解更多", en: "Learn More" },
    }
    return translations[key]?.[locale] || key
  }

  // 优势图标映射
  const advantageIcons = [
    Settings, // 全流程定制与制造能力
    Lightbulb, // 深厚的技术与工程实力
    Globe, // 关键元器件供应链优势
    Shield, // 规模化制造与质量保障
    Award, // 储能与机器人领域的领先经验
    Users, // 自动化与数字化管理
    Leaf, // 环境友好与企业社会责任
    CheckCheckIcon,//严苛的行业标准合规与定制化质量管控
  ]

  return (
    <section
      className="py-16 bg-cover bg-center bg-fixed"
      //style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="bg-black/70 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">{t("about.title")}</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-4">{t("about.desc")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 统计项 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={t("about.stat1.title")}
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-300 mb-2">{t("about.stat1.title")}</p>
              <Counter end={15} suffix="+" className="text-white" />
              <p className="text-gray-300 mt-2">{t("about.stat1.bottom")}</p>
            </div>

            {/* 统计项 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={t("about.stat2.title")}
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-300 mb-2">{t("about.stat2.title")}</p>
              <Counter end={60} suffix="+" className="text-white" />
              <p className="text-gray-300 mt-2">{t("about.stat2.bottom")}</p>
            </div>

            {/* 统计项 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={t("about.stat3.title")}
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-300 mb-2">{t("about.stat3.title")}</p>
              <Counter end={88} suffix="+" className="text-white" />
              <p className="text-gray-300 mt-2">{t("about.stat3.bottom")}</p>
            </div>

            {/* 统计项 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={t("about.stat4.title")}
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-gray-300 mb-2">{t("about.stat4.title")}</p>
              <Counter end={30} suffix="%" className="text-white" />
              <p className="text-gray-300 mt-2">{t("about.stat4.bottom")}</p>
            </div>
          </div>

          {/* 八大核心优势模块 */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-4 text-center text-white">{t("about.mission.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => {
                const IconComponent = advantageIcons[index]
                return (
                  <div
                    key={num}
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:bg-blue-700 transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {t(`about.advantage${num}.title`)}
                        </h4>
                        <p className="text-base text-gray-700  leading-relaxed">
                          {t(`about.advantage${num}.desc`)}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="text-center mt-8">
              <a
                href={`/${locale}/about/introduction`}
                rel="nofollow"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {t("about.learnMore")}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
