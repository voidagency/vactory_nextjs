import { useContext } from "react"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const SlideImage = ({ imgUrl, variant = "default", className, ...props }) => {
	const { slider } = useContext(ThemeContext)

	return <img src={imgUrl} className={clsx(className, slider[variant].slide.image)} />
}
