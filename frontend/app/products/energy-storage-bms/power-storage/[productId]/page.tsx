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

// 产品数据 - 这里应该从数据库或API获取，这里为了演示使用静态数据
const productsData: Record<string, Product> = {
  "factory-parks": {
    model: "工厂园区储能",
    title: "工厂园区储能",
    description:
    [
      "在现代化工厂园区的运营中，高效、可靠的能源管理系统是确保生产连续性和节能减排的关键。为此，一款集成了多样化通信接口、高性能处理器及丰富功能的储能PCBA（Printed Circuit Board Assembly）应运而生，为工厂园区的能源管理带来了革命性的改变。",
      "这款储能PCBA支持以太网、CAN总线、RS485、RS232以及4G无线通信，确保了数据传输的高速、稳定与灵活性。无论是工厂内部网络的实时数据交换，还是远程监控与管理，都能轻松实现，极大地提升了能源管理的效率与响应速度。通过4G网络，即使身处偏远地区，也能随时掌握储能系统的运行状态，确保生产不受地域限制。",
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "这",
      "用",
      "简短的话",
      "写几个优点吧",
      "目前文本太泛了",
      "不知道怎么填充",
    ],
    specifications: [
      { name: "输入", value: "12V-30V直流" },
      { name: "功耗", value: "15W以内" },
      { name: "检测范围", value: "0-1500W" },
      { name: "检测周期", value: "可灵活调整至100ms" },
      { name: "检测精度", value: "±0.5%FS" },
      { name: "通讯方式", value: "can、RS485、菊花链" },
      { name: "后面的产品都按照这个方式重新收集数据", value: "后面的产品都按照这个方式重新收集数据" },
      
    ],
    applications: ["智能仓储系统", "存储设备优化", "存储管理智能化"],
    faqs: [
      {
        question: "工业园区BMS PCB 或 PCBA（PCBA）报价需要哪些条件？",
        answer: "对于裸 PCB 项目，请提供数量、gerber 文件和规格，包括材料、表面抛光处理、板和铜的厚度、阻焊层和丝印的颜色以及任何其他独特信息。"
      },
      {
        question: "您能满足 PCBA 的复杂测试要求吗？",
        answer: "是的，我们进行 100% AOI、ICT 和 FCT 测试，以保证您的多层 PCB 的质量和功能，并在整个生产过程中提供全面验证。"
      },
      {
        question: "您能为客户提供哪些服务？",
        answer: "公司研发团队可为客户提供储能BMS技术方案咨询、框图设计及器件选型、硬件开发（原理图设计、PCB Layout）、软件及算法开发、器件优化替代、DFM可制造性设计分析、快速制样验证、全自动化烧录测试设计制作等全面研发支持服务。"
      },
      {
        question: "你们是工厂吗？",
        answer: "是的，我们是专业的PCBA工厂。本厂位于中国广东省深圳市光明区公明街道长圳社区沙头巷工业区3B号，热忱欢迎您来厂参观。"
      },
      {
        question: "我的文件安全吗？",
        answer: "您的文件将完全安全可靠地保存。我们在整个过程中保护客户的知识产权。客户的所有文件绝不会与任何第三方共享。我们愿意根据客户当地法律签署保密协议，并承诺将客户数据保持在高度机密级别。"
      }
    ],
  },
  "ur100060-lq": {
    model: "UR100060-LQ",
    title: "UR100060-LQ 液冷高功率BMS系统",
    description:
      "UR100060-LQ是一款采用液冷散热技术的高功率BMS系统，专为大型电力储能系统设计，具有散热效率高、功率密度大、噪音低等特点。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "先进的液冷散热设计，散热效率高",
      "超高功率密度，适合空间受限场景",
      "低噪音运行，适合噪音敏感环境",
      "高效率设计，效率超过97%",
      "宽输出电压范围，300~1000Vdc",
      "支持多串并联电池组管理",
      "内置高精度SOC估算算法",
      "支持CAN/RS485等多种通信协议",
    ],
    specifications: [
      { name: "型号", value: "UR100060-LQ" },
      { name: "冷却方式", value: "液冷散热" },
      { name: "最高效率", value: ">97%" },
      { name: "输出电压范围", value: "300~1000Vdc" },
      { name: "额定功率", value: "60kW" },
      { name: "通信接口", value: "CAN/RS485/Ethernet" },
      { name: "防护等级", value: "IP20" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "尺寸(宽x高x深)", value: "482.6mm x 132mm x 600mm (3U)" },
      { name: "重量", value: "约25kg" },
    ],
    applications: ["大型电力储能系统", "电网调峰调频", "可再生能源并网", "微电网系统", "高密度数据中心"],
    faqs: [
      {
        question: "UR100060-LQ的散热效果如何？",
        answer: "UR100060-LQ采用先进的液冷散热技术，散热效率高，可以有效维持系统在最佳工作温度范围内运行。"
      },
    ],
  },
  // 其他产品数据可以按照相同的格式添加
  "ur100040-lq": {
    model: "UR100040-LQ",
    title: "UR100040-LQ 中型液冷BMS系统",
    description:
      "UR100040-LQ是一款中型液冷BMS系统，专为中型电力储能系统设计，采用先进的液冷散热技术，具有高效率、低噪音等特点。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "液冷散热设计，散热效率高",
      "低噪音运行，适合噪音敏感环境",
      "40kW额定输出功率",
      "宽输出电压范围，150~1000Vdc",
      "支持多串并联电池组管理",
      "内置高精度SOC估算算法",
      "支持CAN/RS485等多种通信协议",
    ],
    specifications: [
      { name: "型号", value: "UR100040-LQ" },
      { name: "冷却方式", value: "液冷散热" },
      { name: "输出功率范围", value: "40kW" },
      { name: "输出电压范围", value: "150~1000Vdc" },
      { name: "最高效率", value: ">96%" },
      { name: "通信接口", value: "CAN/RS485/Ethernet" },
      { name: "防护等级", value: "IP20" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "尺寸(宽x高x深)", value: "482.6mm x 88mm x 500mm (2U)" },
      { name: "重量", value: "约20kg" },
    ],
    applications: ["中型电力储能系统", "商业建筑储能", "工业储能系统", "微电网系统"],
  },
  "ur100030-ip65": {
    model: "UR100030-IP65",
    title: "UR100030-IP65 户外防护型BMS系统",
    description: "UR100030-IP65是一款专为户外和恶劣环境设计的BMS系统，具有IP65防护等级，能够在各种恶劣环境下稳定工作。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "IP65防护等级，防尘防水",
      "适合户外和恶劣环境安装",
      "30kW额定输出功率",
      "宽工作温度范围",
      "抗震动、抗冲击设计",
      "内置高精度SOC估算算法",
      "支持远程监控和管理",
    ],
    specifications: [
      { name: "型号", value: "UR100030-IP65" },
      { name: "防护等级", value: "IP65" },
      { name: "输出功率", value: "30kW" },
      { name: "适用环境", value: "户外/恶劣环境" },
      { name: "最高效率", value: ">95%" },
      { name: "通信接口", value: "CAN/RS485/4G" },
      { name: "工作温度", value: "-40℃~+70℃" },
      { name: "尺寸(宽x高x深)", value: "600mm x 800mm x 300mm" },
      { name: "重量", value: "约40kg" },
    ],
    applications: ["户外储能系统", "偏远地区微电网", "通信基站备电系统", "光伏电站储能系统"],
  },
  "ur100030-sw": {
    model: "UR100030-SW",
    title: "UR100030-SW 标准型BMS系统",
    description:
      "UR100030-SW是一款标准型BMS系统，采用风冷散热设计，适合各类中小型电力储能系统，具有可靠性高、性价比优等特点。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "风冷散热设计，维护简便",
      "30kW额定输出功率",
      "高效率设计，效率超过96%",
      "标准19英寸机架安装",
      "支持多串并联电池组管理",
      "内置高精度SOC估算算法",
      "支持CAN/RS485等多种通信协议",
    ],
    specifications: [
      { name: "型号", value: "UR100030-SW" },
      { name: "冷却方式", value: "风冷散热" },
      { name: "输出功率", value: "30kW" },
      { name: "最高效率", value: ">96%" },
      { name: "通信接口", value: "CAN/RS485/Ethernet" },
      { name: "防护等级", value: "IP20" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "尺寸(宽x高x深)", value: "482.6mm x 132mm x 500mm (3U)" },
      { name: "重量", value: "约18kg" },
    ],
    applications: ["中小型电力储能系统", "商业建筑储能", "工业储能系统", "数据中心备用电源"],
  },
  "ur100030-vpfc": {
    model: "UR100030-VPFC",
    title: "UR100030-VPFC 有源功率因数校正BMS系统",
    description: "UR100030-VPFC是一款带有有源功率因数校正(VPFC)功能的BMS系统，能够有效改善电网电能质量，减少谐波干扰。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "有源功率因数校正(VPFC)功能",
      "低谐波失真，THD<3%",
      "30kW额定输出功率",
      "高效率设计，效率超过95%",
      "改善电网电能质量",
      "减少谐波干扰",
      "支持CAN/RS485等多种通信协议",
    ],
    specifications: [
      { name: "型号", value: "UR100030-VPFC" },
      { name: "功率因数校正", value: "有源PFC" },
      { name: "输出功率", value: "30kW" },
      { name: "谐波失真", value: "<3%" },
      { name: "最高效率", value: ">95%" },
      { name: "通信接口", value: "CAN/RS485/Ethernet" },
      { name: "防护等级", value: "IP20" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "尺寸(宽x高x深)", value: "482.6mm x 132mm x 500mm (3U)" },
      { name: "重量", value: "约20kg" },
    ],
    applications: ["对电网电能质量要求高的场景", "医疗设备供电系统", "精密仪器供电系统", "工业控制系统"],
  },
  "ur100020-dc": {
    model: "UR100020-DC",
    title: "UR100020-DC 直流输入BMS系统",
    description:
      "UR100020-DC是一款专为直流输入设计的BMS系统，适合与光伏系统、燃料电池等直流电源配合使用，具有高效率、高可靠性等特点。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "直流输入设计，无需AC-DC转换",
      "20kW额定输出功率",
      "高效率设计，效率超过95%",
      "适合与光伏系统、燃料电池配合使用",
      "支持多串并联电池组管理",
      "内置高精度SOC估算算法",
      "支持CAN/RS485等多种通信协议",
    ],
    specifications: [
      { name: "型号", value: "UR100020-DC" },
      { name: "直流输入", value: "是" },
      { name: "输出功率", value: "20kW" },
      { name: "效率", value: ">95%" },
      { name: "输入电压范围", value: "200~1000Vdc" },
      { name: "输出电压范围", value: "200~800Vdc" },
      { name: "通信接口", value: "CAN/RS485/Ethernet" },
      { name: "防护等级", value: "IP20" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "尺寸(宽x高x深)", value: "482.6mm x 88mm x 450mm (2U)" },
      { name: "重量", value: "约15kg" },
    ],
    applications: ["光伏储能系统", "燃料电池系统", "直流微电网", "电动汽车充电站"],
  },
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params
  const product = productsData[productId as keyof typeof productsData]

  // 如果产品不存在，返回404
  if (!product) {
    notFound()
  }

  return (
    <PageLayout
      title={product.title}
      subtitle="电力大储BMS系统产品详情"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "电力大储BMS", href: "/products/energy-storage-bms/power-storage" },
        { label: product.model, href: `/products/energy-storage-bms/power-storage/${productId}` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-6">
        <Link
          href="/products/energy-storage-bms/power-storage.html"
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
              src={product.image || "/placeholder.svg"}
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

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">常见问答</h2>
        <div className="space-y-6 bg-white rounded-lg shadow-md p-8">
          {product.faqs?.map((faq: FAQ, index: number) => (
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
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/about/certificates/ISO14001.png"
                alt="ISO14001认证"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/about/certificates/SA8000.png"
                alt="SA8000认证"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/about/certificates/IKEA.png"
                alt="IKEA认证"
                fill
                className="object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              通过 IATF16949、ISO13485、ISO9001、ISO14001、SA8000 认证
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              13,000 平方米的厂房，拥有 18 条全自动 SMT 生产线、4 条 DIP 生产线、4 条手工焊接生产线、3 条组装生产线等
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              专业的研发团队，可提供硬件和软件设计、PCB 布局、框图设计、结构设计等
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
