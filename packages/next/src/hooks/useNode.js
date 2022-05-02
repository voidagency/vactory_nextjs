import { useContext } from "react"
import { NodePageContext } from "../context/node"

export const useNode = () => {
	const node = useContext(NodePageContext)
	return node
}
