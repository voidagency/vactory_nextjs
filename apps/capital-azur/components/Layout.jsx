import Header from "./header/header"

export const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	)
}
