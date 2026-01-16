import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Telecom Base Station BMS Management System | BAIQIANCHENG Electronics',
      description:
        'Telecom base station BMS management system, a highly reliable battery management system for communication base stations. It monitors battery parameters in real time, precisely controls the charging and discharging process, and features fault early warning and efficient balancing functions to ensure stable and uninterrupted power supply for base stations.',
      keywords: 'Telecom base station BMS management system',
      openGraph: {
        title: 'Telecom Base Station BMS Management System | BAIQIANCHENG Electronics',
        description:
          'Telecom base station BMS management system, a highly reliable battery management system for communication base stations. It monitors battery parameters in real time, precisely controls the charging and discharging process, and features fault early warning and efficient balancing functions to ensure stable and uninterrupted power supply for base stations.',
      },
    }
  }

  return {
    title: '通信基站BMS管理系统-「百千成电子」',
    description: '通信基站BMS管理系统，高可靠性通信基站电池管理系统，实时监控电池各项参数，精准调控充放电进程，具备故障预警与高效均衡功能，保障基站电力稳定不间断运行。',
    keywords: '通信基站BMS管理系统',
    openGraph: {
      title: '通信基站BMS管理系统-「百千成电子」',
      description: '通信基站BMS管理系统，高可靠性通信基站电池管理系统，实时监控电池各项参数，精准调控充放电进程，具备故障预警与高效均衡功能，保障基站电力稳定不间断运行。',
    },
  }
}

export default function CommunicationBaseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}