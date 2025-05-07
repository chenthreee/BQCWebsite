import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function NewsPage() {
  // 模拟所有新闻数据
  const allNews = [
    {
      id: 1,
      title: "百千成电子有限公司亮相RE+展会，引领行业潮流",
      summary: "2024．9.9-2024.9.12，百千成电子有限公司出席RE+展会，展示最新储能技术方案...",
      date: "2024-09-13",
      author: "业务部",
      image: "/images/news/domestic/1-1.png",
      category: "展会活动",
      type: "domestic" // 用于区分国内/海外新闻
    },
    {
      id: 2,
      title: "百千成电子闪耀杭州电子展，展示电子制造新实力",
      summary: "2024年3月11-13日，全球范围内影响力最大的国际顶级储能盛会之一...",
      date: "2024-03-14",
      author: "业务部",
      image: "/images/news/domestic/2-1.png",
      category: "展会活动",
      type: "domestic"
    },
    {
      id: 3,
      title: "中国电子制造领军企业百千成，CES舞台大放异彩 CES 2024",
      summary: "百千成电子成功参展2024年德国柏林能源展，展示了最新的储能解决方案...",
      date: "2024-02-15",
      author: "业务部",
      image: "/images/news/overseas/1-1.png",
      category: "海外展会",
      type: "overseas"
    },
    {
      id: 4,
      title: "2024年百千成电子有限公司闪耀亮相重庆国际电池技术展览会",
      summary:
        "2024年4月27日至29日，全球电池行业的目光聚焦于中国重庆，第十六届重庆国际电池技术交流会/展览会（CIBF2024）在此盛大举行。此次展会汇聚了来自世界各地的电池技术精英和参展企业，其中，深圳市百千成电子有限公司作为储能锂电池BMS设计制造的领军企业，精彩亮相并展示了其在电池管理系统（BMS）领域的最新技术成果和解决方案。",
      date: "2024-04-30",
      author: "业务部",
      image: "/images/news/domestic/3-1.png",
      category: "展会活动",
      type: "domestic"
    },
    {
      id: 5,
      title: "亮相EES Europe 2024， 多场景综合储能解决方案引领低碳未来！",
      summary:
        "6月19日-21日，EES Europe 2024展在德国慕尼黑新国际博览中心举行，作为国内领先的电子制造服务商，百千成电子以“定制化BMS解决方案，助力能源未来”为主题，向业界展示了其在硬件设计与制造、BMS技术和客户服务方面的多项优势。",
      date: "2024-06-22",
      author: "业务部",
      image: "/images/news/overseas/2-1.png",
      category: "展会活动",
      type: "overseas"
    },
    {
      id: 6,
      title: "汉诺威工业博览会：CeBIT的传承与创新",
      summary:
        "曾经作为全球最大的信息和通信技术博览会的CeBIT，虽然已不复存在，但其创新精神却在汉诺威工业博览会中得到了延续。今年的汉诺威工业博览会，以\"工业转型\"为主题，将人工智能、物联网、5G等前沿技术与传统工业深度融合，为我们展示了一个充满活力的未来工业图景。",
      date: "2024-01-15",
      author: "业务部",
      image: "/images/news/overseas/3-1.png",
      category: "展会活动",
      type: "overseas"
    },
    // ... 更多新闻数据
  ]

  return (
    <PageLayout
      title="新闻中心"
      subtitle="了解百千成电子最新动态与行业资讯"
      breadcrumbs={[{ label: "新闻中心", href: "/news" }]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      {/* 新闻分类标签 */}
      <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
        <Link href="/news" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          全部新闻
        </Link>
        <Link href="/news/domestic" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          国内新闻
        </Link>
        <Link href="/news/overseas" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          海外新闻
        </Link>
      </div>

      {/* 置顶新闻 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-full">
            <Image
              src={allNews[0].image}
              alt={allNews[0].title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                {allNews[0].category}
              </span>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{allNews[0].date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{allNews[0].author}</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">{allNews[0].title}</h2>
            <p className="text-gray-700 mb-6">{allNews[0].summary}</p>
            <Link
              href={`/news/${allNews[0].type}/${allNews[0].id}`}
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
        {allNews.slice(1).map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <Image
                src={news.image}
                alt={news.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-3">
                  {news.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{news.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{news.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{news.summary}</p>
              <Link
                href={`/news/${news.type}/${news.id}`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                阅读全文
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
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
