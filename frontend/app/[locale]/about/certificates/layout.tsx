import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'BAIQIANCHENG Electronics\' Qualification Certificate ',
      description:
        'The "BAIQIANCHENG Electronics Qualification Certificate" indicates that BAIQIANCHENG Electronics has obtained numerous international certifications and qualifications, which demonstrate the company\'s outstanding performance in quality management, environmental protection, occupational health and safety, as well as its strength in technological innovation.',
      keywords:
        'BAIQIANCHENG Electronics\' Qualification Certificate ',
      openGraph: {
        title: 'BAIQIANCHENG Electronics\' Qualification Certificate ',
        description:
          'BAIQIANCHENG Electronics upholds four core values: Customer First, Integrity, Sharing, and Responsibility. We align our business growth with social responsibility and are committed to becoming a benchmark enterprise in the global electronics manufacturing industry.',
      },
    }
    
  }

  return {
    title: '百千成电子资质证书',
    description: '百千成电子资质证书，百千成电子通过了多项国际认证和资质认定，证明了公司在质量管理、环境保护、职业健康安全等方面的卓越表现，以及在技术创新方面的实力。',
    keywords: '百千成电子资质证书',
    openGraph: {
      title: '百千成电子资质证书',
      description: '百千成电子资质证书，百千成电子通过了多项国际认证和资质认定，证明了公司在质量管理、环境保护、职业健康安全等方面的卓越表现，以及在技术创新方面的实力。',
    },
  }
}

export default function CoreValuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}