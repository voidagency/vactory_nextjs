export const IdHandler = async (req, res) => {
	const id = req.params.id
	res.status(200).json({
		nodeID: id,
	})
}

export const ListHandler = async (req, res) => {
	res.status(200).json([])
}
