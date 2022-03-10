/**
 * For a pathname that may include a locale from a list of locales, it
 * returns the detected locale.
 *
 * @see ___tests___/get-locale-from-path.test.js
 *
 * @param {*} pathname A pathname that may include a locale.
 * @param {*} locales locales A list of locales.
 * @returns The detected locale
 */
export const getLocaleFromPath = (pathname, locales = []) => {
  let detectedLocale = undefined,
    pathLocale = ""
  const leadingSlash = pathname !== "/" ? pathname.startsWith("/") : false
  const pathnameParts = pathname.split("/")
  pathLocale = leadingSlash ? pathnameParts[1] : pathnameParts[0]

  if (locales.length === 0) {
    throw new Error(`No locales[] passed to getLocaleFromPath`)
  }

  ;(locales || []).some((locale) => {
    if (pathLocale.toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale
      return true
    }
    return false
  })

  return detectedLocale
}
