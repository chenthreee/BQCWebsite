// 证书数据类型定义
export interface Certificate {
  id: string
  title: string
  description: string
  image: string
  issueDate: string
  validUntil: string
  detailedInfo?: {
    fullName?: string
    scope?: string
    certificationBody?: string
    benefits?: string[]
    requirements?: string[]
  }
}

// 证书数据
export const certificatesData = {
  zh: [
    {
      id: "iso9001",
      title: "ISO 9001",
      description: "ISO 9001 是全球应用最广泛的质量管理体系标准，适用于各类行业和组织规模。该标准通过系统化的流程管理，帮助企业持续稳定地满足客户需求，并不断提升客户满意度。\n\nISO 9001 基于客户导向、领导作用、过程方法、风险思维和持续改进等核心原则，要求企业识别并优化关键业务流程，从而提高运营效率和产品一致性。\n\n获得 ISO 9001 认证，表明企业在质量管理、内部控制和持续改进方面具备成熟的管理体系，是客户和合作伙伴评估供应商可靠性的重要参考。",
      image: "/images/about/certificates/ISO9001.png",
      issueDate: "2019年",
      validUntil: "2025年",
      detailedInfo: {
        fullName: "ISO 9001 质量管理体系认证",
        scope: "适用于各类组织和行业的质量管理",
        certificationBody: "国际标准化组织（ISO）",
        benefits: [
          "持续稳定地满足客户需求",
          "提升客户满意度",
          "提高运营效率和产品一致性",
          "增强市场竞争力",
          "促进持续改进文化"
        ],
        requirements: [
          "建立系统化的质量管理体系",
          "明确质量方针和目标",
          "实施过程方法和风险思维",
          "定期进行内部审核",
          "持续改进质量管理体系"
        ]
      }
    },
    {
      id: "iso14001",
      title: "ISO14001",
      description: "ISO 14001 是一项国际通用的环境管理体系标准，旨在帮助企业系统化地管理其环境责任，并持续降低对环境的影响。该标准强调环境风险识别、法规符合性以及环境绩效的持续改进。\n\n通过 ISO 14001 认证，企业需识别自身运营中的环境因素，制定明确的环境目标，并采取有效措施减少污染、废弃物和资源消耗。\n\nISO 14001 体现了企业对可持续发展和社会责任的重视，有助于提升企业形象、降低合规风险，并满足客户和市场对绿色供应链的要求。",
      image: "/images/about/certificates/ISO14001.png",
      issueDate: "2018年",
      validUntil: "2027年",
      detailedInfo: {
        fullName: "ISO14001环境管理体系认证",
        scope: "适用于各类组织的环境管理",
        certificationBody: "国际标准化组织（ISO）",
        benefits: [
          "降低环境风险和影响",
          "提升环境绩效",
          "节约资源和能源",
          "增强企业社会责任形象",
          "符合环保法规要求"
        ],
        requirements: [
          "识别环境因素和影响",
          "制定环境方针和目标",
          "实施环境管理方案",
          "监测和测量环境绩效",
          "持续改进环境管理体系"
        ]
      }
    },
    {
      id: "iso13485",
      title: "ISO 13485",
      description: "ISO 13485 是一项专门针对医疗器械行业制定的国际质量管理体系标准，覆盖产品从设计开发、生产、安装到售后服务的整个生命周期。该标准重点强调法规符合性、风险管理以及产品的一致性和安全性。\n\n通过 ISO 13485 认证，表明企业具备满足全球医疗器械法规要求的能力，并能够通过系统化的流程控制，确保产品的可靠性和患者安全。标准要求对关键过程进行验证，强化文件与记录管理，并实施有效的纠正和预防措施。\n\n对于客户而言，ISO 13485 认证是企业质量体系成熟度的重要证明，可有效降低合规风险，并增强对供应商在医疗器械及相关组件制造能力方面的信任。",
      image: "/images/about/certificates/ISO13485.png",
      issueDate: "2015年",
      validUntil: "2027年",
      detailedInfo: {
        fullName: "ISO 13485 医疗器械质量管理体系认证",
        scope: "适用于医疗器械的设计、开发、生产、安装和售后服务全生命周期",
        certificationBody: "国际标准化组织（ISO）",
        benefits: [
          "确保医疗器械安全性和有效性",
          "满足全球医疗器械法规要求（如FDA QSR和EU MDR）",
          "提升产品质量和可靠性",
          "增强患者安全保障",
          "促进国际市场准入"
        ],
        requirements: [
          "建立医疗器械质量管理体系",
          "实施基于风险的思维和管理",
          "确保产品可追溯性",
          "验证关键过程",
          "严格控制文件和记录管理"
        ]
      }
    },
    {
      id: "iatf16949",
      title: "IATF16949",
      description: "IATF 16949 是专为汽车行业制定的全球质量管理体系标准，由国际汽车工作组（IATF）联合发布，是汽车供应链的重要准入标准。该体系以缺陷预防、过程控制和持续改进为核心。\n\n标准强调产品安全、风险管理、可追溯性以及先进质量工具的应用，如 APQP、PPAP、FMEA、SPC 和 MSA。\n\n通过 IATF 16949 认证，表明企业具备满足全球汽车主机厂和一级供应商高标准质量要求的能力，是进入汽车行业供应链的重要质量保证。",
      image: "/images/about/certificates/IATF16949.png",
      issueDate: "2022年",
      validUntil: "2025年",
      detailedInfo: {
        fullName: "IATF16949汽车质量管理体系认证",
        scope: "适用于汽车行业的生产和服务",
        certificationBody: "国际汽车工作组（IATF）",
        benefits: [
          "提升汽车零部件质量",
          "降低供应链风险",
          "满足汽车行业客户要求",
          "提高生产效率",
          "增强持续改进能力"
        ],
        requirements: [
          "符合ISO9001基本要求",
          "实施汽车行业特定要求",
          "建立产品安全管理",
          "实施制造过程审核",
          "确保供应商质量管理"
        ]
      }
    },
    {
      id: "ul",
      title: "UL",
      description: "UL 859 是由美国保险商实验室（UL）制定的家用电动个人护理器具安全标准，适用于吹风机、卷发棒等个人护理电器产品。该标准重点关注电气安全、温升控制、机械强度和防火性能。\n\n产品需通过严格的测试，以验证其在正常和异常使用条件下的安全性，包括绝缘、防触电、防过热等方面。\n\nUL 859 认证是产品进入北美市场的重要安全合规标志，可显著提升消费者信任度，并满足零售商和法规机构的要求。",
      image: "/images/about/certificates/UL895.png",
      issueDate: "2016年",
      validUntil: "2027年",
      detailedInfo: {
        fullName: "UL安全认证",
        scope: "适用于家用电动个人美容用品",
        certificationBody: "美国保险商实验室（UL）",
        benefits: [
          "确保产品电气安全",
          "提升消费者信心",
          "满足北美市场准入要求",
          "降低产品责任风险",
          "增强品牌信誉"
        ],
        requirements: [
          "符合UL安全标准",
          "通过产品安全测试",
          "建立质量控制程序",
          "定期接受工厂检查",
          "保持产品一致性"
        ]
      }
    },
    {
      id: "ce",
      title: "CE",
      description: "CE认证是欧盟针对产品安全、健康、环保及消费者保护要求设立的强制性认证标志，表明产品符合欧盟相关指令和协调标准。获得CE认证意味着产品可以合法进入欧洲经济区（EEA）市场，体现企业在产品设计、制造和质量控制方面的合规性与可靠性。CE认证不仅提升产品国际竞争力，也增强客户对产品安全性和品质的信任。",
      image: "/images/about/certificates/CE.png",
      issueDate: "2016年",
      validUntil: "2027年",
      detailedInfo: {
        fullName: "CE欧盟合格认证",
        scope: "适用于进入欧洲经济区的产品",
        certificationBody: "欧盟委员会",
        benefits: [
          "获得欧盟市场准入资格",
          "证明产品符合欧盟法规",
          "提升产品竞争力",
          "增强消费者信任",
          "简化贸易流程"
        ],
        requirements: [
          "符合相关欧盟指令要求",
          "进行合格评定程序",
          "编制技术文档",
          "加贴CE标志",
          "保持产品符合性"
        ]
      }
    },
    // {
    //   id: "highTechEnterprise",
    //   title: "高新技术企业",
    //   description: "高新技术企业证书是国家对企业技术创新能力、研发投入、知识产权及科技成果转化能力的权威认定。获得该资质表明企业在核心技术、产品创新和研发体系方面达到国家高新技术企业标准，具备持续创新和技术领先优势。该认证不仅提升企业品牌价值和行业影响力，也体现其在技术研发和产业升级方面的综合实力。",
    //   image: "/images/about/certificates/高新技术企业证书.png",
    //   issueDate: "2022年",
    //   validUntil: "2025年",
    //   detailedInfo: {
    //     fullName: "高新技术企业证书",
    //     scope: "适用于具备技术创新能力的企业",
    //     certificationBody: "国家科技部、财政部、税务总局",
    //     benefits: [
    //       "享受企业所得税优惠政策",
    //       "提升企业品牌价值和市场影响力",
    //       "增强技术创新和研发能力",
    //       "获得政府资金支持和项目优先权",
    //       "提高企业核心竞争力"
    //     ],
    //     requirements: [
    //       "拥有核心自主知识产权",
    //       "产品或服务属于国家重点支持的高新技术领域",
    //       "研发费用占销售收入比例达标",
    //       "高新技术产品收入占比达标",
    //       "具备完善的研发组织管理体系"
    //     ]
    //   }
    // },
    // {
    //   id: "specializedSME",
    //   title: "深圳市专精特新中小企业",
    //   description: "深圳市专精特新中小企业证书是对企业在专业化、精细化、特色化和创新能力方面的权威认定。获得该资质表明企业在细分领域具备核心技术优势、稳定的产品质量和持续创新能力，具有较强的市场竞争力和成长潜力。该认证体现了企业在技术实力、产品差异化和行业影响力方面的综合优势。",
    //   image: "/images/about/certificates/深圳市专精特新中小企业.png",
    //   issueDate: "2023年",
    //   validUntil: "2026年",
    //   detailedInfo: {
    //     fullName: "深圳市专精特新中小企业证书",
    //     scope: "适用于专注细分市场的创新型中小企业",
    //     certificationBody: "深圳市工业和信息化局",
    //     benefits: [
    //       "获得政府专项资金支持",
    //       "享受融资贷款优惠政策",
    //       "提升企业品牌认可度",
    //       "优先参与政府采购项目",
    //       "增强市场竞争力和行业影响力"
    //     ],
    //     requirements: [
    //       "专注于细分市场领域",
    //       "具备较强的创新能力和研发实力",
    //       "拥有核心技术和自主知识产权",
    //       "产品质量稳定且具有市场竞争力",
    //       "经营管理规范且成长性良好"
    //     ]
    //   }
    // }
  ],
  en: [
    {
      id: "iso9001",
      title: "ISO9001",
      description: "ISO 9001 is the world’s most widely adopted quality management system standard, applicable to organizations of all sizes and industries. It provides a structured framework for consistently meeting customer requirements, enhancing customer satisfaction, and driving continuous improvement.\n\nThe standard is based on key quality management principles, including customer focus, leadership, process approach, risk-based thinking, and continual improvement. ISO 9001 requires organizations to define, monitor, and optimize their core processes, ensuring stable product quality and efficient operations.\n\nCertification to ISO 9001 demonstrates a company’s commitment to quality, operational excellence, and systematic management. It helps reduce errors, improve internal communication, and increase overall efficiency.\n\nFor customers and partners, ISO 9001 certification is a strong indicator of reliability and professionalism, showing that the organization has effective controls in place to deliver consistent, high-quality products and services while continually improving performance.",
      image: "/images/about/certificates/ISO9001_en.png",
      issueDate: "2019",
      validUntil: "2025",
      detailedInfo: {
        fullName: "ISO9001 Quality Management System Certification",
        scope: "Applicable to quality management of all types of organizations",
        certificationBody: "International Organization for Standardization (ISO)",
        benefits: [
          "Improve product and service quality",
          "Enhance customer satisfaction",
          "Increase organizational operational efficiency",
          "Strengthen market competitiveness",
          "Promote continuous improvement culture"
        ],
        requirements: [
          "Establish a comprehensive quality management system",
          "Define quality policy and objectives",
          "Implement process management and monitoring",
          "Conduct regular internal audits",
          "Continuously improve the quality management system"
        ]
      }
    },
    {
      id: "iso14001",
      title: "ISO14001",
      description: "ISO 14001 is an internationally recognized standard for environmental management systems, designed to help organizations manage their environmental responsibilities in a systematic and sustainable way. It focuses on reducing environmental impact, ensuring regulatory compliance, and promoting continuous environmental performance improvement.\n\nThe standard requires organizations to identify environmental aspects and impacts, set measurable environmental objectives, and implement effective controls to minimize pollution, waste, and resource consumption. It also emphasizes legal compliance, emergency preparedness, and ongoing monitoring and evaluation.\n\nISO 14001 certification demonstrates a company’s commitment to environmental protection, sustainability, and responsible business practices. It helps organizations reduce operational risks, improve resource efficiency, and enhance their environmental reputation.\n\nFor customers and stakeholders, ISO 14001 provides confidence that the organization actively manages environmental risks and aligns its operations with global sustainability expectations and environmental regulations.",
      image: "/images/about/certificates/ISO14001_en.png",
      issueDate: "2018",
      validUntil: "2027",
      detailedInfo: {
        fullName: "ISO14001 Environmental Management System Certification",
        scope: "Applicable to environmental management of all types of organizations",
        certificationBody: "International Organization for Standardization (ISO)",
        benefits: [
          "Reduce environmental risks and impacts",
          "Improve environmental performance",
          "Save resources and energy",
          "Enhance corporate social responsibility image",
          "Comply with environmental regulations"
        ],
        requirements: [
          "Identify environmental aspects and impacts",
          "Develop environmental policy and objectives",
          "Implement environmental management programs",
          "Monitor and measure environmental performance",
          "Continuously improve the environmental management system"
        ]
      }
    },
    {
      id: "iso13485",
      title: "ISO13485",
      description: "ISO 13485 is an internationally recognized quality management system standard specifically developed for the medical device industry. It focuses on regulatory compliance, risk management, and consistent product quality throughout the entire product lifecycle, including design, development, production, installation, and servicing.\n\nCertification to ISO 13485 demonstrates an organization’s ability to meet stringent medical device regulatory requirements and to ensure patient safety and product reliability. The standard emphasizes risk-based thinking, traceability, validation of processes, and strict control of documentation and records.\n\nFor customers, ISO 13485 certification provides strong assurance that the manufacturer operates under a robust quality system aligned with global medical regulations such as FDA QSR and EU MDR. It also reflects a commitment to continuous improvement, effective corrective and preventive actions, and compliance with applicable statutory and regulatory requirements.\n\nOverall, ISO 13485 is a key benchmark for companies involved in medical devices, diagnostic equipment, and related components, enabling them to compete in regulated global markets with confidence.",
      image: "/images/about/certificates/ISO13485_en.png",
      issueDate: "2015",
      validUntil: "2027",
      detailedInfo: {
        fullName: "ISO13485 Medical Device Quality Management System Certification",
        scope: "Applicable to design, production and service of medical devices",
        certificationBody: "International Organization for Standardization (ISO)",
        benefits: [
          "Ensure safety and effectiveness of medical devices",
          "Meet regulatory and compliance requirements",
          "Improve product quality and reliability",
          "Enhance customer trust",
          "Facilitate international market access"
        ],
        requirements: [
          "Establish medical device quality management system",
          "Implement risk management",
          "Ensure product design and development meet requirements",
          "Strictly control production processes",
          "Establish product traceability system"
        ]
      }
    },
    {
      id: "iatf16949",
      title: "IATF16949",
      description: "IATF 16949 is a global quality management system standard specifically developed for the automotive industry. It replaced ISO/TS 16949 and is jointly established by the International Automotive Task Force (IATF). The standard focuses on defect prevention, process optimization, and continual improvement across the automotive supply chain.\n\nIATF 16949 emphasizes advanced quality planning, risk management, traceability, product safety, and rigorous process control. It integrates core automotive tools such as APQP, PPAP, FMEA, SPC, and MSA to ensure stable and reliable manufacturing processes.\n\nCertification to IATF 16949 demonstrates an organization’s capability to meet the demanding quality requirements of global automotive OEMs and Tier 1 suppliers. It also reflects strong management commitment, supplier quality control, and continuous improvement culture.\n\nFor customers, IATF 16949 certification is a critical qualification, ensuring consistent quality, reduced risks, and long-term supply chain reliability.",
      image: "/images/about/certificates/IATF16949_en.png",
      issueDate: "2022",
      validUntil: "2025",
      detailedInfo: {
        fullName: "IATF16949 Automotive Quality Management System Certification",
        scope: "Applicable to production and service in the automotive industry",
        certificationBody: "International Automotive Task Force (IATF)",
        benefits: [
          "Improve automotive parts quality",
          "Reduce supply chain risks",
          "Meet automotive industry customer requirements",
          "Increase production efficiency",
          "Enhance continuous improvement capability"
        ],
        requirements: [
          "Comply with ISO9001 basic requirements",
          "Implement automotive industry-specific requirements",
          "Establish product safety management",
          "Implement manufacturing process audits",
          "Ensure supplier quality management"
        ]
      }
    },
    {
      id: "ul",
      title: "UL",
      description: "UL 859 is a safety standard developed by Underwriters Laboratories for household electric personal grooming appliances, such as hair dryers, curling irons, and similar products. The standard focuses on electrical safety, thermal performance, mechanical strength, and fire risk prevention.\n\nCompliance with UL 859 requires products to undergo rigorous testing to evaluate insulation, grounding, temperature rise, abnormal operation, and resistance to electrical and mechanical hazards. The goal is to ensure safe operation under both normal and foreseeable misuse conditions.\n\nUL 859 certification demonstrates that a product meets recognized safety requirements for the North American market. It enhances consumer trust and helps manufacturers comply with retailer and regulatory safety expectations.\n\nFor brands and manufacturers, UL 859 certification reduces market entry risks, supports regulatory compliance, and confirms a strong commitment to product safety, quality, and end-user protection.",
      image: "/images/about/certificates/UL895.png",
      issueDate: "2016",
      validUntil: "2027",
      detailedInfo: {
        fullName: "UL Safety Certification",
        scope: "Applicable to home electric personal grooming appliances",
        certificationBody: "Underwriters Laboratories (UL)",
        benefits: [
          "Ensure product electrical safety",
          "Increase consumer confidence",
          "Meet North American market access requirements",
          "Reduce product liability risks",
          "Enhance brand reputation"
        ],
        requirements: [
          "Comply with UL safety standards",
          "Pass product safety testing",
          "Establish quality control procedures",
          "Accept regular factory inspections",
          "Maintain product consistency"
        ]
      }
    },
    {
      id: "ce",
      title: "CE",
      description: "CE certification is a mandatory conformity mark for products entering the European Economic Area (EEA), demonstrating compliance with EU requirements on safety, health, environmental protection, and consumer rights. Obtaining CE certification indicates that a product meets relevant EU directives and harmonized standards. It reflects the company's strong capabilities in product design, manufacturing, and quality control, enhancing market access, international competitiveness, and customer confidence.",
      image: "/images/about/certificates/CE.png",
      issueDate: "2016",
      validUntil: "2027",
      detailedInfo: {
        fullName: "CE European Conformity Certification",
        scope: "Applicable to products entering the European Economic Area",
        certificationBody: "European Commission",
        benefits: [
          "Gain access to the EU market",
          "Prove product compliance with EU regulations",
          "Enhance product competitiveness",
          "Increase consumer trust",
          "Simplify trade processes"
        ],
        requirements: [
          "Comply with relevant EU directive requirements",
          "Conduct conformity assessment procedures",
          "Prepare technical documentation",
          "Affix CE marking",
          "Maintain product conformity"
        ]
      }
    },
    // {
    //   id: "highTechEnterprise",
    //   title: "High-Tech Enterprise Certificate",
    //   description: "The High-Tech Enterprise Certificate is an official recognition of a company's technological innovation capabilities, R&D investment, intellectual property, and commercialization of scientific achievements. This qualification indicates that the company meets national standards for high-tech enterprises, demonstrating strong core technologies, innovation capacity, and sustainable development potential. It enhances corporate brand value, industry influence, and competitiveness in technology-driven markets.",
    //   image: "/images/about/certificates/高新技术企业证书.png",
    //   issueDate: "2022",
    //   validUntil: "2025",
    //   detailedInfo: {
    //     fullName: "High-Tech Enterprise Certificate",
    //     scope: "Applicable to enterprises with technological innovation capabilities",
    //     certificationBody: "Ministry of Science and Technology, Ministry of Finance, State Taxation Administration",
    //     benefits: [
    //       "Enjoy corporate income tax incentives",
    //       "Enhance corporate brand value and market influence",
    //       "Strengthen technological innovation and R&D capabilities",
    //       "Obtain government funding support and project priority",
    //       "Improve core competitiveness"
    //     ],
    //     requirements: [
    //       "Possess core independent intellectual property rights",
    //       "Products or services belong to national key high-tech fields",
    //       "R&D expenses meet required percentage of sales revenue",
    //       "High-tech product revenue meets required proportion",
    //       "Establish comprehensive R&D organization and management system"
    //     ]
    //   }
    // },
    // {
    //   id: "specializedSME",
    //   title: "Shenzhen Specialized, Sophisticated, Distinctive and Innovative SME Certificate",
    //   description: "The Shenzhen \"Specialized, Sophisticated, Distinctive and Innovative\" SME Certificate recognizes enterprises with strong specialization, refined management, distinctive products, and innovation capabilities. This qualification demonstrates the company's core technological strengths, stable product quality, and continuous innovation in niche markets. It highlights the enterprise's competitiveness, growth potential, and comprehensive advantages in technology, product differentiation, and industry positioning.",
    //   image: "/images/about/certificates/深圳市专精特新中小企业.png",
    //   issueDate: "2023",
    //   validUntil: "2026",
    //   detailedInfo: {
    //     fullName: "Shenzhen Specialized, Sophisticated, Distinctive and Innovative SME Certificate",
    //     scope: "Applicable to innovative SMEs focused on niche markets",
    //     certificationBody: "Shenzhen Municipal Bureau of Industry and Information Technology",
    //     benefits: [
    //       "Receive government special funding support",
    //       "Enjoy preferential financing and loan policies",
    //       "Enhance corporate brand recognition",
    //       "Priority participation in government procurement projects",
    //       "Strengthen market competitiveness and industry influence"
    //     ],
    //     requirements: [
    //       "Focus on niche market segments",
    //       "Possess strong innovation capabilities and R&D strength",
    //       "Own core technologies and independent intellectual property",
    //       "Maintain stable product quality and market competitiveness",
    //       "Demonstrate standardized management and strong growth potential"
    //     ]
    //   }
    // }
  ]
}

// 荣誉数据
export const honorsData = {
  zh: [
    {
      id: "highTechEnterprise",
      title: "高新技术企业",
      description: "高新技术企业证书是国家对企业技术创新能力、研发投入、知识产权及科技成果转化能力的权威认定。获得该资质表明企业在核心技术、产品创新和研发体系方面达到国家高新技术企业标准，具备持续创新和技术领先优势。该认证不仅提升企业品牌价值和行业影响力，也体现其在技术研发和产业升级方面的综合实力。",
      image: "/images/about/certificates/高新技术企业证书.png",
      issueDate: "2022年",
      validUntil: "2025年",
      detailedInfo: {
        fullName: "高新技术企业证书",
        scope: "适用于具备技术创新能力的企业",
        certificationBody: "国家科技部、财政部、税务总局",
        benefits: [
          "享受企业所得税优惠政策",
          "提升企业品牌价值和市场影响力",
          "增强技术创新和研发能力",
          "获得政府资金支持和项目优先权",
          "提高企业核心竞争力"
        ],
        requirements: [
          "拥有核心自主知识产权",
          "产品或服务属于国家重点支持的高新技术领域",
          "研发费用占销售收入比例达标",
          "高新技术产品收入占比达标",
          "具备完善的研发组织管理体系"
        ]
      }
    },
    {
      id: "specializedSME",
      title: "深圳市专精特新中小企业",
      description: "深圳市专精特新中小企业证书是对企业在专业化、精细化、特色化和创新能力方面的权威认定。获得该资质表明企业在细分领域具备核心技术优势、稳定的产品质量和持续创新能力，具有较强的市场竞争力和成长潜力。该认证体现了企业在技术实力、产品差异化和行业影响力方面的综合优势。",
      image: "/images/about/certificates/深圳市专精特新中小企业.png",
      issueDate: "2022年",
      validUntil: "2025年",
      detailedInfo: {
        fullName: "深圳市专精特新中小企业证书",
        scope: "适用于专注细分市场的创新型中小企业",
        certificationBody: "深圳市工业和信息化局",
        benefits: [
          "获得政府专项资金支持",
          "享受融资贷款优惠政策",
          "提升企业品牌认可度",
          "优先参与政府采购项目",
          "增强市场竞争力和行业影响力"
        ],
        requirements: [
          "专注于细分市场领域",
          "具备较强的创新能力和研发实力",
          "拥有核心技术和自主知识产权",
          "产品质量稳定且具有市场竞争力",
          "经营管理规范且成长性良好"
        ]
      }
    }
  ],
  en: [
    {
      id: "highTechEnterprise",
      title: "High-Tech Enterprise Certificate",
      description: "The High-Tech Enterprise Certificate is an official recognition of a company's technological innovation capabilities, R&D investment, intellectual property, and commercialization of scientific achievements. This qualification indicates that the company meets national standards for high-tech enterprises, demonstrating strong core technologies, innovation capacity, and sustainable development potential. It enhances corporate brand value, industry influence, and competitiveness in technology-driven markets.",
      image: "/images/about/certificates/高新技术企业证书.png",
      issueDate: "2022",
      validUntil: "2025",
      detailedInfo: {
        fullName: "High-Tech Enterprise Certificate",
        scope: "Applicable to enterprises with technological innovation capabilities",
        certificationBody: "Ministry of Science and Technology, Ministry of Finance, State Taxation Administration",
        benefits: [
          "Enjoy corporate income tax incentives",
          "Enhance corporate brand value and market influence",
          "Strengthen technological innovation and R&D capabilities",
          "Obtain government funding support and project priority",
          "Improve core competitiveness"
        ],
        requirements: [
          "Possess core independent intellectual property rights",
          "Products or services belong to national key high-tech fields",
          "R&D expenses meet required percentage of sales revenue",
          "High-tech product revenue meets required proportion",
          "Establish comprehensive R&D organization and management system"
        ]
      }
    },
    {
      id: "specializedSME",
      title: "Shenzhen Specialized, Sophisticated, Distinctive and Innovative SME Certificate",
      description: "The Shenzhen \"Specialized, Sophisticated, Distinctive and Innovative\" SME Certificate recognizes enterprises with strong specialization, refined management, distinctive products, and innovation capabilities. This qualification demonstrates the company's core technological strengths, stable product quality, and continuous innovation in niche markets. It highlights the enterprise's competitiveness, growth potential, and comprehensive advantages in technology, product differentiation, and industry positioning.",
      image: "/images/about/certificates/深圳市专精特新中小企业.png",
      issueDate: "2022",
      validUntil: "2025",
      detailedInfo: {
        fullName: "Shenzhen Specialized, Sophisticated, Distinctive and Innovative SME Certificate",
        scope: "Applicable to innovative SMEs focused on niche markets",
        certificationBody: "Shenzhen Municipal Bureau of Industry and Information Technology",
        benefits: [
          "Receive government special funding support",
          "Enjoy preferential financing and loan policies",
          "Enhance corporate brand recognition",
          "Priority participation in government procurement projects",
          "Strengthen market competitiveness and industry influence"
        ],
        requirements: [
          "Focus on niche market segments",
          "Possess strong innovation capabilities and R&D strength",
          "Own core technologies and independent intellectual property",
          "Maintain stable product quality and market competitiveness",
          "Demonstrate standardized management and strong growth potential"
        ]
      }
    }
  ]
}
