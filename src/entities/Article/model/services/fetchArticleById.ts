import { ThunkOptions } from "@/app/providers/StoreProvider"
import { Article } from "./../types/article"

import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchArticleById = createAsyncThunk<Article, string, ThunkOptions<string>>(
	"articleDetails/fetchArticleById",
	async (articleId, thunkAPI) => {
		const {rejectWithValue, extra} = thunkAPI
		try {
			const response = await extra.api.get<Article>(`/articles/${articleId}`, {
				params: {
					_expand: "user"
				}
			})
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			return rejectWithValue("Ошибка в получении статей")
		}
      
	}
)