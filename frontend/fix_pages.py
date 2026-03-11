#!/usr/bin/env python3
import os
import re

# 需要修复的文件列表
page_files = [
    "app/[locale]/products/energy-storage-bms/communication-base/page.tsx",
    "app/[locale]/products/energy-storage-bms/large-ship/page.tsx",
    "app/[locale]/products/energy-storage-bms/small-ship/page.tsx",
]

for file_path in page_files:
    if not os.path.exists(file_path):
        print(f"Skipping {file_path} - file not found")
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 替换 page 组件的 params 类型和使用方式
    old_pattern = r'(export default async function \w+\(\{\s*params,\s*\}: \{\s*)params: \{ locale: string \}(\s*\}\) \{\s*)const locale = params\.locale'
    new_pattern = r'\1params: Promise<{ locale: string }>\2const { locale: localeParam } = await params\n  const locale = localeParam'

    content = re.sub(old_pattern, new_pattern, content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed {file_path}")

print("Done!")
