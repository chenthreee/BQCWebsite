import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <PageLayout
      title="服务"
      subtitle="百千成电子的专业服务与解决方案"
      breadcrumbs={[{ label: "服务", href: "/services" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="ODM研发服务"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">ODM研发服务</h2>
            <p className="text-gray-700 mb-6">
              百千成电子拥有专业的研发团队，提供从需求分析、方案设计到样机制作、量产支持的一站式ODM研发服务，帮助客户快速实现产品创新。
            </p>
            <Link href="/services/odm" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
              了解详情
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="OEM代工服务"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">OEM代工服务</h2>
            <p className="text-gray-700 mb-6">
              百千成电子提供从PCB设计、SMT贴片到整机组装的全流程OEM代工服务，以先进的生产设备和严格的质量控制体系，为客户提供高品质的电子制造服务。
            </p>
            <Link href="/services/jdsm-oem" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
              了解详情
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">服务优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="专业团队" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">专业团队</h3>
            <p className="text-gray-700 text-center">
              拥有一支由博士、硕士等高学历人才组成的专业研发团队，技术实力雄厚。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="先进设备" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">先进设备</h3>
            <p className="text-gray-700 text-center">配备先进的研发设备和生产线，确保产品设计与制造的高品质。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="质量保证" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">质量保证</h3>
            <p className="text-gray-700 text-center">严格的质量控制体系，从设计到生产的每一个环节都精益求精。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Image src="/placeholder.svg?height=40&width=40" alt="快速响应" width={40} height={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">快速响应</h3>
            <p className="text-gray-700 text-center">高效的项目管理和快速响应机制，确保项目按时交付。</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
