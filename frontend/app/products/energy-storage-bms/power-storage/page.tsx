import PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PowerStorageBmsPage() {
  // 产品数据 - 七个电力大储BMS产品
  const products = [
    {
      id: "factory-parks",
      model: "工厂园区储能",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        { label: "CPU", value: "四核1.5GHZ" },
        { label: "内存", value: "2G+8G" },
        { label: "LCD", value: "10寸" },
        {label:"这些部分也需要重新收集数据",value:"每份文档格式都不太一样 写上来会很杂乱"}
      ],
    },
    {
      id: "矿区储能",
      model: "矿区储能",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        {label:"这些部分也需要重新收集数据",value:"每份文档格式都不太一样 写上来会很杂乱"}
      ],
    },
    {
      id: "微电网储能",
      model: "微电网储能",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        {label:"这些部分也需要重新收集数据",value:"每份文档格式都不太一样 写上来会很杂乱"}
      ],
    },
    {
      id: "电动汽车储能",
      model: "电动汽车储能",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        {label:"这些部分也需要重新收集数据",value:"每份文档格式都不太一样 写上来会很杂乱"}
      ],
    },
    {
      id: "航空航天储能",
      model: "航空航天储能",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        {label:"这些部分也需要重新收集数据",value:"每份文档格式都不太一样 写上来会很杂乱"}
      ],
    },
    {
      id: "商业储能",
      model: "商业储能",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        {label:"这些部分也需要重新收集数据",value:"每份文档格式都不太一样 写上来会很杂乱"}
      ],
    },
    {
      id: "太阳能储能",
      model: "太阳能储能",
      image: "/placeholder.svg?height=300&width=300",
      specs: [
        {label:"这些部分也需要重新收集数据",value:"每份文档格式都不太一样 写上来会很杂乱"}
      ],
    },
  ]

  return (
    <PageLayout
      title="电力大储BMS"
      subtitle="高可靠性电力储能电池管理系统"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "电力大储BMS", href: "/products/energy-storage-bms/power-storage" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">电力大储BMS系统概述</h2>
            <p className="text-lg text-gray-700 mb-4">
             这里建议放一段关于电力大储的介绍
            </p>
            {/* <p className="text-lg text-gray-700 mb-4">
              我们的电力大储BMS系统采用先进的电池管理技术和算法，具有高精度SOC估算、主动均衡、故障诊断等功能，能够有效提高电池系统的安全性、可靠性和使用寿命。
            </p>
            <p className="text-lg text-gray-700">
              作为国际电力大储前5指定供应商，百千成电子已为全球众多大型电力储能项目提供了可靠的BMS解决方案，累计装机量超过35GWh。
            </p> */}
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="电力大储BMS系统"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* <div className="bg-gray-100 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">系统特点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高精度监测" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高精度监测</h4>
              <p className="text-gray-700">电压测量精度±0.5mV，温度测量精度±1℃，确保电池状态精确监控。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="主动均衡" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">主动均衡</h4>
              <p className="text-gray-700">采用高效能量传输的主动均衡技术，均衡效率高达95%，有效延长电池寿命。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="高可靠性" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">高可靠性</h4>
              <p className="text-gray-700">采用冗余设计和故障诊断技术，MTBF超过10万小时，确保系统长期稳定运行。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt="智能管理" width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">智能管理</h4>
              <p className="text-gray-700">支持远程监控、OTA升级、数据分析等功能，实现电池系统的智能化管理。</p>
            </div>
          </div>
        </div> */}

        {/* 产品展示区 */}
        <h2 className="text-3xl font-bold mb-8 text-center">产品系列</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/energy-storage-bms/power-storage/${product.id}`}
              className="block group"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="bg-white p-6 flex items-center justify-center h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
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
                alt="电网调峰调频案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">电网调峰调频案例</h3>
            <p className="text-gray-700 mb-4">
              为某省电网公司提供的100MWh电力储能系统BMS解决方案，实现电网削峰填谷、调频调压等功能，提高电网稳定性和经济性。
            </p>
            <Link
              href="/products/energy-storage-bms/power-storage/case-grid.html"
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
                alt="可再生能源并网案例"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">可再生能源并网案例</h3>
            <p className="text-gray-700 mb-4">
              为某光伏发电站提供的50MWh电力储能系统BMS解决方案，解决光伏发电波动性问题，提高可再生能源并网质量和利用率。
            </p>
            <Link
              href="/products/energy-storage-bms/power-storage/case-renewable.html"
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
