import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { STRAPI_URL, GRAPHQL_URL } from "@/lib/config"

async function fetchSmallShipData(locale: string) {
  const productsQuery = `
    query GetSmallShipProducts($locale: I18NLocaleCode) {
      products(
        locale: $locale,
        filters: { 
          category: { name: { eq: "energy-storage-bms" } },
          sub_category: { name: { eq: "small-ship" } }
        },
        sort: "order:asc"
      ) {
        documentId
        title
        slug
        shortDescription
        cover { url }
        modelNumber
        features
        isFeatured
      }
    }
  `

  const categoryQuery = `
    query GetSmallShipCategory($locale: I18NLocaleCode) {
      productSubCategories(
        locale: $locale,
        filters: { name: { eq: "small-ship" } }
      ) {
        title
        description
      }
    }
  `

  try {
    const [productsRes, categoryRes] = await Promise.all([
      fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: productsQuery, variables: { locale } }),
        cache: "no-store",
      }),
      fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: categoryQuery, variables: { locale } }),
        cache: "no-store",
      }),
    ])

    const productsJson = await productsRes.json()
    const categoryJson = await categoryRes.json()

    return {
      products: productsJson?.data?.products || [],
      categoryInfo: categoryJson?.data?.productSubCategories?.[0] || null,
    }
  } catch (err) {
    console.error("Fetch error:", err)
    return { products: [], categoryInfo: null }
  }
}

export default async function SmallShipBmsPage({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"

  const { products, categoryInfo } = await fetchSmallShipData(locale)

  return (
    <PageLayout
      title={categoryInfo?.title || (locale === "en" ? "Small Ship BMS" : "小型船舶BMS")}
      subtitle={
        categoryInfo?.description ||
        (locale === "en"
          ? "Efficient and Reliable BMS for Small Ships"
          : "为小型船舶提供高效可靠的电池管理系统")
      }
      breadcrumbs={[
        { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products` },
        { label: locale === "en" ? "Energy Storage BMS" : "储能BMS", href: `/${locale}/products/energy-storage-bms.html` },
        { label: categoryInfo?.title || (locale === "en" ? "Small Ship BMS" : "小型船舶BMS"), href: `/${locale}/products/energy-storage-bms/small-ship.html` },
      ]}
      backgroundImage="/images/products/smallShipBreadcrumb.png"
    >
      {/* 产品列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map((product: any) => (
          <Link
            key={product.documentId}
            href={`/${locale}/products/energy-storage-bms/small-ship/${product.slug}.html`}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                {product.cover?.url ? (
                  <Image
                    src={STRAPI_URL + product.cover.url}
                    alt={product.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">
                      {locale === "en" ? "No Image" : "暂无图片"}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {product.modelNumber || ""}
                  </span>
                  {product.isFeatured && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      {locale === "en" ? "Featured" : "推荐"}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {product.shortDescription}
                </p>

                {product.features && Array.isArray(product.features) && (
                  <ul className="mb-4 space-y-1">
                    {product.features.slice(0, 3).map((feature: string, i: number) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                  {locale === "en" ? "View Details" : "查看详情"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {locale === "en" ? "No Products Available" : "暂无产品"}
          </h3>
          <p className="text-gray-500">
            {locale === "en"
              ? "Products in this category will be available soon."
              : "该分类下的产品即将上线。"}
          </p>
        </div>
      )}
    </PageLayout>
  )
}
