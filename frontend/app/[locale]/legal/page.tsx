"use client"

import Link from "next/link"

export default function LegalPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const t = (zh: string, en: string) => (locale === "en" ? en : zh)

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">{t("法律声明", "Legal Notice")}</h1>
      <div className="prose prose-lg mb-8">
        <h2>{t("知识产权声明", "Intellectual Property Statement")}</h2>
        <p>{t(
          "本网站所有内容（包括但不限于文字、图片、音频、视频、界面设计、代码等）均受相关法律法规保护，未经授权，禁止任何形式的转载、复制、引用或用于商业用途。",
          "All content on this website (including but not limited to text, images, audio, video, interface design, code, etc.) is protected by relevant laws and regulations. Any form of reproduction, copying, quoting, or commercial use without authorization is prohibited."
        )}</p>
        <h2>{t("robots 协议声明", "Robots Protocol Statement")}</h2>
        <p>{t(
          "本网站已按照国际互联网惯例设置 robots.txt 协议，规范搜索引擎的抓取行为，保护网站内容安全与隐私。",
          "This website has set up a robots.txt protocol in accordance with international Internet practices to regulate search engine crawling and protect the security and privacy of website content."
        )}</p>
      </div>
      <Link href={`/${locale}`} className="text-blue-600 hover:underline">{t("返回首页", "Back to Home")}</Link>
    </div>
  )
} 