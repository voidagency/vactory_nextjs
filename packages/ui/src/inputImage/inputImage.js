import React, { useRef, useState } from "react"
import { Icon } from "@vactory/ui/icon"

export const InputImage = () => {
	const [selectedImage, setSelectedImage] = useState(null)
	const inputRef = useRef()

	const handleImageInputChange = (e) => {
		const file = e.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setSelectedImage(reader.result)
		}
	}

	const openGallery = (e) => {
		e.stopPropagation()
		inputRef.current.click()
	}

	const resetInput = (e) => {
		e.stopPropagation()
		setSelectedImage(null)
	}

	return (
		<React.Fragment>
			<input
				ref={inputRef}
				onChange={handleImageInputChange}
				type="file"
				name="image"
				className="absolute buttom-0 w-0 h-0 overflow-hidden"
			/>
			<div
				style={{
					backgroundImage: `url(${selectedImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				onClick={() => {
					inputRef.current.click()
				}}
				className="h-24 w-24 bg-gray-300 rounded-full cursor-pointer relative"
			>
				{selectedImage === null ? (
					<button
						className="absolute right-0 bottom-3 h-6 w-6 p-1 rounded-full bg-gray-700"
						onClick={openGallery}
					>
						<Icon id="plus" className="w-full h-full text-white"></Icon>
					</button>
				) : (
					<button
						className="absolute z-10 right-0 bottom-3 h-6 w-6 p-1 rounded-full bg-red-600"
						onClick={resetInput}
					>
						<Icon id="trash" className="w-full h-full text-white"></Icon>
					</button>
				)}
			</div>
		</React.Fragment>
	)
}

export default InputImage
