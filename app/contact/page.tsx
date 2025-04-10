import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const locations = [
    {
      title: "研发中心",
      description: "百千成电子技术创新的核心",
      address: "深圳市南山区科技园",
      phone: "+86 755 8765 4321",
      email: "rd@baiqiancheng.com",
      link: "/contact/rd-center",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "深圳工厂",
      description: "先进的电子产品制造基地",
      address: "深圳市宝安区工业园区",
      phone: "+86 755 1234 5678",
      email: "factory-sz@baiqiancheng.com",
      link: "/contact/shenzhen-factory",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "马来西亚工厂",
      description: "面向东南亚市场的生产基地",
      address: "马来西亚吉隆坡工业园区",
      phone: "+60 3 1234 5678",
      email: "factory-my@baiqiancheng.com",
      link: "/contact/malaysia-factory",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <PageLayout
      title="联系我们"
      subtitle="随时与百千成电子取得联系"
      breadcrumbs={[{ label: "联系我们", href: "/contact" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {locations.map((location, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <Image
                src={location.image || "/placeholder.svg"}
                alt={location.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{location.title}</h3>
              <p className="text-gray-700 mb-4">{location.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{location.email}</span>
                </div>
              </div>
              <Link href={location.link} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                了解详情
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">联系表单</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  电子邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的电子邮箱"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的电话号码"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  主题
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入主题"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  留言内容
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的留言内容"
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">提交</Button>
            </form>
          </div>
          <div className="bg-gray-100 p-8 flex items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">公司总部</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">地址</h3>
                    <p className="text-gray-700">深圳市南山区高新科技园区</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">电话</h3>
                    <p className="text-gray-700">+86 755 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">电子邮箱</h3>
                    <p className="text-gray-700">info@baiqiancheng.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">公司地图</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
          <p className="text-gray-600">此处将显示公司地图</p>
        </div>
      </div>
    </PageLayout>
  )
}
