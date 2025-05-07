import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IntelligentRobotSystemsPage() {
  return (
    <PageLayout
      title="智能控制系统"
      subtitle="先进的智能控制解决方案"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "智能控制系统", href: "/products/intelligent-robot-systems" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">智能控制系统概述</h2>
            <p className="text-lg text-gray-700 mb-4">
              百千成电子的智能控制系统是基于先进的嵌入式技术和人工智能算法开发的控制系统解决方案，广泛应用于工业自动化、智能装备、机器人等领域。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我们的智能控制系统具有高性能、高可靠性、高灵活性等特点，能够满足各类复杂控制场景的需求，帮助客户提升生产效率和产品品质。
            </p>
            <p className="text-lg text-gray-700">
              凭借多年的技术积累和行业经验，百千成电子已成为智能控制领域的领先企业，为众多客户提供了优质的产品和服务。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="智能控制系统"
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
                <Image src="/placeholder.svg?height=30&width=30" alt="高性能" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高性能</h4>
              <p className="text-gray-700">采用高性能处理器和实时操作系统，实现快速响应和精准控制。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高可靠性" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高可靠性</h4>
              <p className="text-gray-700">采用冗余设计和故障诊断技术，确保系统长期稳定运行。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高灵活性" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高灵活性</h4>
              <p className="text-gray-700">模块化设计，支持多种通信协议和接口，易于集成和扩展。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="智能化" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">智能化</h4>
              <p className="text-gray-700">集成人工智能算法，实现自适应控制、预测性维护等智能功能。</p>
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
                alt="工业控制系统"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">工业控制系统</h3>
              <p className="text-gray-700 mb-4">
                适用于工业自动化领域，包括PLC控制系统、DCS控制系统、工业机器人控制系统等，实现生产过程的自动化控制。
              </p>
              <Link
                href="/products/intelligent-robot-systems/industrial"
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
                alt="智能装备控制系统"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">智能装备控制系统</h3>
              <p className="text-gray-700 mb-4">
                适用于智能装备领域，包括数控机床控制系统、3D打印控制系统、激光加工控制系统等，实现高精度、高效率的加工控制。
              </p>
              <Link
                href="/products/intelligent-robot-systems/equipment"
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
                alt="机器人控制系统"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">机器人控制系统</h3>
              <p className="text-gray-700 mb-4">
                适用于各类机器人，包括工业机器人、服务机器人、特种机器人等，实现机器人的运动控制、感知控制、任务规划等功能。
              </p>
              <Link
                href="/products/intelligent-robot-systems/robot"
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
                alt="智能物联网控制系统"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">智能物联网控制系统</h3>
              <p className="text-gray-700 mb-4">
                适用于物联网应用场景，包括智能家居控制系统、智能楼宇控制系统、智能农业控制系统等，实现设备互联互通和智能控制。
              </p>
              <Link
                href="/products/intelligent-robot-systems/iot"
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
              为某制造企业提供的生产线自动化控制系统，实现了生产过程的全自动化控制，提高了生产效率30%，降低了人工成本50%。
            </p>
            <Link
              href="/products/intelligent-robot-systems/case-industrial"
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
                alt="机器人应用案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">机器人应用案例</h3>
            <p className="text-gray-700 mb-4">
              为某物流企业提供的仓储机器人控制系统，实现了仓库内货物的自动搬运和分拣，提高了物流效率40%，降低了差错率90%。
            </p>
            <Link
              href="/products/intelligent-robot-systems/case-robot"
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
                alt="智能物联网案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">智能物联网案例</h3>
            <p className="text-gray-700 mb-4">
              为某农业企业提供的智能温室控制系统，实现了温室内温度、湿度、光照等环境参数的自动调节，提高了作物产量20%，降低了能耗30%。
            </p>
            <Link
              href="/products/intelligent-robot-systems/case-iot"
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
