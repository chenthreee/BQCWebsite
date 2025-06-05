"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "全部新闻", subpath: "" },
  { label: "国内新闻", subpath: "/domestic" },
  { label: "海外新闻", subpath: "/overseas" },
];

export default function NewsCategoryTabs() {
  const pathname = usePathname();
  // 获取当前 locale，默认 zh-Hans
  const locale = pathname.split("/")[1] || "zh-Hans";

  return (
    <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
      {tabs.map(tab => {
        const href = `/${locale}/news${tab.subpath}`;
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
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