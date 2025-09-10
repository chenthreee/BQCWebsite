export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.STRAPI_URL ||
  "http://192.168.8.97:1337";  // fallback 到你的服务器地址

export const GRAPHQL_URL = `${STRAPI_URL}/graphql`;
