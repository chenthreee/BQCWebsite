import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LargeShipBmsPage() {
  // 产品数据 - 大型船舶BMS产品
  const products = [
    {
      id: "main-control-board",
      title: "船舶BMS主控制板",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "处理器", value: "32位ARM Cortex-M7" },
        { label: "CAN接口", value: "4路" },
        { label: "防护等级", value: "IP65" },
        { label: "供电电压", value: "24V DC" }
      ],
    },
    {
      id: "communication-board",
      title: "船舶BMS通信板",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "通信接口", value: "CAN/RS485/以太网" },
        { label: "传输速率", value: "100Mbps" },
        { label: "防护等级", value: "IP65" },
        { label: "协议支持", value: "Modbus/TCP/IP" }
      ],
    },
    {
      id: "pcba-board",
      title: "船舶BMS PCBA板",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "采集通道", value: "16路" },
        { label: "采样精度", value: "0.1%" },
        { label: "均衡电流", value: "0.5A" },
        { label: "防护等级", value: "IP65" }
      ],
    },
    {
      id: "emergency-power",
      title: "大型船舶应急电源系统",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "响应时间", value: "<10ms" },
        { label: "系统容量", value: "200kWh" },
        { label: "并联支持", value: "最多4组" },
        { label: "防护等级", value: "IP65" }
      ],
    },
    {
      id: "power-propulsion",
      title: "大型船舶电力推进系统",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "功率范围", value: "3MW" },
        { label: "响应时间", value: "<5ms" },
        { label: "防护等级", value: "IP65" },
        { label: "通信接口", value: "CAN/以太网/光纤" }
      ],
    },
    {
      id: "offshore-pcba",
      title: "近海作业船PCBA",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "防护等级", value: "IP67" },
        { label: "抗震等级", value: "IEC60068-2-6" },
        { label: "工作温度", value: "-20℃~+70℃" },
        { label: "通信接口", value: "CAN/RS485" }
      ],
    }
  ]

  return (
    <PageLayout
      title="大型船舶储能BMS"
      subtitle="专为海洋环境设计的高可靠性船舶储能系统"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "大型船舶储能BMS", href: "/products/energy-storage-bms/large-ship" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">大型船舶储能BMS系统概述</h2>
            <p className="text-lg text-gray-700 mb-4">
              百千成电子的大型船舶储能BMS系统是专为海洋环境特殊要求设计的高可靠性电池管理系统，适用于大型客轮、货轮、邮轮等船舶的电力系统。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我们的船舶储能BMS系统具备高防护等级、抗震动、抗盐雾腐蚀等特性，能够在恶劣的海洋环境中稳定运行，为船舶提供安全可靠的电力保障。
            </p>
            <p className="text-lg text-gray-700">
              作为船舶储能前3指定供应商，百千成电子已为全球众多大型船舶提供了可靠的BMS解决方案，累计装机量超过5GWh。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="大型船舶储能BMS系统"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 产品展示区 */}
        <h2 className="text-3xl font-bold mb-8 text-center">产品系列</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/energy-storage-bms/large-ship/${product.id}`}
              className="block group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">{product.title}</h3>
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
                alt="大型邮轮案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">大型邮轮案例</h3>
            <p className="text-gray-700 mb-4">
              为某国际知名邮轮公司提供的3MWh船舶储能系统BMS解决方案，实现邮轮电力系统的峰值负荷管理和能源优化，降低燃油消耗30%以上。
            </p>
            <Link
              href="/products/energy-storage-bms/large-ship/case-cruise.html"
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
                alt="大型货轮案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">大型货轮案例</h3>
            <p className="text-gray-700 mb-4">
              为某国际航运公司提供的1.5MWh船舶储能系统BMS解决方案，实现货轮电力系统的智能管理和能源优化，降低运营成本25%以上。
            </p>
            <Link
              href="/products/energy-storage-bms/large-ship/case-cargo.html"
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
