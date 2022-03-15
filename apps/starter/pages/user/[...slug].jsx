import { UserPageHandler } from "@vactory/next-user";
import { Layout } from "@/components/layout";
export { getServerSideProps } from "@vactory/next-user";

export default function UserPage(props) {
	return (
		<Layout>
			<UserPageHandler {...props} />
		</Layout>
	);
}
