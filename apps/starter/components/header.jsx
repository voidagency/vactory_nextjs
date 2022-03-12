import { Fragment } from "react"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useLocale } from "next-intl"
import { useMenu } from "@vactory/next"
import { Menu, Transition } from "@headlessui/react"
import classNames from "clsx"
import { useRouter } from "next/router"

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}

const userNavigation = [
  { name: "Your Profile", href: "#." },
  { name: "Settings", href: "#." },
  { name: "Sign out", href: "#.", onClick: signOut },
]

const UserInfo = () => {
  const { data, status } = useSession()
  const router = useRouter()

  const signIn = () => {
    router.push(
      `/${router.locale}/user/login?callbackUrl=${process.env.NEXT_PUBLIC_BASE_URL}/${router.locale}${router.asPath}`
    )
  }

  if (status === "authenticated") {
    return (
      <Menu as="div" className="inline-block flex-shrink-0 relative ml-4">
        <div>
          <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src={user.imageUrl}
              alt={data.user.email}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10	origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item?.href}
                    onClick={item?.onClick}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block py-2 px-4 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    )
    // return (
    //   <a
    //     href="#."
    //     onClick={() => signOut()}
    //     className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
    //   >
    //     Signed in as {data.user.email}
    //     Sign out
    //   </a>
    // )
  }

  return (
    <a
      href="#."
      onClick={() => signIn()}
      className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
    >
      Sign in
    </a>
  )
}

export const Header = () => {
  const locale = useLocale()
  const navigation = useMenu("main")
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Factory</span>
              <img
                className="h-10 w-auto"
                height="40"
                width="43"
                src="/logo.png"
                alt="Factory"
                priority="high"
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link key={link.id} href={link.url} passHref>
                  <a className="text-base font-medium text-white hover:text-indigo-50">
                    {link.title}
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
            <Link key={link.id} href={link.url} passHref>
              <a className="text-base font-medium text-white hover:text-indigo-50">
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
