import { getArticlePageLimit } from "./../selectors/getArticlePageSelectors"
import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entities/Article"

interface fetchArticlesProps {
	page?: number
}

export const fetchArticles = createAsyncThunk<Article[], fetchArticlesProps, ThunkOptions<string>>(
	"articlePage/fetchArticles",
	async (props, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI
		const { page = 1 } = props
		const limit = getArticlePageLimit(getState())
        
		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_limit: limit,
					_page: page
				}
			})
            
			return response.data
		} catch (error) {
			return rejectWithValue("Ошибка в получении статей")
		}
      
	}
)