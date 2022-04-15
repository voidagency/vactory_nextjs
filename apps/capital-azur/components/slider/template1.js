export const Template1 = ({ item, isActive }) => {
	return (
		<div className="flex items-center justify-center">
			<div className="mb-10">
				<img
					className="mt-10 mb-10"
					src={item.imageforTemplate}
					alt="Workflow"
					height="222px"
					width="138px"
				/>
			</div>
		</div>
	)
}
