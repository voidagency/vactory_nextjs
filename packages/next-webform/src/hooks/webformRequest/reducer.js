import { FETCHING, SUCCESS, ERROR, IDLE } from "./actionTypes"

export const initialState = {
	status: null,
	response: null,
}

const reducer = (state = initialState, { type, response } = {}) => {
	switch (type) {
		case FETCHING:
			return { ...initialState, status: FETCHING }
		case SUCCESS:
			return { ...state, status: SUCCESS, response }
		case ERROR:
			return { ...state, status: ERROR, response }
		case IDLE:
			return { ...state, status: IDLE, response: null }
		default:
			return state
	}
}

export default reducer
