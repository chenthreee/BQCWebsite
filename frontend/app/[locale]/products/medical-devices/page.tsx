"use client"

import PageLayout from "@/components/page-layout"
import { ProductListing } from "@/components/product-listing"

const translations: Record<string, Record<string, string>> = {
  title: { zh: "医疗板块", en: "Medical Devices" },
  subtitle: { zh: "专业可靠的医疗设备控制解决方案", en: "Professional and Reliable Medical Device Control Solutions" },
  breadcrumb_products: { zh: "产品中心", en: "Products Center" },
  breadcrumb_medical: { zh: "医疗板块", en: "Medical Devices" },
  section_title: { zh: "医疗设备控制系统", en: "Medical Device Control Systems" },
  section_desc: { zh: "百千成电子专注于医疗设备控制系统的研发与制造，为医疗行业提供安全可靠、符合医疗标准的控制解决方案。我们的产品广泛应用于监护设备、影像设备、治疗设备等各类医疗器械中。", en: "BAIQIANCHENG focuses on R&D and manufacturing of medical device control systems, providing safe, reliable, and standard-compliant solutions for the medical industry. Our products are widely used in monitoring, imaging, and treatment devices." },
  feature_cert: { zh: "医疗级认证", en: "Medical Certification" },
  feature_cert_desc: { zh: "符合CE、FDA、ISO 13485等医疗认证标准", en: "Compliant with CE, FDA, ISO 13485, and other certifications" },
  feature_safe: { zh: "安全可靠", en: "Safe & Reliable" },
  feature_safe_desc: { zh: "多重安全保护机制，确保患者和设备安全", en: "Multiple safety mechanisms to ensure patient and device safety" },
  feature_monitor: { zh: "智能监控", en: "Smart Monitoring" },
  feature_monitor_desc: { zh: "实时数据监测与智能分析功能", en: "Real-time data monitoring and intelligent analysis" },
}

const products = [
  {
    id: "medical-monitor-bms",
    name: { zh: "医疗监护设备BMS", en: "Medical Monitor Device BMS" },
    model: "BQC-MED-M100",
    image: "/placeholder.svg?height=300&width=400",
    specs: [
      { zh: "电压范围: 12V-48V", en: "Voltage Range: 12V-48V" },
      { zh: "监护通道: 8-16路", en: "Monitoring Channels: 8-16" },
      { zh: "精度: ±0.1%", en: "Accuracy: ±0.1%" },
      { zh: "医疗级认证: CE/FDA", en: "Medical Certification: CE/FDA" },
      { zh: "工作温度: 0°C~50°C", en: "Operating Temp: 0°C~50°C" },
      { zh: "防护等级: IP54", en: "Protection Level: IP54" },
    ],
    applications: [
      { zh: "ICU监护设备", en: "ICU Monitoring" },
      { zh: "手术室设备", en: "Operating Room Devices" },
      { zh: "急救设备", en: "Emergency Devices" },
    ],
    features: [
      { zh: "医疗级安全标准", en: "Medical Safety Standards" },
      { zh: "高精度监测", en: "High-precision Monitoring" },
      { zh: "实时数据传输", en: "Real-time Data Transmission" },
      { zh: "故障自诊断", en: "Self-diagnosis" },
      { zh: "低功耗设计", en: "Low Power Design" },
    ],
  },
  {
    id: "medical-imaging-control",
    name: { zh: "医疗影像设备控制板", en: "Medical Imaging Device Control Board" },
    model: "BQC-MED-I200",
    image: "/placeholder.svg?height=300&width=400",
    specs: [
      { zh: "处理器: ARM Cortex-A9", en: "Processor: ARM Cortex-A9" },
      { zh: "内存: 2GB DDR3", en: "Memory: 2GB DDR3" },
      { zh: "存储: 32GB eMMC", en: "Storage: 32GB eMMC" },
      { zh: "接口: USB3.0/HDMI/Ethernet", en: "Interfaces: USB3.0/HDMI/Ethernet" },
      { zh: "工作温度: -10°C~60°C", en: "Operating Temp: -10°C~60°C" },
      { zh: "认证: CE/FCC/医疗级", en: "Certification: CE/FCC/Medical" },
    ],
    applications: [
      { zh: "CT设备", en: "CT Devices" },
      { zh: "MRI设备", en: "MRI Devices" },
      { zh: "X光机", en: "X-ray Machines" },
      { zh: "超声设备", en: "Ultrasound Devices" },
    ],
    features: [
      { zh: "高速图像处理", en: "High-speed Image Processing" },
      { zh: "多接口支持", en: "Multi-interface Support" },
      { zh: "EMC电磁兼容", en: "EMC Compatibility" },
      { zh: "医疗级可靠性", en: "Medical-grade Reliability" },
      { zh: "远程诊断支持", en: "Remote Diagnosis Support" },
    ],
  },
  // ... 其余产品同理 ...
]

export default function MedicalDevicesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh"
  const t = (key: string) => translations[key]?.[locale] || key
  // 产品多语言处理
  const localizedProducts = products.map((p) => ({
    ...p,
    name: p.name[locale],
    specs: p.specs.map((s) => s[locale]),
    applications: p.applications.map((a) => a[locale]),
    features: p.features.map((f) => f[locale]),
  }))
  return (
    <PageLayout
      title={t("title")}
      subtitle={t("subtitle")}
      breadcrumbs={[
        { label: t("breadcrumb_products"), href: `/${locale}/products.html` },
        { label: t("breadcrumb_medical"), href: `/${locale}/products/medical-devices.html` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{t("section_title")}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{t("section_desc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold mb-2">{t("feature_cert")}</h3>
              <p className="text-sm text-gray-600">{t("feature_cert_desc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">{t("feature_safe")}</h3>
              <p className="text-sm text-gray-600">{t("feature_safe_desc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">{t("feature_monitor")}</h3>
              <p className="text-sm text-gray-600">{t("feature_monitor_desc")}</p>
            </div>
          </div>
        </div>
      </div>
      {<ProductListing products={localizedProducts} />}
    </PageLayout>
  )
} 