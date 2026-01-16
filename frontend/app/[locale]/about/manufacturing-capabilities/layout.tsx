import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Manufacturing Capability | BAIQIANCHENG Electronics',
      description:
        'BAIQIANCHENG Electronics operates 24 automated SMT production lines, 4 THT (through-hole) assembly lines, 11 coating lines, 5 functional testing lines, and 4 final assembly lines. Equipped with high-speed precision pick-and-place machines, we support large-scale production with high efficiency and outstanding process stability.',
      keywords:
        'BAIQIANCHENG manufacturing capability, SMT production lines, PCBA manufacturing, electronics manufacturing services',
      openGraph: {
        title: 'Manufacturing Capability | BAIQIANCHENG Electronics',
        description:
          'BAIQIANCHENG Electronics operates 24 automated SMT production lines, 4 THT (through-hole) assembly lines, 11 coating lines, 5 functional testing lines, and 4 final assembly lines. Equipped with high-speed precision pick-and-place machines, we support large-scale production with high efficiency and outstanding process stability.',
      },
    }   
  }

  return {
    title: '百千成制造能力-「百千成电子」',
    description: '百千成制造能力，百千成电子拥有24个自动化SMT生产线、插件线4条，喷涂线11条、功能测试生产线5条成品组装生产线4条，配备高速精密贴片机，可实现大批量生产，高速度与高稳定性兼具。',
    keywords: '百千成制造能力',
    openGraph: {
      title: '百千成制造能力-「百千成电子」',
      description: '百千成制造能力，百千成电子拥有24个自动化SMT生产线、插件线4条，喷涂线11条、功能测试生产线5条成品组装生产线4条，配备高速精密贴片机，可实现大批量生产，高速度与高稳定性兼具。',
    },
  }
}

export default function ManufacturingCapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}