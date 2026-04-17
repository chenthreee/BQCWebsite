import { Metadata } from 'next'
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  if (locale === 'en') {
    return {
      title: 'PCBA processing ODM R&D service - SMT assembly ODM manufacturing service | BAIQIANCHENG Electronics',
      description:
        'BAIQIANCHENG Electronics provides a full-process OEM manufacturing service from PCBA processing ODM R&D service to SMT assembly ODM manufacturing service, providing high-quality electronic manufacturing solutions with advanced production equipment and strict quality control system.',
      keywords:
        'PCBA processing ODM R&D service - SMT assembly ODM manufacturing service',
      openGraph: {
        title: 'PCBA processing ODM R&D service - SMT assembly ODM manufacturing service | BAIQIANCHENG Electronics',
        description:
        'BAIQIANCHENG Electronics provides a full-process OEM manufacturing service from PCBA processing ODM R&D service to SMT assembly ODM manufacturing service, providing high-quality electronic manufacturing solutions with advanced production equipment and strict quality control system.',
      },
    } 
  }

  return {
    title: 'PCBA加工ODM研发服务-SMT贴片ODM制造服务-「百千成电子」',
    description: '百千成电子提供从PCBA加工ODM研发服务、SMT贴片到整机组装的全流程OEM制造服务，以先进的生产设备和严格的质量控制体系，为客户提供高品质的电子制造方案。',
    keywords: 'PCBA加工ODM研发服务-SMT贴片ODM制造服务',
    openGraph: {
      title: 'PCBA加工ODM研发服务-SMT贴片ODM制造服务-「百千成电子」',
      description: '百千成电子提供从PCBA加工ODM研发服务、SMT贴片到整机组装的全流程OEM制造服务，以先进的生产设备和严格的质量控制体系，为客户提供高品质的电子制造方案。',
    },
  }
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}