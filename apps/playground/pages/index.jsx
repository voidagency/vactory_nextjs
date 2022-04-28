import { Header } from "../components/chaibi-header/chaibi-header"
import { MarqueSlider } from "../widgets/marque-slider/marque-slider"
import { CardWithPicto } from "../widgets/card-with-picto/card-with-picto"
import { FilterSection } from "../widgets/filter-section/filter-section"
import { SliderHp } from "../widgets/slider-hp/slider-hp"
import { LogoSlider } from "../widgets/logo-slider/logo-slider"
import { TypeBlock } from "../widgets/type-block/type-block"
import { CardImageTitle } from "../widgets/card-image-title/card-image-title"
import { CardVehicule } from "../widgets/card-vehicule/card-vehicule"
import { BlockMap } from "../widgets/block-map/block-map"

import { Footer } from "../widgets/footer/footer"

export default function Index() {
	return (
		<div>
			<Header />
			<SliderHp />
			<FilterSection />
			<LogoSlider />
			<CardWithPicto title="Comment ça marche" />
			<TypeBlock />
			<CardImageTitle />
			<CardVehicule />
			<MarqueSlider />
			<BlockMap />
			<Footer />
		</div>
	)
}
