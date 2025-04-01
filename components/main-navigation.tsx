"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Globe } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "./language-context"

export function MainNavigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh")
  }

  // Navigation data structure with translation keys
  const navigationItems = [
    {
      titleKey: "nav.about",
      href: "/about",
      children: [
        { titleKey: "about.introduction", href: "/about/introduction" },
        { titleKey: "about.coreValues", href: "/about/core-values" },
        { titleKey: "about.strategicPosition", href: "/about/strategic-positioning" },
        { titleKey: "about.developmentHistory", href: "/about/development-history" },
        { titleKey: "about.managementSystem", href: "/about/management-system" },
        { titleKey: "about.manufacturingCapabilities", href: "/about/manufacturing-capabilities" },
        { titleKey: "about.certificates", href: "/about/certificates" },
      ],
    },
    {
      titleKey: "nav.products",
      href: "/products",
      children: [
        {
          titleKey: "products.bms",
          href: "/products/energy-storage-bms",
          children: [
            { titleKey: "bms.powerStorage", href: "/products/energy-storage-bms/power-storage" },
            { titleKey: "bms.largeShip", href: "/products/energy-storage-bms/large-ship" },
            { titleKey: "bms.smallShip", href: "/products/energy-storage-bms/small-ship" },
            { titleKey: "bms.communicationBase", href: "/products/energy-storage-bms/communication-base" },
          ],
        },
        { titleKey: "products.ems", href: "/products/energy-storage-ems" },
        { titleKey: "products.pcs", href: "/products/energy-storage-pcs" },
        { titleKey: "products.robotSystems", href: "/products/intelligent-robot-systems" },
        { titleKey: "products.controlBoards", href: "/products/industrial-control-boards" },
      ],
    },
    {
      titleKey: "nav.services",
      href: "/services",
      children: [
        { titleKey: "services.odm", href: "/services/odm" },
        { titleKey: "services.jdsmOem", href: "/services/jdsm-oem" },
      ],
    },
    {
      titleKey: "nav.news",
      href: "/news",
      children: [
        { titleKey: "news.company", href: "/news/company" },
        { titleKey: "news.industry", href: "/news/industry" },
        { titleKey: "news.technology", href: "/news/technology" },
      ],
    },
    {
      titleKey: "nav.contact",
      href: "/contact",
      children: [
        { titleKey: "contact.rdCenter", href: "/contact/rd-center" },
        { titleKey: "contact.shenzhenFactory", href: "/contact/shenzhen-factory" },
        { titleKey: "contact.malaysiaFactory", href: "/contact/malaysia-factory" },
      ],
    },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label={t("company.name")}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_BigPic.png-6HVHuEtUnOFgxkzewgUX3lN7JFeMVd.jpeg"
              alt={t("company.name")}
              width={50}
              height={50}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-white">{t("company.name")}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="主导航">
            {navigationItems.map((item) => (
              <div
                key={item.titleKey}
                className="relative"
                onMouseEnter={() => {
                  setActiveItem(item.titleKey)
                  setActiveSubItem(null)
                }}
                onMouseLeave={() => {
                  setActiveItem(null)
                  setActiveSubItem(null)
                }}
              >
                <Link href={item.href} className="text-white hover:text-blue-300 py-2 flex items-center">
                  {t(item.titleKey)}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />}
                </Link>

                {/* First level dropdown */}
                {item.children && activeItem === item.titleKey && (
                  <div className="absolute left-0 mt-1 w-60 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.children.map((child) => (
                        <div
                          key={child.titleKey}
                          className="relative"
                          onMouseEnter={() => setActiveSubItem(child.titleKey)}
                          onMouseLeave={() => setActiveSubItem(null)}
                        >
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 flex items-center justify-between"
                            role="menuitem"
                          >
                            {t(child.titleKey)}
                            {child.children && (
                              <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" aria-hidden="true" />
                            )}
                          </Link>

                          {/* Second level dropdown */}
                          {child.children && activeSubItem === child.titleKey && (
                            <div className="absolute left-full top-0 w-60 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="py-1" role="menu" aria-orientation="vertical">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.titleKey}
                                    href={subChild.href}
                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    role="menuitem"
                                  >
                                    {t(subChild.titleKey)}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white" aria-label="打开菜单">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-gray-900 text-white">
              <MobileNavigation items={navigationItems} />
            </SheetContent>
          </Sheet>

          {/* Language switcher */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-white hover:text-blue-300 hover:bg-transparent"
              aria-label={language === "zh" ? "Switch to English" : "切换到中文"}
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
              <span className="ml-2 hidden md:inline">{language === "zh" ? "EN" : "中"}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

// Mobile Navigation Component
function MobileNavigation({ items }: { items: Array<any> }) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [openSubItems, setOpenSubItems] = useState<Record<string, boolean>>({})
  const { language, setLanguage, t } = useLanguage()

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const toggleSubItem = (title: string) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh")
  }

  return (
    <nav className="flex flex-col gap-6 mt-8">
      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_BigPic.png-6HVHuEtUnOFgxkzewgUX3lN7JFeMVd.jpeg"
            alt={t("company.name")}
            width={40}
            height={40}
          />
          <span className="font-bold">{t("company.name")}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={toggleLanguage} className="p-1 h-auto hover:bg-gray-800">
          <Globe className="h-5 w-5 mr-1" />
          {language === "zh" ? "EN" : "中"}
        </Button>
      </div>

      {items.map((item) => (
        <div key={item.titleKey} className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <Link href={item.href} className="text-lg font-medium">
              {t(item.titleKey)}
            </Link>
            {item.children && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleItem(item.titleKey)}
                className="p-0 h-auto hover:bg-transparent"
              >
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform", openItems[item.titleKey] ? "rotate-180" : "")}
                />
              </Button>
            )}
          </div>

          {/* First level mobile dropdown */}
          {item.children && openItems[item.titleKey] && (
            <div className="mt-2 ml-4 space-y-2">
              {item.children.map((child: any) => (
                <div key={child.titleKey}>
                  <div className="flex items-center justify-between">
                    <Link href={child.href} className="text-sm text-gray-300 hover:text-white py-1">
                      {t(child.titleKey)}
                    </Link>
                    {child.children && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSubItem(child.titleKey)}
                        className="p-0 h-auto hover:bg-transparent"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openSubItems[child.titleKey] ? "rotate-180" : "",
                          )}
                        />
                      </Button>
                    )}
                  </div>

                  {/* Second level mobile dropdown */}
                  {child.children && openSubItems[child.titleKey] && (
                    <div className="mt-1 ml-4 space-y-1">
                      {child.children.map((subChild: any) => (
                        <Link
                          key={subChild.titleKey}
                          href={subChild.href}
                          className="block text-xs text-gray-400 hover:text-white py-1"
                        >
                          {t(subChild.titleKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

