"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

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
      "about.title": { "zh-Hans": "关于我们", "en": "About Us" },
      "about.desc": { "zh-Hans": "百千成电子是专注于储能BMS系统研发与OEM代工服务的高新技术企业，致力于为全球客户提供安全可靠的储能解决方案。", "en": "BAIQIANCHENG Electronics is a high-tech enterprise focusing on energy storage BMS R&D and OEM manufacturing services, committed to providing safe and reliable energy storage solutions for global customers." },
      "about.stat1.title": { "zh-Hans": "BMS研发经验", "en": "BMS R&D Experience" },
      "about.stat1.bottom": { "zh-Hans": "年专业经验", "en": "Years of Experience" },
      "about.stat2.title": { "zh-Hans": "专利技术", "en": "Patented Technology" },
      "about.stat2.bottom": { "zh-Hans": "项核心专利", "en": "Core Patents" },
      "about.stat3.title": { "zh-Hans": "全球客户", "en": "Global Clients" },
      "about.stat3.bottom": { "zh-Hans": "家合作伙伴", "en": "Partners" },
      "about.stat4.title": { "zh-Hans": "研发人员", "en": "R&D Staff" },
      "about.stat4.bottom": { "zh-Hans": "占比", "en": "Proportion" },
    }
    return translations[key]?.[locale] || key
  }
  return (
    <section
      className="py-16 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="bg-black/70 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">{t("about.title")}</h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            {t("about.desc")}
          </p>

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
        </div>
      </div>
    </section>
  )
}
