"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Company info
  "company.name": {
    zh: "百千成电子",
    en: "BAIQIANCHENG Electronics",
  },
  "company.slogan": {
    zh: "智能储能系统解决方案专家",
    en: "Expert in Intelligent Energy Storage Solutions",
  },
  "company.description": {
    zh: "专注于储能BMS系统研发与OEM代工服务的高新技术企业",
    en: "High-tech enterprise focusing on energy storage BMS development and OEM manufacturing services",
  },

//navigation
  "nav.about": {
    zh: "关于我们",
    en: "About Us",
  },
  "nav.products": {
    zh: "产品中心",
    en: "Products",
  },
  "nav.services": {
    zh: "服务",
    en: "Services",
  },
  "nav.news": {
    zh: "新闻中心",
    en: "News Center",
  },
  "nav.contact": {
    zh: "联系我们",
    en: "Contact Us",
  },

  // About Us submenu
  "about.introduction": {
    zh: "公司介绍",
    en: "Company Introduction",
  },
  "about.coreValues": {
    zh: "核心价值观",
    en: "Core Values",
  },
  "about.strategicPosition": {
    zh: "战略定位",
    en: "Strategic Positioning",
  },
  "about.developmentHistory": {
    zh: "发展历程",
    en: "Development History",
  },
  "about.managementSystem": {
    zh: "管理系统",
    en: "Management System",
  },
  "about.manufacturingCapabilities": {
    zh: "制造能力",
    en: "Manufacturing Capabilities",
  },
  "about.certificates": {
    zh: "资质证书",
    en: "Certificates",
  },

  // Products submenu
  "products.bms": {
    zh: "储能BMS",
    en: "Energy Storage BMS",
  },
  "products.ems": {
    zh: "储能EMS（总控）",
    en: "Energy Storage EMS (Master Control)",
  },
  "products.pcs": {
    zh: "储能PCS",
    en: "Energy Storage PCS",
  },
  "products.robotSystems": {
    zh: "智能控制系统",
    en: "Intelligent Control Systems",
  },
  "products.controlBoards": {
    zh: "工业控制板",
    en: "Industrial Control Boards",
  },

  // BMS submenu
  "bms.powerStorage": {
    zh: "电力大储BMS",
    en: "Power Storage BMS",
  },
  "bms.largeShip": {
    zh: "大型船舶储能BMS",
    en: "Large Ship Energy Storage BMS",
  },
  "bms.smallShip": {
    zh: "小型船舶储能BMS",
    en: "Small Ship Energy Storage BMS",
  },
  "bms.communicationBase": {
    zh: "通讯基站BMS",
    en: "Communication Base Station BMS",
  },

  // Services submenu
  "services.odm": {
    zh: "ODM研发服务（BMS）",
    en: "ODM Development Services (BMS)",
  },
  "services.jdsmOem": {
    zh: "OEM代工服务",
    en: "OEM Manufacturing Services",
  },

  // News submenu
  "news.company": {
    zh: "公司新闻",
    en: "Company News",
  },
  "news.industry": {
    zh: "行业资讯",
    en: "Industry News",
  },
  "news.technology": {
    zh: "技术分享",
    en: "Technology Insights",
  },

  // Contact submenu
  "contact.rdCenter": {
    zh: "研发中心",
    en: "R&D Center",
  },
  "contact.shenzhenFactory": {
    zh: "深圳工厂",
    en: "Shenzhen Factory",
  },
  "contact.malaysiaFactory": {
    zh: "马来西亚工厂",
    en: "Malaysia Factory",
  },

  // Buttons and other UI elements
  "button.learnMore": {
    zh: "了解更多",
    en: "Learn More",
  },
  "footer.copyright": {
    zh: "© 2024 百千成电子. 版权所有.",
    en: "© 2024 BAIQIANCHENG Electronics. All rights reserved.",
  },
  "section.innovativeSolutions": {
    zh: "创新储能解决方案",
    en: "Innovative Energy Storage Solutions",
  },
  "section.solutionsDescription": {
    zh: "百千成电子致力于为全球客户提供高品质的储能BMS系统和OEM代工服务，以先进技术引领行业发展。",
    en: "BAIQIANCHENG Electronics is committed to providing high-quality energy storage BMS systems and OEM manufacturing services for global customers, leading the industry with advanced technology.",
  },

  // Additional UI elements
  "scroll.down": {
    zh: "向下滚动",
    en: "Scroll Down",
  },
  "search.placeholder": {
    zh: "搜索",
    en: "Search",
  },
  "search.button": {
    zh: "搜索",
    en: "Search",
  },
  "language.select": {
    zh: "EN",
    en: "中",
  },

  // Footer sections
  "footer.products": {
    zh: "产品与服务",
    en: "Products & Services",
  },
  "footer.investors": {
    zh: "投资者关系",
    en: "Investor Relations",
  },
  "footer.sustainability": {
    zh: "可持续发展",
    en: "Sustainability",
  },
  "footer.about": {
    zh: "关于我们",
    en: "About Us",
  },
  "footer.news": {
    zh: "新闻中心",
    en: "News Center",
  },
  "footer.contact": {
    zh: "联系我们",
    en: "Contact Us",
  },
  "footer.join": {
    zh: "加入我们",
    en: "Join Us",
  },
  "footer.legal": {
    zh: "法律声明",
    en: "Legal Notice",
  },
  "footer.privacy": {
    zh: "隐私保护",
    en: "Privacy Policy",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
