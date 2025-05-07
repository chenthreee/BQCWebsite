"use client"

import type { ReactNode } from "react"
import { MainNavigation } from "./main-navigation"
import Link from "next/link"

interface PageLayoutProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href: string }[]
  backgroundImage?: string
  children: ReactNode
  extraHeaderContent?: ReactNode
}

export default function PageLayout({
  title,
  subtitle,
  breadcrumbs,
  children,
  backgroundImage,
  extraHeaderContent,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <header
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage || "/placeholder.svg?height=1080&width=1920"})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          {extraHeaderContent}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex space-x-2">
                {breadcrumbs.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-white hover:text-gray-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">{children}</main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 百千成电子. 版权所有.</p>
        </div>
      </footer>
    </div>
  )
}
