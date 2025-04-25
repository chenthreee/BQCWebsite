import  PageLayout  from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function DomesticNewsPage() {
  // 模拟国内新闻数据
  const news = [
    {
      id: 1,
      title: "百千成电子有限公司亮相RE+展会，引领行业潮流",
      summary:
        "2024．9.9-2024.9.12，“百千成电子有限公司”（Baichiancheng Electronics Co., Ltd.）出席RE+展会（Renewable Energy Expo）是一个非常有意义的举措，尤其对于关注新能源和可持续发展的公司而言。RE+展会是全球领先的可再生能源展览会之一，通常会涉及太阳能、风能、储能技术以及电力电子产品等领域",
      date: "2024-09-13",
      author: "业务部",
      image: "/images/news/domestic/1-1.png",
      category: "展会活动",
    },
    {
      id: 2,
      title: "百千成电子闪耀杭州电子展，展示电子制造新实力",
      summary:
        "2024年3月11-13日，全球范围内影响力最大的国际顶级储能盛会之一—— “第十四届中国国际储能大会”在杭州国际博览中心隆重举行。深圳市百千成电子有限公司（以下简称百千成）作为储能领域的佼佼者，也应邀参加了此次盛会。与大会汇聚来自全球各地的储能领域专业人士，共同探讨储能行业的最新发展趋势和技术创新",
      date: "2024-03-14",
      author: "业务部",
      image: "/images/news/domestic/2-1.png",
      category: "展会活动",
    },
    {
      id: 3,
      title: "2024年百千成电子有限公司闪耀亮相重庆国际电池技术展览会",
      summary:
        "2024年4月27日至29日，全球电池行业的目光聚焦于中国重庆，第十六届重庆国际电池技术交流会/展览会（CIBF2024）在此盛大举行。此次展会汇聚了来自世界各地的电池技术精英和参展企业，其中，深圳市百千成电子有限公司作为储能锂电池BMS设计制造的领军企业，精彩亮相并展示了其在电池管理系统（BMS）领域的最新技术成果和解决方案。",
      date: "2024-04-30",
      author: "业务部",
      image: "/images/news/domestic/3-1.png",
      category: "展会活动",
    },
    // {
    //   id: 4,
    //   title: '百千成电子荣获"国家高新技术企业"认定',
    //   summary:
    //     '近日，百千成电子成功通过"国家高新技术企业"认定，这是对公司技术创新能力和研发实力的高度认可，也是公司发展历程中的重要里程碑。',
    //   date: "2023-12-20",
    //   author: "行政部",
    //   image: "/placeholder.svg?height=600&width=800",
    //   category: "企业荣誉",
    // },
    // {
    //   id: 5,
    //   title: "百千成电子参加2023年储能技术展览会",
    //   summary:
    //     "近日，百千成电子参加了在深圳举办的2023年储能技术展览会，展示了公司最新研发的储能BMS系统和智能控制产品，吸引了众多客户和合作伙伴的关注。",
    //   date: "2023-11-15",
    //   author: "市场部",
    //   image: "/placeholder.svg?height=600&width=800",
    //   category: "展会活动",
    // },
    // {
    //   id: 6,
    //   title: "百千成电子举办2023年技术创新大赛",
    //   summary:
    //     "为激发员工创新热情，提升公司技术实力，百千成电子近日举办了2023年技术创新大赛，来自各部门的员工踊跃参与，提出了多项创新方案和技术改进建议。",
    //   date: "2023-10-25",
    //   author: "人力资源部",
    //   image: "/placeholder.svg?height=600&width=800",
    //   category: "企业文化",
    // },
  ]

  return (
    <PageLayout
      title="国内新闻"
      subtitle="了解百千成电子国内最新动态"
      breadcrumbs={[
        { label: "新闻中心", href: "/news" },
        { label: "国内新闻", href: "/news/domestic" },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
          <Link href="/news" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            全部新闻
          </Link>
          <Link href="/news/domestic" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
                href={`/news/domestic/${news[0].id}`}
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
                  href={`/news/domestic/${item.id}`}
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
