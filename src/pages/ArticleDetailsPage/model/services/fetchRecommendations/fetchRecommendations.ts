import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "entities/Article"

export const fetchRecommendations = createAsyncThunk<Article[], void, ThunkOptions<string>>(
	"articleDetailsPage/fetchRecommendations",
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI
        
		try {
			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_limit: 6,
				}
			})
            
			return response.data
		} catch (error) {
			return rejectWithValue("Ошибка в получении статей")
		}
      
	}
)