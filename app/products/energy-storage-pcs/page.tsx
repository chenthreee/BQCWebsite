import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EnergyStoragePcsPage() {
  return (
    <PageLayout
      title="储能PCS"
      subtitle="高性能的储能变流器系统"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能PCS", href: "/products/energy-storage-pcs" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">什么是PCS系统？</h2>
            <p className="text-lg text-gray-700 mb-4">
              PCS（Power Conversion
              System）储能变流器系统是储能系统的核心设备，负责实现直流与交流电能的双向转换，是连接电池系统与电网的桥梁。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              一个高性能的PCS系统具有高效率、高可靠性、低谐波、快速响应等特点，能够满足各类储能应用场景的需求。
            </p>
            <p className="text-lg text-gray-700">
              百千成电子的储能PCS系统采用先进的电力电子技术和控制算法，为客户提供高效、可靠、智能的电能转换解决方案。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="PCS系统示意图"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">PCS系统核心功能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="双向变换" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">双向变换</h4>
              <p className="text-gray-700">实现直流与交流电能的双向转换，支持电池充电和放电过程。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="电网支撑" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">电网支撑</h4>
              <p className="text-gray-700">提供电网调频、调压、无功补偿等辅助服务，支持电网稳定运行。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="孤岛运行" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">孤岛运行</h4>
              <p className="text-gray-700">支持离网运行模式，在电网故障时为重要负载提供不间断电源。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="保护功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">保护功能</h4>
              <p className="text-gray-700">提供过压、欠压、过流、过温等多重保护功能，确保系统安全运行。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">产品系列</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="工商业储能PCS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">工商业储能PCS</h3>
              <p className="text-gray-700 mb-4">
                功率范围30kW-500kW，适用于工商业储能系统，具有高效率、高可靠性、低谐波等特点。
              </p>
              <Link
                href="/products/energy-storage-pcs/commercial"
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                查看详情
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="电力储能PCS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">电力储能PCS</h3>
              <p className="text-gray-700 mb-4">
                功率范围500kW-5MW，适用于电力储能系统，具有模块化设计、高功率密度、快速响应等特点。
              </p>
              <Link
                href="/products/energy-storage-pcs/power"
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                查看详情
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="家用储能PCS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">家用储能PCS</h3>
              <p className="text-gray-700 mb-4">
                功率范围3kW-20kW，适用于家庭储能系统，具有体积小、噪音低、易安装等特点。
              </p>
              <Link
                href="/products/energy-storage-pcs/home"
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                查看详情
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="微电网PCS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">微电网PCS</h3>
              <p className="text-gray-700 mb-4">
                功率范围50kW-1MW，适用于微电网系统，具有并离网无缝切换、多机并联、黑启动等特点。
              </p>
              <Link
                href="/products/energy-storage-pcs/microgrid"
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                查看详情
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">技术优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="高效率" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">高效率</h3>
            <p className="text-gray-700">采用先进的电力电子拓扑结构和控制算法，转换效率高达98.5%，大幅降低能量损耗。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="高可靠性" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">高可靠性</h3>
            <p className="text-gray-700">采用冗余设计和高可靠性元器件，MTBF超过10万小时，确保系统长期稳定运行。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="智能控制" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">智能控制</h3>
            <p className="text-gray-700">
              采用先进的数字控制技术，实现快速响应和精准控制，支持多种运行模式和控制策略。
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
