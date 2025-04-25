import  PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function OverseasNewsPage() {
  // 模拟海外新闻数据
  const news = [
    {
      id: 1,
      title: "中国电子制造领军企业百千成，CES舞台大放异彩 CES 2024",
      summary:
        "1月9日，国际消费类电子展（CES）在拉斯维加斯盛大开展！深圳市百千成电子有限公司聚势主场，带来了最新储能生态技术与产品，吸引了众多客户，业内人士驻足咨询探讨",
      date: "2024-01-10",
      author: "业务部",
      image: "/images/news/overseas/1-1.png",
      category: "展会活动",
    },
    {
      id: 2,
      title: "亮相EES Europe 2024， 多场景综合储能解决方案引领低碳未来！",
      summary:
        "6月19日-21日，EES Europe 2024展在德国慕尼黑新国际博览中心举行，作为国内领先的电子制造服务商，百千成电子以“定制化BMS解决方案，助力能源未来”为主题，向业界展示了其在硬件设计与制造、BMS技术和客户服务方面的多项优势。",
      date: "2024-06-22",
      author: "业务部",
      image: "/images/news/overseas/2-1.png",
      category: "展会活动",
    },
    {
      id: 3,
      title: "汉诺威工业博览会：CeBIT的传承与创新",
      summary:
        "曾经作为全球最大的信息和通信技术博览会的CeBIT，虽然已不复存在，但其创新精神却在汉诺威工业博览会中得到了延续。今年的汉诺威工业博览会，以“工业转型”为主题，将人工智能、物联网、5G等前沿技术与传统工业深度融合，为我们展示了一个充满活力的未来工业图景。",
      date: "2024-01-15",
      author: "业务部",
      image: "/images/news/overseas/3-1.png",
      category: "展会活动",
    },
    // {
    //   id: 4,
    //   title: "百千成电子新加坡研发中心成立",
    //   summary:
    //     "为加强国际技术交流与合作，百千成电子近日在新加坡成立研发中心，将重点开展储能技术、人工智能等领域的研究，为公司国际化发展提供技术支持。",
    //   date: "2023-12-10",
    //   author: "研发部",
    //   image: "/placeholder.svg?height=600&width=800",
    //   category: "研发布局",
    // },
    // {
    //   id: 5,
    //   title: "百千成电子产品获得欧盟CE认证",
    //   summary:
    //     "近日，百千成电子多款储能BMS产品成功获得欧盟CE认证，标志着公司产品质量和安全性能达到欧盟标准，为产品进入欧洲市场奠定了基础。",
    //   date: "2023-11-05",
    //   author: "质量部",
    //   image: "/placeholder.svg?height=600&width=800",
    //   category: "国际认证",
    // },
    // {
    //   id: 6,
    //   title: "百千成电子参加美国储能展览会",
    //   summary:
    //     "近日，百千成电子参加了在美国举办的国际储能展览会，展示了公司最新研发的储能BMS系统和智能控制产品，吸引了众多国际客户和合作伙伴的关注。",
    //   date: "2023-10-15",
    //   author: "市场部",
    //   image: "/placeholder.svg?height=600&width=800",
    //   category: "国际展会",
    // },
  ]

  return (
    <PageLayout
      title="海外新闻"
      subtitle="了解百千成电子海外最新动态"
      breadcrumbs={[
        { label: "新闻中心", href: "/news" },
        { label: "海外新闻", href: "/news/overseas" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
          <Link href="/news" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            全部新闻
          </Link>
          <Link href="/news/domestic" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            国内新闻
          </Link>
          <Link href="/news/overseas" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            海外新闻
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
                href={`/news/overseas/${news[0].id}`}
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
                  href={`/news/overseas/${item.id}`}
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
