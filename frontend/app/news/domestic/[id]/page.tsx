import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"

// 模拟获取新闻详情的函数
function getNewsById(id: string) {
  // 这里应该是从数据库或API获取数据
  // 这里使用模拟数据
  const news = {
    id: Number.parseInt(id),
    title: "百千成电子成功研发新一代高效能储能BMS系统",
    content: `
      <p>近日，百千成电子成功研发出新一代高效能储能BMS系统，该系统采用先进的主动均衡技术和高精度SOC算法，大幅提升了储能系统的效率和可靠性。</p>
      
      <p>这款新一代BMS系统具有以下特点：</p>
      
      <ol>
        <li>采用先进的主动均衡技术，均衡效率提升50%以上；</li>
        <li>基于机器学习的SOC算法，精度达到业内领先水平；</li>
        <li>支持远程监控和故障诊断，大幅提升系统可维护性；</li>
        <li>模块化设计，适用于不同规模的储能系统。</li>
      </ol>
      
      <p>该系统已在多个示范项目中应用，表现出色。未来，百千成电子将继续加大研发投入，推动储能技术的创新与发展。</p>
    `,
    date: "2024-03-15",
    author: "技术部",
    image: "/images/news/domestic/1-1.png",
    category: "技术创新",
    tags: ["BMS", "储能技术", "技术创新"],
  }

  return news
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = getNewsById(params.id)

  return (
    <PageLayout
      title={news.title}
      subtitle={`发布日期：${news.date}`}
      breadcrumbs={[
        { label: "新闻中心", href: "/news" },
        { label: "国内新闻", href: "/news/domestic" },
        { label: news.title, href: `/news/domestic/${news.id}` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">{news.category}</span>
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{news.author}</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6">{news.title}</h1>

        <div className="mb-8">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />

        <div className="mt-8 flex flex-wrap gap-2">
          {news.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/news/domestic" className="text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeft className="mr-1 h-4 w-4" />
            返回国内新闻列表
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
