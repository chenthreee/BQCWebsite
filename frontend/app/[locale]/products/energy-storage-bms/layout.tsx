import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Energy Storage BMS Battery Management System Solution | BAIQIANCHENG Electronics',
      description:
        'Energy storage BMS battery management system solution, based on advanced algorithms and high-precision sensing technology, enables full lifecycle battery management with functions such as active balancing and fault early warning, improving the safety and efficiency of energy storage systems. The cumulative installed capacity has exceeded 25 GWh, supporting the transition to green energy.',
      keywords: 'Energy storage BMS battery management system solution',
      openGraph: {
        title: 'Energy Storage BMS Battery Management System Solution | BAIQIANCHENG Electronics',
        description:
          'Energy storage BMS battery management system solution, based on advanced algorithms and high-precision sensing technology, enables full lifecycle battery management with functions such as active balancing and fault early warning, improving the safety and efficiency of energy storage systems. The cumulative installed capacity has exceeded 25 GWh, supporting the transition to green energy.',
      },
    }    
  }

  return {
    title: '储能BMS电池管理系统解决方案-「百千成电子」',
    description: '储能BMS电池管理系统解决方案，依托先进算法与高精度传感技术，实现电池全生命周期管理，具备主动均衡、故障预警等功能，提升储能系统安全性与能效，累计装机超25GWh，助力绿色能源转型。',
    keywords: '储能BMS电池管理系统解决方案',
    openGraph: {
      title: '储能BMS电池管理系统解决方案-「百千成电子」',
      description: '储能BMS电池管理系统解决方案，依托先进算法与高精度传感技术，实现电池全生命周期管理，具备主动均衡、故障预警等功能，提升储能系统安全性与能效，累计装机超25GWh，助力绿色能源转型。',
    },
  }
}

export default function EnergyStorageBMSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}