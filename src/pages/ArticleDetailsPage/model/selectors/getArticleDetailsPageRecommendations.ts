import { StateSchema } from "app/providers/StoreProvider"

export const getArticleDetailsPageRecommendationsLoading = (state: StateSchema) => {
	return state.articleDetailsPage?.recommendations.isLoading
}

export const getArticleDetailsPageRecommendationsError = (state: StateSchema) => {
	return state.articleDetailsPage?.recommendations.error
}