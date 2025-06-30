"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "智能控制系统", en: "Intelligent Control System" },
  subtitle: { zh: "先进的智能控制解决方案", en: "Advanced Intelligent Control Solutions" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_robot: { zh: "智能控制系统", en: "Intelligent Control System" },
  overview: { zh: "智能控制系统概述", en: "Overview of Intelligent Control System" },
  overview_p1: { zh: "百千成电子的智能控制系统是基于先进的嵌入式技术和人工智能算法开发的控制系统解决方案，广泛应用于工业自动化、智能装备、机器人等领域。", en: "BAIQIANCHENG's intelligent control system is based on advanced embedded technology and AI algorithms, widely used in industrial automation, smart equipment, robotics, etc." },
  overview_p2: { zh: "我们的智能控制系统具有高性能、高可靠性、高灵活性等特点，能够满足各类复杂控制场景的需求，帮助客户提升生产效率和产品品质。", en: "Our system features high performance, reliability, and flexibility, meeting complex control needs and improving efficiency and quality." },
  overview_p3: { zh: "凭借多年的技术积累和行业经验，百千成电子已成为智能控制领域的领先企业，为众多客户提供了优质的产品和服务。", en: "With years of experience, BAIQIANCHENG is a leader in intelligent control, serving many clients with quality products and services." },
  features: { zh: "系统特点", en: "System Features" },
  high_performance: { zh: "高性能", en: "High Performance" },
  high_performance_desc: { zh: "采用高性能处理器和实时操作系统，实现快速响应和精准控制。", en: "High-performance processors and RTOS for fast response and precise control." },
  high_reliability: { zh: "高可靠性", en: "High Reliability" },
  high_reliability_desc: { zh: "采用冗余设计和故障诊断技术，确保系统长期稳定运行。", en: "Redundant design and fault diagnosis for long-term stability." },
  high_flexibility: { zh: "高灵活性", en: "High Flexibility" },
  high_flexibility_desc: { zh: "模块化设计，支持多种通信协议和接口，易于集成和扩展。", en: "Modular design, supports various protocols and interfaces, easy to integrate and expand." },
  intelligent: { zh: "智能化", en: "Intelligent" },
  intelligent_desc: { zh: "集成人工智能算法，实现自适应控制、预测性维护等智能功能。", en: "Integrated AI algorithms for adaptive control, predictive maintenance, etc." },
  series: { zh: "产品系列", en: "Product Series" },
  industrial: { zh: "工业控制系统", en: "Industrial Control System" },
  industrial_desc: { zh: "适用于工业自动化领域，包括PLC控制系统、DCS控制系统、工业机器人控制系统等，实现生产过程的自动化控制。", en: "For industrial automation, including PLC, DCS, and robot control, enabling automated production." },
  equipment: { zh: "智能装备控制系统", en: "Smart Equipment Control System" },
  equipment_desc: { zh: "适用于智能装备领域，包括数控机床控制系统、3D打印控制系统、激光加工控制系统等，实现高精度、高效率的加工控制。", en: "For smart equipment, including CNC, 3D printing, laser processing, for high-precision, efficient control." },
  robot: { zh: "机器人控制系统", en: "Robot Control System" },
  robot_desc: { zh: "适用于各类机器人，包括工业机器人、服务机器人、特种机器人等，实现机器人的运动控制、感知控制、任务规划等功能。", en: "For all types of robots, enabling motion, perception, and task planning control." },
  iot: { zh: "智能物联网控制系统", en: "IoT Control System" },
  iot_desc: { zh: "适用于物联网应用场景，包括智能家居控制系统、智能楼宇控制系统、智能农业控制系统等，实现设备互联互通和智能控制。", en: "For IoT scenarios, including smart home, building, agriculture, enabling device interconnection and smart control." },
  details: { zh: "查看详情", en: "View Details" },
  cases: { zh: "应用案例", en: "Application Cases" },
  case_industrial: { zh: "工业自动化案例", en: "Industrial Automation Case" },
  case_industrial_desc: { zh: "为某制造企业提供的生产线自动化控制系统，实现了生产过程的全自动化控制，提高了生产效率30%，降低了人工成本50%。", en: "Automated control system for a manufacturer, achieving full automation, 30% efficiency increase, 50% labor cost reduction." },
  case_robot: { zh: "机器人应用案例", en: "Robot Application Case" },
  case_robot_desc: { zh: "为某物流企业提供的仓储机器人控制系统，实现了仓库内货物的自动搬运和分拣，提高了物流效率40%，降低了差错率90%。", en: "Warehouse robot control for a logistics company, 40% efficiency increase, 90% error reduction." },
  case_iot: { zh: "智能物联网案例", en: "IoT Application Case" },
  case_iot_desc: { zh: "为某农业企业提供的智能温室控制系统，实现了温室内温度、湿度、光照等环境参数的自动调节，提高了作物产量20%，降低了能耗30%。", en: "Smart greenhouse control for an agriculture company, 20% yield increase, 30% energy reduction." },
}

export default function IntelligentRobotSystemsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products` },
        { label: t("breadcrumb_robot"), href: `/${locale}/products/intelligent-robot-systems` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("overview")}</h2>
            <p className="text-lg text-gray-700 mb-4">{t("overview_p1")}</p>
            <p className="text-lg text-gray-700 mb-4">{t("overview_p2")}</p>
            <p className="text-lg text-gray-700">{t("overview_p3")}</p>
          </div>
          <div>
            <Image src="/placeholder.svg?height=600&width=800" alt={t("title")} width={800} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">{t("features")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("high_performance")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("high_performance")}</h4>
              <p className="text-gray-700">{t("high_performance_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("high_reliability")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("high_reliability")}</h4>
              <p className="text-gray-700">{t("high_reliability_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("high_flexibility")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("high_flexibility")}</h4>
              <p className="text-gray-700">{t("high_flexibility_desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=30&width=30" alt={t("intelligent")} width={30} height={30} />
              </div>
              <h4 className="text-xl font-bold mb-2">{t("intelligent")}</h4>
              <p className="text-gray-700">{t("intelligent_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("series")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("industrial")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("industrial")}</h3>
              <p className="text-gray-700 mb-4">{t("industrial_desc")}</p>
              <Link href={`/${locale}/products/intelligent-robot-systems/industrial`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("equipment")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("equipment")}</h3>
              <p className="text-gray-700 mb-4">{t("equipment_desc")}</p>
              <Link href={`/${locale}/products/intelligent-robot-systems/equipment`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("robot")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("robot")}</h3>
              <p className="text-gray-700 mb-4">{t("robot_desc")}</p>
              <Link href={`/${locale}/products/intelligent-robot-systems/robot`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt={t("iot")} width={800} height={600} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{t("iot")}</h3>
              <p className="text-gray-700 mb-4">{t("iot_desc")}</p>
              <Link href={`/${locale}/products/intelligent-robot-systems/iot`} className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
                {t("details")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("cases")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=400&width=600" alt={t("case_industrial")} width={600} height={400} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_industrial")}</h3>
            <p className="text-gray-700 mb-4">{t("case_industrial_desc")}</p>
            <Link href={`/${locale}/products/intelligent-robot-systems/case-industrial`} className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=400&width=600" alt={t("case_robot")} width={600} height={400} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_robot")}</h3>
            <p className="text-gray-700 mb-4">{t("case_robot_desc")}</p>
            <Link href={`/${locale}/products/intelligent-robot-systems/case-robot`} className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=400&width=600" alt={t("case_iot")} width={600} height={400} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t("case_iot")}</h3>
            <p className="text-gray-700 mb-4">{t("case_iot_desc")}</p>
            <Link href={`/${locale}/products/intelligent-robot-systems/case-iot`} className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
              {t("details")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 