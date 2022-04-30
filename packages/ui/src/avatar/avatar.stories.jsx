/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { Avatar } from "./avatar"

export const Default = () => {
	return (
		<div className="p-8 flex items-center justify-center bg-white">
			<div className="flex justify-around items-end w-full max-w-lg mx-auto">
				<Avatar size="small" />
				<Avatar
					size="normal"
					src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
				<Avatar
					src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
					size="large"
				/>
				<Avatar
					size="xlarge"
					src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
				<Avatar
					size="xxlarge"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
			</div>
		</div>
	)
}

export const Placeholder = () => {
	return (
		<div className="p-8 flex items-center justify-center bg-white">
			<div className="flex justify-around items-end w-full max-w-lg mx-auto">
				<Avatar variant="placeholder" size="small" />
				<Avatar variant="placeholder" size="normal" />
				<Avatar variant="placeholder" size="large" />
				<Avatar variant="placeholder" size="xlarge" />
				<Avatar variant="placeholder" size="xxlarge" />
			</div>
		</div>
	)
}

export const Initials = () => {
	return (
		<div className="p-8 flex items-center justify-center bg-white">
			<div className="flex justify-around items-end w-full max-w-lg mx-auto">
				<Avatar variant="initials" size="small">
					TW
				</Avatar>
				<Avatar variant="initials" size="normal">
					TW
				</Avatar>
				<Avatar variant="initials" size="large">
					TW
				</Avatar>
				<Avatar variant="initials" size="xlarge">
					TW
				</Avatar>
				<Avatar variant="initials" size="xxlarge">
					TW
				</Avatar>
			</div>
		</div>
	)
}

export default {
	title: "Components/Avatar",
}
