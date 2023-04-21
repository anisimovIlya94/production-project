import { StateSchema } from "@/app/providers/StoreProvider"

export const getArticleDetailsCommentsLoading = (state: StateSchema) => {
	return state.articleDetailsPage?.comments.isLoading
}

export const getArticleDetailsCommentsError = (state: StateSchema) => {
	return state.articleDetailsPage?.comments.error
}