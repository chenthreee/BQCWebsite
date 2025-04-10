import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IndustrialControlBoardsPage() {
  return (
    <PageLayout
      title="工业控制板"
      subtitle="可靠稳定的工业控制板卡"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "工业控制板", href: "/products/industrial-control-boards" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">工业控制板概述</h2>
            <p className="text-lg text-gray-700 mb-4">
              百千成电子的工业控制板是专为工业自动化、智能装备、物联网等领域设计的高性能、高可靠性控制板卡，是各类智能设备的"大脑"。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我们的工业控制板采用先进的嵌入式技术和工业级元器件，具有高性能、高可靠性、高抗干扰性等特点，能够在恶劣的工业环境中稳定运行。
            </p>
            <p className="text-lg text-gray-700">
              凭借多年的技术积累和行业经验，百千成电子已成为工业控制板领域的领先企业，为众多客户提供了优质的产品和服务。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="工业控制板"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">产品特点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高性能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高性能</h4>
              <p className="text-gray-700">采用高性能处理器和优化的硬件架构，提供强大的计算和控制能力。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高可靠性" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高可靠性</h4>
              <p className="text-gray-700">采用工业级元器件和严格的质量控制，确保在恶劣环境下长期稳定运行。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高抗干扰性" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高抗干扰性</h4>
              <p className="text-gray-700">采用先进的抗干扰设计和防护措施，确保在电磁干扰环境下稳定工作。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="丰富接口" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">丰富接口</h4>
              <p className="text-gray-700">提供丰富的通信接口和I/O接口，支持多种通信协议，易于集成和扩展。</p>
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
                alt="通用控制板"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">通用控制板</h3>
              <p className="text-gray-700 mb-4">
                适用于各类工业控制场景的通用控制板，提供强大的计算能力和丰富的接口，支持多种操作系统和开发环境。
              </p>
              <Link
                href="/products/industrial-control-boards/general"
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
                alt="运动控制板"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">运动控制板</h3>
              <p className="text-gray-700 mb-4">
                专为运动控制应用设计的控制板，支持多轴联动、插补运算、PID控制等功能，适用于数控机床、机器人等领域。
              </p>
              <Link
                href="/products/industrial-control-boards/motion"
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
                alt="通信控制板"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">通信控制板</h3>
              <p className="text-gray-700 mb-4">
                专为工业通信应用设计的控制板，支持多种工业通信协议，如Modbus、Profibus、EtherCAT等，适用于工业网关、数据采集等领域。
              </p>
              <Link
                href="/products/industrial-control-boards/communication"
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
                alt="物联网控制板"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">物联网控制板</h3>
              <p className="text-gray-700 mb-4">
                专为物联网应用设计的控制板，集成多种无线通信模块，如WiFi、蓝牙、4G/5G等，支持云平台连接，适用于智能家居、智能农业等领域。
              </p>
              <Link
                href="/products/industrial-control-boards/iot"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="工业自动化案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">工业自动化案例</h3>
            <p className="text-gray-700 mb-4">
              为某制造企业提供的生产线控制系统，采用我司通用控制板作为核心控制单元，实现了生产过程的全自动化控制。
            </p>
            <Link
              href="/products/industrial-control-boards/case-industrial"
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
                alt="智能装备案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">智能装备案例</h3>
            <p className="text-gray-700 mb-4">
              为某设备制造商提供的数控机床控制系统，采用我司运动控制板作为核心控制单元，实现了高精度、高效率的加工控制。
            </p>
            <Link
              href="/products/industrial-control-boards/case-equipment"
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
                alt="物联网案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">物联网案例</h3>
            <p className="text-gray-700 mb-4">
              为某农业企业提供的智能农业控制系统，采用我司物联网控制板作为核心控制单元，实现了农业生产环境的智能监控和控制。
            </p>
            <Link
              href="/products/industrial-control-boards/case-iot"
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
