import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  if (locale === 'en') {
    return {
      title: 'Our History | BAIQIANCHENG Electronics',
      description:
        'Shenzhen Baiqiancheng Electronics Co., Ltd. was officially established in Bantian, Longgang District, Shenzhen in July 2003. It has been deeply engaged in the fields of new energy and intelligent robots for over twenty years. It is a comprehensive high-tech enterprise with a focus on research and development and design, and also possesses large-scale manufacturing capabilities.',
      keywords:
        'BAIQIANCHENG Electronics history, company milestones, company development, electronics manufacturing company',
      openGraph: {
        title: 'Our History | BAIQIANCHENG Electronics',
        description:
          'Shenzhen Baiqiancheng Electronics Co., Ltd. was officially established in Bantian, Longgang District, Shenzhen in July 2003. It has been deeply engaged in the fields of new energy and intelligent robots for over twenty years. It is a comprehensive high-tech enterprise with a focus on research and development and design, and also possesses large-scale manufacturing capabilities.',
      },
    }
    
    
  }

  return {
    title: '百千成电子发展历程-「百千成电子」',
    description: '百千成电子发展历程，百千成电子有限公司于2003年7月在深圳龙岗坂田正式成立，深耕新能源与智能机器能人领域二十余载，是一家以研发设计为核心、兼具规模化制造能力的综合型高新技术企业。',
    keywords: '百千成电子发展历程',
    openGraph: {
      title: '百千成电子发展历程-「百千成电子」',
      description: '百千成电子发展历程，百千成电子有限公司于2003年7月在深圳龙岗坂田正式成立，深耕新能源与智能机器能人领域二十余载，是一家以研发设计为核心、兼具规模化制造能力的综合型高新技术企业。',
    },
  }
}

export default function DevelopmentHistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}