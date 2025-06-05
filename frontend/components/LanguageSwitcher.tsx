"use client";
console.log("LanguageSwitcher 渲染");
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const locale = pathname.split("/")[1];
  const restPath = pathname.split("/").slice(2).join("/");

  const isEnglish = locale === "en";
  const handleSwitch = () => {
    let newLocale = isEnglish ? "zh-Hans" : "en";
    let newPath = `/${newLocale}${restPath ? "/" + restPath : ""}`;
    if (newPath !== pathname) {
      router.push(newPath);
    }
  };

  return (
    <button
      onClick={handleSwitch}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800/70 flex items-center text-white"
      aria-label="切换语言"
    >
      <Globe className="mr-1 h-4 w-4" />
      {isEnglish ? "中文" : "EN"}
    </button>
  );
} 