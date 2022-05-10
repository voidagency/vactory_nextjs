import { Search } from "@/components/search/search"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"

export const SearchWidget = ({}) => {
	return (
		<Container className="">
			<Heading
				level={2}
				className="text-left text-xl tracking-wide text-gray-400 mb-12  text-bold"
			>
				Search
			</Heading>
			<Search />
			<div className="lg:flex-row  md:mb-12 px-6 md:px-12 md:text-xl text-gray-400 mt-8 rounded-md py-6 bg-white">
				Saisissez vos mots-clés et cliquez sur rechercher pour voir les résultats
			</div>
		</Container>
	)
}
