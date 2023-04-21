import { ArticleDetailsCommentsSchema } from "./../types/ArticleDetailsCommentsSchema"
import { StateSchema } from "@/app/providers/StoreProvider"

import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { Comment } from "@/entities/Comment"
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId"
  
const commentsAdapter = createEntityAdapter<Comment>({
	selectId: (comment) => comment.id
})

export const getArticleDetailsComments = commentsAdapter.getSelectors((state: StateSchema) => {
	return state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
})
  
const articleDetailsCommentsSlice = createSlice({
	name: "comments",
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {}
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (
				state,
				action: PayloadAction<Comment[]>
			) => {
				state.isLoading = false
				commentsAdapter.setAll(state, action.payload)
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const {reducer: articleDetailsCommentsReducer} =  articleDetailsCommentsSlice