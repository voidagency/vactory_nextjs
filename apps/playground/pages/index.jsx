import { Layout } from "@/components/layout";
import { Card } from "@vactory/ui/card";
import Image from "next/image";

export default function Index() {
	return (
		<Layout>
			<h1>Hello Playground</h1>
			<Card
				title="test card"
				excerpt="test sommaire"
				category="toto"
				url="/about"
				image={<Image src="/image-4.jpeg" width="500" height="500" alt="" />}
			/>
		</Layout>
	);
}
