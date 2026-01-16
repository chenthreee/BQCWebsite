import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Small Vessel BMS Management System | BAIQIANCHENG Electronics',
      description:
        'Small vessel BMS management system, professionally designed for small vessels, providing an efficient and reliable battery management system. The system is compact and capable of real-time accurate battery status monitoring, intelligent control of charge and discharge, and multiple protection mechanisms to ensure stable power supply and safe navigation for small vessels.',
      keywords: 'Small vessel BMS management system',
      openGraph: {
        title: 'Small Vessel BMS Management System | BAIQIANCHENG Electronics',
        description:
          'Small vessel BMS management system, professionally designed for small vessels, providing an efficient and reliable battery management system. The system is compact and capable of real-time accurate battery status monitoring, intelligent control of charge and discharge, and multiple protection mechanisms to ensure stable power supply and safe navigation for small vessels.',
      },
    }
    
     
  }

  return {
    title: '小型船舶BMS管理系统-「百千成电子」',
    description: '小型船舶BMS管理系统，专业为小型船舶提供高效可靠的电池管理系统，系统小巧精悍，能实时精准监测电池状态，智能调控充放电，具备多重保护机制，确保小型船舶电力稳定与航行安全。',
    keywords: '小型船舶BMS管理系统',
    openGraph: {
      title: '小型船舶BMS管理系统-「百千成电子」',
      description: '小型船舶BMS管理系统，专业为小型船舶提供高效可靠的电池管理系统，系统小巧精悍，能实时精准监测电池状态，智能调控充放电，具备多重保护机制，确保小型船舶电力稳定与航行安全。',
    },
  }
}

export default function SmallShipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}