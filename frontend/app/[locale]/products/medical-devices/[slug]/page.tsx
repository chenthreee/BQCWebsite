import PageLayout from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

const STRAPI_URL = "http://localhost:1337"
const GRAPHQL_URL = `${STRAPI_URL}/graphql`

// GraphQL查询：根据slug获取产品详情
async function getProductBySlug(slug: string, locale: string) {
  const query = `
    query GetProductBySlug($slug: String!, $locale: I18NLocaleCode) {
      products(
        filters: { slug: { eq: $slug } }, 
        locale: $locale
      ) {
        documentId
        title
        slug
        description
        shortDescription
        cover { url }
        gallery { url }
        modelNumber
        specifications
        features
        applications
        category { 
          name
          title 
        }
        sub_category { 
          name
          title 
        }
        blocks {
          __typename
          ... on ComponentSharedMedia {
            file { url }
          }
          ... on ComponentSharedRichText {
            body
          }
          ... on ComponentSharedTable {
            title
            headers
            rows
            styling
          }
          ... on ComponentSharedVideo {
            title
            videoFile { url }
            youtubeUrl
            poster { url }
            autoplay
            controls
          }
          ... on ComponentSharedSpecifications {
            title
            items {
              parameter
              value
              unit
              category
            }
          }
        }
        publishedAt
        isActive
        isFeatured
      }
    }
  `
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { slug, locale } }),
    cache: "no-store"
  })
  const { data } = await res.json()
  if (!data || !data.products || !data.products.length) {
    return null
  }
  return data.products[0]
}

// GraphQL查询：获取同分类的相关产品
async function getRelatedProducts(categoryName: string, currentSlug: string, locale: string) {
  const query = `
    query GetRelatedProducts($categoryName: String!, $currentSlug: String!, $locale: I18NLocaleCode) {
      products(
        locale: $locale,
        filters: {
          category: { name: { eq: $categoryName } },
          slug: { ne: $currentSlug }
        },
        sort: "order:asc",
        pagination: { limit: 3 }
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
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { categoryName, currentSlug, locale } }),
    cache: "no-store"
  })
  const { data } = await res.json()
  return data.products || []
}

// 渲染blocks组件
function renderBlock(block: any, index: number) {
  switch (block.__typename) {
    case "ComponentSharedMedia":
      if (block.file?.url) {
        const fileUrl = STRAPI_URL + block.file.url
        const fileExtension = block.file.url.split('.').pop()?.toLowerCase()
        const isVideo = ['mp4', 'webm', 'ogg', 'mov', 'avi'].includes(fileExtension || '')
        
        return (
          <div key={index} className="mb-8">
            <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
              {isVideo ? (
                <video
                  controls
                  className="w-full h-full object-contain"
                  preload="metadata"
                >
                  <source src={fileUrl} type={`video/${fileExtension}`} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={fileUrl}
                  alt="Product image"
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
        )
      }
      return null

    case "ComponentSharedRichText":
      // 处理Markdown格式转HTML
      let processedBody = block.body
        // 处理标题：#### 标题 → <h4>标题</h4> (支持tab字符)
        .replace(/^####[\s\t]+(.+)$/gm, '<h4>$1</h4>')
        .replace(/^###[\s\t]+(.+)$/gm, '<h3>$1</h3>')
        .replace(/^##[\s\t]+(.+)$/gm, '<h2>$1</h2>')
        .replace(/^#[\s\t]+(.+)$/gm, '<h1>$1</h1>')
        // 处理数字标题加粗：**1. 标题** 或 **1.\t标题** → <h3>1. 标题</h3>
        .replace(/\*\*(\d+\.[\s\t]+[^*\n]+)\*\*/g, '<h3>$1</h3>')
        // 处理加粗：**text** → <strong>text</strong>
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // 处理换行符：双换行转为段落，单换行转为<br>
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        // 包装在段落中
        .replace(/^/, '<p>')
        .replace(/$/, '</p>')
        // 清理空段落和多余的段落标签
        .replace(/<p><\/p>/g, '')
        .replace(/<p><h([1-6])>/g, '<h$1>')
        .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
        
      return (
        <div key={index} className="mb-8">
          <div 
            dangerouslySetInnerHTML={{ __html: processedBody }} 
            className="
              text-base font-medium leading-relaxed text-gray-800
              [&_h1]:font-black [&_h1]:text-gray-900 [&_h1]:text-2xl [&_h1]:mb-6 [&_h1]:leading-tight
              [&_h2]:font-black [&_h2]:text-gray-900 [&_h2]:text-2xl [&_h2]:mb-5 [&_h2]:leading-tight
              [&_h3]:font-black [&_h3]:text-gray-900 [&_h3]:text-2xl [&_h3]:mb-4 [&_h3]:leading-tight
              [&_h4]:font-black [&_h4]:text-gray-900 [&_h4]:text-2xl [&_h4]:mb-3 [&_h4]:leading-tight
              [&_strong]:font-bold [&_strong]:text-gray-900 [&_strong]:text-base
              [&_p]:mb-4 [&_p]:leading-relaxed
              [&_br]:mb-2
            "
          />
        </div>
      )

    case "ComponentSharedTable":
      return (
        <div key={index} className="mb-8">
          {block.title && <h3 className="text-2xl font-black mb-6 text-gray-900">{block.title}</h3>}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                    {block.headers?.map((header: string, headerIndex: number) => (
                      <th key={headerIndex} className="px-6 py-4 text-left font-bold text-blue-900 text-base uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {block.rows?.map((row: string[], rowIndex: number) => (
                    <tr key={rowIndex} className={`hover:bg-gray-50 transition-colors ${
                      block.styling === 'striped' && rowIndex % 2 === 0 ? 'bg-gray-25' : ''
                    }`}>
                      {row.map((cell: string, cellIndex: number) => (
                        <td key={cellIndex} className="px-6 py-4 text-gray-800 text-base font-medium">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )

    case "ComponentSharedVideo":
      return (
        <div key={index} className="mb-8">
          {block.title && <h3 className="text-2xl font-semibold mb-4">{block.title}</h3>}
          {block.youtubeUrl ? (
            <div className="aspect-video">
              <iframe
                src={block.youtubeUrl.replace('watch?v=', 'embed/')}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : block.videoFile?.url ? (
            <video
              controls={block.controls !== false}
              autoPlay={block.autoplay === true}
              poster={block.poster?.url ? STRAPI_URL + block.poster.url : undefined}
              className="w-full rounded-lg"
            >
              <source src={STRAPI_URL + block.videoFile.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      )

    case "ComponentSharedSpecifications":
      return (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-black mb-6 text-gray-900">{block.title || "技术规格"}</h3>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 gap-3">
              {block.items?.map((spec: any, specIndex: number) => (
                <div key={specIndex} className="grid grid-cols-2 gap-4 py-3 border-b border-gray-200 last:border-b-0">
                  <div className="font-bold text-gray-800 text-base">{spec.parameter}</div>
                  <div className="text-gray-700 text-base font-medium">
                    {spec.value} {spec.unit && <span className="text-gray-600 ml-1">{spec.unit}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

export default async function ProductDetailPage({ params }: { params: { slug: string, locale: string } }) {
  const locale = params.locale === "en" ? "en" : "zh-Hans"
  const product = await getProductBySlug(params.slug, locale)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(
    product.category?.name || "",
    params.slug,
    locale
  )

  return (
    <PageLayout
      title={product.title}
      subtitle={product.shortDescription || ""}
      breadcrumbs={[
        { label: locale === "en" ? "Products Center" : "产品中心", href: `/${locale}/products.html` },
        { label: product.category?.title || (locale === "en" ? "Medical Devices" : "医疗设备"), href: `/${locale}/products/medical-devices.html` },
        { label: product.title, href: `/${locale}/products/medical-devices/${params.slug}.html` },
      ]}
      backgroundImage="/placeholder.svg?height=1080&width=1920"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8">
        {/* 产品基本信息 */}
        <div className="mb-12">
          {/* 产品信息 */}
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              {product.modelNumber && (
                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  {product.modelNumber}
                </span>
              )}
              {product.isFeatured && (
                <span className="bg-gradient-to-r from-red-100 to-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  {locale === "en" ? "Featured Product" : "推荐产品"}
                </span>
              )}
            </div>
            
            {product.description && (
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* 产品特性 */}
            {product.features && Array.isArray(product.features) && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {locale === "en" ? "Key Features" : "产品特性"}
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start group">
                      <span className="text-blue-500 mr-3 mt-1 group-hover:text-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 应用场景 */}
            {product.applications && Array.isArray(product.applications) && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {locale === "en" ? "Applications" : "应用场景"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application: string, index: number) => (
                    <span key={index} className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200 hover:shadow-sm transition-shadow">
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 动态内容块 */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <div className="space-y-10">
            {product.blocks && product.blocks.map((block: any, index: number) => 
              renderBlock(block, index)
            )}
          </div>
        </div>
      </div>

      {/* 相关产品推荐 */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            {locale === "en" ? "Related Products" : "相关产品"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((item: any) => (
              <div key={item.documentId} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  {item.cover?.url ? (
                    <Image
                      src={STRAPI_URL + item.cover.url}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">{locale === "en" ? "No Image" : "暂无图片"}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    {item.modelNumber && (
                      <span className="text-sm text-blue-600 font-medium">{item.modelNumber}</span>
                    )}
                    {item.isFeatured && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        {locale === "en" ? "Featured" : "推荐"}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.shortDescription}</p>
                  <Link
                    href={`/${locale}/products/medical-devices/${item.slug}.html`}
                    className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                  >
                    {locale === "en" ? "View Details" : "查看详情"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  )
}