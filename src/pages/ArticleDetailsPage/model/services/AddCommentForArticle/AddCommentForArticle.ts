import { getUserAuthData } from "./../../../../../entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { getArticleDetailsData } from "./../../../../../entities/Article/model/selectors/getArticleDetailsData"
import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"

import { createAsyncThunk } from "@reduxjs/toolkit"
import { Comment } from "entities/Comment"
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId"

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkOptions<string>>(
	"articleDetails/addCommentForArticle",
	async (text, thunkAPI) => {
		const { rejectWithValue, extra, dispatch, getState } = thunkAPI

		const article = getArticleDetailsData(getState())
		const user = getUserAuthData(getState())

		if (!text || !article || !user) {
			return rejectWithValue("no data")
		}

		try {
			const response = await extra.api.post<Comment>("/comments", {
				id: String(Date.now()),
				text,
				articleId: article.id,
				userId: user.id
			})

			dispatch(fetchCommentsByArticleId(article.id))
            
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			return rejectWithValue("Ошибка при добавлении комментария")
		}
      
	}
)