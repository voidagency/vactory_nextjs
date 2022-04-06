import { FETCHING, SUCCESS, ERROR, IDLE } from "./actionTypes"

export const fetching = () => ({ type: FETCHING })
export const success = (response) => ({ type: SUCCESS, response })
export const error = (response) => ({ type: ERROR, response })
export const idle = () => ({ type: IDLE, response: null })
