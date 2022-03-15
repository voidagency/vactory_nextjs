import { NextResponse } from "next/server"
// import { getDefaultLanguage } from "@vactory/next"

const PUBLIC_FILE = /\.(.*)$/

const stripDefaultLocale = (str) => {
	const stripped = str.replace("/default", "")
	return stripped
}

export function middleware(request) {
	// @todo: middleware doesn't know about next config runtime
	// split i18n object and make it in own file
	// const DEFAULT_LANGUAGE = getDefaultLanguage()
	const url = request.nextUrl.clone()
	const shouldHandleLocale =
		!PUBLIC_FILE.test(url.pathname) &&
		!url.pathname.includes("/api/") &&
		url.locale === "default"

	const path = stripDefaultLocale(url.pathname)
	url.pathname = `/fr${path}`
	if (path === "/") {
		url.pathname = `/fr`
	}

	return shouldHandleLocale ? NextResponse.redirect(url) : undefined
}
