import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  if (locale === 'en') {
    return {
      title: 'BAIQIANCHENG Electronics\' Qualification Certificate ',
      description:
        'Baiqiancheng Electronics firmly bases its core competitiveness on technological research and development. With multiple international authoritative management system certifications, independent intellectual property patents, and the qualification of a national-level \"Small Giant\" specialized and innovative enterprise, the company fully demonstrates its comprehensive strength and industry-leading level in precision manufacturing, quality control, and technological innovation.',
      keywords:
        'BAIQIANCHENG Electronics\' Qualification Certificate ',
      openGraph: {
        title: 'BAIQIANCHENG Electronics\' Qualification Certificate ',
        description:
          'Baiqiancheng Electronics firmly bases its core competitiveness on technological research and development. With multiple international authoritative management system certifications, independent intellectual property patents, and the qualification of a national-level \"Small Giant\" specialized and innovative enterprise, the company fully demonstrates its comprehensive strength and industry-leading level in precision manufacturing, quality control, and technological innovation.',
      },
    }
    
  }

  return {
    title: '百千成电子资质证书',
    description: '百千成电子资质证书，百千成电子坚持以技术研发为核心竞争力，凭借多项国际权威管理体系认证、自主知识产权专利及国家级专精特新 “小巨人” 企业资质，全面彰显了公司在精密制造、质量管控与技术创新领域的综合实力与行业领先水平。',
    keywords: '百千成电子资质证书',
    openGraph: {
      title: '百千成电子资质证书',
      description: '百千成电子资质证书，百千成电子坚持以技术研发为核心竞争力，凭借多项国际权威管理体系认证、自主知识产权专利及国家级专精特新 “小巨人” 企业资质，全面彰显了公司在精密制造、质量管控与技术创新领域的综合实力与行业领先水平。',
    },
  }
}

export default function CoreValuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}