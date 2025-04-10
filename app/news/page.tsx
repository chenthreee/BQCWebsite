import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NewsPage() {
  const categories = [
    {
      title: "公司新闻",
      description: "了解百千成电子最新动态",
      link: "/news/company",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "行业资讯",
      description: "储能行业最新动态与趋势",
      link: "/news/industry",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "技术分享",
      description: "储能技术与产品应用分享",
      link: "/news/technology",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <PageLayout
      title="新闻中心"
      subtitle="了解百千成电子最新动态与行业资讯"
      breadcrumbs={[{ label: "新闻中心", href: "/news" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {categories.map((category, index) => (
          <Link key={index} href={category.link} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <div className="text-blue-600 flex items-center font-medium">
                  查看详情
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">最新动态</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="公司新闻"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">公司新闻</span>
              <h3 className="text-xl font-bold my-3">百千成电子成功研发新一代高效能储能BMS系统</h3>
              <p className="text-gray-700 mb-4">
                近日，百千成电子成功研发出新一代高效能储能BMS系统，该系统采用先进的主动均衡技术和高精度SOC算法，大幅提升了储能系统的效率和可靠性。
              </p>
              <Link
                href="/news/company/1"
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                阅读全文
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="行业资讯"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">行业资讯</span>
              <h3 className="text-xl font-bold my-3">2024年全球储能市场展望：增长趋势与技术发展</h3>
              <p className="text-gray-700 mb-4">
                随着全球能源转型的加速推进，储能市场迎来了快速发展期。本文分析了2024年全球储能市场的增长趋势与技术发展方向，为行业提供参考。
              </p>
              <Link
                href="/news/industry/1"
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                阅读全文
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
