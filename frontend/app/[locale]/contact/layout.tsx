import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Contact BAIQIANCHENG Electronics | Malaysia Factory Contact Information',
      description: 'Find the contact information of BAIQIANCHENG Electronics. Founded in 2003 with over 20,000㎡ facilities and a manufacturing factory in Malaysia. Feel free to contact us for inquiries and cooperation.',
      keywords: 'BAIQIANCHENG Electronics contact, Malaysia electronics manufacturer, BQC factory contact, electronics manufacturing contact information',
      openGraph: {
        title: 'Contact BAIQIANCHENG Electronics | Malaysia Factory Contact Information',
        description: 'Find the contact information of BAIQIANCHENG Electronics. Founded in 2003 with over 20,000㎡ facilities and a manufacturing factory in Malaysia. Feel free to contact us for inquiries and cooperation.',
      },
    }     
  }

  return {
    title: '百千成电子联系方式-马来西亚百千成联系厂家-「百千成电子」',
    description: '百千成电子联系方式/马来西亚百千成联系厂家，百千成电子成立于2003年，占地面积20000多平，马来西亚工厂，欢迎来电咨询详情。',
    keywords: '百千成电子联系方式|马来西亚百千成联系厂家',
    openGraph: {
      title: '百千成电子联系方式-马来西亚百千成联系厂家-「百千成电子」',
      description: '百千成电子联系方式/马来西亚百千成联系厂家，百千成电子成立于2003年，占地面积20000多平，马来西亚工厂，欢迎来电咨询详情。',
    },
  }
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}