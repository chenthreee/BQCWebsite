import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function EnergyStorageEmsPage() {
  // 产品数据 - EMS产品系列
  const products = [
    {
      id: "industrial-ems",
      model: "工业园区EMS",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "处理器", value: "四核1.5GHZ" },
        { label: "内存", value: "4G+16G" },
        { label: "显示屏", value: "10.1寸触控屏" },
        { label: "通信接口", value: "以太网/4G/WiFi" }
      ],
    },
    {
      id: "power-grid-ems",
      model: "电网级EMS",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "处理器", value: "八核2.0GHZ" },
        { label: "内存", value: "8G+32G" },
        { label: "通信接口", value: "以太网/光纤" },
        { label: "支持规模", value: "100MW+" }
      ],
    },
    {
      id: "microgrid-ems",
      model: "微电网EMS",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "处理器", value: "四核1.8GHZ" },
        { label: "内存", value: "4G+16G" },
        { label: "通信接口", value: "以太网/4G" },
        { label: "支持规模", value: "10MW" }
      ],
    },
    {
      id: "commercial-ems",
      model: "商业建筑EMS",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "处理器", value: "双核1.2GHZ" },
        { label: "内存", value: "2G+8G" },
        { label: "通信接口", value: "以太网/WiFi" },
        { label: "支持规模", value: "1MW" }
      ],
    },
  ]

  return (
    <PageLayout
      title="储能EMS系统"
      subtitle="智能高效的能源管理系统解决方案"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "储能EMS", href: "/products/energy-storage-bms/energy-storage-ems" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">储能EMS系统概述</h2>
            <p className="text-lg text-gray-700 mb-4">
              储能EMS（Energy Management System）是储能系统的核心控制中枢，负责系统的智能调度、运行优化和经济效益最大化。
            </p>
            <p className="text-lg text-gray-700">
              我们的EMS系统采用先进的人工智能算法，结合实时数据分析和预测技术，为不同规模的储能应用场景提供最优化的运行策略和管理方案。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="储能EMS系统"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 产品展示区 */}
        <h2 className="text-3xl font-bold mb-8 text-center">产品系列</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/energy-storage-bms/energy-storage-ems/${product.id}`}
              className="block group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-64">
                  <Image
                    src={product.image}
                    alt={product.model}
                    width={300}
                    height={300}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">{product.model}</h3>
                  <div className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">应用案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="工业园区EMS案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">工业园区EMS案例</h3>
            <p className="text-gray-700 mb-4">
              为某大型工业园区提供的100MWh级储能EMS解决方案，实现园区配电网智能调度，年节省电费超过1000万元。
            </p>
            <Link
              href="/products/energy-storage-bms/energy-storage-ems/case-industrial"
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
            >
              查看详情
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="电网级EMS案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">电网级EMS案例</h3>
            <p className="text-gray-700 mb-4">
              为某省电网公司提供的500MWh储能调度EMS系统，实现电网削峰填谷、调频调压等功能，提高电网运行效率。
            </p>
            <Link
              href="/products/energy-storage-bms/energy-storage-ems/case-grid"
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
            >
              查看详情
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
