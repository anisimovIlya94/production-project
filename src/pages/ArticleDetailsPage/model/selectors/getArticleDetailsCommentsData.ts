import { StateSchema } from "app/providers/StoreProvider"

export const getArticleDetailsCommentsLoading = (state: StateSchema) => {
	return state.articleDetailsComments?.isLoading
}

export const getArticleDetailsCommentsError = (state: StateSchema) => {
	return state.articleDetailsComments?.error
}