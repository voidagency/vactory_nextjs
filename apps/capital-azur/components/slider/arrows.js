import { Button } from "@vactory/ui/button"

export const Arrow = (props) => {
	return (
		<Button
			onClick={props.onClick}
			variant="nav"
			className={`arrow invisible md:visible absolute  sm:translate-y-1/2 items-center justify-center bottom-10   sm:bottom-1/2  sm:cursor-pointer py-4 px-4 sm:rounded-full  sm:transition sm:ease-in-out sm:delay-200 ${
				props.left ? "arrow--left left-12 " : "arrow--right right-12 "
			} `}
		>
			{props.left && props.iconLeft}
			{props.right && props.iconRight}

			{/*the icons below just for test u can hide it */}
			<svg
				className="fill-indigo-700 rtl:transform rtl:rotate-180"
				viewBox="0 0 50 50"
				xmlns="http://www.w3.org/2000/svg"
				height="50"
				width="50"
			>
				{props.left && (
					<path d="M13,26a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L5.41,16l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,13,26Z" />
				)}
				{props.right && (
					<path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z" />
				)}
			</svg>
		</Button>
	)
}
