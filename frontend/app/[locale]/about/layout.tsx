import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'About BAIQIANCHENG Electronics | Company Introduction',
      description:
        'BAIQIANCHENG Electronics was founded in 2003 and is headquartered in Shenzhen, with a facility covering more than 20,000 square meters. The company focuses on SMT assembly and intelligent manufacturing, providing professional electronic manufacturing services to global customers.',
      keywords:
        'About BAIQIANCHENG, BAIQIANCHENG Electronics, company profile, SMT assembly manufacturer',
      openGraph: {
        title: 'About BAIQIANCHENG Electronics | Company Introduction',
        description:
          'BAIQIANCHENG Electronics was founded in 2003 and is headquartered in Shenzhen, with a facility covering more than 20,000 square meters. The company focuses on SMT assembly and intelligent manufacturing, providing professional electronic manufacturing services to global customers.',
      },
    }
    
  }

  return {
    title: '关于百千成-百千成电子公司介绍-「百千成电子」',
    description: '关于百千成电子公司介绍，百千成电子成立于2003年，总部位于深圳占地面积20000多平，专注于SMT贴片加工与智能制造领域。',
    keywords: '关于百千成|百千成电子公司介绍',
    openGraph: {
      title: '关于百千成-百千成电子公司介绍-「百千成电子」',
      description: '关于百千成电子公司介绍，百千成电子成立于2003年，总部位于深圳占地面积20000多平，专注于SMT贴片加工与智能制造领域。',
    },
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}