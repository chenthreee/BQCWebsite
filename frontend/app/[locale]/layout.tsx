import { ReactNode } from "react";
import { Metadata } from "next";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale

  if (locale === 'en') {
    return {
      title: 'Professional SMT & PCBA Manufacturer with 22 Years of Experience | Baiqiancheng Electronics',
      description:
        'Founded in 2003 and headquartered in Shenzhen, Baiqiancheng Electronics is a professional manufacturer specializing in SMT assembly and PCBA services. Our business covers SMT processing, PCBA design and manufacturing, and energy storage BMS system development, providing global customers with one-stop OEM solutions from electronics manufacturing to complete product assembly.',
      keywords:
        'PCBA manufacturing, SMT assembly, SMT processing, SMT factory, PCBA supplier, electronics manufacturing services, Baiqiancheng Electronics',
      openGraph: {
        title: 'Professional SMT & PCBA Manufacturer with 22 Years of Experience | Baiqiancheng Electronics',
        description:
          'Founded in 2003 and headquartered in Shenzhen, Baiqiancheng Electronics is a professional manufacturer specializing in SMT assembly and PCBA services. Our business covers SMT processing, PCBA design and manufacturing, and energy storage BMS system development, providing global customers with one-stop OEM solutions from electronics manufacturing to complete product assembly.',
      },
    }
    
    
  }

  return {
    title: 'SMT贴片加工厂专注于PCBA加工领域22年-「百千成电子」',
    description: '【百千成电子有限公司】成立于2003年，总部位于深圳，是一家专业的SMT贴片加工与PCBA加工制造服务商。公司主营业务涵盖SMT贴片加工、PCBA设计加工，储能BMS系统研发等，致力于为全球客户提供从电子制造到整机组装的一站式OEM全流程解决方案。',
    keywords: 'PCBA加工|SMT贴片加工|SMT贴片|SMT贴片厂|SMT贴片加工厂|贴片加工厂|百千成电子',
    openGraph: {
      title: 'SMT贴片加工厂专注于PCBA加工领域22年-「百千成电子」',
      description: '【百千成电子有限公司】成立于2003年，总部位于深圳，是一家专业的SMT贴片加工与PCBA加工制造服务商。公司主营业务涵盖SMT贴片加工、PCBA设计加工，储能BMS系统研发等，致力于为全球客户提供从电子制造到整机组装的一站式OEM全流程解决方案。',
    },
  }
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  return <>{children}</>;
} 