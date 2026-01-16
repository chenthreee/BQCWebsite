import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'SMT Assembly Industry Knowledge & PCBA Technical Documentation',
      description: 'Explore the latest SMT assembly industry knowledge and PCBA technical documentation, with regularly updated professional resources to help improve overall industry standards.',
      keywords: 'SMT assembly knowledge, PCBA technical documentation, PCBA technology, SMT industry insights, electronics manufacturing knowledge',
      openGraph: {
        title: 'SMT Assembly Industry Knowledge & PCBA Technical Documentation',
        description: 'Explore the latest SMT assembly industry knowledge and PCBA technical documentation, with regularly updated professional resources to help improve overall industry standards.',
      },
    }    
  }

  return {
    title: 'SMT贴片加工行业知识-PCBA技术文档-「百千成电子」',
    description: 'SMT贴片加工行业知识/PCBA技术文档，时时更新SMT行业知识及PCBA专业技术文档，提升行业的整体水平。',
    keywords: 'SMT贴片加工行业知识|PCBA技术文档',
    openGraph: {
      title: 'SMT贴片加工行业知识-PCBA技术文档-「百千成电子」',
      description: 'SMT贴片加工行业知识/PCBA技术文档，时时更新SMT行业知识及PCBA专业技术文档，提升行业的整体水平',
    },
  }
}

export default function IndustryNewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}