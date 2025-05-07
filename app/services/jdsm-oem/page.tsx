import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JdsmOemServicePage() {
  return (
    <PageLayout
      title="OEM代工服务"
      subtitle="一站式电子产品制造解决方案"
      breadcrumbs={[
        { label: "服务", href: "/services" },
        { label: "OEM代工服务", href: "/services/jdsm-oem" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">什么是OEM服务？</h2>
            <p className="text-lg text-gray-700 mb-4">
              OEM（Original Equipment
              Manufacturer）原始设备制造商，是指企业根据客户的设计和规格，为客户提供产品制造服务。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              百千成电子拥有先进的生产设备和完善的制造工艺，为客户提供从PCB设计、SMT贴片到整机组装的全流程OEM代工服务，以先进的生产设备和严格的质量控制体系，确保产品品质。
            </p>
            <p className="text-lg text-gray-700">
              我们的OEM服务涵盖电子产品制造的各个环节，能够满足客户多样化的制造需求，帮助客户快速将产品推向市场。
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="OEM代工服务"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">服务流程</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          <div className="flex flex-col md:flex-row justify-between relative z-10">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">
                    {index === 0 && "PCB设计"}
                    {index === 1 && "SMT贴片"}
                    {index === 2 && "整机组装"}
                    {index === 3 && "测试包装"}
                  </h3>
                  <p className="text-gray-600 text-sm px-4">
                    {index === 0 && "电路设计与PCB布局"}
                    {index === 1 && "高精度表面贴装"}
                    {index === 2 && "自动化组装生产"}
                    {index === 3 && "全面测试与包装"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">服务内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">PCB设计与布局</h3>
            <p className="text-gray-700 mb-4">
              提供专业的电路设计与PCB布局服务，从原理图设计到PCB布局，确保产品性能与可靠性。
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>多层PCB设计与布局</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>高速信号完整性分析</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>电源完整性分析</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>EMC/EMI设计优化</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">SMT贴片生产</h3>
            <p className="text-gray-700 mb-4">
              采用先进的SMT生产线，提供高精度、高效率的表面贴装技术服务，满足各类电子产品的生产需求。
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>高精度SMT贴片</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>BGA/CSP/QFN等复杂封装处理</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>无铅工艺支持</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>AOI自动光学检测</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">整机组装测试</h3>
            <p className="text-gray-700 mb-4">
              提供从PCBA到整机的全流程组装服务，包括功能测试、老化测试、包装等环节，确保产品质量。
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>自动化组装生产线</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>功能测试与老化测试</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>防静电工作环境</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>包装与物流服务</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">质量控制体系</h3>
            <p className="text-gray-700 mb-4">
              严格的质量控制体系，从原材料进厂到成品出货的全流程质量管控，确保产品符合国际标准。
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>ISO9001质量管理体系</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>IPC标准生产工艺</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>来料检验与供应商管理</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>成品检验与可靠性测试</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">生产能力</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-xl font-bold mb-1">SMT生产线</div>
              <p className="text-gray-700">配备10条以上全自动SMT生产线</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5万+</div>
              <div className="text-xl font-bold mb-1">日产能</div>
              <p className="text-gray-700">日产能超过5万件PCBA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-xl font-bold mb-1">一次通过率</div>
              <p className="text-gray-700">产品一次通过率高达99.8%</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2万㎡</div>
              <div className="text-xl font-bold mb-1">生产面积</div>
              <p className="text-gray-700">深圳和马来西亚工厂总面积超过2万平方米</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">合作客户</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
              <Image
                src={`/placeholder.svg?height=60&width=120&text=客户${item}`}
                alt={`客户${item}`}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">联系我们</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          如果您有OEM代工需求，欢迎联系我们的OEM服务团队，我们将为您提供专业的制造服务。
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          联系我们讨论您的项目
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </PageLayout>
  )
}
