import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SmallShipBmsPage() {
  return (
    <PageLayout
      title="小型船舶储能BMS"
      subtitle="为小型船舶提供高效可靠的电池管理系统"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "小型船舶储能BMS", href: "/products/energy-storage-bms/small-ship" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">小型船舶储能BMS系统概述</h2>
            <p className="text-lg text-gray-700 mb-4">
              百千成电子的小型船舶储能BMS系统是专为游艇、渔船、小型客船等小型船舶设计的高效可靠电池管理系统，适用于船舶主推进系统或辅助电力系统。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我们的小型船舶BMS系统体积小、重量轻、功耗低，同时具备高防护等级、抗震动、抗盐雾腐蚀等特性，能够在恶劣的海洋环境中稳定运行。
            </p>
            <p className="text-lg text-gray-700">
              百千成电子已为全球众多小型船舶提供了可靠的BMS解决方案，帮助客户实现船舶电气化和绿色航运。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="小型船舶储能BMS系统"
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
                <Image src="/placeholder.svg?height=30&width=30" alt="小型化设计" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">小型化设计</h4>
              <p className="text-gray-700">体积小、重量轻，适合空间有限的小型船舶安装使用。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="低功耗设计" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">低功耗设计</h4>
              <p className="text-gray-700">采用低功耗设计，静态功耗低至10mW，延长船舶续航能力。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="防水防尘" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">防水防尘</h4>
              <p className="text-gray-700">IP67防护等级，完全防水防尘，适应恶劣海洋环境。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="易于安装" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">易于安装</h4>
              <p className="text-gray-700">模块化设计，即插即用，易于安装和维护，降低使用成本。</p>
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
                alt="BMS-M50"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">BMS-M50</h3>
              <p className="text-gray-700 mb-4">
                50kWh小型船舶储能系统，适用于游艇、小型渔船等，支持16串锂电池组管理。
              </p>
              <Link
                href="/products/energy-storage-bms/small-ship/bms-m50.html"
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
                alt="BMS-M100"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">BMS-M100</h3>
              <p className="text-gray-700 mb-4">
                100kWh小型船舶储能系统，适用于中型渔船、小型客船等，支持16-32串锂电池组管理。
              </p>
              <Link
                href="/products/energy-storage-bms/small-ship/bms-m100.html"
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
                alt="BMS-M200"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">BMS-M200</h3>
              <p className="text-gray-700 mb-4">
                200kWh中型船舶储能系统，适用于中型客船、工作船等，支持32串锂电池组管理。
              </p>
              <Link
                href="/products/energy-storage-bms/small-ship/bms-m200.html"
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
                alt="电动游艇案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">电动游艇案例</h3>
            <p className="text-gray-700 mb-4">
              为某豪华游艇制造商提供的100kWh船舶储能系统BMS解决方案，实现游艇的全电动推进系统，零排放、低噪音，提升用户体验。
            </p>
            <Link
              href="/products/energy-storage-bms/small-ship/case-yacht.html"
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
                alt="电动渔船案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">电动渔船案例</h3>
            <p className="text-gray-700 mb-4">
              为某渔业公司提供的50kWh船舶储能系统BMS解决方案，实现渔船的混合动力系统，降低燃油消耗40%以上，减少运营成本。
            </p>
            <Link
              href="/products/energy-storage-bms/small-ship/case-fishing.html"
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
