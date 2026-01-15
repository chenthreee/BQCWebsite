"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-context"

export default function NewsCategoryTabs() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const locale = pathname.split("/")[1] || "zh-Hans";

  const tabs = [
    { label: t("news.all"), subpath: "" },
    { label: t("news.company"), subpath: "/company.html" },
    { label: t("news.industry"), subpath: "/industry.html" },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
      {tabs.map(tab => (
        <Link
          key={tab.subpath}
          href={`/${locale}/news${tab.subpath}`}
          className={
            pathname === `/${locale}/news${tab.subpath}`
              ? "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              : "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          }
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}