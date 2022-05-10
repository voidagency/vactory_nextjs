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
					<>
						<div className="flex items-center justify-center w-full h-full p-1">
							<Icon id="upload" className="w-8 h-8 text-gray-400"></Icon>
						</div>
						<button
							className="absolute right-0 bottom-1 h-7 w-7 p-1 rounded-full border-2 border-white bg-gray-700"
							onClick={openGallery}
						>
							<Icon id="plus" className="w-full h-full text-white"></Icon>
						</button>
					</>
				) : (
					<button
						className="absolute z-10 right-0 bottom-1 h-7 w-7 p-1 rounded-full bg-red-600 border-2 border-white bg-gray-700"
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
