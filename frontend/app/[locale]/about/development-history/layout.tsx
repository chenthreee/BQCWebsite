import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Our History | BAIQIANCHENG Electronics',
      description:
        'BAIQIANCHENG Electronics was officially founded in July 2003 in Bantian, Longgang District, Shenzhen. For over two decades, we have been deeply engaged in the fields of new energy and intelligent robotics, growing into a comprehensive enterprise with strong technical capabilities and a global perspective.',
      keywords:
        'BAIQIANCHENG Electronics history, company milestones, company development, electronics manufacturing company',
      openGraph: {
        title: 'Our History | BAIQIANCHENG Electronics',
        description:
          'BAIQIANCHENG Electronics was officially founded in July 2003 in Bantian, Longgang District, Shenzhen. For over two decades, we have been deeply engaged in the fields of new energy and intelligent robotics, growing into a comprehensive enterprise with strong technical capabilities and a global perspective.',
      },
    }
    
    
  }

  return {
    title: '百千成电子发展历程-「百千成电子」',
    description: '百千成电子发展历程，百千成电子有限公司于2003年7月在深圳龙岗坂田正式成立，深耕新能源与智能机器能人领域二十余载，是兼具技术实力与国际视野的综合型企业。',
    keywords: '百千成电子发展历程',
    openGraph: {
      title: '百千成电子发展历程-「百千成电子」',
      description: '百千成电子发展历程，百千成电子有限公司于2003年7月在深圳龙岗坂田正式成立，深耕新能源与智能机器能人领域二十余载，是兼具技术实力与国际视野的综合型企业。',
    },
  }
}

export default function DevelopmentHistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}