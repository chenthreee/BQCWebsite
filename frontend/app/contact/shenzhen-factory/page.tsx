import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ShenzhenFactoryPage() {
  return (
    <PageLayout
      title="深圳工厂"
      subtitle="百千成电子先进的电子产品制造基地"
      breadcrumbs={[
        { label: "联系我们", href: "/contact" },
        { label: "深圳工厂", href: "/contact/shenzhen-factory" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">深圳工厂介绍</h2>
          <p className="text-lg text-gray-700 mb-4">
            百千成电子深圳工厂位于深圳市光明区，是公司的主要生产基地，占地面积**，拥有先进的生产设备和完善的制造工艺。
          </p>
          {/* <p className="text-lg text-gray-700 mb-4">
            工厂配备了多条全自动SMT生产线和自动化组装设备，以及先进的测试仪器和检测设备，年产能超过100万件电子产品。
          </p>
          <p className="text-lg text-gray-700 mb-8">
            工厂严格执行ISO9001质量管理体系和IPC标准，从原材料进厂到成品出货的全过程进行严格控制，确保产品品质。
          </p> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">电子邮箱</h3>
                <p className="text-gray-700">factory-sz@baiqiancheng.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">联系电话</h3>
                <p className="text-gray-700">+86 755 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">地址</h3>
                <p className="text-gray-700">深圳市光明区</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-1">工作时间</h3>
                <p className="text-gray-700">周一至周五 8:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="百千成电子深圳工厂"
            width={800}
            height={600}
            className="rounded-lg shadow-lg mb-6"
          />
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="SMT生产线"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="组装车间"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">生产设备</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SMT生产线"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">SMT生产线</h3>
            <p className="text-gray-700">
              工厂配备多条全自动SMT生产线，包括高精度贴片机、回流焊机、AOI设备等，可满足各类电子产品的生产需求。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="自动化组装设备"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">自动化组装设备</h3>
            <p className="text-gray-700">
              引进先进的自动化组装设备，提高生产效率和产品一致性，减少人为因素对产品品质的影响。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-48 overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="测试设备"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">测试设备</h3>
            <p className="text-gray-700">
              配备先进的测试仪器和检测设备，包括ICT测试仪、FCT功能测试设备、老化测试设备等，确保产品品质。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">生产能力</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-xl font-bold mb-1">SMT生产线</div>
              <p className="text-gray-700">配备12条以上全自动SMT生产线</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4万+</div>
              <div className="text-xl font-bold mb-1">日产能</div>
              <p className="text-gray-700">日产能超过12万件PCBA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-xl font-bold mb-1">一次通过率</div>
              <p className="text-gray-700">产品一次通过率高达99.8%</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1.5万㎡</div>
              <div className="text-xl font-bold mb-1">工厂面积</div>
              <p className="text-gray-700">工厂总面积超过1.5万平方米</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">工厂地图</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
          <p className="text-gray-600">此处将显示工厂地图</p>
        </div>
      </div>
    </PageLayout>
  )
}
