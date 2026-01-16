import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { STRAPI_URL, GRAPHQL_URL } from "@/lib/config"

async function fetchEnergyStoragePcsData(locale: string) {
  const categoryQuery = `
    query GetEnergyStoragePcsCategory($locale: I18NLocaleCode) {
      productCategories(
        locale: $locale,
        filters: { name: { eq: "energy-storage-pcs" } }
      ) {
        title
        description
      }
    }
  `

  const productsQuery = `
    query GetPcsProducts($locale: I18NLocaleCode) {
      products(
        locale: $locale,
        filters: {
          category: { name: { eq: "energy-storage-pcs" } }
        },
        sort: "order:asc"
      ) {
        documentId
        title
        slug
        shortDescription
        cover { url }
        modelNumber
        isFeatured
      }
    }
  `

  try {
    const [categoryRes, productsRes] = await Promise.all([
      fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: categoryQuery, variables: { locale } }),
        cache: "no-store",
      }),
      fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: productsQuery, variables: { locale } }),
        cache: "no-store",
      }),
    ])

    const categoryJson = await categoryRes.json()
    const productsJson = await productsRes.json()

    return {
      categoryInfo: categoryJson?.data?.productCategories?.[0] || null,
      products: productsJson?.data?.products || [],
    }
  } catch (err) {
    console.error("Fetch error:", err)
    return { categoryInfo: null, products: [] }
  }
}

export default async function EnergyStoragePcsPage({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"

  const { categoryInfo, products } = await fetchEnergyStoragePcsData(locale)

  return (
    <PageLayout
      title={categoryInfo?.title || (locale === "en" ? "Energy Storage PCS" : "储能PCS")}
      subtitle={
        categoryInfo?.description ||
        (locale === "en" ? "High-performance Energy Storage Converter System" : "高性能的储能变流器系统")
      }
      breadcrumbs={[
        { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products` },
        {
          label: categoryInfo?.title || (locale === "en" ? "Energy Storage PCS" : "储能PCS"),
          href: `/${locale}/products/energy-storage-pcs.html`,
        },
      ]}
      backgroundImage="/images/products/PCSBreadcrumb.png"
    >
      {/* 产品列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map((product: any) => (
          <Link
            key={product.documentId}
            href={`/${locale}/products/energy-storage-pcs/${product.slug}.html`}
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
                <div className="flex items-center justify-between mb-3">
                  {product.modelNumber && (
                    <span className="text-sm text-blue-600 font-medium">
                      {product.modelNumber}
                    </span>
                  )}
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

                <div className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                  {locale === "en" ? "View Details" : "查看详情"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 无产品提示 */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {locale === "en" ? "No Products Available" : "暂无产品"}
          </h3>
          <p className="text-gray-500">
            {locale === "en" ? "Products will be available soon." : "产品即将上线。"}
          </p>
        </div>
      )}
    </PageLayout>
  )
}
