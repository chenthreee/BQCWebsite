"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"
import { CheckCircle, Lightbulb, Code, Cpu, Settings, FileCheck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function OdmServiceSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)

  // ODM服务数据
  const services = [
    {
      id: 1,
      title: "需求分析与方案设计",
      description: "深入理解客户需求，提供专业的技术咨询和解决方案设计，确保产品设计满足市场需求与技术要求",
      icon: <Lightbulb className="h-16 w-16 text-blue-600" />,
      features: ["需求调研与分析", "技术可行性评估", "整体方案设计", "成本优化建议", "项目规划与里程碑制定"],
    },
    {
      id: 2,
      title: "BMS系统开发",
      description: "拥有15年以上BMS系统开发经验，可根据客户需求开发各类定制化BMS系统，包括硬件电路设计和嵌入式软件开发",
      icon: <Cpu className="h-16 w-16 text-blue-600" />,
      features: ["BMS硬件电路设计", "电池参数建模", "SOC/SOH算法开发", "均衡与保护策略设计", "CAN/RS485等通信协议开发"],
    },
    {
      id: 3,
      title: "嵌入式软件开发",
      description: "提供高质量的嵌入式软件开发服务，涵盖底层驱动、中间层架构和应用层开发，确保软件性能和稳定性",
      icon: <Code className="h-16 w-16 text-blue-600" />,
      features: ["实时操作系统(RTOS)应用开发", "底层驱动开发", "通信协议栈实现", "算法优化与移植", "软件架构设计"],
    },
    {
      id: 4,
      title: "样机制作与测试验证",
      description: "快速样机制作与全面的测试验证服务，帮助客户缩短产品开发周期，提前发现并解决潜在问题",
      icon: <Settings className="h-16 w-16 text-blue-600" />,
      features: ["快速原型制作", "功能测试与验证", "环境适应性测试", "可靠性与寿命测试", "EMC/EMI测试支持"],
    },
    {
      id: 5,
      title: "产品认证与量产支持",
      description: "协助客户完成产品认证并提供量产阶段的全方位技术支持，确保产品顺利进入市场",
      icon: <FileCheck className="h-16 w-16 text-blue-600" />,
      features: ["CE/UL/FCC等认证支持", "生产工艺优化", "量产测试方案设计", "产品迭代升级支持", "技术文档编写"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ODM研发服务</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            百千成电子拥有专业的研发团队，提供从需求分析、方案设计到样机制作、量产支持的一站式ODM研发服务，帮助客户快速实现产品创新
          </p>
        </div>

        {/* 服务流程图 */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          <div className="flex flex-col md:flex-row justify-between relative z-10">
            {[1, 2, 3, 4, 5].map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">
                    {index === 0 && "需求分析"}
                    {index === 1 && "方案设计"}
                    {index === 2 && "研发开发"}
                    {index === 3 && "样机测试"}
                    {index === 4 && "量产支持"}
                  </h3>
                  <p className="text-gray-600 text-sm px-4">
                    {index === 0 && "深入理解需求"}
                    {index === 1 && "技术方案设计"}
                    {index === 2 && "硬件软件开发"}
                    {index === 3 && "样机制作测试"}
                    {index === 4 && "认证与量产"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 我们的优势 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10">ODM研发优势</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-3xl font-bold">15+</span>
              </div>
              <h4 className="text-xl font-bold mb-3">多年BMS开发经验</h4>
              <p className="text-gray-600">拥有15年以上BMS系统研发经验，深入了解各类储能应用场景的技术需求</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-3xl font-bold">60+</span>
              </div>
              <h4 className="text-xl font-bold mb-3">核心技术专利</h4>
              <p className="text-gray-600">拥有60项以上核心技术专利，在SOC算法、均衡技术等领域具有深厚的技术积累</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-3xl font-bold">30%</span>
              </div>
              <h4 className="text-xl font-bold mb-3">高比例研发人员</h4>
              <p className="text-gray-600">研发人员占比30%，拥有丰富的硬件设计、嵌入式开发和电池管理系统设计经验</p>
            </div>
          </div>
        </div>

        {/* 服务详情选项卡 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-wrap border-b overflow-x-auto scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-4 text-md font-medium transition-colors whitespace-nowrap",
                  index === activeTab
                    ? "text-blue-600 border-b-2 border-blue-600 -mb-[2px]"
                    : "text-gray-600 hover:text-blue-500",
                )}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* 服务内容 */}
          <div className="p-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "transition-opacity duration-300",
                  index === activeTab ? "block opacity-100" : "hidden opacity-0",
                )}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <div className="bg-blue-50 rounded-lg p-6 flex justify-center items-center h-full">
                      {service.icon}
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>

                    <h4 className="font-bold text-lg mb-3">服务内容：</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                联系我们讨论您的项目需求
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* 案例展示 */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">成功案例</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "大型电力储能BMS",
                description: "为某电力公司定制开发的1MWh级电力储能系统BMS解决方案，支持多串并联电池管理与智能均衡",
              },
              {
                title: "船舶储能管理系统",
                description: "为大型船舶开发的储能管理系统，满足海洋环境特殊要求，具备高防护等级和抗振动特性",
              },
              {
                title: "通讯基站备电系统",
                description: "为电信运营商定制的通讯基站备电管理系统，支持远程监控与故障诊断，大幅提升系统可靠性",
              },
            ].map((case_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=案例${index + 1}`}
                    alt={case_.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{case_.title}</h4>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                    查看详情
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-blue-50 rounded-full opacity-30 -z-10 blur-3xl"></div>
    </section>
  )
}
