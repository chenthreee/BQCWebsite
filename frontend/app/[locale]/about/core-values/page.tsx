
import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { CheckCircle } from "lucide-react"


export default function CoreValuesPage({ params }: { params: { locale: string } }) {

  const locale = params.locale
  const language = locale === "en" ? "en" : "zh"

  const content = {
    zh: {
      title: "核心价值观",
      subtitle: "我们的企业文化与价值理念",
      breadcrumbs: [
        { label: "关于我们", href: "/zh-Hans/about" },
        { label: "核心价值观", href: "/zh-Hans/about/core-values.html" }
      ],
      values: [
        {
          title: "客户第一",
          description: "反对以上司、研发、制造为中心，内部以客户代表为中心，外部以客户为中心"
        },
        {
          title: "诚信",
          description: "不欺客户，不欺同事，不欺供方"
        },
        {
          title: "分享",
          description: "员工共享企业盈利，企业欢迎优秀员工持股"
        },
        {
          title: "回馈",
          description: "以双碳为目标，以创新为动力，以储能为根基，反哺人类社会"
        }
      ],
      image: "/images/about/coreValue/coreValue.png"
    },
    en: {
      title: "Core Values",
      subtitle: "Our Corporate Culture and Value Principles",
      breadcrumbs: [
        { label: "About us", href: "/en/about" },
        { label: "Core Values", href: "/en/about/core-values.html" }
      ],
      values: [
        {
          title: "Customer-first",
          description: <span className="text-lg font-medium">we center on internal customer representatives for internal alignment and real customers for decision-making, rather than prioritizing leadership, R&D, and manufacturing. </span>
        },
        {
          title: "Integrity",
          description: <span className="text-lg font-medium"> Sincere dealings with customers, colleagues & suppliers.</span>
        },
        {
          title: "Share",
          description: <span className="text-lg font-medium">Profit-sharing benefits all employees; outstanding managers are invited to participate in equity ownership.</span>
        },
        {
          title: "Contribution",
          description: <span className="text-lg font-medium"> Strive to achieve carbon peaking and neutrality through technological innovation and advancements in energy storage, thereby giving back to human society and fostering sustainable development.</span>
        }

      ],
      image: "/images/about/coreValue/coreValue.png"
    }
  }

  const currentContent = locale === "en" ? content.en : content.zh


  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumbs}
      backgroundImage="/images/about/coreValue/breadcrumb.png"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <Image
            src={currentContent.image}
            alt={locale === "zh-Hans" ? "企业文化" : "Corporate Culture"}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">{currentContent.title}</h2>
          <div className="space-y-6">
            {currentContent.values.map((value, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  {typeof value.description === 'string' ? (
                    <p className="text-gray-700">{value.description}</p>
                  ) : (
                    value.description
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 