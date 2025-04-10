import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function TechnologyNewsPage() {
  // 模拟新闻数据
  const news = [
    {
      id: 1,
      title: "BMS系统SOC算法优化：提高电池状态估算精度",
      summary:
        "SOC（State of Charge）是BMS系统的核心参数之一，准确估算SOC对提高电池使用效率和延长寿命至关重要。本文介绍了几种先进的SOC估算算法及其优化方法。",
      date: "2024-03-18",
      author: "技术研发部",
      image: "/placeholder.svg?height=600&width=800",
      category: "技术研发",
    },
    {
      id: 2,
      title: "储能系统均衡技术比较：被动均衡vs主动均衡",
      summary:
        "电池均衡是BMS系统的重要功能之一，可分为被动均衡和主动均衡两种方式。本文对这两种均衡技术进行了详细比较，分析了各自的优缺点和适用场景。",
      date: "2024-03-05",
      author: "技术研发部",
      image: "/placeholder.svg?height=600&width=800",
      category: "技术研发",
    },
    {
      id: 3,
      title: "储能PCS系统控制策略：提高系统效率与可靠性",
      summary:
        "PCS（Power Conversion System）是储能系统的核心设备，其控制策略直接影响系统的效率和可靠性。本文介绍了几种先进的PCS控制策略及其实现方法。",
      date: "2024-02-20",
      author: "技术研发部",
      image: "/placeholder.svg?height=600&width=800",
      category: "技术研发",
    },
    {
      id: 4,
      title: "储能EMS系统优化算法：基于人工智能的调度策略",
      summary: 'EMS（Energy Management System）是储能系统的"大脑"',
      date: "2024-02-10",
      author: "技术研发部",
      image: "/placeholder.svg?height=600&width=800",
      category: "技术研发",
    },
    {
      id: 5,
      title: "储能系统安全技术：多重保护策略设计",
      summary:
        "安全是储能系统的首要考虑因素，本文介绍了储能系统的多重保护策略设计，包括硬件保护、软件保护、通信保护等多个层面，确保系统安全可靠运行。",
      date: "2024-01-25",
      author: "技术研发部",
      image: "/placeholder.svg?height=600&width=800",
      category: "技术研发",
    },
    {
      id: 6,
      title: "储能系统通信协议：标准化与兼容性",
      summary:
        "通信是储能系统各部分协同工作的基础，本文介绍了储能系统常用的通信协议，分析了标准化与兼容性问题，并提出了解决方案。",
      date: "2024-01-15",
      author: "技术研发部",
      image: "/placeholder.svg?height=600&amp;width=800",
      category: "技术研发",
    },
  ]

  return (
    <PageLayout
      title="技术分享"
      subtitle="储能技术与产品应用分享"
      breadcrumbs={[
        { label: "新闻中心", href: "/news" },
        { label: "技术分享", href: "/news/technology" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/news/company" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            公司新闻
          </Link>
          <Link href="/news/industry" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            行业资讯
          </Link>
          <Link href="/news/technology" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
                href={`/news/technology/${news[0].id}`}
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
                  href={`/news/technology/${item.id}`}
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
