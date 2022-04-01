import { Layout } from "@/components/layout"
import { Button } from "@vactory/ui/button"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Heading } from "@vactory/ui/heading"

export default function Index() {
	return (
		<AppWrapper theme={theme}>
			<Layout>
				<div className="h-screen text-white py-9 bg-indigo-300 flex items-center justify-center flex-col">
					<Heading level={2} className="mb-4 text-center">
						This is the default heading
					</Heading>
					<Button>This is the button primary</Button>
				</div>
			</Layout>
		</AppWrapper>
	)
}
