"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
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
      if (userAgent.includes('android')) {
        // Android设备：优先高德地图APP，备选高德网页版
        const amapUrl = `androidamap://route?sourceApplication=webapp&dname=${encodedAddress}&dev=0`
        
        // 尝试打开高德地图APP
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = amapUrl
        document.body.appendChild(iframe)
        
        // 延时后删除iframe并打开网页版作为备选
        setTimeout(() => {
          document.body.removeChild(iframe)
          window.open(`https://uri.amap.com/navigation?to=${encodedAddress}`, '_blank')
        }, 2000)
        
        return
      } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        // iOS设备：优先高德地图APP，备选高德网页版
        const amapUrl = `iosamap://path?sourceApplication=webapp&dname=${encodedAddress}&dev=0`
        
        // 尝试打开高德地图APP
        window.location.href = amapUrl
        
        // 备选方案：如果APP没有安装，打开网页版
        setTimeout(() => {
          window.open(`https://uri.amap.com/navigation?to=${encodedAddress}`, '_blank')
        }, 2500)
        
        return
      }
    }
    
    // 桌面设备或其他情况：直接使用高德地图网页版
    window.open(`https://ditu.amap.com/search?query=${encodedAddress}`, '_blank')
  }

  const content = {
    "zh-Hans": {
      title: "联系我们",
      subtitle: "欢迎通过以下方式与我们联系",
      breadcrumbs: [{ label: "联系我们", href: "/zh-Hans/contact.html" }],
      generalContact: {
        title: "联系方式",
        description: "欢迎通过以下方式与我们联系，或致电获取即时帮助：",
        workingHours: "工作时间：周一至周五 9:00-18:00",
        phone: "电话：86-755-26950571",
        fax: "传真：86-755-26788245",
        email: "邮箱：pcba@bqcdz.com"
      },
      locations: {
        shenzhenFactory: {
          title: "深圳工厂",
          address: "深圳市光明区玉塘街道长圳社区沙头巷工业区3栋3B号整栋，518132",
          image: "/images/contact/location-zh.png"
        },
        rdCenter: {
          title: "研发中心",
          address: "深圳市南山区南山睿园17栋5楼整层",
          image: "/images/contact/location-zh.png"
        },
        malaysiaFactory: {
          title: "马来西亚工厂",
          address: "马来西亚槟城",
          image: "/images/contact/location-zh.png"
        }
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      breadcrumbs: [{ label: "Contact Us", href: "/en/contact.html" }],
      generalContact: {
        title: "General Contact",
        description: "Send us a general inquiry through below info or contact by phone for immediate assistance:",
        workingHours: "We are in the office from 9 am to 6 pm, Monday through Friday.",
        phone: "T: 86-755-26950571",
        fax: "F: 86-755-26788245",
        email: "E: pcba@bqcdz.com"
      },
      locations: {
        shenzhenFactory: {
          title: "Shenzhen Factory",
          address: "Complete Building 3, No.3B ShaTouXiang Industrial Zone, ChangZhen Community, Yutang Street, Guangming District, Shenzhen, China. 518132",
          image: "/images/contact/location-en.png"
        },
        rdCenter: {
          title: "R&D Centre",
          address: "17th Floor, Building 17, Nanshan Ruiyuan, Nanshan District, Shenzhen, China.",
          image: "/images/contact/location-en.png"
        },
        malaysiaFactory: {
          title: "Malaysia Factory",
          address: "State of Penang, Malaysia.",
          image: "/images/contact/location-en.png"
        }
      }
    }
  }

  const currentContent = content[locale]
  const baseHref = `/${locale}/contact.html`

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/images/contact/contact-us-banner.png"
    >
      {/* 联系方式  */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">{currentContent.generalContact.title}</h2>
          <p className="text-gray-700 mb-6">{currentContent.generalContact.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{locale === "en" ? "Working Hours" : "工作时间"}</h3>
                <p className="text-gray-700">{currentContent.generalContact.workingHours}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{locale === "en" ? "Phone" : "电话"}</h3>
                <p className="text-gray-700">{currentContent.generalContact.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{locale === "en" ? "Fax" : "传真"}</h3>
                <p className="text-gray-700">{currentContent.generalContact.fax}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{locale === "en" ? "Email" : "邮箱"}</h3>
                <p className="text-gray-700">{currentContent.generalContact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 位置卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div 
          onClick={() => handleNavigate(currentContent.locations.shenzhenFactory.address, currentContent.locations.shenzhenFactory.title)}
          className="block cursor-pointer"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <Image
                src={currentContent.locations.shenzhenFactory.image}
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
          onClick={() => handleNavigate(currentContent.locations.rdCenter.address, currentContent.locations.rdCenter.title)}
          className="block cursor-pointer"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <Image
                src={currentContent.locations.rdCenter.image}
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
          onClick={() => handleNavigate(currentContent.locations.malaysiaFactory.address, currentContent.locations.malaysiaFactory.title)}
          className="block cursor-pointer"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <Image
                src={currentContent.locations.malaysiaFactory.image}
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
          <h2 className="text-3xl font-bold mb-4">
            {locale === "en" ? "Our Global Presence" : "我们的全球布局"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === "en" 
              ? "BQC Electronics operates across multiple locations worldwide, providing comprehensive services to our global customers."
              : "百千成电子在全球多个地区开展业务，为全球客户提供全面的服务。"
            }
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/contact/global.png"
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