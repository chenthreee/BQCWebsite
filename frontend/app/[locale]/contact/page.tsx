"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
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

  const content = {
    "zh-Hans": {
      title: "联系我们",
      subtitle: "欢迎通过以下方式与我们联系",
      breadcrumbs: [{ label: "联系我们", href: "/zh-Hans/contact" }],
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
          address: "深圳市光明区玉塘街道长圳社区沙头巷工业区3栋3B号整栋，518132"
        },
        rdCenter: {
          title: "研发中心",
          address: "深圳市南山区"
        },
        malaysiaFactory: {
          title: "马来西亚工厂",
          address: "马来西亚槟城"
        }
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      breadcrumbs: [{ label: "Contact Us", href: "/en/contact" }],
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
          address: "Complete Building 3, No.3B ShaTouXiang Industrial Zone, ChangZhen Community, Yutang Street, Guangming District, Shenzhen, China. 518132"
        },
        rdCenter: {
          title: "R&D Centre",
          address: "Nanshan District, Shenzhen, China."
        },
        malaysiaFactory: {
          title: "Malaysia Factory",
          address: "State of Penang, Malaysia."
        }
      }
    }
  }

  const currentContent = content[locale]
  const baseHref = `/${locale}/contact`

  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      {/* 联系方式 */}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href={`${baseHref}/shenzhen-factory`} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
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
        </Link>

        <Link href={`${baseHref}/rd-center`} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
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
        </Link>

        <Link href={`${baseHref}/malaysia-factory`} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
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
        </Link>
      </div>
    </PageLayout>
  )
} 