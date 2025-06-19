import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const productCategories = [
    {
      title: "储能BMS",
      description: "电池管理系统解决方案",
      href: "/products/energy-storage-bms",
      image: "/placeholder.svg",
      subcategories: [
        {
          title: "电力大储BMS",
          href: "/products/energy-storage-bms/power-storage",
        },
        {
          title: "大型船舶储能BMS",
          href: "/products/energy-storage-bms/large-ship",
        },
        {
          title: "小型船舶储能BMS",
          href: "/products/energy-storage-bms/small-ship",
        },
        {
          title: "通信基站BMS",
          href: "/products/energy-storage-bms/communication-base",
        },
        {
          title: "储能EMS（总控）",
          href: "/products/energy-storage-bms/energy-storage-ems",
        }
      ]
    },
    {
      title: "储能PCS",
      description: "高性能的储能变流器系统",
      href: "/products/energy-storage-pcs",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "智能控制系统",
      description: "先进的智能控制解决方案",
      href: "/products/intelligent-robot-systems",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "工业控制板",
      description: "可靠稳定的工业控制板卡",
      href: "/products/industrial-control-boards",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "医疗设备",
      description: "专业可靠的医疗设备控制解决方案",
      href: "/products/medical-devices",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <PageLayout
      title="产品中心"
      subtitle="百千成电子的创新产品与解决方案"
      breadcrumbs={[{ label: "产品中心", href: "/products" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((category, index) => (
          <Link key={index} href={category.href} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <div className="text-blue-600 flex items-center font-medium">
                  查看产品
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  )
}
