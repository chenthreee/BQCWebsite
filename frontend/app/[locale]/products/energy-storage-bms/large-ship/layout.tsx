import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Large-Scale Marine Energy Storage BMS Management System | BAIQIANCHENG Electronics',
      description:
        'Large-scale marine energy storage BMS management system, a highly reliable energy storage system designed for marine environments. It precisely manages battery packs, monitors operating status in real time, supports intelligent charge and discharge balancing, and provides multiple safety protections, ensuring reliable power supply and safety support for stable vessel operation.',
      keywords: 'Large-scale marine energy storage BMS management system',
      openGraph: {
        title: 'Large-Scale Marine Energy Storage BMS Management System | BAIQIANCHENG Electronics',
        description:
          'Large-scale marine energy storage BMS management system, a highly reliable energy storage system designed for marine environments. It precisely manages battery packs, monitors operating status in real time, supports intelligent charge and discharge balancing, and provides multiple safety protections, ensuring reliable power supply and safety support for stable vessel operation.',
      },
    }
     
  }

  return {
    title: '大型船舶储能BMS管理系统-「百千成电子」',
    description: '大型船舶储能BMS管理系统，专为海洋环境设计的高可靠性船舶储能系统，精准管控电池组，实时监测状态、智能均衡充放电，具备多重安全防护，为船舶稳定航行提供可靠电力保障与安全支撑。',
    keywords: '大型船舶储能BMS管理系统',
    openGraph: {
      title: '大型船舶储能BMS管理系统-「百千成电子」',
      description: '大型船舶储能BMS管理系统，专为海洋环境设计的高可靠性船舶储能系统，精准管控电池组，实时监测状态、智能均衡充放电，具备多重安全防护，为船舶稳定航行提供可靠电力保障与安全支撑。',
    },
  }
}

export default function LargeShipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}