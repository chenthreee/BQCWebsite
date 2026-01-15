"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const subDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const currentLocale = (firstSegment === "en" || firstSegment === "zh-Hans") ? firstSegment : "zh-Hans";
  const isNewsSection = pathname.startsWith("/news") || pathname.startsWith("/zh-Hans/news") || pathname.startsWith("/en/news");

  // 翻译函数
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      "关于我们": {
        "zh-Hans": "关于我们",
        "en": "About Us",
      },
      "公司介绍": {
        "zh-Hans": "公司介绍",
        "en": "Company Introduction",
      },
      "核心价值观": {
        "zh-Hans": "核心价值观",
        "en": "Core Values",
      },
      "发展历程": {
        "zh-Hans": "发展历程",
        "en": "Development History",
      },
      "管理系统": {
        "zh-Hans": "管理系统",
        "en": "Management System",
      },
      "制造能力": {
        "zh-Hans": "制造能力",
        "en": "Manufacturing Capabilities",
      },
      "资质证书": {
        "zh-Hans": "资质证书",
        "en": "Certificates",
      },
      "产品中心": {
        "zh-Hans": "产品中心",
        "en": "Products",
      },
      "储能BMS/储能PCS": {
        "zh-Hans": "储能BMS/储能PCS",
        "en": "Energy Storage BMS/PCS",
      },
      "电力大储BMS": {
        "zh-Hans": "电力大储BMS",
        "en": "Power Storage BMS",
      },
      "大型船舶储能BMS": {
        "zh-Hans": "大型船舶储能BMS",
        "en": "Large-scale Marine Energy Storage BMS",
      },
      "小型船舶储能BMS": {
        "zh-Hans": "小型船舶储能BMS",
        "en": "Small-scale Marine Energy Storage BMS",
      },
      "通讯基站储能BMS": {
        "zh-Hans": "通讯基站储能BMS",
        "en": "Communication Base Station BMS",
      },
      "储能EMS（总控）": {
        "zh-Hans": "储能EMS（总控）",
        "en": "Energy Storage EMS (Master Control)",
      },
      "储能PCS": {
        "zh-Hans": "储能PCS",
        "en": "Energy Storage PCS",
      },
      "智能机器人系统": {
        "zh-Hans": "智能机器人系统",
        "en": "Intelligent Robot Systems",
      },
      "工业控制板": {
        "zh-Hans": "工业控制板",
        "en": "Industrial Control Boards",
      },
      "医疗设备": {
        "zh-Hans": "医疗设备",
        "en": "Medical Devices",
      },
      "服务": {
        "zh-Hans": "服务",
        "en": "Services",
      },
      "ODM研发服务": {
        "zh-Hans": "ODM研发服务",
        "en": "ODM Development Services ",
      },
      "OEM制造服务": {
        "zh-Hans": "OEM制造服务",
        "en": "OEM Manufacturing Services",
      },
      "新闻中心": {
        "zh-Hans": "新闻中心",
        "en": "News Center",
      },
      "公司新闻": {
        "zh-Hans": "公司新闻",
        "en": "Company News"
      },
      "行业知识": {
        "zh-Hans": "行业知识",
        "en": "Industry Knowledge"
      },
      "联系我们": {
        "zh-Hans": "联系我们",
        "en": "Contact Us",
      },
      "研发中心": {
        "zh-Hans": "研发中心",
        "en": "R&D Center",
      },
      "深圳工厂": {
        "zh-Hans": "深圳工厂",
        "en": "Shenzhen Factory",
      },
      "马来西亚工厂": {
        "zh-Hans": "马来西亚工厂",
        "en": "Malaysia Factory",
      },
      "首页": {
        "zh-Hans": "首页",
        "en": "Home",
      },
      "news.all": {
        "zh-Hans": "全部新闻",
        "en": "All News"
      },
      "news.company": {
        "zh-Hans": "公司新闻",
        "en": "Company News"
      },
      "news.industry": {
        "zh-Hans": "行业知识",
        "en": "Industry Knowledge"
      },
    }
    return translations[key]?.[currentLocale] || key
  }

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
      key: "home",
      label: mounted ? t("首页") : "首页",
      href: `/${currentLocale}`,
    },
    {
      key: "about",
      label: mounted ? t("关于我们") : "关于我们",
      href: `/${currentLocale}/about`,
      children: [
        { label: mounted ? t("公司介绍") : "公司介绍", href: `/${currentLocale}/about/introduction.html` },
        { label: mounted ? t("核心价值观") : "核心价值观", href: `/${currentLocale}/about/core-values.html` },
        { label: mounted ? t("发展历程") : "发展历程", href: `/${currentLocale}/about/development-history.html` },
        { label: mounted ? t("管理系统") : "管理系统", href: `/${currentLocale}/about/management-system.html` },
        { label: mounted ? t("制造能力") : "制造能力", href: `/${currentLocale}/about/manufacturing-capabilities.html` },
        { label: mounted ? t("资质证书") : "资质证书", href: `/${currentLocale}/about/certificates.html` },
      ],
    },
    {
      key: "products",
      label: mounted ? t("产品中心") : "产品中心",
      href: `/${currentLocale}/products`,
      children: [
        {
          label: mounted ? t("储能BMS/储能PCS") : "储能BMS/储能PCS",
          href: `/${currentLocale}/products/energy-storage-bms.html`,
          children: [
            { label: mounted ? t("电力大储BMS") : "电力大储BMS", href: `/${currentLocale}/products/energy-storage-bms/power-storage.html` },
            { label: mounted ? t("大型船舶储能BMS") : "大型船舶储能BMS", href: `/${currentLocale}/products/energy-storage-bms/large-ship.html` },
            { label: mounted ? t("小型船舶储能BMS") : "小型船舶储能BMS", href: `/${currentLocale}/products/energy-storage-bms/small-ship.html` },
            { label: mounted ? t("通讯基站储能BMS") : "通讯基站储能BMS", href: `/${currentLocale}/products/energy-storage-bms/communication-base.html` },
            //这里暂时删除了储能BMS下面 EMS总控这个分类 但是不删代码 万一以后又觉得要加回来就麻烦了……
            //{ label: mounted ? t("储能EMS（总控）") : "储能EMS（总控）", href: `/${currentLocale}/products/energy-storage-bms/energy-storage-ems.html` },
            { label: mounted ? t("储能PCS") : "储能PCS", href: `/${currentLocale}/products/energy-storage-pcs.html` },
          ],
        },
        { label: mounted ? t("智能机器人系统") : "智能机器人系统", href: `/${currentLocale}/products/intelligent-robot-systems.html` },
        { label: mounted ? t("工业控制板") : "工业控制板", href: `/${currentLocale}/products/industrial-control-boards.html` },
        { label: mounted ? t("医疗设备") : "医疗设备", href: `/${currentLocale}/products/medical-devices.html` },
      ],
    },
    {
      key: "services",
      label: mounted ? t("服务") : "服务",
      href: `/${currentLocale}/services`,
      children: [
        { label: mounted ? t("ODM研发服务") : "ODM研发服务", href: `/${currentLocale}/services/odm.html` },
        { label: mounted ? t("OEM制造服务") : "OEM制造服务", href: `/${currentLocale}/services/oem.html` },
      ],
    },
    {
      key: "news",
      label: mounted ? t("新闻中心") : "新闻中心",
      href: `/${currentLocale}/news`,
      children: [
        { label: mounted ? t("公司新闻") : "company news", href: `/${currentLocale}/news/company.html` },
        { label: mounted ? t("行业知识") : "industry Knowledge", href: `/${currentLocale}/news/industry.html` },
      ],
    },
    {
      key: "contact",
      label: mounted ? t("联系我们") : "联系我们",
      href: `/${currentLocale}/contact`,
      children: [
        { label: mounted ? t("研发中心") : "研发中心", href: `/${currentLocale}/contact` },
        { label: mounted ? t("深圳工厂") : "深圳工厂", href: `/${currentLocale}/contact` },
        { label: mounted ? t("马来西亚工厂") : "马来西亚工厂", href: `/${currentLocale}/contact` },
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
            <h1 className="sr-only">{currentLocale === "en" ? "BAIQIANCHENG Electronics" : "百千成电子"}</h1>
            <Link href={`/${currentLocale}.html`} className="flex items-center">
              <Image src="/BQCLogo.png" alt={currentLocale === "en" ? "BAIQIANCHENG Electronics" : "百千成电子"} title={currentLocale === "en" ? "BAIQIANCHENG Electronics" : "百千成电子"} width={40} height={60} className="mr-2" />
              <span className="text-xl font-bold text-white">
                {currentLocale === "en" ? "BAIQIANCHENG Electronics" : "百千成电子"}
              </span>
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
                {/* <Link
                  href={item.href}
                  onClick={() => console.log('一级菜单跳转到:', item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/70 flex items-center text-white"
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link> */}
                {item.key === "contact" ? (
                  <Link href={item.href} legacyBehavior>
                    <a
                      rel="nofollow"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/70 flex items-center text-white"
                    >
                      {item.label}
                      {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                    </a>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => console.log('一级菜单跳转到:', item.href)}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/70 flex items-center text-white"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                )}


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
                          {/* <Link
                            href={child.href}
                            onClick={() => console.log('二级菜单跳转到:', child.href)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                          >
                            {child.label}
                            {child.children && <ChevronDown className="ml-1 h-4 w-4" />}
                          </Link> */}
                          {item.key === "contact" ? (
                            <Link href={child.href} legacyBehavior>
                              <a
                                rel="nofollow"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                              >
                                {child.label}
                                {child.children && <ChevronDown className="ml-1 h-4 w-4" />}
                              </a>
                            </Link>
                          ) : (
                            <Link
                              href={child.href}
                              onClick={() => console.log('二级菜单跳转到:', child.href)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                            >
                              {child.label}
                              {child.children && <ChevronDown className="ml-1 h-4 w-4" />}
                            </Link>
                          )}


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
            <LanguageSwitcher />
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
                              onClick={() =>
                                setActiveSubDropdown(activeSubDropdown === child.href ? null : child.href)
                              }
                              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 flex justify-between items-center"
                            >
                              {child.label}
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </button>

                            {activeSubDropdown === child.href && (
                              <div className="pl-4 space-y-1">
                                {child.children.map((subChild) =>
                                  item.key === "contact" ? (
                                    <Link key={subChild.href} href={subChild.href} legacyBehavior>
                                      <a
                                        rel="nofollow"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {subChild.label}
                                      </a>
                                    </Link>
                                  ) : (
                                    <Link
                                      key={subChild.href}
                                      href={subChild.href}
                                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subChild.label}
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </>
                        ) : item.key === "contact" ? (
                          <Link href={child.href} legacyBehavior>
                            <a
                              rel="nofollow"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </a>
                          </Link>
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

            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}

    </nav>
  )
}
