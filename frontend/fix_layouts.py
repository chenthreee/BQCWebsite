#!/usr/bin/env python3
import os
import re

# 需要修复的文件列表 可以运行这个fix文件和后一键修复
layout_files = [
    "app/[locale]/about/certificates/layout.tsx",
    "app/[locale]/about/core-values/layout.tsx",
    "app/[locale]/about/development-history/layout.tsx",
    "app/[locale]/about/introduction/layout.tsx",
    "app/[locale]/about/layout.tsx",
    "app/[locale]/about/management-system/layout.tsx",
    "app/[locale]/about/manufacturing-capabilities/layout.tsx",
    "app/[locale]/contact/layout.tsx",
    "app/[locale]/news/company/layout.tsx",
    "app/[locale]/news/industry/layout.tsx",
    "app/[locale]/news/layout.tsx",
    "app/[locale]/products/energy-storage-bms/communication-base/layout.tsx",
    "app/[locale]/products/energy-storage-bms/large-ship/layout.tsx",
    "app/[locale]/products/energy-storage-bms/layout.tsx",
    "app/[locale]/products/energy-storage-bms/power-storage/layout.tsx",
    "app/[locale]/products/energy-storage-bms/small-ship/layout.tsx",
    "app/[locale]/products/energy-storage-pcs/layout.tsx",
    "app/[locale]/products/industrial-control-boards/layout.tsx",
    "app/[locale]/products/intelligent-robot-systems/layout.tsx",
]

for file_path in layout_files:
    if not os.path.exists(file_path):
        print(f"Skipping {file_path} - file not found")
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 替换 generateMetadata 的 params 类型
    old_pattern1 = r'export async function generateMetadata\(\{ params \}: \{ params: \{ locale: string \} \}\): Promise<Metadata> \{\s*const locale = params\.locale'
    new_pattern1 = 'export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {\n  const { locale } = await params'

    content = re.sub(old_pattern1, new_pattern1, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed {file_path}")

print("Done!")
