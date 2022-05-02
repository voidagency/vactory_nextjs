import Tooltip from "./tooltip"
import { Button } from "@vactory/ui/button"

export const defaultTooltip = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex gap-x-4">
				<div className="flex flex-col gap-y-4">
					<Tooltip position={"leftTop"} text="Prompt text">
						<Button variant="primary" className="w-full">
							Left Top
						</Button>
					</Tooltip>
					<Tooltip position={"leftCenter"} text="Prompt text">
						<Button variant="primary" className="w-full">
							Left Center
						</Button>
					</Tooltip>
					<Tooltip position={"leftBottom"} text="Prompt text">
						<Button variant="primary" className="w-full">
							Left Bottom
						</Button>
					</Tooltip>
				</div>
				<div className="flex flex-col justify-between">
					<div className="grow flex gap-x-4">
						<div className="flex-1">
							<Tooltip position={"topLeft"} text="Prompt text">
								<Button variant="primary" className="w-full">
									Top Left
								</Button>
							</Tooltip>
						</div>
						<div className="flex-1">
							<Tooltip position={"topCenter"} text="Prompt text">
								<Button variant="primary" className="w-full">
									Top Center
								</Button>
							</Tooltip>
						</div>
						<div className="flex-1">
							<Tooltip position={"topRight"} text="Prompt text">
								<Button variant="primary" className="w-full">
									Top Right
								</Button>
							</Tooltip>
						</div>
					</div>
					<div className="flex gap-x-4">
						<Tooltip position={"bottomLeft"} text="Prompt text">
							<Button variant="primary" className="w-full">
								Bottom Left
							</Button>
						</Tooltip>
						<Tooltip position={"bottomCenter"} text="Prompt text">
							<Button variant="primary" className="w-full">
								Bottom Center
							</Button>
						</Tooltip>
						<Tooltip position={"bottomRight"} text="Prompt text">
							<Button variant="primary" className="w-full">
								Bottom Right
							</Button>
						</Tooltip>
					</div>
				</div>
				<div className="flex flex-col gap-y-4">
					<Tooltip position={"rightTop"} text="Prompt text">
						<Button variant="primary" className="w-full">
							Right Top
						</Button>
					</Tooltip>
					<Tooltip position={"rightCenter"} text="Prompt text">
						<Button variant="primary" className="w-full">
							Right Center
						</Button>
					</Tooltip>
					<Tooltip position={"rightBottom"} text="Prompt text">
						<Button variant="primary" className="w-full">
							Right Bottom
						</Button>
					</Tooltip>
				</div>
			</div>
		</div>
	)
}

export default {
	title: "Primitives/tooltip ",
}
