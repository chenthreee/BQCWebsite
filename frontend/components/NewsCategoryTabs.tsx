"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "全部新闻", href: "/news" },
  { label: "国内新闻", href: "/news/domestic" },
  { label: "海外新闻", href: "/news/overseas" },
];

export default function NewsCategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
      {tabs.map(tab => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={
              isActive
                ? "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                : "px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            }
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}