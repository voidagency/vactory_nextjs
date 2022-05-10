import { Banner } from "widgets/banner/banner"
import { BlockCautions } from "../widgets/block-cautions/block-cautions"
import { BlockPaiement } from "../widgets/block-paiement/block-paiement"

export default function MesDocuments() {
	return (
		<div>
			<Banner />
			<BlockPaiement />
			<BlockCautions />
		</div>
	)
}
