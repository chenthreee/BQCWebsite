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
      description: "CE认证是欧盟对产品安全、健康、环保及消费者保护的强制性认证标志，是产品进入欧洲经济区市场的法定通行证",
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
    }
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
      description: "CE is a mandatory certification mark for products in the European Economic Area, ensuring safety, health, environmental protection, and consumer protection.",
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
    }
  ]
}

// 荣誉数据
export const honorsData = {
  zh: [
    {
      id: "high-tech",
      title: "高新技术企业",
      description: "国高证书即高新技术企业认定证书，证明企业符合国家高新技术领域要求，含金量高，可享多项政策优惠.",
      image: "/images/about/certificates/高新技术企业证书.png"
    },
    {
      id: "specialized",
      title: "深圳市专精特新中小企业",
      description: "专精特新中小企业是专注于细分市场、创新能力强、市场占有率高、掌握关键核心技术、质量效益优的排头兵企业。",
      image: "/images/about/certificates/深圳市专精特新中小企业.png"
    }
  ],
  en: [
    {
      id: "high-tech",
      title: "High-Tech Enterprise",
      description: "The High-Tech Enterprise certificate is a certificate that proves that the enterprise meets the requirements of the national high-tech enterprise field, with high content and can enjoy multiple policy preferential.",
      image: "/images/about/certificates/高新技术企业证书.png"
    },
    {
      id: "specialized",
      title: "Shenzhen Special New and Small Enterprises",
      description: "Specialized, refined, distinctive and innovative small and medium-sized enterprises are leading enterprises that focus on niche markets, have strong innovation capabilities, high market share, master key core technologies, and have excellent quality and efficiency",
      image: "/images/about/certificates/深圳市专精特新中小企业.png"
    }
  ]
}
