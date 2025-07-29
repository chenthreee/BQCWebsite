"use client"

import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

const STRAPI_URL = "http://localhost:1337"
const GRAPHQL_URL = `${STRAPI_URL}/graphql`

export default function EnergyStorageBmsPage() {
  const params = useParams()
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const [subCategories, setSubCategories] = useState<any[]>([])
  const [categoryInfo, setCategoryInfo] = useState<{title?: string; description?: string} | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 获取主分类信息
  const fetchCategoryInfo = async () => {
    const query = `
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

  // 获取BMS子分类和PCS主分类
  const fetchSubCategories = async () => {
    // 首先获取所有子分类，然后在客户端过滤
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
    
    // 然后获取PCS主分类
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
      console.log('🔍 Fetching BMS subcategories and PCS category for locale:', locale)
      
      // 并行获取两个查询
      const [subCategoryRes, pcsRes] = await Promise.all([
        fetch(GRAPHQL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: subCategoryQuery, variables: { locale } })
        }),
        fetch(GRAPHQL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: pcsQuery, variables: { locale } })
        })
      ])
      
      const [subCategoryData, pcsData] = await Promise.all([
        subCategoryRes.json(),
        pcsRes.json()
      ])
      
      if (subCategoryData.errors || pcsData.errors) {
        console.error('❌ GraphQL errors:', subCategoryData.errors || pcsData.errors)
        setError((subCategoryData.errors || pcsData.errors)[0].message)
        return
      }
      
      // 合并BMS子分类和PCS主分类
      const allSubCategories = subCategoryData.data?.productSubCategories || []
      // 过滤出属于BMS的子分类
      const bmsSubCategories = allSubCategories.filter((item: any) => 
        item.parent_category?.name === 'energy-storage-bms'
      )
      const pcsCategory = pcsData.data?.productCategories?.[0]
      
      const allCategories = [...bmsSubCategories]
      if (pcsCategory) {
        // 为PCS添加一个标识符，表明它是主分类
        allCategories.push({ ...pcsCategory, isMainCategory: true })
      }
      
      console.log('✅ All subcategories loaded:', allSubCategories.length)
      console.log('✅ BMS subcategories filtered:', bmsSubCategories.length)
      console.log('✅ PCS category loaded:', pcsCategory ? 1 : 0)
      console.log('📄 BMS subcategories:', bmsSubCategories.map((item: any) => item.title))
      setSubCategories(allCategories)
    } catch (err: any) {
      console.error('❌ Fetch error:', err)
      setError(err?.message || 'Unknown error')
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      await Promise.all([fetchCategoryInfo(), fetchSubCategories()])
      setLoading(false)
    }
    
    loadData()
  }, [locale])

  // 获取分类的链接路径
  const getCategoryLink = (item: any) => {
    // 如果是PCS主分类
    if (item.name === 'energy-storage-pcs' || item.isMainCategory) {
      return `/${locale}/products/energy-storage-pcs.html`
    }
    // 如果是BMS子分类
    return `/${locale}/products/energy-storage-bms/${item.name}.html`
  }

  if (loading) {
    return (
      <PageLayout
        title={locale === "en" ? "Energy Storage BMS" : "储能BMS"}
        subtitle={locale === "en" ? "Loading..." : "加载中..."}
        breadcrumbs={[
          { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products.html` },
          { label: locale === "en" ? "Energy Storage BMS" : "储能BMS", href: `/${locale}/products/energy-storage-bms.html` },
        ]}
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      >
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{locale === "en" ? "Loading categories..." : "正在加载分类..."}</p>
          </div>
        </div>
      </PageLayout>
    )
  }

  if (error) {
    return (
      <PageLayout
        title={locale === "en" ? "Energy Storage BMS" : "储能BMS"}
        subtitle={locale === "en" ? "Error loading page" : "页面加载错误"}
        breadcrumbs={[
          { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products.html` },
          { label: locale === "en" ? "Energy Storage BMS" : "储能BMS", href: `/${locale}/products/energy-storage-bms.html` },
        ]}
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      >
        <div className="text-center py-20">
          <div className="text-red-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {locale === "en" ? "Error Loading Categories" : "分类加载失败"}
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
      title={categoryInfo?.title || (locale === "en" ? "Energy Storage BMS" : "储能BMS")}
      subtitle={categoryInfo?.description || (locale === "en" ? "Safe and Reliable Battery Management System Solutions" : "安全可靠的电池管理系统解决方案")}
      breadcrumbs={[
        { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products.html` },
        { label: categoryInfo?.title || (locale === "en" ? "Energy Storage BMS" : "储能BMS"), href: `/${locale}/products/energy-storage-bms.html` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      {/* BMS子分类和PCS分类列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subCategories.map((category: any) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
              
              <Link
                href={getCategoryLink(category)}
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                {locale === "en" ? "View Details" : "查看详情"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
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