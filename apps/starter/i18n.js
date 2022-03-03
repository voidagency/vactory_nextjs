module.exports = {
  locales: ["en", "fr", "ar"],
  defaultLocale: "fr",
  defaultNS: "common",
  localeDetection: true,
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`translations/${lang}/${ns}.json`).then((m) => m.default),
}
