import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { STRAPI_URL, GRAPHQL_URL } from "@/lib/config"

async function fetchCategoryData(locale: string) {
  const categoryQuery = `
    query GetEnergyStorageBmsCategory($locale: I18NLocaleCode) {
      productCategories(
        locale: $locale,
        filters: { name: { eq: "energy-storage-bms" } }
      ) {
        title
        description
      }
    }
  `

  const subCategoryQuery = `
    query GetAllSubCategories($locale: I18NLocaleCode) {
      productSubCategories(
        locale: $locale,
        sort: "order:asc"
      ) {
        name
        title
        description
        cover { url }
        parent_category {
          name
          title
        }
      }
    }
  `

  const pcsQuery = `
    query GetPcsCategory($locale: I18NLocaleCode) {
      productCategories(
        locale: $locale,
        filters: { name: { eq: "energy-storage-pcs" } }
      ) {
        name
        title
        description
        cover { url }
      }
    }
  `

  try {
    const [categoryRes, subCategoryRes, pcsRes] = await Promise.all([
      fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: categoryQuery, variables: { locale } }),
        cache: 'no-store'
      }),
      fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: subCategoryQuery, variables: { locale } }),
        cache: 'no-store'
      }),
      fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: pcsQuery, variables: { locale } }),
        cache: 'no-store'
      })
    ])

    const [categoryData, subCategoryData, pcsData] = await Promise.all([
      categoryRes.json(),
      subCategoryRes.json(),
      pcsRes.json()
    ])

    const categoryInfo = categoryData.data?.productCategories?.[0] || null
    const allSubCategories = subCategoryData.data?.productSubCategories || []
    const bmsSubCategories = allSubCategories.filter((item: any) =>
      item.parent_category?.name === 'energy-storage-bms'
    )
    const pcsCategory = pcsData.data?.productCategories?.[0]

    const allCategories = [...bmsSubCategories]
    if (pcsCategory) {
      allCategories.push({ ...pcsCategory, isMainCategory: true })
    }

    return { categoryInfo, subCategories: allCategories }
  } catch (err) {
    console.error('Fetch error:', err)
    return { categoryInfo: null, subCategories: [] }
  }
}

export default async function EnergyStorageBmsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const { categoryInfo, subCategories } = await fetchCategoryData(locale)

  const getCategoryLink = (item: any) => {
    if (item.name === 'energy-storage-pcs' || item.isMainCategory) {
      return `/${locale}/products/energy-storage-pcs.html`
    }
    return `/${locale}/products/energy-storage-bms/${item.name}.html`
  }

  return (
    <PageLayout
      title={categoryInfo?.title || (locale === "en" ? "Energy Storage BMS" : "储能BMS")}
      subtitle={categoryInfo?.description || (locale === "en" ? "Safe and Reliable Battery Management System Solutions" : "安全可靠的电池管理系统解决方案")}
      breadcrumbs={[
        { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products` },
        { label: categoryInfo?.title || (locale === "en" ? "Energy Storage BMS" : "储能BMS"), href: `/${locale}/products/energy-storage-bms.html` },
      ]}
      backgroundImage="/images/products/powerStorageBreadcrumb.png"
    >
      {/* BMS子分类和PCS分类列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {subCategories.map((category: any) => (
          <Link key={category.name} href={getCategoryLink(category)}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                {category.cover?.url ? (
                  <Image
                    src={STRAPI_URL + category.cover.url}
                    alt={category.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">{locale === "en" ? "No Image" : "暂无图片"}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{category.description}</p>

                <div className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                  {locale === "en" ? "View Details" : "查看详情"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 如果没有分类，显示提示信息 */}
      {subCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-4m-4 0H9m-4 0h4m4 0h3" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {locale === "en" ? "No Categories Available" : "暂无分类"}
          </h3>
          <p className="text-gray-500">
            {locale === "en" ? "Categories will be available soon." : "分类即将上线。"}
          </p>
        </div>
      )}
    </PageLayout>
  )
}
