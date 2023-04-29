import { StateSchema } from "@/app/providers/StoreProvider"
import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article"

export const getArticlePageError = (state: StateSchema) => {
	return state.articlePage?.error
}

export const getArticlePageLoading = (state: StateSchema) => {
	return state.articlePage?.isLoading
}

export const getArticlePageView = (state: StateSchema) => {
	return state.articlePage?.view || ArticleView.SMALL
}

export const getArticlePageLimit = (state: StateSchema) => {
	return state.articlePage?.limit || 9
}

export const getArticlePageNumber = (state: StateSchema) => {
	return state.articlePage?.page || 1
}

export const getArticlePageHasMore = (state: StateSchema) => {
	return state.articlePage?.hasMore
}

export const getArticlePageInit = (state: StateSchema) => {
	return state.articlePage?._init || false
}

export const getArticlePageOrder = (state: StateSchema) => {
	return state.articlePage?.order ?? "asc"
}

export const getArticlePageSort = (state: StateSchema) => {
	return state.articlePage?.sort ?? ArticleSortField.CREATED
}

export const getArticlePageSearch = (state: StateSchema) => {
	return state.articlePage?.search ?? ""
}

export const getArticlePageType = (state: StateSchema) => {
	return state.articlePage?.type ?? ArticleType.ALL
}