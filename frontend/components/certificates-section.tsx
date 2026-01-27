import { useLanguage } from "@/components/language-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CertificatesSection() {
  const { t, language } = useLanguage();
  const certificates = [
    {
      id: "iatf16949",
      image: "/images/about/certificates/IATF16949.png",
      title: language === "en" ? "IATF16949" : "IATF16949",
    },
    {
      id: "iso9001",
      image: "/images/about/certificates/ISO9001.png",
      title: language === "en" ? "ISO9001" : "ISO9001",
    },
    {
      id: "iso13485",
      image: "/images/about/certificates/ISO13485.png",
      title: language === "en" ? "ISO13485" : "ISO13485",
    },
    {
      id: "iso14001",
      image: "/images/about/certificates/ISO14001.png",
      title: language === "en" ? "ISO14001" : "ISO14001",
    },
  ];
  const locale = language === "en" ? "en" : "zh-Hans";
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t("about.certificates.title")}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">{t("about.certificates.desc")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, idx) => (
            <Link
              key={cert.id}
              href={`/${locale}/about/certificates/${cert.id}.html`}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="h-48 w-full flex items-center justify-center bg-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-contain h-full p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{cert.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8">
            <Link href={`/${locale}/about/certificates.html`} rel="nofollow">
              {t("about.certificates.more") || (language === "en" ? "Learn More" : "了解更多")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 