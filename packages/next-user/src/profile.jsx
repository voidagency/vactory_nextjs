import React, { useEffect, useState } from "react"
import ProfileLayout from "./profile-layout"
import { useRouter } from "next/router"
import EditProfilePage from "./profile-edit-form"
import EditProfilePasswordPage from "./profile-edit-password-form"
import { useSession } from "next-auth/react"

const ProfilePage = ({ node }) => {
	const { data: session, status } = useSession()
	const [accessToken, setAccessToken] = useState()
	const router = useRouter()
	const currentRoute = router.query.slug.join("/")

	useEffect(() => {
		if (status !== "authenticated") {
			return null
		}

		if (session?.error === "RefreshAccessTokenError") {
			// @todo: Force sign in to hopefully resolve error
			//signIn()
		}
		setAccessToken(session.accessToken)
	}, [session, status])

	if (status !== "authenticated") {
		return null
	}

	return (
		<ProfileLayout>
			{currentRoute === "profile" && (
				<EditProfilePage node={node} user={session.user} accessToken={accessToken} />
			)}
			{currentRoute === "profile-password" && (
				<EditProfilePasswordPage
					node={node}
					user={session.user}
					accessToken={accessToken}
				/>
			)}
		</ProfileLayout>
	)
}

export default ProfilePage
