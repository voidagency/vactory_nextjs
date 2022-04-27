import React from "react"
import { Layer } from "./layer"
import { Button } from "@vactory/ui/button"

export const Modal = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={true}
				overlayBackground="bg-black"
				overlayOpacity="bg-opacity-70"
				overlay={true}
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				onCloseCallback={() => {
					console.log("this get executed after the unmount of the layer")
				}}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export const BottomCenter = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={false}
				position="bottom-center"
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export const TOPCenter = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={true}
				position="top-center"
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export const BottomRight = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={true}
				position="bottom-right"
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export const BottomLeft = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={true}
				position="bottom-left"
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export const BottomLeftRTL = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative" dir="rtl">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={true}
				position="bottom-left"
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export const TopRight = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={true}
				position="top-right"
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export const TopLeft = () => {
	const [showLayer, setShowLayer] = React.useState(false)
	return (
		<div className="relative">
			<Button
				className="fixed left-5 bottom-5 z-[99] w-40"
				variant={showLayer ? "primary" : "secondary"}
				onClick={() => setShowLayer(!showLayer)}
			>
				{showLayer ? "Cacher le layer" : "Afficher le layer"}
			</Button>
			<Layer
				isShow={showLayer}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={true}
				position="top-left"
				onEsc={() => setShowLayer(false)}
				onClose={() => setShowLayer(false)}
				isShowing={showLayer}
			>
				<div className="bg-white shadow shadow-black text-center px-8 py-10 w-[500px]">
					This is the layer injected on App.js
				</div>
			</Layer>
		</div>
	)
}

export default {
	title: "Components/Layer",
}
