export const defaultStyles = {
	container: {
		padding: 4,
	},
	fieldSpacing: 6,
	fieldsGroup: {},
	buttonGroup: {
		marginTop: 4,
		display: "flex",
		justifyContent: "flex-end",
		"&& > *": {
			mr: "5px",
			"&:last-child": {
				mr: 0,
			},
		},
	},
	submitButton: {
		fill: "primary",
	},
	submitButtonRightIcon: {
		size: "14px",
		ml: "5px",
	},
	submitButtonLeftIcon: {
		size: "14px",
		mr: "5px",
	},
	resetButton: {
		fill: "basic",
	},
	formControl: {
		width: "100%",
		position: "relative",
		mb: "medium",
	},
	formControlLayout: {
		inner: {},
		label: {},
		field: {},
	},
	formLabel: {
		display: "block",
		mr: 3,
		mb: 2,
		fontWeight: "medium",
	},
	errorMessage: {
		mt: "4px",
		color: "danger500",
		px: "1",
		lineHeight: "1em",
		borderRadius: "xsmall",
	},
	requiredIndicator: {
		mx: 2,
		color: "danger500",
	},
	helperText: {
		mt: 2,
		color: "gray900",
		lineHeight: "normal",
		fontSize: "caption",
	},
	helperTextSeparator: {
		border: "none",
		m: "5px 0",
		height: "1px",
		bg: "gray300",
	},
	textField: {
		input: {
			width: "100%",
		},
	},
	textAreaField: {
		input: {
			width: "100%",
			minHeight: "130px",
		},
	},
	numberField: {
		input: {
			width: "100%",
		},
	},
	selectField: {
		input: {
			width: "100%",
		},
	},
	checkboxField: {
		input: {
			mr: "8px",
		},
	},
	checkboxesField: {
		input: {
			mr: "8px",
		},
		labelOptions: {
			fontWeight: "normal",
		},
	},
	radiosField: {
		input: {
			mr: "8px",
		},
		labelOptions: {
			fontWeight: "normal",
		},
	},
}
