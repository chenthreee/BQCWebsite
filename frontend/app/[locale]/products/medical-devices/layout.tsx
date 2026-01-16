import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Medical Device Control System | BAIQIANCHENG Electronics',
      description:
        'The medical device control system serves as the “intelligent brain” of medical equipment. With high-precision sensors and advanced algorithms, it accurately regulates operating parameters to ensure treatment accuracy and safety, safeguarding patient health.',
      keywords: 'Medical device control system',
      openGraph: {
        title: 'Medical Device Control System | BAIQIANCHENG Electronics',
        description:
          'The medical device control system serves as the “intelligent brain” of medical equipment. With high-precision sensors and advanced algorithms, it accurately regulates operating parameters to ensure treatment accuracy and safety, safeguarding patient health.',
      },
    }    
      
  }

  return {
    title: '医疗设备控制系统-「百千成电子」',
    description: '医疗设备控制系统作为医疗设备的“智慧大脑”，凭借高精度传感器与先进算法，精准调控设备运行参数，保障治疗精准度与安全性，为患者健康保驾护航。',
    keywords: '医疗设备控制系统',
    openGraph: {
      title: '医疗设备控制系统-「百千成电子」',
      description: '医疗设备控制系统作为医疗设备的“智慧大脑”，凭借高精度传感器与先进算法，精准调控设备运行参数，保障治疗精准度与安全性，为患者健康保驾护航。',
    },
  }
}

export default function MedicalDeviceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}