import React from "react"
import ProfileLayout from "./profile-layout"
import { useRouter } from "next/router"
import EditProfilePage from "./profile-edit-form"
import EditProfilePasswordPage from "./profile-edit-password-form"
import { useSession } from "next-auth/react"

const ProfilePage = ({ node }) => {
	const { data: session, status } = useSession()
	const router = useRouter()
	const currentRoute = router.query.slug.join("/")

	if (status !== "authenticated") {
		return null
	}

	return (
		<ProfileLayout>
			{currentRoute === "profile" && (
				<EditProfilePage
					node={node}
					user={session.user}
					accessToken={session.accessToken}
				/>
			)}
			{currentRoute === "profile-password" && (
				<EditProfilePasswordPage
					node={node}
					user={session.user}
					accessToken={session.accessToken}
				/>
			)}
		</ProfileLayout>
	)
}

export default ProfilePage
