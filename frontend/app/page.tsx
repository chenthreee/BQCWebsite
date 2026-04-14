import HomePage from "./[locale]/page"

// 根路由直接渲染中文首页，不跳转
export default function RootPage() {
  return <HomePage params={Promise.resolve({ locale: "zh-Hans" })} />
}
