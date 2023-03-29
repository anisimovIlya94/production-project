import { fetchArticles } from "./../services/fetchArticles"
import { StateSchema } from "app/providers/StoreProvider"

import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { ArticlePageSchema } from "../types/articlePage"
import { Article, ArticleView } from "entities/Article"
import { ARTICLE_VIEW_AUTH_KEY } from "shared/const/localstorage"
  
const articlePageAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id
})

export const getArticlePageItems = articlePageAdapter.getSelectors((state: StateSchema) => {
	return state.articlePage || articlePageAdapter.getInitialState()
})
  
const articlePageSlice = createSlice({
	name: "articlePageList",
	initialState: articlePageAdapter.getInitialState<ArticlePageSchema>({
		isLoading: false,
		error: undefined,
		view: ArticleView.SMALL,
		ids: [],
		entities: {},
		page: 1,
		hasMore: true,
		_init: false
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload
			localStorage.setItem(ARTICLE_VIEW_AUTH_KEY, action.payload)
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		initView: (state) => {
			const local = localStorage.getItem(ARTICLE_VIEW_AUTH_KEY) as ArticleView
			// if (local) {
			state.view = local 
			state.limit = local === ArticleView.BIG ? 4 : 9
			state._init = true
			// }
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchArticles.fulfilled, (
				state,
				action: PayloadAction<Article[]>
			) => {
				state.isLoading = false
				articlePageAdapter.addMany(state, action.payload)
				state.hasMore = action.payload.length > 0
				console.log(state.hasMore)
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { reducer: articlePageReducer } = articlePageSlice
export const { actions: articlePageActions } = articlePageSlice