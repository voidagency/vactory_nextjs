import { CardsSoumissions } from "../widgets/cards-soumissions/cards-soumissions"
import { ShoppingCart } from "../widgets/shopping-cart/shopping-cart"
import { Banner } from "../widgets/banner/banner"

export default function MesDocuments() {
	return (
		<div>
			<Banner />
			<CardsSoumissions />
			<ShoppingCart />
		</div>
	)
}
