import React, { createContext, useContext } from "react"

const MenuContext = createContext()

export const MenuProvider = ({ children, menus = [] }) => {
	return <MenuContext.Provider value={{ menus }}>{children}</MenuContext.Provider>
}

const useMenuContext = () => {
	const context = useContext(MenuContext)

	if (!context) {
		throw new Error(
			// eslint-disable-next-line no-undef
			__DEV__ ? "No menu context found. Have you configured the provider?" : undefined
		)
	}

	return context
}

export const useMenu = (name = "") => {
	const { menus } = useMenuContext()

	if (!name) {
		throw new Error(
			// eslint-disable-next-line no-undef
			__DEV__ ? "[useMenu] Missing name argument" : undefined
		)
	}

	return menus.find((menu) => menu.name === name).items || []
}
