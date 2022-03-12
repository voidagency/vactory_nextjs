import { NextResponse } from "next/server"
import { getDefaultLanguage } from "@vactory/next"

const DEFAULT_LANGUAGE = getDefaultLanguage()
const PUBLIC_FILE = /\.(.*)$/

const stripDefaultLocale = (str) => {
  const stripped = str.replace("/default", "")
  return stripped
}

export function middleware(request) {
  const url = request.nextUrl.clone()
  const shouldHandleLocale =
    !PUBLIC_FILE.test(url.pathname) &&
    !url.pathname.includes("/api/") &&
    url.locale === "default"

  const path = stripDefaultLocale(url.pathname)
  url.pathname = `/${DEFAULT_LANGUAGE}${path}`
  if (path === "/") {
    url.pathname = `/${DEFAULT_LANGUAGE}`
  }

  return shouldHandleLocale ? NextResponse.redirect(url) : undefined
}
