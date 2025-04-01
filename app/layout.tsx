import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-context"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "百千成电子 - 引领储能技术创造智能未来",
  description:
    "百千成电子是专注于储能系统和智能控制技术的全球领先企业，为全球客户提供高品质的储能系统和智能控制解决方案。",
  keywords: "百千成电子, 储能技术, 智能控制, BMS, EMS, PCS, 智能机器人系统",
  authors: [{ name: "百千成电子" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.baiqiancheng.com/",
    siteName: "百千成电子",
    title: "百千成电子 - 引领储能技术创造智能未来",
    description:
      "百千成电子是专注于储能系统和智能控制技术的全球领先企业，为全球客户提供高品质的储能系统和智能控制解决方案。",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

