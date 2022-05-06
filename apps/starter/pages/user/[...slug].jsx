import { UserPageHandler } from "@vactory/next-user"
import { getUserServerSideProps } from "@vactory/next-user/server"
import { Layout } from "@/components/layout"

export default function UserPage(props) {
	return (
		<Layout {...props}>
			<UserPageHandler {...props} />
		</Layout>
	)
}

export async function getServerSideProps(context) {
	return getUserServerSideProps(context)
}
