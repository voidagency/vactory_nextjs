export const Template1 = ({ item }) => {
	return (
		<div className="flex items-center justify-around bg-white">
			<div className="mb-10">
				<img
					className="mt-10 mb-10 h-24 object-cover "
					src={item.imageforTemplate}
					alt="Workflow"
					height="222px"
					width="138px"
				/>
			</div>
		</div>
	)
}
