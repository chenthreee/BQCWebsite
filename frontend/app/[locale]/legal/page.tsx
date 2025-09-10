"use client"

import Link from "next/link"

export default function LegalPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const t = (zh: string, en: string) => (locale === "en" ? en : zh)

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">{t("法律声明", "Legal Notice")}</h1>
      <div className="prose prose-lg mb-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">{t("版权声明", "Copyright Notice")}</h2>
          <p>{t(
            "本网站所有内容（包括但不限于文字、图片、音频、视频、界面设计、代码等）均为深圳市百千成电子有限公司所有，受中华人民共和国著作权法及其他相关法律法规保护。未经书面授权，任何单位和个人不得以任何形式复制、传播、展示、镜像、上载、下载使用本网站的信息内容。",
            "All content on this website (including but not limited to text, images, audio, video, interface design, code, etc.) belongs to Shenzhen BQC Electronics Co., Ltd. and is protected by the Copyright Law of the People's Republic of China and other relevant laws and regulations. Without written authorization, no organization or individual may copy, distribute, display, mirror, upload, or download the information content of this website in any form."
          )}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t("免责声明", "Disclaimer")}</h2>
          <p>{t(
            "本网站所载信息仅供参考，我们力求信息的准确性，但不对信息的完整性、准确性、及时性作任何保证。因使用本网站信息而造成的任何损失，本公司概不负责。网站链接的第三方网站内容与本公司无关，我们对其内容不承担任何责任。",
            "The information contained on this website is for reference only. We strive for accuracy of information but make no guarantee as to its completeness, accuracy, or timeliness. Our company shall not be responsible for any losses caused by the use of information on this website. The content of third-party websites linked to this site is not related to our company, and we assume no responsibility for their content."
          )}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t("隐私保护", "Privacy Protection")}</h2>
          <p>{t(
            "我们承诺保护用户隐私，不会将用户个人信息泄露给第三方，除非获得用户明确同意或法律法规要求。我们采用安全的技术措施保护用户信息安全。",
            "We are committed to protecting user privacy and will not disclose user personal information to third parties unless explicitly authorized by users or required by laws and regulations. We adopt secure technical measures to protect user information security."
          )}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t("使用条款", "Terms of Use")}</h2>
          <p>{t(
            "访问和使用本网站即表示您同意遵守本法律声明的所有条款。我们保留随时修改本声明的权利，修改后的声明将在网站上公布。如有违反本声明的行为，我们保留追究法律责任的权利。",
            "By accessing and using this website, you agree to comply with all terms of this legal notice. We reserve the right to modify this notice at any time, and the modified notice will be published on the website. We reserve the right to pursue legal liability for any violation of this notice."
          )}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{t("联系我们", "Contact Us")}</h2>
          <p>{t(
            "如对本法律声明有任何疑问，或需要获得内容使用授权，请通过以下方式联系我们：",
            "If you have any questions about this legal notice or need authorization to use content, please contact us through the following:"
          )}</p>
          <div className="mt-2 text-sm">
            <p>{t("公司名称：深圳市百千成电子有限公司", "Company: Shenzhen BQC Electronics Co., Ltd.")}</p>
            <p>{t("地址：深圳市南山区南山睿园17栋5楼整层", "Address: 17th Floor, Building 17, Nanshan Ruiyuan, Nanshan District, Shenzhen, China")}</p>
            <p>{t("邮箱：pcba@bqcdz.com", "Email: pcba@bqcdz.com")}</p>
          </div>
        </section>
      </div>
      <Link href={`/${locale}`} className="text-blue-600 hover:underline">{t("返回首页", "Back to Home")}</Link>
    </div>
  )
} 