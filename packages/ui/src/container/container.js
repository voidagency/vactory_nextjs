/* This example requires Tailwind CSS v2.0+ */
const Container = ({ children, fluid = false, ...props }) => {
	return (
		<div className="max-w-7xl mx-auto sm:px-6 lg:px-8" {...props}>
			{children}
		</div>
	)
}

export default Container
