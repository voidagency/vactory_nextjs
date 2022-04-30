import { Button } from "@vactory/ui/button"

export const EspacePrive = () => {
	return (
		<div className="flex items-center gap-4">
			<Button variant="primary" outline={true} className="mr-3">
				Se connecter
			</Button>
			<Button variant="primary">S'inscrire</Button>
		</div>
	)
}
