import React from "react"
import { Box, Button, Flex, Layer, Text } from "vactory-ui"
import { Form, RenderField } from "../components"
import { toRegister } from "../utils/toRegister"

export default {
	title: "Form",
}

const schema = {
	name: {
		type: "text",
		label: "Name",
		placeholder: "Name",
	},
}

export const LayerForm = () => {
	const [showLayerForm, setShowLayerForm] = React.useState(false)
	const [showSuccessModal, setShowSuccessModal] = React.useState(false)

	const render = (resetForm, isLoading, isSuccess, isError) => {
		React.useEffect(() => {
			if (isSuccess) {
				setShowLayerForm(false)
				setShowSuccessModal(true)
			}
		}, [isSuccess]) // eslint-disable-line react-hooks/exhaustive-deps

		return (
			<Box>
				<RenderField
					field={[
						"name",
						{
							...schema.name,
							label: null,
						},
					]}
				/>

				<Box>
					<Button type="submit" disabled={isLoading}>
						Submit
					</Button>
				</Box>
			</Box>
		)
	}

	return (
		<Box>
			<Button
				mb="25px"
				type="button"
				borderRadius="rounded"
				outline="primary"
				onClick={() => setShowLayerForm(true)}
			>
				Open form
			</Button>

			{showLayerForm && (
				<Layer onClickOutside={() => setShowLayerForm(false)}>
					<Box
						p="medium"
						boxShadow={4}
						flexDirection="column"
						bg="white"
						borderRadius="small"
						maxWidth="400px"
						minWidth="400px"
					>
						<Form
							webformId={"test_form"}
							handleSubmitRedirection={false}
							schema={schema}
							render={render}
						/>
					</Box>
				</Layer>
			)}

			{showSuccessModal && (
				<Layer onClickOutside={() => setShowSuccessModal(false)}>
					<Box
						p="medium"
						boxShadow={4}
						bg="white"
						borderRadius="small"
						maxWidth="400px"
						minWidth="400px"
					>
						<Box>
							<Text>Thank you for filling our form</Text>
						</Box>
						<Box mt="medium">
							<Button
								borderRadius="rounded"
								mx="small"
								variant="danger"
								onClick={() => setShowSuccessModal(false)}
							>
								Close
							</Button>
						</Box>
					</Box>
				</Layer>
			)}
		</Box>
	)
}
