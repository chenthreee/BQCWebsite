import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Company Overview | BAIQIANCHENG Electronics',
      description:
        'Founded in 2003, BAIQIANCHENG Electronics is a professional manufacturer specializing in energy storage lithium battery BMS design and manufacturing, PCS inverters, and PCBA design and SMT assembly for intelligent robotics and electronic systems.',
      keywords:
        'BAIQIANCHENG Electronics overview, BMS manufacturer, PCBA design, SMT assembly, PCS inverter supplier',
      openGraph: {
        title: 'Company Overview | BAIQIANCHENG Electronics',
        description:
          'Founded in 2003, BAIQIANCHENG Electronics is a professional manufacturer specializing in energy storage lithium battery BMS design and manufacturing, PCS inverters, and PCBA design and SMT assembly for intelligent robotics and electronic systems.',
      },
    }
    
  }

  return {
    title: '百千成电子简介-「百千成电子」',
    description: '百千成电子简介，公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS逆变器、智能机器人电路板PCBA设计与smt贴片加工制造企业。',
    keywords: '百千成电子简介',
    openGraph: {
      title: '关于百千成-百千成电子公司介绍-「百千成电子」',
      description: '百千成电子简介，公司成立于2003年，是专业从事储能锂电池BMS设计制造，PCS逆变器、智能机器人电路板PCBA设计与smt贴片加工制造企业。',
    },
  }
}

export default function IntroductionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}