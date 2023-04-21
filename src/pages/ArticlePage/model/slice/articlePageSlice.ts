import { fetchArticles } from "./../services/fetchArticles"
import { StateSchema } from "@/app/providers/StoreProvider"

import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit"
import { ArticlePageSchema } from "../types/articlePage"
import { Article, ArticleType, ArticleView } from "@/entities/Article"
import { ARTICLE_VIEW_AUTH_KEY } from "@/shared/const/localstorage"
import { ArticleSortField } from "@/entities/Article"
import { SortOption } from "@/shared/lib/types/sort"
  
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
		_init: false,
		limit: 9,
		order: "asc",
		sort: ArticleSortField.VIEWS,
		search: "",
		type: ArticleType.ALL
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload
			localStorage.setItem(ARTICLE_VIEW_AUTH_KEY, action.payload)
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setOrder: (state, action: PayloadAction<SortOption>) => {
			state.order = action.payload
		},
		setType: (state, action: PayloadAction<ArticleType>) => {
			state.type = action.payload
		},
		setSort: (state, action: PayloadAction<ArticleSortField>) => {
			state.sort = action.payload
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
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
			.addCase(fetchArticles.pending, (state, action) => {
				state.isLoading = true
				state.error = undefined
				if (action.meta.arg.replace) {
					articlePageAdapter.removeAll(state)
				}
			})
			.addCase(fetchArticles.fulfilled, (
				state,
				action
			) => {
				state.isLoading = false
				state.hasMore = action.payload.length >= state.limit
				if (action.meta.arg.replace) {
					articlePageAdapter.setMany(state, action.payload)
				} else {
					articlePageAdapter.addMany(state, action.payload)
				}
				
			})
			.addCase(fetchArticles.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { reducer: articlePageReducer } = articlePageSlice
export const { actions: articlePageActions } = articlePageSlice