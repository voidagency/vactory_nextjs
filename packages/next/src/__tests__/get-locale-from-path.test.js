import { getLocaleFromPath } from "../utils/get-locale-from-path"

const locales = ["ar", "fr", "en"]

test("locale without slash", () => {
  expect(getLocaleFromPath("fr", locales)).toBe("fr")
})

test("locale and a leading slash", () => {
  expect(getLocaleFromPath("/fr", locales)).toBe("fr")
})

test("locale and a trailing slash", () => {
  expect(getLocaleFromPath("fr/", locales)).toBe("fr")
})

test("locale with a trailing and a leading slash", () => {
  expect(getLocaleFromPath("/fr/", locales)).toBe("fr")
})

test("locale AR with a trailing and a leading slash", () => {
  expect(getLocaleFromPath("/ar/test-page", locales)).toBe("ar")
})

test("not enabled locale with a trailing and a leading slash", () => {
  expect(getLocaleFromPath("/es/test-page", locales)).toBe(undefined)
})

test("without locale and a leading slash", () => {
  expect(getLocaleFromPath("node/", locales)).toBe(undefined)
})

test("without locale and a trailing slash", () => {
  expect(getLocaleFromPath("node/", locales)).toBe(undefined)
})

test("without locale and both leading and trailing slash", () => {
  expect(getLocaleFromPath("/node/", locales)).toBe(undefined)
})

test("with an empty slug", () => {
  expect(getLocaleFromPath("", locales)).toBe(undefined)
})

test("without slug", () => {
  expect(getLocaleFromPath("", locales)).toBe(undefined)
})

test("slash only", () => {
  expect(getLocaleFromPath("/", locales)).toBe(undefined)
})
