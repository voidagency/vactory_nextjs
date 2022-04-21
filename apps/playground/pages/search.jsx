import { Header } from "../components/chaibi-header/chaibi-header"
import { MarqueSlider } from "../widgets/marque-slider/marque-slider"
import { CardWithPicto } from "../widgets/card-with-picto/card-with-picto"
import { FilterSection } from "../widgets/filter-section/filter-section"
import { SliderHp } from "../widgets/slider-hp/slider-hp"
import { LogoSlider } from "../widgets/logo-slider/logo-slider"
import { TypeBlock } from "../widgets/type-block/type-block"
import { CardImageTitle } from "../widgets/card-image-title/card-image-title"
import { CardVehicule } from "../widgets/card-vehicule/card-vehicule"

import { Banner } from "../widgets/banner/banner"

export default function Search() {
	return (
		<div>
			<Header />
			<Banner />
			<FilterSection />
			<CardVehicule />
		</div>
	)
}
