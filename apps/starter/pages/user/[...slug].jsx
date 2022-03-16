import { UserPageHandler } from "@vactory/next-user"
import { Layout } from "@/components/layout"
import { getUserServerSideProps } from "../../../../packages/next-user/src/page-handler-server"

export default function UserPage(props) {
	return (
		<Layout>
			<UserPageHandler {...props} />
		</Layout>
	)
}

export async function getServerSideProps(context) {
	return getUserServerSideProps(context)
}
