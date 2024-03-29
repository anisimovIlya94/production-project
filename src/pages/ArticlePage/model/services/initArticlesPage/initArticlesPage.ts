import { ThunkOptions } from "@/app/providers/StoreProvider"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getArticlePageInit } from "../../selectors/getArticlePageSelectors"
import { articlePageActions } from "../../slice/articlePageSlice"
import { fetchArticles } from "../fetchArticles"
import { ArticleSortField, ArticleType } from "@/entities/Article"
import { SortOption } from "@/shared/lib/types/sort"

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkOptions<string>>(
	"articlePage/initArticlesPage",
	async (searchParams, thunkAPI) => {
		const { getState, dispatch } = thunkAPI
		const inited = getArticlePageInit(getState())

		const sort = searchParams.get("sort") as ArticleSortField
		const order = searchParams.get("order") as SortOption
		const search = searchParams.get("search")
		const type = searchParams.get("type") as ArticleType
		console.log(type)

		if (sort) {
			dispatch(articlePageActions.setSort(sort))
		}

		if (order) {
			dispatch(articlePageActions.setOrder(order))
		}

		if (search) {
			dispatch(articlePageActions.setSearch(search))
		}

		if (type) {
			dispatch(articlePageActions.setType(type))
		}

		if (!inited) {
			dispatch(articlePageActions.initView())
			dispatch(fetchArticles({}))
		}
        
	}
)