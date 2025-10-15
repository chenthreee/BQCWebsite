"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import React from "react"

type Language = "zh" | "zh-Hans" | "en"

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
    "zh-Hans": "百千成电子",
    en: "BAIQIANCHENG Electronics",
  },
  "company.slogan": {
    zh: "智能储能系统解决方案专家",
    "zh-Hans": "智能储能系统解决方案专家",
    en: "Expert in Intelligent Energy Storage Solutions",
  },
  "company.description": {
    zh: "专注于储能BMS系统研发与OEM制造服务的高新技术企业",
    "zh-Hans": "专注于储能BMS系统研发与OEM制造服务的高新技术企业",
    en: "High-tech enterprise focusing on energy storage BMS development and OEM manufacturing services",
  },

//navigation
  "nav.about": {
    zh: "关于我们",
    "zh-Hans": "关于我们",
    en: "About Us",
  },
  "nav.products": {
    zh: "产品中心",
    "zh-Hans": "产品中心",
    en: "Products",
  },
  "nav.services": {
    zh: "服务",
    "zh-Hans": "服务",
    en: "Services",
  },
  "nav.news": {
    zh: "新闻中心",
    "zh-Hans": "新闻中心",
    en: "News Center",
  },
  "nav.contact": {
    zh: "联系我们",
    "zh-Hans": "联系我们",
    en: "Contact Us",
  },

  // About Us submenu
  "about.introduction": {
    zh: "公司介绍",
    "zh-Hans": "公司介绍",
    en: "Company Introduction",
  },
  "about.introduction.title": {
    zh: "公司介绍",
    "zh-Hans": "公司介绍",
    en: "Company Introduction"
  },
  "about.introduction.subtitle": {
    zh: "了解百千成电子的发展历程与企业文化",
    "zh-Hans": "了解百千成电子的发展历程与企业文化",
    en: "Learn about Baiqiancheng Electronics' development history and corporate culture"
  },
  "about.breadcrumbs.main": {
    zh: "关于我们",
    "zh-Hans": "关于我们",
    en: "About Us"
  },
  "about.breadcrumbs.intro": {
    zh: "公司介绍",
    "zh-Hans": "公司介绍",
    en: "Company Introduction"
  },
  "about.breadcrumbs.coreValues": {
    zh: "核心价值观",
    "zh-Hans": "核心价值观",
    en: "Core Values"
  },
  "about.breadcrumbs.developmentHistory": {
    zh: "发展历程",
    "zh-Hans": "发展历程",
    en: "Development History"
  },
  "about.breadcrumbs.managementSystem": {
    zh: "管理系统",
    "zh-Hans": "管理系统",
    en: "Management System"
  },
  "about.breadcrumbs.manufacturingCapabilities": {
    zh: "制造能力",
    "zh-Hans": "制造能力",
    en: "Manufacturing Capabilities"
  },
  "about.breadcrumbs.strategicPositioning": {
    zh: "战略定位",
    "zh-Hans": "战略定位",
    en: "Strategic Positioning"
  },
  "about.breadcrumbs.certificates": {
    zh: "资质证书",
    "zh-Hans": "资质证书",
    en: "Certificates"
  },
  "about.coreValues": {
    zh: "核心价值观",
    "zh-Hans": "核心价值观",
    en: "Core Values",
  },
  "about.coreValues.title": {
    zh: "核心价值观",
    "zh-Hans": "核心价值观",
    en: "Core Values"
  },
  "about.coreValues.subtitle": {
    zh: "我们的企业文化与价值理念",
    "zh-Hans": "我们的企业文化与价值理念",
    en: "Our Corporate Culture and Value Principles"
  },
  "about.strategicPosition": {
    zh: "战略定位",
    "zh-Hans": "战略定位",
    en: "Strategic Positioning",
  },
  "about.strategicPositioning.title": {
    zh: "战略定位",
    "zh-Hans": "战略定位",
    en: "Strategic Positioning"
  },
  "about.strategicPositioning.subtitle": {
    zh: "百千成电子的发展战略与市场定位",
    "zh-Hans": "百千成电子的发展战略与市场定位",
    en: "Development Strategy and Market Positioning of BQC Electronics"
  },
  "about.developmentHistory": {
    zh: "发展历程",
    "zh-Hans": "发展历程",
    en: "Development History",
  },
  "about.developmentHistory.title": {
    zh: "发展历程",
    "zh-Hans": "发展历程",
    en: "Development History"
  },
  "about.developmentHistory.subtitle": {
    zh: "百千成电子的成长与发展",
    "zh-Hans": "百千成电子的成长与发展",
    en: "Growth and Development of BQC Electronics"
  },
  "about.managementSystem": {
    zh: "管理系统",
    "zh-Hans": "管理系统",
    en: "Management System",
  },
  "about.managementSystem.title": {
    zh: "管理系统",
    "zh-Hans": "管理系统",
    en: "Management System"
  },
  "about.managementSystem.subtitle": {
    zh: "百千成电子的数字化管理平台",
    "zh-Hans": "数字化管理平台",
    en: "Digital Management Platform"
  },
  "about.manufacturingCapabilities": {
    zh: "制造能力",
    "zh-Hans": "制造能力",
    en: "Manufacturing Capabilities",
  },
  "about.manufacturingCapabilities.title": {
    zh: "制造能力",
    "zh-Hans": "制造能力",
    en: "Manufacturing Capabilities"
  },
  "about.manufacturingCapabilities.subtitle": {
    zh: "百千成电子的生产设备与制造工艺",
    "zh-Hans": "百千成电子的生产设备与制造工艺",
    en: "BQC Electronics Production Equipment and Manufacturing Process"
  },
  "about.certificates": {
    zh: "资质证书",
    "zh-Hans": "资质证书",
    en: "Certificates",
  },
  "about.certificates.title": {
    zh: "资质证书",
    "zh-Hans": "资质证书",
    en: "Certificates"
  },
  "about.certificates.subtitle": {
    zh: "百千成电子的资质认证与荣誉",
    "zh-Hans": "百千成电子的资质认证与荣誉",
    en: "BQC Electronics Certifications and Honors"
  },
  "about.certificates.desc": {
    zh: "公司通过多项国际权威认证，彰显了在质量管理和技术创新方面的实力。",
    "zh-Hans": "公司通过多项国际权威认证，彰显了在质量管理和技术创新方面的实力。",
    en: "The company has obtained multiple international authoritative certifications, demonstrating its strength in quality management and technological innovation.",
  },
  "about.certificates.more": {
    zh:"了解更多",
    "zh-Hans": "了解更多",
    "en": "Learn More"
  },

  // Products submenu
  "products.bms": {
    zh: "储能BMS",
    "zh-Hans": "储能BMS",
    en: "Energy Storage BMS",
  },
  "products.ems": {
    zh: "储能EMS（总控）",
    "zh-Hans": "储能EMS（总控）",
    en: "Energy Storage EMS (Master Control)",
  },
  "products.pcs": {
    zh: "储能PCS",
    "zh-Hans": "储能PCS",
    en: "Energy Storage PCS",
  },
  "products.robotSystems": {
    zh: "智能控制系统",
    "zh-Hans": "智能控制系统",
    en: "Intelligent Control Systems",
  },
  "products.controlBoards": {
    zh: "工业控制板",
    "zh-Hans": "工业控制板",
    en: "Industrial Control Boards",
  },

  // BMS submenu
  "bms.powerStorage": {
    zh: "电力大储BMS",
    "zh-Hans": "电力大储BMS",
    en: "Power Storage BMS",
  },
  "bms.largeShip": {
    zh: "大型船舶储能BMS",
    "zh-Hans": "大型船舶储能BMS",
    en: "Large-scale Marine Energy Storage BMS",
  },
  "bms.smallShip": {
    zh: "小型船舶储能BMS",
    "zh-Hans": "小型船舶储能BMS",
    en: "Small-scale Marine Energy Storage BMS",
  },
  "bms.communicationBase": {
    zh: "通讯基站BMS",
    "zh-Hans": "通讯基站BMS",
    en: "Communication Base Station BMS",
  },

  // Services submenu
  "services.odm": {
    zh: "ODM研发服务（BMS）",
    "zh-Hans": "ODM研发服务（BMS）",
    en: "ODM Development Services (BMS)",
  },
  "services.jdsmOem": {
    zh: "OEM制造服务",
    "zh-Hans": "OEM制造服务",
    en: "OEM Manufacturing Services",
  },

  // News submenu
  "news.all":{
    zh:"全部新闻",
    "zh-Hans":"全部新闻",
    en: "All News",
  },
  "news.company": {
    zh: "公司新闻",
    "zh-Hans": "公司新闻",
    en: "Company News",
  },
  "news.industry": {
    zh: "行业知识",
    "zh-Hans": "行业知识",
    en: "Industry Knowledge",
  },
  "news.technology": {
    zh: "技术分享",
    "zh-Hans": "技术分享",
    en: "Technology Insights",
  },
  "news.company.desc": {
    zh: "了解百千成电子公司最新动态、产品发布和合作伙伴关系",
    "zh-Hans": "了解百千成电子公司最新动态、产品发布和合作伙伴关系",
    en: "Learn about the latest company news, product releases, and partnerships of BQC Electronics",
  },
  "news.industry.desc": {
    zh: "关注储能行业发展趋势、技术创新和市场分析",
    "zh-Hans": "关注储能行业发展趋势、技术创新和市场分析",
    en: "Focus on energy storage industry trends, technological innovation, and market analysis",
  },
  "news.center.title": {
    zh: "新闻中心",
    "zh-Hans": "新闻中心",
    en: "News Center",
  },
  "news.center.subtitle": {
    zh: "了解最新动态",
    "zh-Hans": "了解最新动态",
    en: "Get the latest news",
  },
  "news.center.description": {
    zh: "获取百千成电子最新资讯、行业动态和技术分享",
    "zh-Hans": "获取百千成电子最新资讯、行业动态和技术分享",
    en: "Get the latest news, industry trends and technical insights from BQC Electronics",
  },
  "news.readMore": {
    zh: "查看更多",
    "zh-Hans": "查看更多",
    en: "Read More",
  },

  // Contact submenu
  "contact.rdCenter": {
    zh: "研发中心",
    "zh-Hans": "研发中心",
    en: "R&D Center",
  },
  "contact.shenzhenFactory": {
    zh: "深圳工厂",
    "zh-Hans": "深圳工厂",
    en: "Shenzhen Factory",
  },
  "contact.malaysiaFactory": {
    zh: "马来西亚工厂",
    "zh-Hans": "马来西亚工厂",
    en: "Malaysia Factory",
  },

  // Buttons and other UI elements
  "button.learnMore": {
    zh: "了解更多",
    "zh-Hans": "了解更多",
    en: "Learn More",
  },
  "footer.copyright": {
    zh: "© 2025 深圳市百千成电子有限公司. 版权所有.",
    "zh-Hans": "© 2025 深圳市百千成电子有限公司. 版权所有.",
    en: "© 2025 Shenzhen BAIQIANCHENG Electronics Co., Ltd. All rights reserved.",
  },
  "section.innovativeSolutions": {
    zh: "创新储能解决方案",
    "zh-Hans": "创新储能解决方案",
    en: "Innovative Energy Storage Solutions",
  },
  "section.solutionsDescription": {
    zh: "百千成电子致力于为全球客户提供高品质的储能BMS系统和OEM制造服务，以先进技术引领行业发展。",
    "zh-Hans": "百千成电子致力于为全球客户提供高品质的储能BMS系统和OEM制造服务，以先进技术引领行业发展。",
    en: "BAIQIANCHENG Electronics is committed to providing high-quality energy storage BMS systems and OEM manufacturing services for global customers, leading the industry with advanced technology.",
  },

  // Additional UI elements
  "scroll.down": {  
    zh: "向下滚动",
    "zh-Hans": "向下滚动",
    en: "Scroll Down",
  },
  "search.placeholder": {
    zh: "搜索",
    "zh-Hans": "搜索",
    en: "Search",
  },
  "search.button": {
    zh: "搜索",
    "zh-Hans": "搜索",
    en: "Search",
  },
  "language.select": {
    zh: "EN",
    "zh-Hans": "中",
    en: "中",
  },

  // Footer sections
  "footer.products": {
    zh: "产品与服务",
    "zh-Hans": "产品与服务",
    en: "Products & Services",
  },
  "footer.investors": {
    zh: "投资者关系",
    "zh-Hans": "投资者关系",
    en: "Investor Relations",
  },
  "footer.sustainability": {
    zh: "可持续发展",
    "zh-Hans": "可持续发展",
    en: "Sustainability",
  },
  "footer.about": {
    zh: "关于我们",
    "zh-Hans": "关于我们",
    en: "About Us",
  },
  "footer.news": {
    zh: "新闻中心",
    "zh-Hans": "新闻中心",
    en: "News Center",
  },
  "footer.contact": {
    zh: "联系我们",
    "zh-Hans": "联系我们",
    en: "Contact Us",
  },
  "footer.join": {
    zh: "加入我们",
    "zh-Hans": "加入我们",
    en: "Join Us",
  },
  "footer.legal": {
    zh: "法律声明",
    "zh-Hans": "法律声明",
    en: "Legal Notice",
  },
  "footer.privacy": {
    zh: "隐私保护",
    "zh-Hans": "隐私保护",
    en: "Privacy Policy",
  },
}

// 自动补全所有 translations key 的 zh-Hans 字段
Object.keys(translations).forEach(key => {
  if (translations[key].zh && !translations[key]["zh-Hans"]) {
    translations[key]["zh-Hans"] = translations[key].zh;
  }
});

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")
  const pathname = usePathname();
  // 根据 URL 自动切换语言
  React.useEffect(() => {
    if (pathname.startsWith("/en")) setLanguage("en");
    else if (pathname.startsWith("/zh-Hans")) setLanguage("zh-Hans");
    else setLanguage("zh");
  }, [pathname]);

  const t = (key: string): string => {
    // 优先级：当前语言 > zh-Hans > zh > en > key
    return (
      translations[key]?.[language] ||
      translations[key]?.["zh-Hans"] ||
      translations[key]?.["zh"] ||
      translations[key]?.["en"] ||
      key
    );
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
