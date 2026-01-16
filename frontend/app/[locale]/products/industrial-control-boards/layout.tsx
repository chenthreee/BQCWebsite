import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Industrial Control Board | BAIQIANCHENG Electronics',
      description:
        'The industrial control board is the core of industrial automation. It integrates high-performance chips and rich interfaces, enables accurate data acquisition and processing, and reliably controls various equipment to ensure efficient industrial operation.',
      keywords: 'Industrial control board',
      openGraph: {
        title: 'Industrial Control Board | BAIQIANCHENG Electronics',
        description:
          'The industrial control board is the core of industrial automation. It integrates high-performance chips and rich interfaces, enables accurate data acquisition and processing, and reliably controls various equipment to ensure efficient industrial operation.',
      },
    }
    
      
  }

  return {
    title: '工业控制板-「百千成电子」',
    description: '工业控制板是工业自动化核心，集成高性能芯片与丰富接口，能精准采集、处理数据，稳定可靠地控制各类设备，保障工业生产高效运行。',
    keywords: '工业控制板',
    openGraph: {
      title: '工业控制板-「百千成电子」',
      description: '工业控制板是工业自动化核心，集成高性能芯片与丰富接口，能精准采集、处理数据，稳定可靠地控制各类设备，保障工业生产高效运行。',
    },
  }
}

export default function IndustrialControlBoardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}