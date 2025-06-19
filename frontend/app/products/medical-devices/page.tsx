import PageLayout from "@/components/page-layout"
import { ProductListing } from "@/components/product-listing"
export default function MedicalDevicesPage() {
  const products = [
    {
      id: "medical-monitor-bms",
      name: "医疗监护设备BMS",
      model: "BQC-MED-M100",
      image: "/placeholder.svg?height=300&width=400",
      specs: [
        "电压范围: 12V-48V",
        "监护通道: 8-16路",
        "精度: ±0.1%",
        "医疗级认证: CE/FDA",
        "工作温度: 0°C~50°C",
        "防护等级: IP54",
      ],
      applications: ["ICU监护设备", "手术室设备", "急救设备"],
      features: ["医疗级安全标准", "高精度监测", "实时数据传输", "故障自诊断", "低功耗设计"],
    },
    {
      id: "medical-imaging-control",
      name: "医疗影像设备控制板",
      model: "BQC-MED-I200",
      image: "/placeholder.svg?height=300&width=400",
      specs: [
        "处理器: ARM Cortex-A9",
        "内存: 2GB DDR3",
        "存储: 32GB eMMC",
        "接口: USB3.0/HDMI/Ethernet",
        "工作温度: -10°C~60°C",
        "认证: CE/FCC/医疗级",
      ],
      applications: ["CT设备", "MRI设备", "X光机", "超声设备"],
      features: ["高速图像处理", "多接口支持", "EMC电磁兼容", "医疗级可靠性", "远程诊断支持"],
    },
    {
      id: "medical-infusion-pump",
      name: "医用输液泵控制系统",
      model: "BQC-MED-P300",
      image: "/placeholder.svg?height=300&width=400",
      specs: [
        "流量精度: ±2%",
        "流量范围: 0.1-999ml/h",
        "压力检测: 0-300mmHg",
        "显示: 3.5寸彩色触摸屏",
        "电池续航: 8小时",
        "安全等级: IEC 60601-1",
      ],
      applications: ["静脉输液", "化疗给药", "营养输注", "镇痛泵"],
      features: ["精确流量控制", "多重安全保护", "智能报警系统", "数据记录功能", "无线连接"],
    },
    {
      id: "medical-ventilator-control",
      name: "呼吸机控制板",
      model: "BQC-MED-V400",
      image: "/placeholder.svg?height=300&width=400",
      specs: [
        "通气模式: 10种以上",
        "潮气量: 50-2000ml",
        "呼吸频率: 1-150次/分",
        "氧浓度: 21%-100%",
        "工作温度: 5°C~40°C",
        "医疗认证: ISO 13485",
      ],
      applications: ["ICU呼吸机", "急救呼吸机", "家用呼吸机", "转运呼吸机"],
      features: ["多种通气模式", "智能参数调节", "实时监测报警", "数据存储分析", "远程监控"],
    },
    {
      id: "medical-defibrillator",
      name: "除颤仪控制系统",
      model: "BQC-MED-D500",
      image: "/placeholder.svg?height=300&width=400",
      specs: [
        "能量输出: 1-360J",
        "充电时间: <8秒",
        "心电分析: 自动/手动",
        "显示屏: 8寸高清彩屏",
        "电池续航: 200次放电",
        "防护等级: IPX4",
      ],
      applications: ["急救除颤", "心脏监护", "手术室设备", "救护车设备"],
      features: ["快速充电放电", "智能心律分析", "语音指导功能", "事件记录回放", "便携式设计"],
    },
    {
      id: "medical-dialysis-control",
      name: "血液透析机控制板",
      model: "BQC-MED-H600",
      image: "/placeholder.svg?height=300&width=400",
      specs: [
        "血流量: 50-500ml/min",
        "透析液流量: 300-800ml/min",
        "超滤精度: ±5%",
        "压力监测: -300~+300mmHg",
        "温度控制: 35-42°C",
        "安全标准: IEC 60601-2-16",
      ],
      applications: ["血液透析", "血液滤过", "血液灌流", "连续性肾脏替代"],
      features: ["精确流量控制", "多重安全监测", "自动消毒功能", "治疗数据管理", "远程技术支持"],
    },
  ]

  return (
    <PageLayout
      title="医疗板块"
      subtitle="专业可靠的医疗设备控制解决方案"
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "医疗板块", href: "/products/medical-devices" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">医疗设备控制系统</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            百千成电子专注于医疗设备控制系统的研发与制造，为医疗行业提供安全可靠、符合医疗标准的控制解决方案。
            我们的产品广泛应用于监护设备、影像设备、治疗设备等各类医疗器械中。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold mb-2">医疗级认证</h3>
              <p className="text-sm text-gray-600">符合CE、FDA、ISO 13485等医疗认证标准</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">安全可靠</h3>
              <p className="text-sm text-gray-600">多重安全保护机制，确保患者和设备安全</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">智能监控</h3>
              <p className="text-sm text-gray-600">实时数据监测与智能分析功能</p>
            </div>
          </div>
        </div>
      </div>

      {<ProductListing products={products} />}
    </PageLayout>
  )
}
