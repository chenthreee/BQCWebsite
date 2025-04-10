import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function CompanyNewsPage() {
  // 模拟新闻数据
  const news = [
    {
      id: 1,
      title: "百千成电子成功研发新一代高效能储能BMS系统",
      summary:
        "近日，百千成电子成功研发出新一代高效能储能BMS系统，该系统采用先进的主动均衡技术和高精度SOC算法，大幅提升了储能系统的效率和可靠性。",
      date: "2024-03-15",
      author: "技术部",
      image: "/placeholder.svg?height=600&width=800",
      category: "技术创新",
    },
    {
      id: 2,
      title: "百千成电子与某知名能源企业达成战略合作",
      summary:
        "日前，百千成电子与某知名能源企业签署战略合作协议，双方将在储能系统、智能控制等领域展开深入合作，共同推动清洁能源的应用和发展。",
      date: "2024-02-28",
      author: "市场部",
      image: "/placeholder.svg?height=600&width=800",
      category: "企业合作",
    },
    {
      id: 3,
      title: "百千成电子马来西亚工厂正式投产",
      summary:
        "近日，百千成电子马来西亚工厂正式投产，该工厂占地2万平方米，配备先进的SMT生产线和自动化组装设备，将为东南亚市场提供高品质的电子产品制造服务。",
      date: "2024-01-10",
      author: "运营部",
      image: "/placeholder.svg?height=600&width=800",
      category: "企业发展",
    },
    {
      id: 4,
      title: "百千成电子荣获“国家高新技术企业”认定",
      summary:
        "近日，百千成电子成功通过“国家高新技术企业”认定，这是对公司技术创新能力和研发实力的高度认可，也是公司发展历程中的重要里程碑。",
      date: "2023-12-20",
      author: "行政部",
      image: "/placeholder.svg?height=600&width=800",
      category: "企业荣誉",
    },
    {
      id: 5,
      title: "百千成电子参加2023年储能技术展览会",
      summary:
        "近日，百千成电子参加了在深圳举办的2023年储能技术展览会，展示了公司最新研发的储能BMS系统和智能控制产品，吸引了众多客户和合作伙伴的关注。",
      date: "2023-11-15",
      author: "市场部",
      image: "/placeholder.svg?height=600&width=800",
      category: "展会活动",
    },
    {
      id: 6,
      title: "百千成电子举办2023年技术创新大赛",
      summary:
        "为激发员工创新热情，提升公司技术实力，百千成电子近日举办了2023年技术创新大赛，来自各部门的员工踊跃参与，提出了多项创新方案和技术改进建议。",
      date: "2023-10-25",
      author: "人力资源部",
      image: "/placeholder.svg?height=600&width=800",
      category: "企业文化",
    },
  ]

  return (
    <PageLayout
      title="公司新闻"
      subtitle="了解百千成电子最新动态"
      breadcrumbs={[
        { label: "新闻中心", href: "/news" },
        { label: "公司新闻", href: "/news/company" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/news/company" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            公司新闻
          </Link>
          <Link href="/news/industry" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            行业资讯
          </Link>
          <Link href="/news/technology" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            技术分享
          </Link>
        </div>

        {/* 置顶新闻 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full">
              <Image
                src={news[0].image || "/placeholder.svg"}
                alt={news[0].title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                  {news[0].category}
                </span>
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{news[0].date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{news[0].author}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{news[0].title}</h2>
              <p className="text-gray-700 mb-6">{news[0].summary}</p>
              <Link
                href={`/news/company/${news[0].id}`}
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                阅读全文
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                    {item.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{item.summary}</p>
                <Link
                  href={`/news/company/${item.id}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                >
                  阅读全文
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 分页 */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-1">
          <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">上一页</button>
          <button className="px-4 py-2 border rounded-md bg-blue-600 text-white">1</button>
          <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">2</button>
          <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">3</button>
          <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">下一页</button>
        </div>
      </div>
    </PageLayout>
  )
}
