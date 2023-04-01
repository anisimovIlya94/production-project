import { StateSchema } from "app/providers/StoreProvider"

import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { Article } from "entities/Article"
import { ArticleDetailsPageRecommendationsSchema } from "../types/ArticleDetailsPageRecommendationsSchema"
import { fetchRecommendations } from "../services/fetchRecommendations/fetchRecommendations"
  
const recommendationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id
})

export const getArticleDetailsPageRecommendations = recommendationsAdapter.getSelectors((state: StateSchema) => {
	return state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
})
  
const articleDetailsPageRecommendationsSlice = createSlice({
	name: "recommendations",
	initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {}
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRecommendations.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchRecommendations.fulfilled, (
				state,
				action: PayloadAction<Article[]>
			) => {
				state.isLoading = false
				recommendationsAdapter.setAll(state, action.payload)
			})
			.addCase(fetchRecommendations.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const {reducer: articleDetailsPageRecommendationsReducer} =  articleDetailsPageRecommendationsSlice