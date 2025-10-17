"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { Mail, Phone, MapPin, Factory, Globe, Languages } from "lucide-react"
import { useState, useEffect } from "react"

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // 导航到高德地图的函数
  const handleNavigate = (address: string, title: string) => {
    const encodedAddress = encodeURIComponent(address)

    // 检测用户设备
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)

    if (isMobile) {
      if (userAgent.includes("android")) {
        // Android设备：优先高德地图APP，备选高德网页版
        const amapUrl = `androidamap://route?sourceApplication=webapp&dname=${encodedAddress}&dev=0`

        // 尝试打开高德地图APP
        const iframe = document.createElement("iframe")
        iframe.style.display = "none"
        iframe.src = amapUrl
        document.body.appendChild(iframe)

        // 延时后删除iframe并打开网页版作为备选
        setTimeout(() => {
          document.body.removeChild(iframe)
          window.open(`https://uri.amap.com/navigation?to=${encodedAddress}`, "_blank")
        }, 2000)

        return
      } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
        // iOS设备：优先高德地图APP，备选高德网页版
        const amapUrl = `iosamap://path?sourceApplication=webapp&dname=${encodedAddress}&dev=0`

        // 尝试打开高德地图APP
        window.location.href = amapUrl

        // 备选方案：如果APP没有安装，打开网页版
        setTimeout(() => {
          window.open(`https://uri.amap.com/navigation?to=${encodedAddress}`, "_blank")
        }, 2500)

        return
      }
    }

    // 桌面设备或其他情况：直接使用高德地图网页版
    window.open(`https://ditu.amap.com/search?query=${encodedAddress}`, "_blank")
  }

  const content = {
    "zh-Hans": {
      title: "联系我们",
      subtitle: "欢迎通过以下方式与我们联系",
      breadcrumbs: [{ label: "联系我们", href: "/zh-Hans/contact.html" }],
      generalContact: {
        title: "联系方式（中国）",
        description: "欢迎通过以下方式与我们联系，或致电获取即时帮助：",
        phone: "86-18823428986",
        fax: "86-755-26788245",
        email: "jacky@bqcdz.com",
        malaysiaPhone: "60-184027289",
        malaysiaFax: "xx-755-26788245",
        malaysiaEmail: "bqctech@bqcdz.com",
        features: [
          {
            icon: Factory,
            title: "产能优势",
            description: "35GWh+ 年产能",
          },
          {
            icon: Globe,
            title: "全球交付",
            description: "50+ 国际客户",
          },
          {
            icon: Languages,
            title: "多语言服务",
            description: "中英文技术支持",
          },
        ],
      },
      locations: {
        shenzhenFactory: {
          title: "深圳工厂",
          address: "深圳市光明区玉塘街道长圳社区沙头巷工业区3B3栋整套 518132",
          image: "/images/contact/location-zh.png",
        },
        rdCenter: {
          title: "研发中心",
          address: "深圳市南山区西丽桃源街道龙珠三路45号南山睿园17栋慧泽楼5层 518055",
          image: "/images/contact/location-zh.png",
        },
        malaysiaFactory: {
          title: "马来西亚工厂",
          address: "PMT 828, PERSIARAN CASSIA SELATAN 4, TAMAN PERINDUSTRIAN BATU KAWAN, 14110 BANDAR CASSIA.",
          image: "/images/contact/location-zh.png",
        },
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      breadcrumbs: [{ label: "Contact Us", href: "/en/contact.html" }],
      generalContact: {
        title: "General Contact（China）",
        description: "Send us a general inquiry through below info or contact by phone for immediate assistance:",
        phone: "86-18823428986",
        fax: "86-755-26788245",
        email: "jacky@bqcdz.com",
        malaysiaPhone: "60-184027289",
        malaysiaFax: "xx-755-26788245",
        malaysiaEmail: "bqctech@bqcdz.com",
        features: [
          {
            icon: Factory,
            title: "Production Capacity",
            description: "35GWh+ Annual Capacity",
          },
          {
            icon: Globe,
            title: "Global Delivery",
            description: "50+ International Clients",
          },
          {
            icon: Languages,
            title: "Multi-language Support",
            description: "Chinese & English Support",
          },
        ],
      },
      locations: {
        shenzhenFactory: {
          title: "Shenzhen Factory",
          address:
            "Complete Building 3, No.3B ShaTouXiang Industrial Zone, ChangZhen Community, Yutang Street, Guangming District, Shenzhen, China. 518132",
          image: "/images/contact/location-en.png",
        },
        rdCenter: {
          title: "R&D Centre",
          address: "5th Floor, Huize Building, Unit 17th The Sage Innopark, Longzhu 3rd Road No.45, Nanshan District, Shenzhen. 518055",
          image: "/images/contact/location-en.png",
        },
        malaysiaFactory: {
          title: "Malaysia Factory",
          address: "PMT 828, PERSIARAN CASSIA SELATAN 4, TAMAN PERINDUSTRIAN BATU KAWAN, 14110 BANDAR CASSIA.",
          image: "/images/contact/location-en.png",
        },
      },
    },
  }

  const currentContent = content[locale]

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/images/contact/contact-us-banner.png"
    >
      {/* 联系方式  */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* 左：联系方式（中国）——从第1列开始跨2列 */}
        <div className="md:col-start-1 md:col-span-2">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md h-full">
            <h2 className="text-2xl font-bold mb-6">{currentContent.generalContact.title}</h2>
            <p className="text-gray-700 mb-6">{currentContent.generalContact.description}</p>

            {/* 主要联系方式 */}
            <div className="flex flex-wrap md:flex-nowrap items-start justify-around gap-6 md:gap-12 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{locale === "en" ? "Phone" : "电话"}</h3>
                  <p className="text-gray-700 whitespace-nowrap">{currentContent.generalContact.phone}</p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{locale === "en" ? "Fax" : "传真"}</h3>
                  <p className="text-gray-700 whitespace-nowrap">{currentContent.generalContact.fax}</p>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{locale === "en" ? "Email" : "邮箱"}</h3>
                  <p className="text-gray-700 whitespace-nowrap">{currentContent.generalContact.email}</p>
                </div>
              </div>
            </div>

            {/* 三个特色功能 */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentContent.generalContact.features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div> */}
          </div>
        </div>

        {/* 右：马来西亚联系卡 —— 放在第3列，竖向排列 */}
        <div className="md:col-start-3 md:col-span-1">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md h-full">
            <h2 className="text-2xl font-bold mb-6">{locale === "en" ? "Malaysia Contact" : "联系方式（马来西亚）"}</h2>
            <p className="text-gray-700 mb-6">
              {locale === "en" ? "Reach our Malaysia team:" : "马来西亚团队联系方式："}
            </p>

            {/* 右卡内部：上下排列，空间更充足 */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{locale === "en" ? "Phone" : "电话"}</h3>
                  <p className="text-gray-700 whitespace-nowrap">{currentContent.generalContact.malaysiaPhone}</p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{locale === "en" ? "Fax" : "传真"}</h3>
                  <p className="text-gray-700 whitespace-nowrap">{currentContent.generalContact.malaysiaFax}</p>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{locale === "en" ? "Email" : "邮箱"}</h3>
                  <p className="text-gray-700 whitespace-nowrap">{currentContent.generalContact.malaysiaEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 位置卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div
          onClick={() =>
            handleNavigate(
              currentContent.locations.shenzhenFactory.address,
              currentContent.locations.shenzhenFactory.title,
            )
          }
          className="block cursor-pointer"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <Image
                src={currentContent.locations.shenzhenFactory.image || "/placeholder.svg"}
                alt={currentContent.locations.shenzhenFactory.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{currentContent.locations.shenzhenFactory.title}</h3>
                  <p className="text-gray-700">{currentContent.locations.shenzhenFactory.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() =>
            handleNavigate(currentContent.locations.rdCenter.address, currentContent.locations.rdCenter.title)
          }
          className="block cursor-pointer"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <Image
                src={currentContent.locations.rdCenter.image || "/placeholder.svg"}
                alt={currentContent.locations.rdCenter.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{currentContent.locations.rdCenter.title}</h3>
                  <p className="text-gray-700">{currentContent.locations.rdCenter.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() =>
            handleNavigate(
              currentContent.locations.malaysiaFactory.address,
              currentContent.locations.malaysiaFactory.title,
            )
          }
          className="block cursor-pointer"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <Image
                src={currentContent.locations.malaysiaFactory.image || "/placeholder.svg"}
                alt={currentContent.locations.malaysiaFactory.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{currentContent.locations.malaysiaFactory.title}</h3>
                  <p className="text-gray-700">{currentContent.locations.malaysiaFactory.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 新增图片板块 */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">{locale === "en" ? "Our Global Presence" : "我们的全球布局"}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === "en"
              ? "BQC Electronics operates across multiple locations worldwide, providing comprehensive services to our global customers."
              : "百千成电子在全球多个地区开展业务，为全球客户提供全面的服务。"}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/contact/global.jpg"
            alt={locale === "en" ? "BQC Global Presence" : "百千成全球布局"}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </PageLayout>
  )
}
