// 产品详情页统一数据源
export const productsData = {
  "factory-parks": {
    model: "工厂园区储能",
    title: "工厂园区储能",
    description: [
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
  "main-control-board": {
    model: "船舶BMS主控制板",
    title: "船舶BMS主控制板",
    description: "船舶BMS主控制板是大型船舶储能系统的核心部件，具备高可靠性、高防护等级和多路CAN通信能力，适用于恶劣海洋环境。",
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "32位ARM Cortex-M7高性能处理器",
      "4路CAN接口，支持多设备通信",
      "IP65防护等级，防水防尘",
      "24V DC宽电压输入",
      "抗震动、抗盐雾腐蚀设计",
      "支持远程监控和固件升级"
    ],
    specifications: [
      { name: "处理器", value: "32位ARM Cortex-M7" },
      { name: "CAN接口", value: "4路" },
      { name: "防护等级", value: "IP65" },
      { name: "供电电压", value: "24V DC" },
      { name: "工作温度", value: "-40℃~+70℃" },
      { name: "尺寸", value: "300mm x 200mm x 50mm" },
      { name: "重量", value: "约3kg" }
    ],
    applications: ["大型船舶储能系统", "邮轮电力系统", "货轮智能管理"],
    faqs: [
      {
        question: "主控制板支持哪些通信协议？",
        answer: "支持CAN、RS485等多种通信协议，满足船舶多系统集成需求。"
      },
      {
        question: "主控制板能否在海洋环境下长期工作？",
        answer: "具备IP65防护等级和抗盐雾腐蚀设计，可在恶劣海洋环境下稳定运行。"
      }
    ]
  },
  // ... 其余产品同理 ...
} 