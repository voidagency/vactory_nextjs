import { Button } from "@vactory/ui/button"
export const Search = () => {
	return (
		<div className=" md:flex-nowrap flex-wrap  flex-col grid md:grid-cols-2 grid-col-1 gap-x-2 gap-y-4 md:mb-12 px-6 md:px-12 py-6 rounded-md bg-white">
			<div className="">
				<input
					type="search"
					className="form-control relative min-w-0 block w-full h-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					placeholder="Mots-clés"
					aria-label="Search"
					aria-describedby="button-addon2"
				/>
			</div>
			<div>
				<Button
					variant={"primary"}
					size={"large"}
					className="grow uppercase shadow-md font-semibold bg-blue-1000"
				>
					Rechercher
				</Button>
			</div>
		</div>
	)
}
