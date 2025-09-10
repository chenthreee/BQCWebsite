"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Settings, Lightbulb, Globe, Shield, Award, Users, Leaf } from "lucide-react"

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
          "百千成电子是专注于储能BMS系统研发与OEM代工服务的高新技术企业，致力于为全球客户提供安全可靠的储能解决方案。",
        en: "BAIQIANCHENG Electronics is a high-tech enterprise focusing on energy storage BMS R&D and OEM manufacturing services, committed to providing safe and reliable energy storage solutions for global customers.",
      },
      "about.stat1.title": { "zh-Hans": "BMS研发经验", en: "BMS R&D Experience" },
      "about.stat1.bottom": { "zh-Hans": "年专业经验", en: "Years of Experience" },
      "about.stat2.title": { "zh-Hans": "专利技术", en: "Patented Technology" },
      "about.stat2.bottom": { "zh-Hans": "项核心专利", en: "Core Patents" },
      "about.stat3.title": { "zh-Hans": "全球客户", en: "Global Clients" },
      "about.stat3.bottom": { "zh-Hans": "家合作伙伴", en: "Partners" },
      "about.stat4.title": { "zh-Hans": "研发人员", en: "R&D Staff" },
      "about.stat4.bottom": { "zh-Hans": "占比", en: "Proportion" },
      "about.mission.title": { "zh-Hans": "七大核心优势", en: "Seven Core Advantages" },
      "about.advantage1.title": {
        "zh-Hans": "全流程定制与制造能力",
        en: "End-to-End Customization and Manufacturing Capabilities",
      },
      "about.advantage1.desc": {
        "zh-Hans":
          "提供从联合设计（JDSM）、OEM代工到PCBA的一站式服务，覆盖消费电子、储能BMS、机器人、医疗及汽车电子等多领域。",
        en: "We provide one-stop services from joint design (JDSM), OEM manufacturing, to full-range PCBA processes, covering diverse fields such as consumer electronics, energy storage BMS, robotics, medical devices, and automotive electronics.",
      },
      "about.advantage2.title": { "zh-Hans": "深厚的技术与工程实力", en: "Strong Technical and Engineering Expertise" },
      "about.advantage2.desc": {
        "zh-Hans":
          "拥有超过35名研发与工程人员，涵盖硬件、软件、结构、ID/MD设计及验证团队，支持客户完成从概念到量产的全过程。",
        en: "With over 35 R&D and engineering professionals specializing in hardware, software, structural design, ID/MD, and validation, we support customers throughout the entire product development cycle—from concept to mass production.",
      },
      "about.advantage3.title": { "zh-Hans": "关键元器件供应链优势", en: "Key Component Supply Chain Advantages" },
      "about.advantage3.desc": {
        "zh-Hans":
          "与ST、NXP、ADI、TI等国际厂商及代理商深度合作，享有优先采购权和稳定供应支持，具备国产替代方案能力，有效应对缺料和降本需求。",
        en: "We maintain deep collaborations with leading international chip suppliers and distributors, including ST, NXP, ADI, and TI, ensuring priority procurement and stable supply support. We also offer domestic alternative solutions to address material shortages and cost reduction needs.",
      },
      "about.advantage4.title": {
        "zh-Hans": "规模化制造与质量保障",
        en: "Large-Scale Manufacturing and Quality Assurance",
      },
      "about.advantage4.desc": {
        "zh-Hans":
          "深圳工厂年产能达35GWh+，拥有22条SMT产线和完善的质检体系；马来西亚工厂辐射东南亚及欧美市场，均通过ISO9001/14001、IATF16949、ISO13485等认证。",
        en: "Our Shenzhen facility boasts an annual capacity of 35GWh+, with 22 SMT lines and a comprehensive quality inspection system. Our Malaysia plant serves Southeast Asian and European/American markets, with certifications including ISO9001/14001, IATF16949, and ISO13485.",
      },
      "about.advantage5.title": {
        "zh-Hans": "储能与机器人领域的领先经验",
        en: "Leading Expertise in Energy Storage and Robotics",
      },
      "about.advantage5.desc": {
        "zh-Hans": "已成为全球储能BMS前三及扫地机器人头部品牌的核心供应商，服务多家全球TOP10集成商与品牌客户。",
        en: "We are a core supplier to top global energy storage BMS integrators (ranked top 3) and leading robotic vacuum brands, serving multiple top 10 global integrators and branded customers.",
      },
      "about.advantage6.title": { "zh-Hans": "自动化与数字化管理", en: "Automation and Digital Management" },
      "about.advantage6.desc": {
        "zh-Hans": "自主研发自动化编程与测试设备，引入MES、OA等数字化系统，实现制造过程高效透明、可追溯。",
        en: "We develop in-house automated programming and testing equipment and utilize digital systems such as MES and OA to ensure efficient, transparent, and traceable manufacturing processes.",
      },
      "about.advantage7.title": {
        "zh-Hans": "环境友好与企业社会责任",
        en: "Eco-Friendliness and Social Responsibility",
      },
      "about.advantage7.desc": {
        "zh-Hans": "秉持 共享、贡献、诚信、客户第一 的价值观，致力于通过技术创新推动碳中和，践行可持续制造。",
        en: "Guided by our values of Sharing, Contribution, Integrity, and Customer First,  we are committed to achieving carbon neutrality through technological innovation and sustainable manufacturing practices.",
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
  ]

  return (
    <section
      className="py-16 bg-cover bg-center bg-fixed"
      //style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="bg-black/70 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">{t("about.title")}</h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">{t("about.desc")}</p>

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

          {/* 七大核心优势模块 */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">{t("about.mission.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6, 7].map((num, index) => {
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
                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {t(`about.advantage${num}.title`)}
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
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
