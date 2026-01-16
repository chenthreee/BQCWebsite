import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'BAIQIANCHENG Electronics Company News',
      description: 'Stay updated with the latest news from BAIQIANCHENG Electronics, including corporate updates, technology releases, and product development achievements that help drive innovation in the electronics industry.',
      keywords: 'BAIQIANCHENG Electronics news, company updates, electronics industry news, product development, technology releases',
      openGraph: {
        title: 'BAIQIANCHENG Electronics Company News',
        description: 'Stay updated with the latest news from BAIQIANCHENG Electronics, including corporate updates, technology releases, and product development achievements that help drive innovation in the electronics industry.',
      },
    }    
  }

  return {
    title: '百千成电子公司新闻动态-「百千成电子」',
    description: '百千成电子公司新闻动态，时时更新百千成电子新闻资讯，技术发布百千成产品研发成果，填补行业市场空白。',
    keywords: '百千成电子公司新闻动态',
    openGraph: {
      title: '百千成电子公司新闻动态-「百千成电子」',
      description: '百千成电子公司新闻动态，时时更新百千成电子新闻资讯，技术发布百千成产品研发成果，填补行业市场空白。',
    },
  }
}

export default function CompanyNewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}