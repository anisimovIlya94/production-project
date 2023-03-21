import { StateSchema } from "app/providers/StoreProvider"

export const getAddCommentText = (state: StateSchema) => {
	return state.addCommentForm?.text || ""
}

export const getAddCommentError = (state: StateSchema) => {
	return state.addCommentForm?.error
}