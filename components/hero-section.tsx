"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // 轮播图数据
  const slides = [
    {
      id: 1,
      title: t("company.name"),
      subtitle: t("company.slogan"),
      description: t("company.description"),
      buttonText: t("button.learnMore"),
      buttonLink: "/about",
      image: "/images/hero-circuit-board.png",
      mobileImage: "/images/hero-circuit-board.png",
    },
    {
      id: 2,
      title: "储能BMS系统专家",
      subtitle: "安全可靠，智能高效",
      description: "专注于电力储能、船舶储能、通讯基站等领域的BMS系统研发与生产",
      buttonText: t("button.learnMore"), 
      buttonLink: "/products",
      image: "/images/image_BMS.png",
      mobileImage: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 3,
      title: "OEM代工服务",
      subtitle: "一站式电子制造解决方案",
      description: "提供从PCB设计、SMT贴片到整机组装的全流程OEM代工服务",
      buttonText: t("button.learnMore"),
      buttonLink: "/services",
      image: "/images/image_OEM.png",
      mobileImage: "/placeholder.svg?height=800&width=600",
    },
  ]

  // 自动轮播
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 7000) // 7秒切换一次
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsAnimating(false), 600) // 动画持续时间
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      setTimeout(() => setIsAnimating(false), 600) // 动画持续时间
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 600) // 动画持续时间
    }
  }

  const scrollToContent = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-black text-white overflow-hidden h-screen pt-20" aria-label="主横幅">
      {/* 轮播图容器 */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-1000",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            {/* 背景图片 - 桌面版 */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* 背景图片 - 移动版 */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src={slide.mobileImage || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>

            {/* 电流动画效果 */}
            <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
              {/* 电流动画元素 */}
              <div className="absolute w-[300px] h-[300px] top-1/4 left-1/4 opacity-30">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="none"
                    stroke="#4F8BFF"
                    strokeWidth="2"
                    d="M10,90 Q50,30 90,90 T170,90"
                    className="animate-electric-pulse"
                  />
                  <path
                    fill="none"
                    stroke="#4F8BFF"
                    strokeWidth="2"
                    d="M30,50 Q70,10 110,50 T190,50"
                    className="animate-electric-pulse-delay"
                  />
                </svg>
              </div>

              <div className="absolute w-[400px] h-[400px] bottom-1/4 right-1/4 opacity-30">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="none"
                    stroke="#4F8BFF"
                    strokeWidth="2"
                    d="M10,90 Q50,30 90,90 T170,90"
                    className="animate-electric-pulse-delay"
                  />
                  <path
                    fill="none"
                    stroke="#4F8BFF"
                    strokeWidth="2"
                    d="M20,130 Q60,70 100,130 T180,130"
                    className="animate-electric-pulse"
                  />
                </svg>
              </div>

              {/* 闪烁的电流点 */}
              <div className="absolute w-2 h-2 rounded-full bg-blue-400 top-1/3 left-1/3 animate-electric-flicker"></div>
              <div className="absolute w-3 h-3 rounded-full bg-blue-300 top-2/3 left-1/2 animate-electric-flicker-delay"></div>
              <div className="absolute w-2 h-2 rounded-full bg-blue-400 bottom-1/3 right-1/3 animate-electric-flicker-delay-2"></div>

              {/* 水平电流线 */}
              <div className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-1/3 top-1/4 left-1/3 animate-electric-flow"></div>
              <div className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-1/4 bottom-1/3 right-1/4 animate-electric-flow-reverse"></div>
            </div>

            {/* 内容 */}
            <div className="container mx-auto px-4 h-full relative z-30 flex flex-col justify-center">
              <div className="max-w-3xl">
                <div
                  className={cn(
                    "transform transition-all duration-1000 delay-300",
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  )}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">{slide.title}</h1>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-blue-300">
                    {slide.subtitle}
                  </h2>
                </div>

                <div
                  className={cn(
                    "transform transition-all duration-1000 delay-500",
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  )}
                >
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">{slide.description}</p>
                </div>

                <div
                  className={cn(
                    "transform transition-all duration-1000 delay-700",
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  )}
                >
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group relative overflow-hidden">
                    <span className="relative z-10">{slide.buttonText}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_100%] animate-gradient-x"></span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 导航按钮 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white w-8" : "bg-white/50",
            )}
            aria-label={`转到第 ${index + 1} 张幻灯片`}
          />
        ))}
      </div>

      {/* 左右箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors hidden md:block"
        aria-label="上一张"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors hidden md:block"
        aria-label="下一张"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* 向下滚动指示器 */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center text-white animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <span className="text-sm mb-2">{t("scroll.down")}</span>
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  )
}

