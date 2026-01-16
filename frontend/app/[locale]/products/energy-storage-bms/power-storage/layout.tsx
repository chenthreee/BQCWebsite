import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Large-Scale Power Energy Storage BMS System | BAIQIANCHENG Electronics',
      description:
        'Large-scale power energy storage BMS system, designed specifically for large energy storage power stations, featuring high-precision monitoring, intelligent balancing control, and multi-level safety protection to ensure efficient and stable operation of battery systems and support large-scale integration of renewable energy.',
      keywords: 'Large-scale power energy storage BMS system',
      openGraph: {
        title: 'Energy Storage BMS Battery Management System Solution | BAIQIANCHENG Electronics',
        description:
          'Large-scale power energy storage BMS system, designed specifically for large energy storage power stations, featuring high-precision monitoring, intelligent balancing control, and multi-level safety protection to ensure efficient and stable operation of battery systems and support large-scale integration of renewable energy.',
      },
    }    
  }

  return {
    title: '大型电力储能BMS系统-「百千成电子」',
    description: '大型电力储能BMS系统，专为大规模储能电站设计，具备高精度监测、智能均衡控制与多级安全防护，保障电池系统高效稳定运行，助力可再生能源大规模消纳。',
    keywords: '大型电力储能BMS系统',
    openGraph: {
      title: '储能BMS电池管理系统解决方案-「百千成电子」',
      description: '大型电力储能BMS系统，专为大规模储能电站设计，具备高精度监测、智能均衡控制与多级安全防护，保障电池系统高效稳定运行，助力可再生能源大规模消纳。',
    },
  }
}

export default function PowerStorageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}