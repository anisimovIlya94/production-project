import { ArticleDetailsPageSchema } from "./../types/index"
import { articleDetailsCommentsReducer } from "../../model/slice/articleDetailsCommentsSlice"
import { combineReducers } from "@reduxjs/toolkit"
import { articleDetailsPageRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice"

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	comments: articleDetailsCommentsReducer,
	recommendations: articleDetailsPageRecommendationsReducer
})