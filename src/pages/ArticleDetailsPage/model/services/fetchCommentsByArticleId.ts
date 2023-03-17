// fetchCommentsByArticleId

import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { Comment } from "entities/Comment"

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkOptions<string>>(
	"articleDetails/fetchCommentsByArticleId",
	async (articleId, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI
		if (!articleId) {
			return rejectWithValue("error")
		}
		try {
			const response = await extra.api.get<Comment[]>("/comments", {
				params: {
					articleId,
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