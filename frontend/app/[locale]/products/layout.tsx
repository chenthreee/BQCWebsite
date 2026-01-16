import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Products | BAIQIANCHENG Electronics',
      description:
        'BAIQIANCHENG Electronics Product Center offers a wide range of products and services including PCBA manufacturing, SMT assembly, OEM manufacturing, energy storage BMS, energy storage PCS, robotics systems, industrial control boards, and medical device electronics.',
      keywords:
        'BAIQIANCHENG Electronics Products, Product Center',
      openGraph: {
        title: 'Products | BAIQIANCHENG Electronics',
        description:
          'BAIQIANCHENG Electronics Product Center offers a wide range of products and services including PCBA manufacturing, SMT assembly, OEM manufacturing, energy storage BMS, energy storage PCS, robotics systems, industrial control boards, and medical device electronics.',
      },
    } 
  }

  return {
    title: '百千成电子产品中心',
    description: '百千成电子产品中心，主营产品PCBA加工、SMT加工、oem生产制造、储能bms、储能pcs、机器人系统、工业控制板、医疗设备等。',
    keywords: '百千成电子产品中心',
    openGraph: {
      title: '百千成电子产品中心',
      description: '百千成电子产品中心，主营产品PCBA加工、SMT加工、oem生产制造、储能bms、储能pcs、机器人系统、工业控制板、医疗设备等。',
    },
  }
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}