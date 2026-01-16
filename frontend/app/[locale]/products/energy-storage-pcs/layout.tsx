import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Energy Storage PCS Converter System | BAIQIANCHENG Electronics',
      description:
        'The energy storage PCS converter system is a key device in energy storage systems. It enables flexible conversion between DC and AC power, features efficient power regulation and stable output, and ensures reliable operation of the energy storage system.',
      keywords: 'Energy storage PCS converter system',
      openGraph: {
        title: 'Energy Storage PCS Converter System | BAIQIANCHENG Electronics',
        description:
          'The energy storage PCS converter system is a key device in energy storage systems. It enables flexible conversion between DC and AC power, features efficient power regulation and stable output, and ensures reliable operation of the energy storage system.',
      },
    }    
  }

  return {
    title: '储能PCS变流器系统-「百千成电子」',
    description: '储能PCS变流器系统作为储能关键设备，可实现直流与交流电能灵活转换，具备高效功率调节、稳定输出特性，保障储能系统可靠运行。',
    keywords: '储能PCS变流器系统',
    openGraph: {
      title: '储能PCS变流器系统-「百千成电子」',
      description: '储能PCS变流器系统作为储能关键设备，可实现直流与交流电能灵活转换，具备高效功率调节、稳定输出特性，保障储能系统可靠运行。',
    },
  }
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}