import { ReactNode } from "react";
import { Metadata } from "next";

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

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
    description: '【百千成电子有限公司】成立于2003年，是一家深圳专业SMT贴片加工厂家，业务涵盖PCBA加工设计、储能BMS系统研发、SMT贴片加工等，致力于全球整机组装全流程OEM制造服务。',
    keywords: 'PCBA加工|SMT贴片加工|SMT贴片|SMT贴片厂|SMT贴片加工厂|贴片加工厂|百千成电子',
    openGraph: {
      title: 'SMT贴片加工厂专注于PCBA加工领域22年-「百千成电子」',
      description: '【百千成电子有限公司】成立于2003年，是一家深圳专业SMT贴片加工厂家，业务涵盖PCBA加工设计、储能BMS系统研发、SMT贴片加工等，致力于全球整机组装全流程OEM制造服务。',
    },
  }
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  return <>{children}</>;
} 