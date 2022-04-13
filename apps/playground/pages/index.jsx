import {Header} from "../components/chaibi-header/chaibi-header";
import { MarqueSlider } from "../widgets/marque-slider/marque-slider"
import {CardWithPicto} from "../widgets/card-with-picto/card-with-picto";
import {FilterSection} from "../widgets/filter-section/filter-section";


export default function Index() {
	return (
		<div>
			<Header />
			<FilterSection />
			<MarqueSlider />
			<CardWithPicto title="Comment ça marche" />
		</div>
	)
}
