"use client"

import PageLayout from "@/components/page-layout"


export default function DevelopmentHistoryPage({ params }: { params: { locale: string } }) {

  const locale = params.locale
  const language = locale === "en" ? "en" : "zh"

  const content = {
    zh: {
      title: "发展历程",
      subtitle: "百千成电子的成长与发展",
      breadcrumb: [
        { label: "关于我们", href: "/zh-Hans/about" },
        { label: "发展历程", href: "/zh-Hans/about/development-history.html" }
      ],
      overview: {
        title: "我们的历程",
        desc: [
          "深圳市百千成电子有限公司于2003年7月在深圳龙岗坂田正式成立，深耕新能源与智能机器能人领域二十余载，是一家以研发设计为核心、兼具规模化制造能力的综合型高新技术企业。",
          "公司早期聚焦太阳能光伏逆变器研发制造，2006年相关业务占比超五成，并成功通过ISO9001国际认证，夯实品质根基。",
          "随着行业发展趋势与市场需求变化，公司逐步拓展业务边界：在新能源领域，延伸至储能BMS（电池管理系统）、船舶储能BMS、小型电动船推进系统等细分赛道；在智能装备领域，切入猫砂盆机器人、扫地机器人等消费级智能产品领域，依托专业SMT 贴片厂制造能力，为全球客户提供稳定可靠的PCBA 产品，客户群体广泛覆盖欧洲、美洲及中国本土市场，形成多元化、全球化的业务格局。",
          "百千成电子持续升级管理体系，先后通过ISO13485、ISO14001及IATF16949认证。2024年发展迈入新台阶：马来西亚工厂成立，标志着国际化布局深化；同年，储能BMS客户累计装机量突破50GWh+，彰显在储能领域的核心竞争力。"
        ]
      },
      future: {
        title: "未来展望",
        description: "百千成电子将继续秉承客户第一、诚信、分享、回馈的核心价值观，不断提升技术实力和产品品质，为全球客户提供更优质的产品和服务，为清洁能源的发展贡献力量。"
      },
      milestones: [
        { year: "2004.01", title: "百千成在深圳龙岗坂田正式成立; 为德国客户设计制造太阳能光伏逆变器" },
        { year: "2004.10", title: "导入了ERP，完善了管理系统" },
        { year: "2005.10", title: "通过ISO9001:2015质量认证" },
        { year: "2006", title: "放弃有铅产品，全面实施ROHS。组建研发团队，专注于OEM、ODM和整机组装等全面服务" },
        { year: "2006.06", title: "太阳能光伏逆变器销售额占比超50%" },
        { year: "2007", title: "激光水平仪控制板产品研发成功，公司规模扩大，搬迁至深圳市光明区" },
        { year: "2009", title: "VOIP电话机产品项目导入成功" },
        { year: "2009.03", title: "开始为欧洲客户设计制造小型电动船推进系统电池BMS" },
        { year: "2010", title: "ODM项目“智能推车广告机”产品研发成功" },
        { year: "2012", title: "导入并推行“KPI绩效管理制度”" },
        { year: "2012.08", title: "开始为海外客户设计制造猫砂盆机器人" },
        { year: "2013", title: "开全面实施REACH" },
        { year: "2013.03", title: "开始为欧洲客户设计制造储能BMS" },
        { year: "2015", title: "ODM项目电机研发成功并大批量生产" },
        { year: "2015.04", title: "通过 ISO13485:2016认证" },
        { year: "2015.06", title: "开始为北美客户设计制造储能BMS" },
        { year: "2016.01", title: "开始为国内客户制造猫砂盆机器人" },
        { year: "2016.08", title: "开始为酒店机器人客户制造PCBA" },
        { year: "2017.05", title: "开始为国内客户制造扫地机器人" },
        { year: "2018.07", title: "通过ISO14001:2015认证" },
        { year: "2018.11", title: "开始为国内客户制造割草机器人" },
        { year: "2019.01", title: "通过IATF16949:2016认证" },
        { year: "2019.03", title: "为北欧客户设计制造船舶储能BMS" },
        { year: "2019.12", title: "导入MES系统。获得高新技术企业证书" },
        { year: "2020.02", title: "企业信用评级为AAA等级" },
        { year: "2023.12", title: "储能BMS客户累计装机量35GWh+" },
        { year: "2024", title: "杭州办事处成立" },
        { year: "2024.12", title: "马来西亚工厂成立" },
        { year: "2024.12", title: "储能BMS客户累计装机量50GWh+" }
      ]
    },
    en: {
      title: "Development History",
      subtitle: "The Growth and Development of BQC Electronic",
      breadcrumb: [
        { label: "About Us", href: "/en/about" },
        { label: "Development History", href: "/en/about/development-history.html" }
      ],
      overview: {
        title: "Our Journey",
        desc: [
          "Shenzhen Baiqiancheng Electronic Co., Ltd. was officially established in Bantian, Longgang District, Shenzhen in July 2003. With more than 20 years of dedication to the new energy and intelligent robotics industries, BQC has grown into a comprehensive high-tech enterprise with R&D and design at its core, supported by strong large-scale manufacturing capabilities.",
          "In its early years, the company focused on the R&D and manufacturing of solar photovoltaic inverters. By 2006, this business accounted for more than 50% of the company’s revenue. BQC also successfully obtained ISO 9001 international certification, laying a solid foundation for quality management.",
          "As industry trends and market demands evolved, BQC gradually expanded its business scope. In the new energy sector, BQC has expanded its expertise into BESS BMS (Battery Management System), marine energy storage BMS, small electric boat propulsion systems, and other specialized applications. In the intelligent equipment sector, BQC entered the consumer smart product market, including self-cleaning litter box robots and robotic vacuum cleaners.",
          "Leveraging its professional SMT assembly and manufacturing capabilities, BQC provides stable and reliable PCBA products to customers worldwide. Its customer base covers Europe, the Americas, and the Chinese domestic market, forming a diversified and global business structure.",
          "BQC has continuously upgraded its management system and has successively obtained ISO 13485, ISO 14001, and IATF 16949 certifications. In 2024, the company reached a new stage of development: the establishment of its Malaysia factory marked a further step in its international expansion. In the same year, the cumulative installed capacity of BQC’s energy storage BMS customers exceeded 50GWh+, demonstrating the company’s core competitiveness in the energy storage field."
        ]
      },
      future: {
        title: "Future Outlook",
        description: "BQC Electronic will continue to uphold its core values of customer first, integrity, sharing, and giving back. We will keep strengthening our technical capabilities and product quality, providing better products and services to customers around the world, and contributing to the development of clean energy."
      },
      milestones: [
        { year: "2004.01", title: "BQC was established in Bantian, Longgang District, Shenzhen; Designed and manufactured solar photovoltaic inverters for German customers" },
        { year: "2004.10", title: "Implemented ERP system to optimize overall management" },
        { year: "2005.10", title: "Obtained ISO 9001:2015 Quality Management System Certification" },
        { year: "2006", title: "Phased out lead-containing products and fully implemented RoHS compliance. Established an R&D team to provide comprehensive services including OEM, ODM and complete product assembly" },
        { year: "2006.06", title: "Solar PV inverter sales exceeded 50% of total revenue." },
        { year: "2007", title: "Successfully developed control boards for laser levels. The company expanded and relocated to Guangming District, Shenzhen" },     
        { year: "2009", title: "Successfully introduced VOIP telephone product project.s" },   
        { year: "2009.03", title: "Started designing and manufacturing battery BMS for small electric boat propulsion systems for European clients" },
        { year: "2010", title: "Successfully developed the ODM “Smart Shopping Cart Advertising Display" },
        { year: "2012", title: "Introduced and implemented the KPI performance management system" },
        { year: "2012.08", title: "Started designing and manufacturing automatic cat litter boxes for overseas clients" },
        { year: "2013", title: "Fully implemented REACH compliance" },
        { year: "2013.03", title: "Started designing and manufacturing energy storage BMS for European clients" },
        { year: "2015", title: "Successfully developed ODM motor products and entered mass production" },
        { year: "2015.04", title: "Obtained ISO 13485:2016 Certification" },
        { year: "2015.06", title: "Started designing and manufacturing energy storage BMS for North American clients" },
        { year: "2016.01", title: "Started manufacturing automatic cat litter boxes for domestic clients" },
        { year: "2016.08", title: "Started manufacturing PCBAs for hotel robot clients" },
        { year: "2017.05", title: "Started manufacturing robotic vacuum cleaners for domestic clients" },
        { year: "2018.07", title: "Obtained ISO 14001:2015 Environmental Management System Certification" },
        { year: "2018.11", title: "Started manufacturing lawn mowing robots for domestic clients" },
        { year: "2019.01", title: "Obtained IATF 16949:2016 Certification" },
        { year: "2019.03", title: "Designed and manufactured marine energy storage BMS for Nordic clients" },
        { year: "2019.12", title: "Implemented MES system and obtained High-Tech Enterprise Certification" },
        { year: "2020.02", title: "Attained AAA Enterprise Credit Rating" },
        { year: "2023.12", title: "Cumulative installed capacity of energy storage BMS for clients exceeded 35 GWh" },
        { year: "2024", title: "Established Hangzhou Office" },
        { year: "2024.12", title: "Established Malaysia factory" },
        { year: "2024.12", title: "Cumulative installed capacity of energy storage BMS for clients exceeded 50 GWh" }
      ]
    }
  }

  const currentContent = locale == "en" ? content.en : content.zh



  return (
    <PageLayout
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      breadcrumbs={currentContent.breadcrumb}
      backgroundImage="/images/about/developHistory/developHistoryBreadcrumb.png"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">{currentContent.overview.title}</h2>
          <div className="space-y-3 text-gray-500 text-sm max-w-3xl mx-auto text-left">
            {(currentContent.overview.desc as string[]).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600 -translate-x-1/2"></div>
          <div className="space-y-4">
            {currentContent.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white shadow top-2.5"></div>
                <div className="w-1/2 px-6">
                  <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-blue-600 font-semibold text-sm mb-0.5">{milestone.year}</div>
                    <h3 className="text-base font-medium text-gray-800">{milestone.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">{currentContent.future.title}</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            {currentContent.future.description}
          </p>
        </div>
      </div>
    </PageLayout>
  )
} 