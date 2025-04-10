import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EnergyStorageEmsPage() {
  return (
    <PageLayout
      title="储能EMS（总控）"
      subtitle="智能高效的能源管理系统"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能EMS", href: "/products/energy-storage-ems" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">什么是EMS系统？</h2>
            <p className="text-lg text-gray-700 mb-4">
              EMS（Energy Management
              System）能源管理系统是储能系统的"大脑"，负责对整个储能系统进行智能调度和管理，优化能源使用效率，提高系统经济性。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              一个优秀的EMS系统能够根据用电负荷、电网状态、电价政策等因素，智能调度储能系统的充放电行为，实现削峰填谷、需求侧响应、经济调度等功能。
            </p>
            <p className="text-lg text-gray-700">
              百千成电子的储能EMS系统采用先进的人工智能算法和大数据分析技术，为客户提供高效、可靠、智能的能源管理解决方案。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="EMS系统示意图"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">EMS系统核心功能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="监控功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">实时监控</h4>
              <p className="text-gray-700">实时监控储能系统的运行状态，包括电池状态、功率流向、系统效率等参数。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="调度功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">智能调度</h4>
              <p className="text-gray-700">根据用电负荷、电网状态、电价政策等因素，智能调度储能系统的充放电行为。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="预测功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">负荷预测</h4>
              <p className="text-gray-700">采用先进的人工智能算法，对用电负荷进行精准预测，为智能调度提供依据。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="分析功能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">数据分析</h4>
              <p className="text-gray-700">对储能系统运行数据进行深度分析，提供系统优化建议和经济性分析报告。</p>
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
                alt="工商业储能EMS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">工商业储能EMS</h3>
              <p className="text-gray-700 mb-4">
                专为工商业用户设计的能源管理系统，实现削峰填谷、需求侧响应、经济调度等功能，降低用电成本，提高能源利用效率。
              </p>
              <Link
                href="/products/energy-storage-ems/commercial"
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
                alt="电力储能EMS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">电力储能EMS</h3>
              <p className="text-gray-700 mb-4">
                专为电力系统设计的能源管理系统，实现电网调频、调峰、备用等功能，提高电网稳定性和可靠性。
              </p>
              <Link
                href="/products/energy-storage-ems/power"
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
                alt="微电网EMS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">微电网EMS</h3>
              <p className="text-gray-700 mb-4">
                专为微电网系统设计的能源管理系统，实现多种能源的协调控制和优化调度，提高系统稳定性和经济性。
              </p>
              <Link
                href="/products/energy-storage-ems/microgrid"
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
                alt="家用储能EMS"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">家用储能EMS</h3>
              <p className="text-gray-700 mb-4">
                专为家庭用户设计的能源管理系统，实现光储协调、峰谷电价套利、备用电源等功能，提高家庭能源自给率。
              </p>
              <Link
                href="/products/energy-storage-ems/home"
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
              <Image src="/placeholder.svg?height=40&width=40" alt="AI算法" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">AI算法</h3>
            <p className="text-gray-700">
              采用先进的人工智能算法，包括深度学习、强化学习等，实现精准的负荷预测和智能调度。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="云平台" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">云平台</h3>
            <p className="text-gray-700">
              基于云平台架构，实现远程监控、远程升级、远程维护等功能，提高系统可靠性和可维护性。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="兼容性" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">兼容性</h3>
            <p className="text-gray-700">
              支持多种通信协议和接口标准，可与各类储能设备、逆变器、电表等设备无缝对接，实现系统级集成。
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
