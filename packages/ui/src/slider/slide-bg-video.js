import { useContext } from "react"
import clsx from "clsx"
import { deepmerge } from "deepmerge"
import YoutubeBackground from "react-youtube-background"
import { ThemeContext } from "@vactory/ui/theme-context"

export const SlideBgVideo = ({ bgVideoId, variant = "default", settings, ...props }) => {
	const { slider } = useContext(ThemeContext)
	const defaultSetting = {
		height: "100%",
		width: "100%",
		playerVars: {
			autoplay: 1,
			loop: 1,
			controls: 0,
			rel: 0,
			showinfo: 0,
		},
	}

	console.log("SLIDER CONTEXt", slider)

	return (
		<YoutubeBackground
			className={clsx("iframe-wrapper", slider[variant].slide.bgVideo)}
			{...props}
			opt={defaultSetting}
			videoId={bgVideoId}
		/>
	)
}
