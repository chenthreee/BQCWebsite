"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "./language-context"

interface Product {
  id: number
  title: string
  description: string
  image: string
}

interface ProductCategory {
  id: number
  title: string
  description: string
  image: string
  products: Product[]
}

export function ProductSection() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const categorySliderRef = useRef<HTMLDivElement>(null)

  // 产品分类数据
  const categories: ProductCategory[] = [
    {
      id: 1,
      title: "电力储能BMS",
      description: "专为大型电力储能系统设计的高可靠性BMS解决方案，支持多串并联电池组管理，具备高精度SOC估算和均衡功能",
      image: "/placeholder.svg?height=600&width=1200",
      products: [
        {
          id: 101,
          title: "BMS-P100",
          description: "100kWh电力储能电池管理系统",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: 102,
          title: "BMS-P500",
          description: "500kWh大型储能电池管理系统",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: 103,
          title: "BMS-P1000",
          description: "1MWh集装箱式储能电池管理系统",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: 104,
          title: "BMS-PH100",
          description: "家用储能电池管理系统",
          image: "/placeholder.svg?height=400&width=400",
        },
      ],
    },
    {
      id: 2,
      title: "船舶储能BMS",
      description:
        "针对海洋环境特殊要求设计的船舶储能BMS系统，具备高防护等级、抗震动、抗盐雾腐蚀等特性，满足各类船舶电力系统需求",
      image: "/placeholder.svg?height=600&width=1200",
      products: [
        {
          id: 201,
          title: "BMS-M500",
          description: "大型船舶500kWh储能系统",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: 202,
          title: "BMS-M200",
          description: "中型船舶200kWh储能系统",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: 203,
          title: "BMS-M50",
          description: "小型船舶50kWh储能系统",
          image: "/placeholder.svg?height=400&width=400",
        },
      ],
    },
    {
      id: 3,
      title: "通讯基站BMS",
      description:
        "为通讯基站备电系统设计的高可靠性BMS，具备远程监控、故障预警和智能维护功能，确保通讯系统持续稳定运行",
      image: "/placeholder.svg?height=600&width=1200",
      products: [
        {
          id: 301,
          title: "BMS-T48",
          description: "48V通讯基站备电系统",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: 302,
          title: "BMS-T96",
          description: "96V高压通讯基站备电系统",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          id: 303,
          title: "BMS-T48-R",
          description: "户外型防雨通讯基站备电系统",
          image: "/placeholder.svg?height=400&width=400",
        },
      ],
    },
    // {
    //   id: 4,
    //   title: "OEM代工服务",
    //   description: "提供从PCB设计、SMT贴片到整机组装的全流程OEM代工服务，拥有先进的生产线和严格的质量控制体系",
    //   image: "/placeholder.svg?height=600&width=1200",
    //   products: [
    //     {
    //       id: 401,
    //       title: "PCB设计服务",
    //       description: "专业电路设计与PCB布局服务",
    //       image: "/placeholder.svg?height=400&width=400",
    //     },
    //     {
    //       id: 402,
    //       title: "SMT贴片服务",
    //       description: "高精度SMT贴片与焊接服务",
    //       image: "/placeholder.svg?height=400&width=400",
    //     },
    //     {
    //       id: 403,
    //       title: "整机组装服务",
    //       description: "整机组装与测试服务",
    //       image: "/placeholder.svg?height=400&width=400",
    //     },
    //     {
    //       id: 404,
    //       title: "质量控制服务",
    //       description: "全流程质量控制与测试服务",
    //       image: "/placeholder.svg?height=400&width=400",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   title: "ODM研发服务（BMS）",
    //   description: "基于客户需求提供定制化的产品设计与开发服务，从方案设计、原型制作到量产支持的全流程ODM服务",
    //   image: "/placeholder.svg?height=600&width=1200",
    //   products: [
    //     {
    //       id: 501,
    //       title: "储能系统设计",
    //       description: "定制化储能系统解决方案",
    //       image: "/placeholder.svg?height=400&width=400",
    //     },
    //     {
    //       id: 502,
    //       title: "BMS定制开发",
    //       description: "针对特殊应用场景的BMS定制开发",
    //       image: "/placeholder.svg?height=400&width=400",
    //     },
    //     {
    //       id: 503,
    //       title: "智能控制系统",
    //       description: "工业级智能控制系统开发",
    //       image: "/placeholder.svg?height=400&width=400",
    //     },
    //   ],
    // },
  ]

  const handleCategoryChange = (index: number) => {
    if (!isAnimating && index !== activeCategory) {
      setIsAnimating(true)
      setActiveCategory(index)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  // 滚动分类选项卡到可见区域
  useEffect(() => {
    if (categorySliderRef.current) {
      const slider = categorySliderRef.current
      const activeTab = slider.children[activeCategory] as HTMLElement
      if (activeTab) {
        const sliderRect = slider.getBoundingClientRect()
        const activeTabRect = activeTab.getBoundingClientRect()

        // 如果选项卡不在可见区域内，则滚动到它
        if (activeTabRect.left < sliderRect.left || activeTabRect.right > sliderRect.right) {
          slider.scrollLeft = activeTab.offsetLeft - slider.offsetWidth / 2 + activeTab.offsetWidth / 2
        }
      }
    }
  }, [activeCategory])

  return (
    <section id="product-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">产品中心</h2>

        {/* 分类选项卡 */}
        <div className="relative mb-8">
          <div ref={categorySliderRef} className="flex overflow-x-auto pb-4 scrollbar-hide snap-x">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(index)}
                className={cn(
                  "px-6 py-3 whitespace-nowrap text-lg font-medium transition-colors snap-start",
                  index === activeCategory
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-500",
                )}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* 分类内容 */}
        <div className="relative overflow-hidden">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={cn(
                "transition-all duration-500 absolute inset-0 w-full",
                index === activeCategory
                  ? "opacity-100 translate-x-0 z-10"
                  : index < activeCategory
                    ? "opacity-0 -translate-x-full z-0"
                    : "opacity-0 translate-x-full z-0",
              )}
              style={{ position: index === activeCategory ? "relative" : "absolute" }}
            >
              {/* 分类图片和描述 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-[300px]"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                  <p className="text-gray-700 text-lg">{category.description}</p>
                </div>
              </div>

              {/* 产品列表 */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="h-48 overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={400}
                          height={400}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-xl font-bold mb-2">{product.title}</h4>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                      <div className="px-4 pb-4">
                        <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                          了解更多
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
