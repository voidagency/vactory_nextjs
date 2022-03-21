export const ListHandler = async (req, res) => {
	res.status(200).json({
		items: [
			{
				id: 1,
				title: "from starter",
			},
		],
	})
}
