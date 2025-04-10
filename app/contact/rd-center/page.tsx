import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RdCenterPage() {
  return (
    <PageLayout
      title="研发中心"
      subtitle="百千成电子技术创新的核心"
      breadcrumbs={[
        { label: "联系我们", href: "/contact" },
        { label: "研发中心", href: "/contact/rd-center" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">研发中心介绍</h2>
          <p className="text-lg text-gray-700 mb-4">
            百千成电子研发中心位于深圳市南山区科技园，是公司技术创新的核心，拥有一支由博士、硕士等高学历人才组成的专业研发团队。
          </p>
          <p className="text-lg text-gray-700 mb-4">
            研发中心下设电路设计部、嵌入式软件部、结构设计部、测试验证部等多个部门，配备先进的研发设备和测试仪器，为产品创新提供强大的技术支持。
          </p>
          <p className="text-lg text-gray-700 mb-8">
            目前，研发中心已获得60多项核心专利，在储能BMS系统、智能控制等领域拥有深厚的技术积累和创新能力。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">电子邮箱</h3>
                <p className="text-gray-700">rd@baiqiancheng.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">联系电话</h3>
                <p className="text-gray-700">+86 755 8765 4321</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">地址</h3>
                <p className="text-gray-700">深圳市南山区科技园</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">工作时间</h3>
                <p className="text-gray-700">周一至周五 9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="百千成电子研发中心"
            width={800}
            height={600}
            className="rounded-lg shadow-lg mb-6"
          />
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="研发实验室"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="测试设备"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">研发团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="技术总监"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">张工</h3>
            <p className="text-blue-600 mb-3">技术总监</p>
            <p className="text-gray-700">博士学位，20年电子产品研发经验，主导多项国家专利技术的研发。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="硬件部经理"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">李工</h3>
            <p className="text-blue-600 mb-3">硬件部经理</p>
            <p className="text-gray-700">硕士学位，15年硬件设计经验，精通各类电子电路设计与PCB布局。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="软件部经理"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">王工</h3>
            <p className="text-blue-600 mb-3">软件部经理</p>
            <p className="text-gray-700">硕士学位，12年嵌入式软件开发经验，精通多种嵌入式平台与通信协议。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="测试部经理"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">陈工</h3>
            <p className="text-blue-600 mb-3">测试部经理</p>
            <p className="text-gray-700">硕士学位，10年产品测试经验，精通各类测试方法与可靠性验证。</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">研发设备</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="电路设计与仿真平台"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">电路设计与仿真平台</h3>
            <p className="text-gray-700">配备先进的电路设计软件和仿真工具，支持复杂电路的设计与验证。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="电池测试系统"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">电池测试系统</h3>
            <p className="text-gray-700">高精度电池测试系统，支持电池参数测量、充放电测试、循环寿命测试等。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="环境测试设备"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">环境测试设备</h3>
            <p className="text-gray-700">
              温湿度循环测试箱、振动测试台、盐雾测试箱等环境测试设备，验证产品在各种环境下的可靠性。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">联系我们</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          如果您有技术咨询或合作需求，欢迎联系我们的研发中心，我们将为您提供专业的技术支持。
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          联系研发中心
        </Button>
      </div>
    </PageLayout>
  )
}
