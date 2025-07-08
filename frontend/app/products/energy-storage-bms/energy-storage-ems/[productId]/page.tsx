import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"

interface FAQ {
  question: string;
  answer: string;
}

interface Product {
  model: string;
  title: string;
  description: string | string[];
  image: string;
  features: string[];
  specifications: { name: string; value: string; }[];
  applications: string[];
  faqs?: FAQ[];
}

// 产品数据
const productsData: Record<string, Product> = {
  "industrial-ems": {
    model: "工业园区EMS",
    title: "工业园区智能储能管理系统",
    description: "专为工业园区设计的智能储能管理系统，实现园区配电网智能调度，优化用电成本。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "AI智能调度算法",
      "多能源协调管理",
      "需求侧响应",
      "经济性分析",
      "远程监控管理",
      "故障预警诊断"
    ],
    specifications: [
      { name: "处理器", value: "四核1.5GHZ" },
      { name: "内存", value: "4G+16G" },
      { name: "显示屏", value: "10.1寸触控屏" },
      { name: "通信接口", value: "以太网/4G/WiFi" },
      { name: "支持规模", value: "10-100MW" },
      { name: "响应时间", value: "≤100ms" }
    ],
    applications: ["工业园区", "大型工厂", "商业综合体"],
    faqs: [
      {
        question: "系统如何优化用电成本？",
        answer: "通过AI算法分析用电负荷特性、电价政策和储能系统状态，自动进行削峰填谷和需求侧响应，最大化经济效益。"
      },
      {
        question: "是否支持多种储能系统接入？",
        answer: "是的，系统支持锂电池、铅酸电池等多种储能设备接入，并可实现统一调度管理。"
      }
    ]
  },
  "power-grid-ems": {
    model: "电网级EMS",
    title: "电网级储能管理系统",
    description: "面向电网公司的大规模储能调度管理系统，提供电网调频调压、削峰填谷等功能。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "大规模储能调度",
      "电网服务功能",
      "高可靠性设计",
      "分布式部署",
      "实时监控分析",
      "故障诊断预警"
    ],
    specifications: [
      { name: "处理器", value: "八核2.0GHZ" },
      { name: "内存", value: "8G+32G" },
      { name: "通信接口", value: "以太网/光纤" },
      { name: "支持规模", value: "100MW+" },
      { name: "响应时间", value: "≤50ms" }
    ],
    applications: ["电网公司", "发电厂", "新能源电站"],
    faqs: [
      {
        question: "系统如何保证调度可靠性？",
        answer: "采用冗余设计和故障诊断技术，MTBF超过10万小时，确保系统长期稳定运行。"
      }
    ]
  },
  "microgrid-ems": {
    model: "微电网EMS",
    title: "微电网能源管理系统",
    description: "专为微电网场景设计的能源管理系统，实现多能源协调和智能调度。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "多能源协调控制",
      "离网/并网无缝切换",
      "实时负荷预测",
      "经济性优化",
      "远程监控管理",
      "故障自动处理"
    ],
    specifications: [
      { name: "处理器", value: "四核1.8GHZ" },
      { name: "内存", value: "4G+16G" },
      { name: "通信接口", value: "以太网/4G" },
      { name: "支持规模", value: "10MW" },
      { name: "响应时间", value: "≤100ms" }
    ],
    applications: ["工业微电网", "海岛电网", "校园微电网"],
    faqs: [
      {
        question: "如何实现离网/并网切换？",
        answer: "系统采用先进的无缝切换控制算法，可在20ms内完成切换，确保用电设备不受影响。"
      },
      {
        question: "支持哪些能源类型接入？",
        answer: "支持光伏、风电、储能、柴发等多种能源类型接入，可实现统一调度管理。"
      }
    ]
  },
  "commercial-ems": {
    model: "商业建筑EMS",
    title: "商业建筑能源管理系统",
    description: "面向商业建筑的综合能源管理系统，优化建筑能耗，提升能源利用效率。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "智能用能分析",
      "需求响应管理",
      "分时电价优化",
      "设备智能控制",
      "能耗可视化",
      "节能策略推荐"
    ],
    specifications: [
      { name: "处理器", value: "双核1.2GHZ" },
      { name: "内存", value: "2G+8G" },
      { name: "通信接口", value: "以太网/WiFi" },
      { name: "支持规模", value: "1MW" },
      { name: "响应时间", value: "≤200ms" }
    ],
    applications: ["商场", "办公楼", "酒店"],
    faqs: [
      {
        question: "系统如何帮助节约能源成本？",
        answer: "通过智能分析用能模式，结合分时电价政策，自动调整空调、照明等设备运行，实现节能降耗。"
      },
      {
        question: "是否支持移动端管理？",
        answer: "是的，提供手机APP和微信小程序，支持随时随地查看和管理建筑能源使用情况。"
      }
    ]
  }
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params
  const product = productsData[productId]

  if (!product) {
    notFound()
  }

  return (
    <PageLayout
      title={product.title}
      subtitle="储能EMS系统产品详情"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "储能EMS", href: "/products/energy-storage-bms/energy-storage-ems" },
        { label: product.model, href: `/products/energy-storage-bms/energy-storage-ems/${productId}` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-6">
        <Link
          href="/products/energy-storage-bms/energy-storage-ems.html"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回产品列表
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex items-center justify-center bg-gray-50">
            <Image
              src={product.image}
              alt={product.model}
              width={500}
              height={500}
              className="max-w-full h-auto object-contain"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{product.model}</h2>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>

            <h3 className="text-xl font-bold mb-3">主要特点</h3>
            <ul className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-3">应用场景</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.applications.map((application, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {application}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">技术规格</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">参数</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">规格</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {product.specifications.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{spec.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {product.faqs && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">常见问答</h2>
          <div className="space-y-6 bg-white rounded-lg shadow-md p-8">
            {product.faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">产品资质</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/about/certificates/ISO9001.png"
                alt="ISO9001认证"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/about/certificates/ISO13485.png"
                alt="ISO13485认证"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/about/certificates/IATF16949.png"
                alt="IATF16949认证"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              通过 IATF16949、ISO13485、ISO9001 等多项认证
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              专业的研发团队，提供完整的技术支持和售后服务
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              累计服务超过100个大型储能项目，具有丰富的实施经验
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 