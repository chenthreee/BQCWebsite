"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { useLanguage } from "./language-context"

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh")
  }

  if (!mounted) {
    return null
  }

  const menuItems = [
    {
      label: t("nav.about"),
      href: "/about",
      dropdown: "about",
      submenu: [
        { label: t("about.introduction"), href: "/about/introduction" },
        { label: t("about.coreValues"), href: "/about/core-values" },
        { label: t("about.strategicPosition"), href: "/about/strategic-positioning" },
        { label: t("about.developmentHistory"), href: "/about/development-history" },
        { label: t("about.managementSystem"), href: "/about/management-system" },
        { label: t("about.manufacturingCapabilities"), href: "/about/manufacturing-capabilities" },
        { label: t("about.certificates"), href: "/about/certificates" },
      ],
    },
    {
      label: t("nav.products"),
      href: "/products",
      dropdown: "products",
      submenu: [
        { label: t("products.bms"), href: "/products/energy-storage-bms" },
        { label: t("products.ems"), href: "/products/energy-storage-ems" },
        { label: t("products.pcs"), href: "/products/energy-storage-pcs" },
        { label: t("products.robotSystems"), href: "/products/intelligent-robot-systems" },
        { label: t("products.controlBoards"), href: "/products/industrial-control-boards" },
      ],
    },
    {
      label: t("nav.services"),
      href: "/services",
      dropdown: "services",
      submenu: [
        { label: t("services.odm"), href: "/services/odm" },
        { label: t("services.jdsmOem"), href: "/services/jdsm-oem" },
      ],
    },
    {
      label: t("nav.news"),
      href: "/news",
      dropdown: "news",
      submenu: [
        { label: t("news.company"), href: "/news/company" },
        { label: t("news.industry"), href: "/news/industry" },
        { label: t("news.technology"), href: "/news/technology" },
      ],
    },
    {
      label: t("nav.contact"),
      href: "/contact",
      dropdown: "contact",
      submenu: [
        { label: t("contact.rdCenter"), href: "/contact/rd-center" },
        { label: t("contact.shenzhenFactory"), href: "/contact/shenzhen-factory" },
        { label: t("contact.malaysiaFactory"), href: "/contact/malaysia-factory" },
      ],
    },
  ]

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/BQCLogo.png"
              alt={t("company.name")}
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold">{t("company.name")}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(item.dropdown)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center py-2 text-white hover:text-blue-300 transition-colors"
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === item.dropdown && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg py-2 z-20 transition-all duration-200"
                    onMouseEnter={() => handleDropdownEnter(item.dropdown)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href} className="block px-4 py-2 hover:bg-gray-100">
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center text-white hover:text-blue-300 transition-colors"
          >
            <Globe className="h-5 w-5 mr-1" />
            <span>{language === "zh" ? "EN" : "中"}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <Link
                    href={item.href}
                    className="flex items-center py-2 text-white hover:text-blue-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="pl-4 mt-2 flex flex-col space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="text-gray-300 hover:text-white py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
