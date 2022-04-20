import { useContext } from "react"
import clsx from "clsx"
import { deepmerge } from "deepmerge"
import YouTube from "react-youtube"

import { ThemeContext } from "@vactory/ui/theme-context"

export const SlideVideo = ({ videoId, variant = "default", settings, ...props }) => {
	const { slider } = useContext(ThemeContext)
	const defaultSetting = {
		height: "100%",
		width: "100%",
		playerVars: {
			autoplay: 1,
			loop: 1,
		},
	}

	return (
		<div className={clsx("iframe-wrapper", slider[variant].slide.video)}>
			<YouTube opt={defaultSetting} videoId={videoId} {...props} />
		</div>
	)
}
