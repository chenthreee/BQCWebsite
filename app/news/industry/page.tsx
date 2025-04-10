import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function IndustryNewsPage() {
  // 模拟新闻数据
  const news = [
    {
      id: 1,
      title: "2024年全球储能市场展望：增长趋势与技术发展",
      summary:
        "随着全球能源转型的加速推进，储能市场迎来了快速发展期。本文分析了2024年全球储能市场的增长趋势与技术发展方向，为行业提供参考。",
      date: "2024-03-20",
      author: "行业分析师",
      image: "/placeholder.svg?height=600&width=800",
      category: "市场趋势",
    },
    {
      id: 2,
      title: "中国储能产业政策解读：机遇与挑战",
      summary:
        "近期，中国政府出台了一系列支持储能产业发展的政策措施，为行业带来了新的发展机遇。本文对这些政策进行了详细解读，并分析了行业面临的机遇与挑战。",
      date: "2024-03-10",
      author: "政策研究员",
      image: "/placeholder.svg?height=600&width=800",
      category: "政策解读",
    },
    {
      id: 3,
      title: "储能技术创新：从锂电池到固态电池",
      summary:
        "储能技术正在经历快速创新，从传统的锂离子电池到新型的固态电池，技术路线不断丰富。本文介绍了当前储能技术的最新进展和未来发展方向。",
      date: "2024-02-25",
      author: "技术专家",
      image: "/placeholder.svg?height=600&width=800",
      category: "技术创新",
    },
    {
      id: 4,
      title: "储能与可再生能源协同发展：案例分析",
      summary:
        "储能系统与可再生能源的协同发展，是实现能源转型的重要途径。本文通过多个案例分析，展示了储能系统如何提升可再生能源的利用效率和经济性。",
      date: "2024-02-15",
      author: "能源专家",
      image: "/placeholder.svg?height=600&width=800",
      category: "应用案例",
    },
    {
      id: 5,
      title: "全球储能企业竞争格局分析",
      summary:
        "随着储能市场的快速发展，全球储能企业的竞争也日趋激烈。本文分析了当前全球储能企业的竞争格局，包括技术路线、市场份额、发展战略等方面。",
      date: "2024-01-30",
      author: "市场分析师",
      image: "/placeholder.svg?height=600&width=800",
      category: "竞争分析",
    },
    {
      id: 6,
      title: "储能标准化进程加速：行业规范与质量控制",
      summary:
        "随着储能产业的快速发展，标准化工作也在加速推进。本文介绍了当前储能标准化的最新进展，以及标准化对行业规范和质量控制的重要意义。",
      date: "2024-01-20",
      author: "标准化专家",
      image: "/placeholder.svg?height=600&width=800",
      category: "标准化",
    },
  ]

  return (
    <PageLayout
      title="行业资讯"
      subtitle="了解储能行业最新动态与趋势"
      breadcrumbs={[
        { label: "新闻中心", href: "/news" },
        { label: "行业资讯", href: "/news/industry" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/news/company" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            公司新闻
          </Link>
          <Link href="/news/industry" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-3">
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
                href={`/news/industry/${news[0].id}`}
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
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-3">
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
                  href={`/news/industry/${item.id}`}
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
