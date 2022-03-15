import { useRouter } from "next/router"
import { signOut } from "next-auth/react"

export const useSignIn = () => {
  const router = useRouter()
  const signIn = () => {
    router.push(
      `/${router.locale}/user/login?callbackUrl=${process.env.NEXT_PUBLIC_BASE_URL}/${router.locale}${router.asPath}`
    )
  }
  return signIn
}

export const useSignOut = () => {
  return signOut
}

export const useSignUp = () => {
  const router = useRouter()
  const signUp = () => {
    router.push(
      `/${router.locale}/user/register?callbackUrl=${process.env.NEXT_PUBLIC_BASE_URL}/${router.locale}${router.asPath}`
    )
  }
  return signUp
}
