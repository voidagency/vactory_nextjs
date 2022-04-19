import React from "react"
import ProfileLayout from "./profile-layout"
import { useRouter } from "next/router"
import EditProfilePage from "./profile-edit-form"
import EditProfilePasswordPage from "./profile-edit-password-form"

const ProfilePage = ({ node }) => {
	const router = useRouter()
	const currentRoute = router.query.slug.join("/")

	return (
		<ProfileLayout>
			{currentRoute === "profile" && <EditProfilePage node={node} />}
			{currentRoute === "profile-password" && <EditProfilePasswordPage node={node} />}
		</ProfileLayout>
	)
}

export default ProfilePage
