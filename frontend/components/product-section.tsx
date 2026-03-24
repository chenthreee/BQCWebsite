"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  title: string
  description: string
  image: string
  link: string
}

interface ProductCategory {
  id: number
  title: string
  description: string
  image: string
  products: Product[]
}

export function ProductSection() {
  const pathname = usePathname()
  const locale = pathname.split("/")[1] === "en" ? "en" : "zh-Hans"
  
  const [activeCategory, setActiveCategory] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const categorySliderRef = useRef<HTMLDivElement>(null)

  // 翻译函数
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      "section.title": {
        "zh-Hans": "产品中心",
        "en": "Products",
      },
      "section.subtitle": {
        "zh-Hans": "百千成电子专注于智能储能系统与电子控制硬件的研发制造，依托自主研发的储能 BMS / PCS 全系列解决方案，覆盖电力储能、大型及小型船舶储能、通信基站储能等应用领域。同时，公司在智能机器人控制系统、工业控制板及医疗设备电子模块方面具备成熟的工程与制造能力。以高精度自动化设备为基础，提供专业的 SMT贴片加工与PCBA加工服务，为全球客户提供高可靠、高集成度的电子控制与能源管理硬件解决方案。",
        "en": "Baiqiancheng Electronics (BQC) focuses on the development and manufacturing of intelligent energy storage systems and electronic control hardware. With our self-developed BMS and PCS solutions, we support applications such as grid-scale energy storage, marine energy storage systems, and telecom base station power management.Beyond energy storage, BQC also provides engineering and manufacturing services for intelligent robotic control systems, industrial control boards, and medical electronic modules.Equipped with high-precision automated production lines, we offer professional SMT assembly and PCBA manufacturing services, delivering high-reliability, high-integration electronic control and energy management solutions for global customers.",
      },
      "button.viewMore": {
        "zh-Hans": "查看更多",
        "en": "View More",
      },
    }
    return translations[key]?.[locale] || key
  }

  // 产品分类数据
  const categories: ProductCategory[] = [
    {
      id: 1,
      title: locale === "en" ? "Energy Storage BMS/PCS" : "储能BMS/储能PCS",
      description: locale === "en"
        ? "Comprehensive BMS/PCS solutions for energy storage, including Power Storage BMS, Large Ship BMS, Small Ship BMS, Communication Base Station BMS, Energy Storage EMS, and PCS."
        : "储能BMS/PCS全系列解决方案，包括电力大储BMS、大型船舶储能BMS、小型船舶储能BMS、通讯基站储能BMS、储能EMS（总控）、储能PCS等。",
      image: "/images/mainPage/BMSPCSBIG.png",
      products: [
        { id: 101, title: locale === "en" ? "Power Storage BMS" : "电力大储BMS", description: "", image: "/images/mainPage/powerStorageBMS.png", link: "/products/energy-storage-bms/power-storage" },
        { id: 102, title: locale === "en" ? "Large-scale Marine Energy Storage BMS" : "大型船舶储能BMS", description: "", image: "/images/mainPage/largeShip.png", link: "/products/energy-storage-bms/large-ship" },
        { id: 103, title: locale === "en" ? "Small-scale Marine Energy Storage BMS" : "小型船舶储能BMS", description: "", image: "/images/mainPage/smallShip.png", link: "/products/energy-storage-bms/small-ship" },
        { id: 104, title: locale === "en" ? "Communication Base Station BMS" : "通讯基站储能BMS", description: "", image: "/images/mainPage/communicationBase.png", link: "/products/energy-storage-bms/communication-base" },
        //{ id: 105, title: locale === "en" ? "Energy Storage EMS (Master Control)" : "储能EMS（总控）", description: "", image: "/images/mainPage/powerStorageEMS.jpg", link: "/products/energy-storage-bms/energy-storage-ems" },
        { id: 106, title: locale === "en" ? "Energy Storage PCS" : "储能PCS", description: "", image: "/images/mainPage/powerStoragePCS.png", link: "/products/energy-storage-pcs" },
      ],
    },
    {
      id: 2,
      title: locale === "en" ? "Intelligent Robot Systems" : "智能机器人系统",
      description: locale === "en"
        ? "Intelligent robot system solutions for various industries."
        : "面向各行业提供智能机器人系统解决方案，包括智能物流机器人、自动化巡检机器人、智能配送机器人、扫地机器人、割草机机器人等。",
      image: "/images/mainPage/intelligentRobot.jpg",
      products: [
        { id: 201, title: locale === "en" ? "Robot Control Board" : "机器人控制板", description: "", image: "/placeholder.svg?height=400&width=400", link: "/products/intelligent-robot-systems" },
      ],
    },
    {
      id: 3,
      title: locale === "en" ? "Industrial Control Boards" : "工业控制板",
      description: locale === "en"
        ? "Industrial control board solutions in the field of automation and control, covering PLC control boards, servo drive control boards, frequency converter control boards, industrial gateways/communication modules, HMI human-machine interface control boards, etc."
        : "自动化与控制领域的工业控制板解决方案，覆盖PLC控制板、伺服驱动控制板、变频器控制板、工业网关/通讯模块、HMI人机界面控制板等。",
      image: "/images/mainPage/industrialControlBoard.png",
      products: [
        { id: 301, title: locale === "en" ? "Industrial Control Board" : "工业控制板", description: "", image: "/placeholder.svg?height=400&width=400", link: "/products/industrial-control-boards" },
      ],
    },
    {
      id: 4,
      title: locale === "en" ? "Medical Devices" : "医疗设备",
      description: locale === "en"
        ? "Medical device solutions for healthcare industry."
        : "医疗行业的医疗设备解决方案。",
      image: "/images/mainPage/medicalDevices.png",
      products: [
        { id: 401, title: locale === "en" ? "Medical Device" : "医疗设备", description: "", image: "/placeholder.svg?height=400&width=400", link: "/products/medical-devices" },
      ],
    },
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("section.title")}</h2>
        <p className="text-xl text-gray-600 max-w-6xl mx-auto text-center mb-12">{t("section.subtitle")}</p>

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
                <Link
                  href={`/${locale}${category.id === 1 ? '/products/energy-storage-bms' : category.products[0].link}.html`}
                  className="w-full md:w-1/2 mb-6 md:mb-0 block"
                  //rel="nofollow"
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-[300px] hover:shadow-xl transition-shadow"
                  />
                </Link>
                <div className="w-full md:w-1/2 md:pl-12">
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                  <p className="text-gray-700 text-lg">{category.description}</p>
                </div>
              </div>

              {/* 产品列表或查看更多按钮 */}
              {category.id === 1 ? (
                <div className="relative">
                  {/* 这个地方lg:grid-cols-5 的意思就是一行五个 之前是lg:grid-cols-4 就是四个 然后第五个会到下一行就不美观了 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                    {category.products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/${locale}${product.link}.html`}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 block"
                        //rel="nofollow"
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
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        {/* 底部查看更多按钮 */}
        <div className="flex justify-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8">
            <Link href={`/${locale}${categories[activeCategory].id === 1 ? '/products/energy-storage-bms.html' : categories[activeCategory].products[0].link}`} rel="nofollow">
              {t("button.viewMore")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
