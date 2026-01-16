import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'SMT Assembly News & PCBA Industry Insights - BAIQIANCHENG Electronics',
      description: 'Latest news on SMT assembly and PCBA industry insights, continuously updated with industry trends and technical articles, driving the electronics manufacturing industry toward intelligent upgrading.',
      keywords: 'SMT assembly news, PCBA industry news, SMT processing, PCBA manufacturing, electronics manufacturing insights',
      openGraph: {
        title: 'SMT Assembly News & PCBA Industry Insights - BAIQIANCHENG Electronics',
        description: 'Latest news on SMT assembly and PCBA industry insights, continuously updated with industry trends and technical articles, driving the electronics manufacturing industry toward intelligent upgrading.',
      },
    }    
  }

  return {
    title: 'smt贴片加工新闻资讯-PCBA加工行业资讯-「百千成电子」',
    description: 'smt贴片加工新闻资讯/PCBA加工行业资讯，时时更新资讯动态，推动产业向智能化升级及行业技术文档更新。',
    keywords: 'smt贴片加工新闻资讯-PCBA加工行业资讯',
    openGraph: {
      title: 'smt贴片加工新闻资讯-PCBA加工行业资讯-「百千成电子」',
      description: 'smt贴片加工新闻资讯/PCBA加工行业资讯，时时更新资讯动态，推动产业向智能化升级及行业技术文档更新。',
    },
  }
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}