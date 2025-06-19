"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { useLanguage } from "./language-context"
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const subDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const currentLocale = (firstSegment === "en" || firstSegment === "zh-Hans") ? firstSegment : "zh-Hans";
  const isNewsSection = pathname.startsWith("/news") || pathname.startsWith("/zh-Hans/news") || pathname.startsWith("/en/news");

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
      label: mounted ? t("关于我们") : "关于我们",
      href: "/about",
      children: [
        { label: mounted ? t("公司介绍") : "公司介绍", href: "/about/introduction" },
        { label: mounted ? t("核心价值观") : "核心价值观", href: "/about/core-values" },
        //{ label: mounted ? t("战略定位") : "战略定位", href: "/about/strategic-positioning" },
        { label: mounted ? t("发展历程") : "发展历程", href: "/about/development-history" },
        { label: mounted ? t("管理系统") : "管理系统", href: "/about/management-system" },
        { label: mounted ? t("制造能力") : "制造能力", href: "/about/manufacturing-capabilities" },
        { label: mounted ? t("资质证书") : "资质证书", href: "/about/certificates" },
      ],
    },
    {
      key: "products",
      label: mounted ? t("产品中心") : "产品中心",
      href: "/products",
      children: [
        {
          label: mounted ? t("储能BMS/储能PCS") : "储能BMS/储能PCS",
          href: "/products/energy-storage-bms",
          children: [
            { label: mounted ? t("电力大储BMS") : "电力大储BMS", href: "/products/energy-storage-bms/power-storage" },
            { label: mounted ? t("大型船舶储能BMS") : "大型船舶储能BMS", href: "/products/energy-storage-bms/large-ship" },
            { label: mounted ? t("小型船舶储能BMS") : "小型船舶储能BMS", href: "/products/energy-storage-bms/small-ship" },
            { label: mounted ? t("通讯基站储能BMS") : "通讯基站储能BMS", href: "/products/energy-storage-bms/communication-base" },
            { label: mounted ? t("储能EMS（总控）") : "储能EMS（总控）", href: "/products/energy-storage-ems" },
            { label: mounted ? t("储能PCS") : "储能PCS", href: "/products/energy-storage-pcs" },
          ],
        },
        //{ label: mounted ? t("储能PCS") : "储能PCS", href: "/products/energy-storage-pcs" },
        { label: mounted ? t("智能机器人系统") : "智能机器人系统", href: "/products/intelligent-robot-systems" },
        { label: mounted ? t("工业控制板") : "工业控制板", href: "/products/industrial-control-boards" },
        { label: mounted ? t("医疗设备") : "医疗设备", href: "/products/medical-devices" },
      ],
    },
    {
      key: "services",
      label: mounted ? t("服务") : "服务",
      href: "/services",
      children: [
        { label: mounted ? t("ODM研发服务（围绕储能）") : "ODM研发服务（围绕储能）", href: "/services/odm" },
        { label: mounted ? t("OEM代工服务") : "OEM代工服务", href: "/services/oem" },
      ],
    },
    {
      key: "news",
      label: mounted ? t("新闻中心") : "新闻中心",
      href: `/${currentLocale}/news`,
      children: [
        { label: mounted ? t("国内新闻") : "国内新闻", href: `/${currentLocale}/news/domestic` },
        { label: mounted ? t("海外新闻") : "海外新闻", href: `/${currentLocale}/news/overseas` },
      ],
    },
    {
      key: "contact",
      label: mounted ? t("联系我们") : "联系我们",
      href: "/contact",
      children: [
        { label: mounted ? t("研发中心") : "研发中心", href: "/contact#rd-center" },
        { label: mounted ? t("深圳工厂") : "深圳工厂", href: "/contact#shenzhen-factory" },
        { label: mounted ? t("马来西亚工厂") : "马来西亚工厂", href: "/contact#malaysia-factory" },
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
              <Image src="/BQCLogo.png" alt="百千成电子" width={40} height={60} className="mr-2" />
              <span className="text-xl font-bold text-white">百千成电子</span>
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
                  onClick={() => console.log('一级菜单跳转到:', item.href)}
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
                            onClick={() => console.log('二级菜单跳转到:', child.href)}
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
            {isNewsSection ? (
              <LanguageSwitcher />
            ) : (
              <button
                onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/70 flex items-center text-white"
              >
                <Globe className="mr-1 h-4 w-4" />
                {language === "zh" ? "EN" : "中文"}
              </button>
            )}
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
              {language === "zh" ? "English" : "中文"}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
