import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CommunicationBaseBmsPage() {
  return (
    <PageLayout
      title="通讯基站储能BMS"
      subtitle="为通讯基站提供可靠的备电系统解决方案"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "通讯基站储能BMS", href: "/products/energy-storage-bms/communication-base" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">通讯基站储能BMS系统概述</h2>
            <p className="text-lg text-gray-700 mb-4">
              百千成电子的通讯基站储能BMS系统是专为通讯基站备电系统设计的高可靠性电池管理系统，适用于4G/5G基站、微波站、卫星地面站等通讯设施。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我们的通讯基站BMS系统具备远程监控、故障预警和智能维护功能，能够确保通讯系统在市电中断时持续稳定运行，提高通讯网络的可靠性。
            </p>
            <p className="text-lg text-gray-700">
              百千成电子已为全球众多通讯运营商提供了可靠的基站备电BMS解决方案，累计装机量超过10GWh。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="通讯基站储能BMS系统"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">系统特点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高可靠性" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高可靠性</h4>
              <p className="text-gray-700">采用冗余设计和故障诊断技术，MTBF超过20万小时，确保通讯系统持续稳定运行。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="远程监控" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">远程监控</h4>
              <p className="text-gray-700">支持4G/5G、NB-IoT等多种通信方式，实现电池系统的远程监控和管理。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="智能维护" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">智能维护</h4>
              <p className="text-gray-700">具备故障预警和自诊断功能，支持预测性维护，降低维护成本。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="宽温域适应" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">宽温域适应</h4>
              <p className="text-gray-700">工作温度范围-40℃~+85℃，适应各种恶劣气候环境。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">产品系列</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="BMS-T48"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">BMS-T48</h3>
              <p className="text-gray-700 mb-4">
                48V通讯基站备电系统，适用于小型基站和微波站，支持16串磷酸铁锂电池组管理。
              </p>
              <Link
                href="/products/energy-storage-bms/communication-base/bms-t48.html"
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
                alt="BMS-T96"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">BMS-T96</h3>
              <p className="text-gray-700 mb-4">
                96V高压通讯基站备电系统，适用于大型基站和数据中心，支持32串磷酸铁锂电池组管理。
              </p>
              <Link
                href="/products/energy-storage-bms/communication-base/bms-t96.html"
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
                alt="BMS-T48-R"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">BMS-T48-R</h3>
              <p className="text-gray-700 mb-4">
                户外型防雨通讯基站备电系统，IP67防护等级，适用于恶劣环境下的户外基站。
              </p>
              <Link
                href="/products/energy-storage-bms/communication-base/bms-t48-r.html"
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
        <h2 className="text-3xl font-bold mb-8 text-center">应用案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="5G基站备电案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">5G基站备电案例</h3>
            <p className="text-gray-700 mb-4">
              为某通讯运营商提供的5G基站备电系统BMS解决方案，实现基站8小时以上的备电能力，确保通讯网络的高可靠性。
            </p>
            <Link
              href="/products/energy-storage-bms/communication-base/case-5g.html"
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
                alt="数据中心备电案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">数据中心备电案例</h3>
            <p className="text-gray-700 mb-4">
              为某大型数据中心提供的备电系统BMS解决方案，实现数据中心关键设备的不间断电源供应，确保数据安全和业务连续性。
            </p>
            <Link
              href="/products/energy-storage-bms/communication-base/case-data-center.html"
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
