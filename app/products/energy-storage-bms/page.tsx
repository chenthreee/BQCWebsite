import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function EnergyStorageBmsPage() {
  return (
    <PageLayout
      title="储能BMS系统"
      subtitle="安全可靠的电池管理系统解决方案"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">什么是BMS系统？</h2>
            <p className="text-lg text-gray-700 mb-4">
              BMS（Battery Management
              System）电池管理系统是连接电池和用户的重要纽带，主要负责电池的监测、保护、均衡和管理等功能。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              一个优秀的BMS系统能够准确监测电池状态，保护电池免受过充、过放、过流、过温等伤害，延长电池寿命，提高系统安全性和可靠性。
            </p>
            <p className="text-lg text-gray-700">
              百千成电子拥有15年以上BMS系统研发经验，为客户提供安全可靠、性能卓越的储能BMS解决方案。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="BMS系统示意图"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">BMS系统核心功能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="监测功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">监测功能</h4>
              <p className="text-gray-700">实时监测电池电压、电流、温度等参数，准确计算SOC、SOH等状态。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="保护功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">保护功能</h4>
              <p className="text-gray-700">提供过充、过放、过流、过温等多重保护，确保电池安全运行。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="均衡功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">均衡功能</h4>
              <p className="text-gray-700">采用主动均衡技术，平衡各单体电池电压，提高电池组一致性和使用寿命。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="通信功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">通信功能</h4>
              <p className="text-gray-700">支持CAN、RS485等多种通信协议，实现与上位机和其他设备的数据交互。</p>
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
                alt="电力储能BMS系列"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">电力储能BMS系列</h3>
              <p className="text-gray-700 mb-4">
                专为大型电力储能系统设计的高可靠性BMS解决方案，支持多串并联电池组管理，具备高精度SOC估算和均衡功能。
              </p>
              <Link
                href="/products/energy-storage-bms/power-storage"
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
                alt="船舶储能BMS系列"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">船舶储能BMS系列</h3>
              <p className="text-gray-700 mb-4">
                针对海洋环境特殊要求设计的船舶储能BMS系统，具备高防护等级、抗震动、抗盐雾腐蚀等特性。
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/products/energy-storage-bms/large-ship"
                  className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                >
                  大型船舶BMS
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="/products/energy-storage-bms/small-ship"
                  className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
                >
                  小型船舶BMS
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="通信基站BMS系列"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">通信基站BMS系列</h3>
              <p className="text-gray-700 mb-4">
                为通信基站备电系统设计的高可靠性BMS，具备远程监控、故障预警和智能维护功能。
              </p>
              <Link
                href="/products/energy-storage-bms/communication-base"
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
                alt="储能EMS系统"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">储能EMS（总控）</h3>
              <p className="text-gray-700 mb-4">
                智能高效的能源管理系统，实现储能系统的智能调度和管理，优化能源使用效率。
              </p>
              <Link
                href="/products/energy-storage-bms/energy-storage-ems"
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
              <Image src="/placeholder.svg?height=40&width=40" alt="高精度算法" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">高精度算法</h3>
            <p className="text-gray-700">自主研发的SOC估算算法，精度高达±2%，准确把握电池状态，提高系统可靠性。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="主动均衡技术" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">主动均衡技术</h3>
            <p className="text-gray-700">
              采用高效能量传输的主动均衡技术，均衡效率高达95%，有效提高电池组一致性和使用寿命。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="高可靠性设计" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">高可靠性设计</h3>
            <p className="text-gray-700">采用冗余设计和故障诊断技术，MTBF超过10万小时，确保系统长期稳定运行。</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
