import { FilterSection } from "widgets/filter-section/filter-section"
import { BlockCardVehicule } from "widgets/block-card-vehicule/block-card-vehicule"
import { Banner } from "widgets/banner/banner"
import { BlockCardInlineVehicule } from "widgets/block-card-inline-vehicule/block-card-inline-vehicule"
import { BlockCaracteristique } from "widgets/block-caracteristique/block-caracteristique"
import { ContentInBg } from "widgets/content-in-bg/content-in-bg"
import { BlockMap } from "widgets/block-map/block-map"

export default function DetailVehicule() {
	return (
		<div>
			<Banner />
			<BlockCardInlineVehicule />
			<BlockCaracteristique />
			<ContentInBg />
			<BlockMap />
			<BlockCardVehicule />
		</div>
	)
}
