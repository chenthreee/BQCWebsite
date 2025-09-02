export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  process.env.STRAPI_URL ||
  (typeof window !== "undefined"
    ? `${window.location.protocol}//${window.location.hostname}:1337`
    : "http://localhost:1337")

export const GRAPHQL_URL = `${STRAPI_URL}/graphql` 