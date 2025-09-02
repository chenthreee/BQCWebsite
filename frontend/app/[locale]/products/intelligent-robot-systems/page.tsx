"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { STRAPI_URL, GRAPHQL_URL } from "@/lib/config"

export default function IntelligentRobotSystemsPage() {
  const params = useParams()
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const [products, setProducts] = useState<any[]>([])
  const [categoryInfo, setCategoryInfo] = useState<{title?: string; description?: string} | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取分类信息
  const fetchCategoryInfo = async () => {
    const query = `
      query GetIntelligentRobotSystemsCategory($locale: I18NLocaleCode) {
        productCategories(
          locale: $locale,
          filters: { name: { eq: "intelligent-robot-systems" } }
        ) {
          title
          description
        }
      }
    `
    
    try {
      const res = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { locale } })
      })
      
      const { data, errors } = await res.json()
      
      if (!errors) {
        setCategoryInfo(data?.productCategories?.[0] || null)
      }
    } catch (err: any) {
      console.error('❌ Category fetch error:', err)
    }
  }

  // 获取产品
  const fetchProducts = async () => {
    const query = `
      query GetIntelligentRobotSystemsProducts($locale: I18NLocaleCode) {
        products(
          locale: $locale,
          filters: {
            category: { name: { eq: "intelligent-robot-systems" } }
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
      console.log('🔍 Fetching Intelligent Robot Systems products for locale:', locale)
      const res = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { locale } })
      })
      
      const { data, errors } = await res.json()
      
      if (errors) {
        console.error('❌ GraphQL errors:', errors)
        setError(errors[0].message)
        return
      }
      
      console.log('✅ Intelligent Robot Systems Products loaded:', data?.products?.length || 0)
      setProducts(data?.products || [])
    } catch (err: any) {
      console.error('❌ Fetch error:', err)
      setError(err?.message || 'Unknown error')
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      await Promise.all([fetchCategoryInfo(), fetchProducts()])
      setLoading(false)
    }
    
    loadData()
  }, [locale])

  if (loading) {
    return (
      <PageLayout
        title={locale === "en" ? "Intelligent Robot Systems" : "智能机器人系统"}
        subtitle={locale === "en" ? "Loading..." : "加载中..."}
        breadcrumbs={[
          { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products.html` },
          { label: locale === "en" ? "Intelligent Robot Systems" : "智能机器人系统", href: `/${locale}/products/intelligent-robot-systems.html` },
        ]}
        backgroundImage="/images/products/intelligentRobotBreadcrumb.png"
      >
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{locale === "en" ? "Loading products..." : "正在加载产品..."}</p>
          </div>
        </div>
      </PageLayout>
    )
  }

  if (error) {
    return (
      <PageLayout
        title={locale === "en" ? "Intelligent Robot Systems" : "智能机器人系统"}
        subtitle={locale === "en" ? "Error loading page" : "页面加载错误"}
        breadcrumbs={[
          { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products.html` },
          { label: locale === "en" ? "Intelligent Robot Systems" : "智能机器人系统", href: `/${locale}/products/intelligent-robot-systems.html` },
        ]}
        backgroundImage="/images/products/intelligentRobotBreadcrumb.png"
      >
        <div className="text-center py-20">
          <div className="text-red-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {locale === "en" ? "Error Loading Products" : "产品加载失败"}
          </h3>
          <p className="text-gray-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {locale === "en" ? "Retry" : "重试"}
          </button>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout
      title={categoryInfo?.title || (locale === "en" ? "Intelligent Robot Systems" : "智能机器人系统")}
      subtitle={categoryInfo?.description || (locale === "en" ? "Advanced Intelligent Robot Control Systems" : "先进的智能机器人控制系统")}
      breadcrumbs={[
        { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products.html` },
        { label: categoryInfo?.title || (locale === "en" ? "Intelligent Robot Systems" : "智能机器人系统"), href: `/${locale}/products/intelligent-robot-systems.html` },
      ]}
      backgroundImage="/images/products/intelligentRobotBreadcrumb.png"
    >
      {/* 产品列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {products.map((product: any) => (
          <Link key={product.documentId} href={`/${locale}/products/intelligent-robot-systems/${product.slug}.html`}>
          <div key={product.documentId} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
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
                  <span className="text-gray-400">{locale === "en" ? "No Image" : "暂无图片"}</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                {product.modelNumber && (
                  <span className="text-sm text-blue-600 font-medium">{product.modelNumber}</span>
                )}
                {product.isFeatured && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                    {locale === "en" ? "Featured" : "推荐"}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{product.shortDescription}</p>
              
              <Link
                href={`/${locale}/products/intelligent-robot-systems/${product.slug}.html`}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                {locale === "en" ? "View Details" : "查看详情"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* 如果没有产品，显示提示信息 */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-4m-4 0H9m-4 0h4m4 0h3" />
            </svg>
          </div>
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