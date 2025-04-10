import type { ReactNode } from "react"
import { MainNavigation } from "./main-navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  breadcrumbs: Array<{
    label: string
    href: string
  }>
  children: ReactNode
  backgroundImage?: string
}

export function PageLayout({ title, subtitle, breadcrumbs, children, backgroundImage }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />

      {/* 页面头部 */}
      <div
        className="pt-32 pb-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${backgroundImage || "/placeholder.svg?height=1080&width=1920"}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center text-white mb-4">
            <Link href="/" className="hover:text-blue-300">
              首页
            </Link>
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link href={item.href} className="hover:text-blue-300">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-gray-200">{subtitle}</p>}
        </div>
      </div>

      {/* 页面内容 */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">{children}</div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 百千成电子. 版权所有.</p>
        </div>
      </footer>
    </div>
  )
}
