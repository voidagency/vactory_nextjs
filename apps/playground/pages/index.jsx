import { Header } from "../components/chaibi-header/chaibi-header"
import { MarqueSlider } from "../widgets/marque-slider/marque-slider"
import { CardWithPicto } from "../widgets/card-with-picto/card-with-picto"
import { FilterSection } from "../widgets/filter-section/filter-section"
import { SliderHp } from "../widgets/slider-hp/slider-hp"
import { LogoSlider } from "../widgets/logo-slider/logo-slider"
import { TypeBlock } from "../widgets/type-block/type-block"
import { CardImageTitle } from "../widgets/card-image-title/card-image-title"
import { BlockCardVehicule } from "../widgets/block-card-vehicule/block-card-vehicule"
import { BlockMap } from "../widgets/block-map/block-map"

import { Footer } from "../widgets/footer/footer"

export default function Index() {
	return (
		<div>
			<SliderHp />
			<FilterSection />
			<LogoSlider />
			<CardWithPicto title="Comment ça marche" />
			<TypeBlock />
			<CardImageTitle />
			<BlockCardVehicule />
			<MarqueSlider />
			<BlockMap />
		</div>
	)
}
