"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function AnimatedButton({ children, className, href, onClick }: AnimatedButtonProps) {
  const ButtonContent = () => (
    <div className="relative overflow-hidden group">
      <div className={cn("relative z-10 px-6 py-3 font-medium text-white flex items-center", className)}>
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient-x" />
    </div>
  )

  if (href) {
    return (
      <a href={href} className="inline-block rounded-lg overflow-hidden">
        <ButtonContent />
      </a>
    )
  }

  return (
    <button onClick={onClick} className="rounded-lg overflow-hidden">
      <ButtonContent />
    </button>
  )
}

