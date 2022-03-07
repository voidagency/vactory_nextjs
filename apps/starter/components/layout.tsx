import Link from "next/link"
import { useSession } from "next-auth/react"
import { useTranslations, useLocale } from "next-intl"

// import { PreviewAlert } from "@/components/preview-alert"
const navigation = [
  { name: "Home", href: "/fr" },
  { name: "News", href: "/fr/actualites" },
  { name: "News - Pretty URL", href: "/fr/actualites/maroc/immobilier" },
  { name: "404", href: "/fr/toto" },
  { name: "Article", href: "/fr/news/news-9" },
]

const UserInfo = () => {
  const { data, status } = useSession()
  const t = useTranslations()

  if (status === "loading") {
    return <></>
  }

  if (status === "authenticated") {
    return <p>Signed in as {data.user.email}</p>
  }

  return (
    <Link href="/api/auth/signin" passHref>
      <a className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
        Sign in {t("title")}
      </a>
    </Link>
  )
}

export function Layout({ children }) {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <>
      <header className="bg-indigo-600">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  height="40"
                  width="43"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href} passHref>
                    <a className="text-base font-medium text-white hover:text-indigo-50">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                {locale}
              </a>
              <UserInfo />
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <a className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {/* <PreviewAlert /> */}
      <div className="max-w-screen-md px-6 mx-auto">
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  )
}
