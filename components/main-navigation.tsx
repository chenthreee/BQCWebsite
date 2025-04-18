"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { useLanguage } from "./language-context"

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const subDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(key)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setActiveSubDropdown(null)
    }, 200)
  }

  const handleSubDropdownEnter = (key: string) => {
    if (subDropdownTimeoutRef.current) {
      clearTimeout(subDropdownTimeoutRef.current)
      subDropdownTimeoutRef.current = null
    }
    setActiveSubDropdown(key)
  }

  const handleSubDropdownLeave = () => {
    subDropdownTimeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null)
    }, 200)
  }

  const menuItems = [
    {
      key: "about",
      label: t("nav.about"),
      href: "/about",
      children: [
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
      key: "products",
      label: t("nav.products"),
      href: "/products",
      children: [
        {
          label: t("products.bms"),
          href: "/products/energy-storage-bms",
          children: [
            { label: t("bms.powerStorage"), href: "/products/energy-storage-bms/power-storage" },
            { label: t("bms.largeShip"), href: "/products/energy-storage-bms/large-ship" },
            { label: t("bms.smallShip"), href: "/products/energy-storage-bms/small-ship" },
            { label: t("bms.communicationBase"), href: "/products/energy-storage-bms/communication-base" },
            { label: t("products.ems"), href: "/products/energy-storage-bms/energy-storage-ems" },
          ],
        },
        { label: t("products.pcs"), href: "/products/energy-storage-pcs" },
        { label: t("products.robotSystems"), href: "/products/intelligent-robot-systems" },
        { label: t("products.controlBoards"), href: "/products/industrial-control-boards" },
      ],
    },
    {
      key: "services",
      label: t("nav.services"),
      href: "/services",
      children: [
        { label: t("services.odm"), href: "/services/odm" },
        { label: t("services.jdsmOem"), href: "/services/oem" },
      ],
    },
    {
      key: "news",
      label: t("nav.news"),
      href: "/news",
      children: [
        { label: t("news.company"), href: "/news/company" },
        { label: t("news.industry"), href: "/news/industry" },
        { label: t("news.technology"), href: "/news/technology" },
      ],
    },
    {
      key: "contact",
      label: t("nav.contact"),
      href: "/contact",
      children: [
        { label: t("contact.rdCenter"), href: "/contact/rd-center" },
        { label: t("contact.shenzhenFactory"), href: "/contact/shenzhen-factory" },
        { label: t("contact.malaysiaFactory"), href: "/contact/malaysia-factory" },
      ],
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/BQCLogo.png" 
                alt={t("company.name")} 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-xl font-bold text-white">{t("company.name")}</span>
            </Link>
          </div>

          {/* Desktop Navigation - 使用 flex-1 和 justify-center 来居中菜单项 */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="relative px-2"
                onMouseEnter={() => handleDropdownEnter(item.key)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/70 flex items-center text-white"
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.children && activeDropdown === item.key && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-300 ease-in-out">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <div
                          key={child.href}
                          className="relative"
                          onMouseEnter={child.children ? () => handleSubDropdownEnter(child.href) : undefined}
                          onMouseLeave={child.children ? handleSubDropdownLeave : undefined}
                        >
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                          >
                            {child.label}
                            {child.children && <ChevronDown className="ml-1 h-4 w-4" />}
                          </Link>

                          {child.children && activeSubDropdown === child.href && (
                            <div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-300 ease-in-out">
                              <div className="py-1">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.href}
                                    href={subChild.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {subChild.label}
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
          </div>

          {/* Language Switcher - 放在最右边 */}
          <div className="hidden md:flex flex-shrink-0">
            <button
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/70 flex items-center text-white"
            >
              <Globe className="mr-1 h-4 w-4" />
              {language === "zh" ? t("language.select") : "中文"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800/70"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 flex justify-between items-center"
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>

                {item.children && activeDropdown === item.key && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <div key={child.href} className="relative">
                        {child.children ? (
                          <>
                            <button
                              onClick={() => setActiveSubDropdown(activeSubDropdown === child.href ? null : child.href)}
                              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 flex justify-between items-center"
                            >
                              {child.label}
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {activeSubDropdown === child.href && (
                              <div className="pl-4 space-y-1">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.href}
                                    href={subChild.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            href={child.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 flex items-center"
            >
              <Globe className="mr-1 h-4 w-4" />
              {language === "zh" ? t("language.select") : "中文"}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
