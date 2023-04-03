import { ArticleType } from "entities/Article/model/types/article"
import { getArticlePageLimit, getArticlePageNumber, getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType } from "./../selectors/getArticlePageSelectors"
import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entities/Article"
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams"

interface fetchArticlesProps {
	replace?: boolean
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkOptions<string>>(
	"articlePage/fetchArticles",
	async (props, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI
		const page = getArticlePageNumber(getState())
		const limit = getArticlePageLimit(getState())
		const sort = getArticlePageSort(getState())
		const search = getArticlePageSearch(getState())
		const order = getArticlePageOrder(getState())
		const type = getArticlePageType(getState())

		console.log(type)
        
		try {
			addQueryParams({sort, search, order, type})
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_limit: limit,
					_sort: sort,
					_order: order,
					_page: page,
					q: search,
					type_like: type === ArticleType.ALL ? undefined : type
				}
			})
            
			return response.data
		} catch (error) {
			return rejectWithValue("Ошибка в получении статей")
		}
      
	}
)