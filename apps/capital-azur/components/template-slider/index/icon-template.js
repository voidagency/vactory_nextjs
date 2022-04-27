import clsx from "clsx"

export const IconTemplate = ({ item, variant, isActive = false }) => {
	return (
		<div
			className={clsx(
				"flex items-center justify-center text-center flex-col  bg-white w-full text-white pt-11 pb-9 px-8 hover:-translate-y-10 shadow hover:shadow-[0_10px_60px_0_rgba(31,121,230,0.2)] transition-all duration-300 ease-in-out",
				isActive && "shadow-[0_10px_60px_0_rgba(31,121,230,0.2)] -translate-y-10"
			)}
		>
			<div>
				<img
					className="mx-auto mb-10 h-16"
					src={item.image}
					alt="Workflow"
					height="222px"
					width="138px"
				/>
			</div>
			<h3 className="text-black">{item.title}</h3>
		</div>
	)
}
