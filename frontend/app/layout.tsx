import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SMT贴片加工厂专注于PCBA加工领域22年-「百千成电子」",
  description:
    "【百千成电子有限公司】成立于2003年，总部位于深圳，是一家专业的SMT贴片加工与PCBA加工制造服务商。公司主营业务涵盖SMT贴片加工、PCBA设计加工，储能BMS系统研发等，致力于为全球客户提供从电子制造到整机组装的一站式OEM全流程解决方案。",
  keywords: "PCBA加工|SMT贴片加工|SMT贴片|SMT贴片厂|SMT贴片加工厂|贴片加工厂|百千成电子",
  authors: [{ name: "百千成电子" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.baiqiancheng.com/",
    siteName: "百千成电子",
    title: "SMT贴片加工厂专注于PCBA加工领域22年-「百千成电子」",
    description:
      "【百千成电子有限公司】成立于2003年，总部位于深圳，是一家专业的SMT贴片加工与PCBA加工制造服务商。公司主营业务涵盖SMT贴片加工、PCBA设计加工，储能BMS系统研发等，致力于为全球客户提供从电子制造到整机组装的一站式OEM全流程解决方案。",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/*<link rel="icon" href="/favicon.ico" sizes="any" />*/}
        <link rel="icon" href="/BQCLogo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}


import './globals.css'