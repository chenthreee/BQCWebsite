import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"

// 模拟获取新闻详情的函数
function getNewsById(id: string) {
  // 这里应该是从数据库或API获取数据
  // 这里使用模拟数据
  const news = {
    id: Number.parseInt(id),
    title: "百千成电子马来西亚工厂正式投产",
    content: `
      <p>近日，百千成电子马来西亚工厂正式投产，该工厂占地2万平方米，配备先进的SMT生产线和自动化组装设备，将为东南亚市场提供高品质的电子产品制造服务。</p>
      
      <p>马来西亚工厂是百千成电子在海外布局的重要一步，具有以下优势：</p>
      
      <ol>
        <li>地理位置优越，辐射东南亚市场；</li>
        <li>配备全自动化生产线，生产效率高；</li>
        <li>严格执行国际质量标准，产品质量有保障；</li>
        <li>本地化运营团队，服务响应速度快。</li>
      </ol>
      
      <p>马来西亚工厂的投产，标志着百千成电子国际化战略迈出了重要一步。未来，公司将继续加大海外市场开拓力度，提升国际竞争力。</p>
    `,
    date: "2024-03-20",
    author: "海外事业部",
    image: "/placeholder.svg?height=600&width=1200",
    category: "海外发展",
    tags: ["马来西亚工厂", "海外布局", "国际化战略"],
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
        { label: "海外新闻", href: "/news/overseas" },
        { label: news.title, href: `/news/overseas/${news.id}` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-3">
            {news.category}
          </span>
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
          <Link href="/news/overseas" className="text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeft className="mr-1 h-4 w-4" />
            返回海外新闻列表
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
