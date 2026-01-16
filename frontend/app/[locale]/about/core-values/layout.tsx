import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Core Values | BAIQIANCHENG Electronics',
      description:
        'BAIQIANCHENG Electronics upholds four core values: Customer First, Integrity, Sharing, and Responsibility. We align our business growth with social responsibility and are committed to becoming a benchmark enterprise in the global electronics manufacturing industry.',
      keywords:
        'BAIQIANCHENG core values, company values, corporate culture, electronics manufacturing company',
      openGraph: {
        title: 'Core Values | BAIQIANCHENG Electronics',
        description:
          'BAIQIANCHENG Electronics upholds four core values: Customer First, Integrity, Sharing, and Responsibility. We align our business growth with social responsibility and are committed to becoming a benchmark enterprise in the global electronics manufacturing industry.',
      },
    }
    
  }

  return {
    title: '百千成核心价值观-「百千成电子」',
    description: '百千成核心价值观，百千成始终秉持“客户第一、诚信、分享、回馈”四大核心价值观，将企业发展与社会使命紧密相连，致力于成为全球电子制造领域的标杆企业。',
    keywords: '百千成核心价值观',
    openGraph: {
      title: '百千成核心价值观-「百千成电子」',
      description: '百千成核心价值观，百千成始终秉持“客户第一、诚信、分享、回馈”四大核心价值观，将企业发展与社会使命紧密相连，致力于成为全球电子制造领域的标杆企业。',
    },
  }
}

export default function CoreValuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}