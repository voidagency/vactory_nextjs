import React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"

const LoginPage = dynamic(() => import("./login"))
const RegisterPage = dynamic(() => import("./register"))
const ResetPasswordPage = dynamic(() => import("./reset-password"))

export const UserPageHandler = ({ node, params }) => {
	if (!node) return null
	return (
		<>
			<Head>
				<link rel="preload" as="image/svg+xml" href="/icons.svg" />
				<title>{node?.title}</title>
			</Head>
			{node.type === "login" && <LoginPage node={node} params={params} />}
			{node.type === "register" && <RegisterPage node={node} params={params} />}
			{node.type === "reset-password" && (
				<ResetPasswordPage node={node} params={params} />
			)}
		</>
	)
}
