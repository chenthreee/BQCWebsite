import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Intelligent Robotics System | BAIQIANCHENG Electronics',
      description:
        'The intelligent robotics system integrates multiple advanced technologies, featuring precise perception, intelligent decision-making, and flexible movement capabilities. It can autonomously complete complex tasks and efficiently adapt to diverse application scenarios.',
      keywords: 'Intelligent robotics system',
      openGraph: {
        title: 'Intelligent Robotics System | BAIQIANCHENG Electronics',
        description:
          'The intelligent robotics system integrates multiple advanced technologies, featuring precise perception, intelligent decision-making, and flexible movement capabilities. It can autonomously complete complex tasks and efficiently adapt to diverse application scenarios.',
      },
    }    
      
  }

  return {
    title: '智能机器人系统-「百千成电子」',
    description: '智能机器人系统集多种先进技术于一体，拥有精准感知、智能决策与灵活行动能力，可自主完成复杂任务，高效适应多样场景需求。',
    keywords: '智能机器人系统',
    openGraph: {
      title: '智能机器人系统-「百千成电子」',
      description: '智能机器人系统集多种先进技术于一体，拥有精准感知、智能决策与灵活行动能力，可自主完成复杂任务，高效适应多样场景需求。',
    },
  }
}

export default function IntelligentRobotSystemsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}