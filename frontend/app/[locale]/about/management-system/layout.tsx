import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Management Capability | BAIQIANCHENG Electronics',
      description:
        'BAIQIANCHENG Electronics has established a comprehensive digital management platform, enabling information-driven, intelligent, and highly efficient enterprise management.',
      keywords:
        'BAIQIANCHENG management capability, digital management platform, intelligent management, corporate management system',
      openGraph: {
        title: 'Management Capability | BAIQIANCHENG Electronics',
        description:
          'BAIQIANCHENG Electronics has established a comprehensive digital management platform, enabling information-driven, intelligent, and highly efficient enterprise management.',
      },
    }
        
  }

  return {
    title: '百千成管理能力-「百千成电子」',
    description: '百千成管理能力，百千成电子建立了完整的数字化管理平台，实现企业管理的信息化、智能化和高效化。',
    keywords: '百千成管理能力',
    openGraph: {
      title: '百千成管理能力-「百千成电子」',
      description: '百千成管理能力，百千成电子建立了完整的数字化管理平台，实现企业管理的信息化、智能化和高效化。',
    },
  }
}

export default function ManufacturingCapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}