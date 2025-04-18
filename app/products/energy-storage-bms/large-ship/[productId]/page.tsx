import { PageLayout } from "@/components/page-layout"
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

// 产品数据 - 大型船舶BMS产品系列
const productsData: Record<string, Product> = {
  "bms-m500": {
    model: "BMS-M500",
    title: "BMS-M500 船舶储能管理系统",
    description: [
      "BMS-M500是专为中小型船舶设计的储能管理系统，采用高防护等级设计，具备完善的安全保护功能，可靠性高，适合各类海洋环境应用。",
      "系统采用模块化设计，支持32-64串锂电池组管理，具备完善的电池保护功能，包括过充、过放、过流、短路、温度等多重保护，确保船舶储能系统安全可靠运行。",
      "产品通过了严格的海洋环境测试认证，包括盐雾、振动、冲击等测试，确保在恶劣的海洋环境中长期稳定运行。内置的智能均衡算法和SOC估算功能，可以有效延长电池使用寿命，提高系统整体性能。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "IP67防护等级，适应恶劣海洋环境",
      "支持32-64串锂电池组管理",
      "多重安全保护机制",
      "抗震动、抗盐雾设计",
      "CAN/RS485通信接口",
      "模块化设计，维护便捷",
      "高精度电池状态监测",
      "远程监控和诊断功能",
      "智能均衡管理",
      "故障预警和保护",
      "数据记录和分析",
      "支持OTA远程升级"
    ],
    specifications: [
      { name: "容量", value: "500kWh" },
      { name: "电池串数", value: "32-64串" },
      { name: "防护等级", value: "IP67" },
      { name: "通信接口", value: "CAN/RS485" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "湿度范围", value: "5%~95%RH" },
      { name: "抗震等级", value: "IEC60068-2-6" },
      { name: "盐雾测试", value: "IEC60068-2-52" },
      { name: "电压测量精度", value: "±0.1%" },
      { name: "电流测量精度", value: "±0.5%" },
      { name: "温度测量精度", value: "±1℃" },
      { name: "均衡电流", value: "0-2A可调" },
      { name: "响应时间", value: "<20ms" },
      { name: "系统效率", value: ">95%" },
      { name: "绝缘检测", value: "支持" }
    ],
    applications: [
      "中小型客轮",
      "渔船",
      "游艇",
      "港口作业船",
      "近海运输船",
      "海洋工程船",
      "海上执法船",
      "科考船"
    ],
    faqs: [
      {
        question: "BMS-M500的防护等级能否满足海洋环境要求？",
        answer: "是的，BMS-M500采用IP67防护等级设计，可以有效防水防尘，并通过了严格的盐雾测试，完全满足海洋环境应用要求。"
      },
      {
        question: "系统如何保证船舶储能安全？",
        answer: "系统采用多重安全保护机制，包括过充保护、过放保护、过流保护、短路保护、温度保护等，并具备故障自动诊断和报警功能，确保储能系统安全可靠运行。"
      },
      {
        question: "产品是否支持远程维护？",
        answer: "是的，系统支持远程监控和维护功能，可通过远程连接进行系统状态监测、参数配置、故障诊断和软件升级等操作，大大提高了维护效率。"
      },
      {
        question: "电池均衡功能如何实现？",
        answer: "系统采用主动均衡技术，均衡电流0-2A可调，通过智能均衡算法实时监测电池状态，自动进行均衡控制，确保电池组各节电池保持一致性。"
      },
      {
        question: "系统是否支持数据记录？",
        answer: "是的，系统具备完善的数据记录功能，可记录电池电压、电流、温度、SOC等关键参数，支持历史数据查询和分析，便于系统优化和故障诊断。"
      }
    ]
  },
  "bms-m1000": {
    model: "BMS-M1000",
    title: "BMS-M1000 大型船舶储能管理系统",
    description: [
      "BMS-M1000是专为大型船舶设计的高性能储能管理系统，采用先进的多级管理架构，支持大规模电池组的统一管理，最大可扩展至5MWh容量。",
      "系统具备强大的数据处理能力和通信功能，支持CAN、RS485和以太网等多种通信方式，可实现船舶储能系统的实时监控和智能管理。",
      "采用分层分布式架构设计，具备强大的并行处理能力，可同时管理多个电池组模块，支持热插拔功能，便于系统维护和扩展。内置的智能调度算法可实现系统的最优化运行，显著提升能源利用效率。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "支持大规模电池组管理",
      "多级管理架构设计",
      "多种通信接口支持",
      "智能均衡管理",
      "高精度SOC/SOH估算",
      "完善的安全保护功能",
      "远程监控和维护",
      "模块化可扩展设计",
      "热插拔支持",
      "智能调度优化",
      "数据加密传输",
      "故障自愈功能"
    ],
    specifications: [
      { name: "容量", value: "1MWh" },
      { name: "可扩展容量", value: "5MWh" },
      { name: "防护等级", value: "IP67" },
      { name: "通信接口", value: "CAN/RS485/以太网" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "湿度范围", value: "5%~95%RH" },
      { name: "系统效率", value: ">98%" },
      { name: "响应时间", value: "<10ms" },
      { name: "电压测量精度", value: "±0.05%" },
      { name: "电流测量精度", value: "±0.1%" },
      { name: "温度测量精度", value: "±0.5℃" },
      { name: "均衡电流", value: "0-5A可调" },
      { name: "通信速率", value: "100Mbps" },
      { name: "数据存储", value: "128GB" },
      { name: "处理器", value: "四核ARM Cortex-A72" }
    ],
    applications: [
      "大型邮轮",
      "货轮",
      "海上平台",
      "特种作业船",
      "远洋运输船",
      "海上补给船",
      "大型渔船",
      "海洋科考船"
    ],
    faqs: [
      {
        question: "BMS-M1000如何实现大规模电池组的管理？",
        answer: "系统采用多级管理架构，通过主控制器和多个子控制器的协同工作，实现大规模电池组的统一管理和控制，支持灵活扩展。"
      },
      {
        question: "系统的可靠性如何保证？",
        answer: "系统采用冗余设计，关键部件具备备份功能，并通过严格的可靠性测试，MTBF超过100000小时，确保系统长期稳定运行。"
      },
      {
        question: "如何实现系统的智能调度优化？",
        answer: "系统内置智能调度算法，基于历史数据分析和实时负载预测，自动优化电池组的充放电策略，提高能源利用效率，延长电池寿命。"
      },
      {
        question: "系统的数据安全如何保障？",
        answer: "系统采用多重加密技术保护数据传输和存储安全，支持多级权限管理和访问控制，确保系统数据不被非法访问和篡改。"
      },
      {
        question: "故障自愈功能是如何工作的？",
        answer: "系统具备智能故障诊断和自愈能力，可自动识别和隔离故障模块，通过备份机制和负载重分配确保系统持续运行，同时发出维护预警。"
      }
    ]
  },
  "bms-m2000": {
    model: "BMS-M2000",
    title: "BMS-M2000 特大型船舶储能管理系统",
    description: [
      "BMS-M2000是专为特大型船舶和海上平台设计的高端储能管理系统，采用分布式架构设计，支持超大规模电池组管理，最大可扩展至10MWh容量。",
      "系统配备高性能处理器和大容量存储，支持复杂的能源管理策略和智能调度算法，可实现船舶储能系统的最优化运行。",
      "采用先进的AI算法进行系统优化和预测性维护，结合高速光纤通信网络，实现毫秒级的系统响应和控制。系统支持多重冗余设计，确保在极端情况下仍能保持稳定运行。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "分布式架构设计",
      "超大规模电池组支持",
      "智能能源管理策略",
      "高速数据处理能力",
      "多重安全保护机制",
      "实时监控和诊断",
      "灵活的扩展能力",
      "支持光纤通信",
      "AI优化算法",
      "预测性维护",
      "多重冗余设计",
      "毫秒级响应"
    ],
    specifications: [
      { name: "容量", value: "2MWh" },
      { name: "可扩展容量", value: "10MWh" },
      { name: "防护等级", value: "IP67" },
      { name: "通信接口", value: "CAN/RS485/以太网/光纤" },
      { name: "工作温度", value: "-20℃~+60℃" },
      { name: "湿度范围", value: "5%~95%RH" },
      { name: "系统效率", value: ">99%" },
      { name: "响应时间", value: "<5ms" },
      { name: "电压测量精度", value: "±0.02%" },
      { name: "电流测量精度", value: "±0.05%" },
      { name: "温度测量精度", value: "±0.2℃" },
      { name: "均衡电流", value: "0-10A可调" },
      { name: "通信速率", value: "10Gbps" },
      { name: "数据存储", value: "512GB" },
      { name: "处理器", value: "八核ARM Cortex-A76" }
    ],
    applications: [
      "超大型邮轮",
      "海上钻井平台",
      "浮动电站",
      "海上风电平台",
      "特大型货轮",
      "海上浮动城市",
      "海上数据中心",
      "深海采矿平台"
    ],
    faqs: [
      {
        question: "BMS-M2000的分布式架构有什么优势？",
        answer: "分布式架构可以实现更好的负载均衡和故障隔离，提高系统的可靠性和可维护性，同时支持更大规模的储能系统扩展。系统采用多节点协同工作模式，即使部分节点发生故障，也不会影响整体系统的运行。"
      },
      {
        question: "系统如何确保数据传输的可靠性？",
        answer: "系统支持包括光纤在内的多种通信方式，采用冗余通信设计，并具备数据加密和校验功能，确保数据传输的安全性和可靠性。光纤通信可实现10Gbps的高速数据传输，满足大规模系统的实时控制需求。"
      },
      {
        question: "AI算法在系统中的作用是什么？",
        answer: "AI算法主要用于系统优化和预测性维护两个方面。在系统优化方面，通过分析历史运行数据和实时负载特征，自动调整运行参数，提高系统效率。在预测性维护方面，通过分析设备运行状态，提前预警可能发生的故障，降低维护成本。"
      },
      {
        question: "系统的冗余设计包括哪些方面？",
        answer: "系统的冗余设计涵盖硬件、软件和通信三个层面。硬件层面采用关键部件双备份，软件层面实现多副本数据存储和故障切换，通信层面支持多路径传输和自动路由切换。"
      },
      {
        question: "如何实现毫秒级的系统响应？",
        answer: "通过高性能处理器（八核ARM Cortex-A76）和优化的系统架构，结合高速光纤通信网络，实现数据的快速采集、处理和控制。系统采用实时操作系统和优先级调度机制，确保关键任务的及时响应。"
      }
    ]
  },
  "bms-m3000": {
    model: "BMS-M3000",
    title: "BMS-M3000 新一代智能船舶储能管理系统",
    description: [
      "BMS-M3000是新一代智能船舶储能管理系统的旗舰产品，采用创新的云边协同架构，将边缘计算与云端AI深度结合，支持超大规模储能系统的智能化管理。",
      "系统采用最新的第四代电池管理技术，集成5G通信和边缘计算能力，可实现亚毫秒级的系统响应。配备先进的数字孪生技术，支持储能系统的全生命周期管理。",
      "创新的自适应控制算法可根据不同航行场景自动优化运行策略，实现能源利用效率的最大化。系统具备自学习能力，可持续优化管理策略，为船舶提供更智能、更高效的储能解决方案。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "云边协同架构",
      "5G+边缘计算",
      "数字孪生技术",
      "自适应控制算法",
      "亚毫秒级响应",
      "全生命周期管理",
      "自学习优化",
      "超大规模支持",
      "智能预测维护",
      "多维安全防护",
      "能源优化调度",
      "远程专家诊断"
    ],
    specifications: [
      { name: "容量", value: "3MWh" },
      { name: "可扩展容量", value: "15MWh" },
      { name: "防护等级", value: "IP68" },
      { name: "通信接口", value: "5G/光纤/以太网" },
      { name: "工作温度", value: "-40℃~+70℃" },
      { name: "湿度范围", value: "0%~100%RH" },
      { name: "系统效率", value: ">99.5%" },
      { name: "响应时间", value: "<1ms" },
      { name: "电压测量精度", value: "±0.01%" },
      { name: "电流测量精度", value: "±0.02%" },
      { name: "温度测量精度", value: "±0.1℃" },
      { name: "均衡电流", value: "0-20A可调" },
      { name: "通信速率", value: "25Gbps" },
      { name: "数据存储", value: "2TB" },
      { name: "处理器", value: "12核ARM Cortex-A78" }
    ],
    applications: [
      "智能自主船舶",
      "海上浮动城市",
      "深海能源站",
      "极地科考船",
      "智能港口设施",
      "海上应急电站",
      "未来海洋牧场",
      "海上智能电网"
    ],
    faqs: [
      {
        question: "云边协同架构如何提升系统性能？",
        answer: "云边协同架构将关键控制功能部署在边缘端，确保实时性能；同时利用云端强大的计算能力进行数据分析和策略优化，实现性能和智能的最佳平衡。"
      },
      {
        question: "数字孪生技术的应用价值是什么？",
        answer: "数字孪生技术可实现储能系统的虚拟映射，支持系统性能模拟、故障预测、优化调试和远程运维，显著提升系统的可靠性和维护效率。"
      },
      {
        question: "自适应控制算法如何工作？",
        answer: "算法通过实时分析船舶运行状态、负载特征和环境条件，自动调整控制策略，实现储能系统的最优运行。系统具备自学习能力，可持续优化控制效果。"
      },
      {
        question: "系统的安全性如何保障？",
        answer: "采用多维安全防护体系，包括物理隔离、加密通信、访问控制、实时监测和应急处置等多个层面，确保系统在各种情况下的安全可靠运行。"
      },
      {
        question: "远程专家诊断系统的优势是什么？",
        answer: "通过5G网络实现与陆地专家中心的实时连接，支持专家远程诊断和指导，结合AI辅助分析，大大提高故障诊断的准确性和处理效率。"
      }
    ]
  },
  "main-control-board": {
    model: "船舶BMS主控制板",
    title: "主控板PCBA在大型船舶储能BMS中的应用",
    description: [
      "主控板PCBA是大型船舶储能BMS的核心控制单元，其性能直接影响整个系统的可靠性和稳定性。通过采用先进的硬件和软件技术，主控板PCBA能够为船舶储能系统提供高效、可靠的控制方案，推动海洋能源的清洁利用和可持续发展。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "高可靠性工业级芯片和元器件",
      "高精度ADC采样技术",
      "实时监测和响应能力",
      "模块化可扩展设计",
      "多重安全保护功能",
      "适应恶劣海洋环境",
      "专业研发团队支持",
      "完善的生产制造体系",
      "灵活的订单处理能力",
      "供应链优势支持",
      "成本优化方案",
      "长交期物料免费备货"
    ],
    specifications: [
      { name: "处理器", value: "高性能ARM Cortex-M系列" },
      { name: "存储器", value: "FLASH + SRAM" },
      { name: "通信接口", value: "CAN/RS485/以太网" },
      { name: "ADC精度", value: "≥12位" },
      { name: "工作温度", value: "-20℃~+70℃" },
      { name: "防护等级", value: "IP65" }
    ],
    applications: [
      "新能源船舶",
      "传统船舶改造",
      "海上风电平台",
      "海洋工程装备",
    ],
    faqs: [
      {
        question: "贵公司的OEM服务有哪些优势？",
        answer: "我们的产品成本逐渐降低，我们的项目也越来越优化。通过持续的技术创新和工艺改进，我们能为客户提供更具竞争力的解决方案。"
      },
      {
        question: "你能处理小订单还是大订单？",
        answer: "我们有能力和专业知识处理大小订单。我们灵活的制造能力使我们能够满足每个客户的独特需求，无论订单大小。无论您需要样机操作、小批量生产还是批量生产，我们都能有效满足您的需求。"
      },
      {
        question: "如何保证产品质量？",
        answer: "我们通过了IATF16949、ISO14001、ISO9001、ISO13485等认证，拥有完善的质量管理体系。同时，我们与ADI、NXP、TI、ST、Microchip等一线IC品牌保持密切合作，确保产品品质。"
      }
    ]
  },
  "communication-board": {
    model: "船舶BMS通信板",
    title: "BQC定制化通信板PCBA在大型船舶储能BMS中的应用",
    description: [
      "BQC定制化通信板PCBA在大型船舶储能电池管理系统（BMS）中扮演着至关重要的角色，通过高效的数据采集、传输和控制，保障了整个系统的稳定运行。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "高可靠性设计",
      "低延迟数据传输",
      "强抗干扰能力",
      "良好的可扩展性",
      "实时数据监测功能",
      "故障检测与报警",
      "数据记录与分析",
      "外部系统接口支持",
      "全面的研发支持服务",
      "一站式OEM生产制造",
      "严格的质量控制流程",
      "定制化设计能力"
    ],
    specifications: [
      { name: "生产能力", value: "22条SMT生产线" },
      { name: "后焊线", value: "4条" },
      { name: "三防喷涂线", value: "7条" },
      { name: "成立时间", value: "2003年" },
      { name: "工厂面积", value: "15000平方米" },
      { name: "认证体系", value: "IATF16949/ISO14001/ISO9001/ISO13485" },
      { name: "研发支持", value: "硬件设计/软件开发/结构设计" },
      { name: "制造服务", value: "SMT/DIP/测试/喷涂/组装" }
    ],
    applications: [
      "实时数据监测",
      "故障检测与报警",
      "数据记录与分析",
      "船舶系统集成",
      "电池状态监控",
      "系统性能优化",
      "维护策略制定",
      "船舶安全保障"
    ],
    faqs: [
      {
        question: "你们如何确保PCB组装OEM服务的质量和可靠性？",
        answer: "从零部件采购到最终组装，我们在生产的每个阶段都实施严格的质量控制流程。我们经验丰富的团队进行彻底的检查，测试和质量检查，以确保每个无线PCB组件符合最高的行业标准。"
      },
      {
        question: "你能提供定制的设计和原型吗？",
        answer: "是的，我们专注于提供定制的PCBA设计和原型设计服务，以满足客户的特定要求。"
      },
      {
        question: "通信板PCBA的主要设计要求是什么？",
        answer: "通信板PCBA需要满足高可靠性、低延迟、强抗干扰能力和良好的可扩展性等要求，以确保在复杂的船舶环境中稳定运行。"
      },
      {
        question: "通信板在BMS系统中的主要作用是什么？",
        answer: "通信板负责实时收集和传输电池组的关键数据，进行故障检测与报警，支持数据记录与分析，并实现与船舶其他控制系统的数据交互，是BMS系统的重要组成部分。"
      }
    ]
  },
  "pcba-board": {
    model: "船舶储能BMS PCBA板",
    title: "船舶储能BMS PCBA板",
    description: [
      "在船舶电气化和清洁能源技术迅猛发展的背景下，PCBA板作为大型船舶储能系统的核心组件，集成了先进的传感器、通信模块和控制芯片，为船舶储能系统提供稳定可靠的管理和控制方案。",
      "作为BMS系统的核心组成部分，PCBA板采用高性能ARM Cortex-M系列或TI DSP处理器，配备多路传感器接口和丰富的通信接口，可实现电池组的全方位监控和管理。产品采用低功耗设计和高耐压设计，完全适应海上环境的特殊要求。",
      "我们提供全方位的JDSM OEM/ODM服务，包括定制设计、柔性生产和全球认证支持，可根据客户需求提供从原型设计到批量生产的完整解决方案。所有产品均符合ISO、CE和UL等国际认证标准，确保在全球航运市场的适用性。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "高性能处理器支持",
      "多接口通信能力",
      "低功耗设计",
      "多路传感器接口",
      "高耐压防护设计",
      "实时数据处理",
      "定制化设计服务",
      "柔性生产能力",
      "全球认证支持",
      "原型设计服务",
      "批量生产保障",
      "完善的技术支持"
    ],
    specifications: [
      { name: "处理器", value: "ARM Cortex-M系列/TI DSP" },
      { name: "通信接口", value: "CAN/RS485/以太网" },
      { name: "电源输入", value: "12V-24V DC" },
      { name: "传感器接口", value: "多路模拟和数字输入" },
      { name: "监测参数", value: "电压/电流/温度/湿度" },
      { name: "防护等级", value: "IP67" },
      { name: "工作温度", value: "-20℃~+70℃" },
      { name: "认证标准", value: "ISO/CE/UL" }
    ],
    applications: [
      "电动渡轮",
      "混合动力船舶",
      "游艇及休闲船",
      "近海工作船",
      "大型商用货船",
      "供应船",
      "拖船",
      "海上平台"
    ],
    faqs: [
      {
        question: "PCBA板可以提供定制设计服务吗？",
        answer: "是的，我们提供JDSM服务，可根据特定项目需求提供量身定制的PCBA设计，包括原型设计、电路设计和组件选择，以满足不同应用场景的具体要求。"
      },
      {
        question: "支持哪些类型的生产订单？",
        answer: "我们提供灵活的OEM/ODM解决方案，可以处理从小规模到大批量的订单需求。客户可以选择提供自己的设计进行制造(OEM)，也可以与我们合作进行产品设计和开发(ODM)。"
      },
      {
        question: "产品是否符合国际标准？",
        answer: "是的，我们的所有PCBA解决方案均符合ISO、CE和UL等国际认证标准，确保产品可以在全球航运市场使用。我们严格遵守相关行业标准和规范。"
      },
      {
        question: "如何确保产品在海洋环境中的可靠性？",
        answer: "产品采用高耐压设计和防护措施，符合船舶电气设备的防水、防腐蚀标准。通过严格的质量控制和测试流程，确保在恶劣的海洋环境中保持稳定运行。"
      }
    ]
  },
  "emergency-power": {
    model: "船舶应急电源系统",
    title: "大型船舶应急电源系统",
    description: [
      "大型船舶应急电源系统（Emergency Power Supply System，简称EPSS）在船舶的航行和作业过程中起到关键的保障作用。它在主电源失效或突发情况下提供备用电力，确保关键设备和系统的正常运行。",
      "该系统由应急电源装置、应急电源配电系统、应急电源监控系统等组成。应急电源装置的功率范围从几百千瓦到几万千瓦，电压范围从110V到440V，可满足不同规模船舶的需求。",
      "系统采用智能化管理和多重保护机制，确保在极端环境下的稳定运行。配备远程监控功能，可实时监测系统状态，并具备快速切换机制，能在主电源失效后5秒内自动接管供电。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "快速响应切换机制",
      "高可靠性冗余设计",
      "多样化储能选择",
      "强环境适应性",
      "智能化远程管理",
      "节能环保设计",
      "多重保护机制",
      "实时监控功能",
      "自动切换功能",
      "模块化设计",
      "高效散热系统",
      "完善的配电管理"
    ],
    specifications: [
      { name: "额定功率", value: "50kW-2000kW" },
      { name: "电压等级", value: "220V/380V/400V/690V AC" },
      { name: "直流电压", value: "24V/48V/110V DC" },
      { name: "电池类型", value: "锂电池/磷酸铁锂/铅酸电池" },
      { name: "储能容量", value: "100kWh-5000kWh" },
      { name: "自动切换时间", value: "<5秒" },
      { name: "通讯接口", value: "CAN/Modbus/RS485/Ethernet" },
      { name: "工作温度", value: "-20°C至60°C" },
      { name: "冷却方式", value: "风冷/液冷" },
      { name: "防护等级", value: "IP65/IP67" },
      { name: "过载能力", value: "110%额定功率60分钟" },
      { name: "充放电效率", value: "90%-95%" }
    ],
    applications: [
      "远洋货轮",
      "客运船舶",
      "海洋工程船",
      "军事船只",
      "大型集装箱船",
      "油轮",
      "散货船",
      "科学考察船",
      "救助船",
      "豪华游艇",
      "钻井平台供电船",
      "风电运维船"
    ],
    faqs: []  // 待填写
  },
  "power-propulsion": {
    model: "船舶电力推进系统",
    title: "大型船舶电力推进系统",
    description: [
      "大型船舶电力推进系统是一种将电力转换为机械能，从而驱动船舶前进的系统。该系统由电力推进电机、电力推进控制器、电力推进变频器等组成，能够实现高效节能、低噪音、低污染的船舶动力解决方案。",
      "系统采用先进的电子技术和控制策略，具有很高的可靠性和灵活性。电力推进电机的功率范围从几百千瓦到几万千瓦，转速范围从几百转每分钟到几千转每分钟，可满足各类船舶的动力需求。",
      "电力推进系统可以将电能转化为机械能的效率高达90%以上，比传统的柴油机推进系统效率更高。系统支持无级变速，可以根据不同的航行条件进行灵活调整，并具备完善的远程监控和智能诊断功能。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "高效节能设计",
      "低噪音运行",
      "环保无污染",
      "高可靠性保障",
      "灵活变速控制",
      "智能化管理",
      "模块化设计",
      "多能源兼容",
      "精确动力控制",
      "远程监控功能",
      "故障诊断系统",
      "环境适应性强"
    ],
    specifications: [
      { name: "额定功率范围", value: "500kW - 30MW" },
      { name: "电机类型", value: "永磁同步电机/感应电机" },
      { name: "电压等级", value: "690V/3.3kV/6.6kV/11kV" },
      { name: "电源类型", value: "交流(AC)或直流(DC)" },
      { name: "转换效率", value: "95%-98%" },
      { name: "推进方式", value: "轴驱动/吊舱/侧推器" },
      { name: "冷却方式", value: "水冷/液冷" },
      { name: "通讯接口", value: "CAN/Modbus/Ethernet/Profibus" },
      { name: "速度调节", value: "无级变速(0-100%)" },
      { name: "噪音水平", value: "<80dB" },
      { name: "工作温度", value: "-20°C至55°C" },
      { name: "防护等级", value: "IP54/IP65" },
      { name: "设计寿命", value: "≥20年" }
    ],
    applications: [
      "远洋货轮",
      "集装箱船",
      "豪华游轮",
      "客运船舶",
      "海洋工程船",
      "风电运维船",
      "铺缆船",
      "拖船",
      "补给船",
      "新能源混合动力船",
      "全电动船舶",
      "科考船"
    ],
    faqs: []  // 待填写
  },
  "offshore-pcba": {
    model: "近海作业船PCBA",
    title: "BQC定制化大型船舶储能BMS 应用于近海作业船",
    description: [
      "BQC定制化大型船舶储能（BMS）PCBA，专为近海作业船设计，主要用于温度控制，状态监控和管理船舶上的电池系统，确保安全、高效的能量使用。",
      "系统采用先进的监控技术和管理策略，支持多种电池类型，具备完善的保护机制和数据分析功能。",
      "产品通过严格的防护设计和测试认证，确保在海洋环境中的可靠运行。"
    ],
    image: "/placeholder.svg?height=500&width=500",
    features: [
      "智能监控系统",
      "高效充放电管理",
      "电池均衡功能",
      "故障诊断与保护",
      "数据记录与分析",
      "多种电池类型支持",
      "完善的通信接口",
      "高等级防护设计",
      "温度实时监控",
      "状态实时监测",
      "安全保护机制",
      "远程管理功能"
    ],
    specifications: [
      { name: "电池类型", value: "支持锂离子、铅酸等多种电池" },
      { name: "电压范围", value: "48V-800V" },
      { name: "电流容量", value: "≥100A" },
      { name: "工作温度", value: "-20°C至60°C" },
      { name: "通信接口", value: "CAN/RS485/Modbus" },
      { name: "防护等级", value: "≥IP65" }
    ],
    applications: [
      "近海工程作业",
      "货船与运输车",
      "港口设备"
    ],
    faqs: [
      {
        question: "定制PCBA生产的交付周期是多少？",
        answer: "交付时间因设计的复杂性和元件可用性而异。我们努力提供有竞争力的周转时间，同时保持高质量标准。"
      },
      {
        question: "你们能进行大规模生产吗？",
        answer: "是的，我们有能力高效、经济地处理大规模生产。我们的生产设施配备了先进的技术和经验丰富的团队，以确保及时交货。"
      },
      {
        question: "你们采取了哪些安全措施来保护敏感数据？",
        answer: "我们实施严格的安全措施，包括数据加密、访问控制和定期审计，以保护整个生产过程中的敏感信息。"
      },
      {
        question: "你们提供测试和认证服务吗？",
        answer: "对，我们提供全面的测试和认证服务，以确保我们的PCBAs符合最高质量标准。我们会进行功能测试、环境测试和合规性测试，以满足您的特定要求。"
      },
      {
        question: "你能提供技术支持和售后服务吗？",
        answer: "当然，我们技术支持团队可随时帮助您解决PCBA相关的任何问题。我们还提供售后支持，以确保您的满意和长期合作。"
      }
    ]
  }
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = productsData[params.productId]

  if (!product) {
    notFound()
  }

  return (
    <PageLayout
      title={product.model}
      subtitle={product.title}
      breadcrumbs={[
        { label: "产品中心", href: "/products" },
        { label: "储能BMS", href: "/products/energy-storage-bms" },
        { label: "大型船舶储能BMS", href: "/products/energy-storage-bms/large-ship" },
        { label: product.model, href: `/products/energy-storage-bms/large-ship/${params.productId}` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <Link
          href="/products/energy-storage-bms/large-ship"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回产品列表
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          {Array.isArray(product.description) ? (
            product.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-gray-700 mb-4">{product.description}</p>
          )}
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">主要特点</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">应用场景</h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((application, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {application}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">技术规格</h2>
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100">参数</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100">规格</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {product.specifications.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm text-gray-900">{spec.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {product.faqs && (
        <div>
          <h2 className="text-2xl font-bold mb-6">常见问题</h2>
          <div className="space-y-6">
            {product.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  )
} 