import React from "react"
import { useI18n } from "@vactory/next"
import { useSession } from "next-auth/react"
import { useSignUp } from "@vactory/next-user"

export const RegisterPage = ({ node }) => {
  const { t } = useI18n()
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const { csrfToken } = node
  const signUp = useSignUp()

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null

  if (session) {
    return <h1>Already logged in</h1>
  }

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto">
        <h1>
          <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
            {node.title}
          </span>
        </h1>
      </div>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {t("webform:Submit")}
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={signUp}
            href="#"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  )
}
