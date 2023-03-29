import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getArticlePageInit } from "../../selectors/getArticlePageSelectors"
import { articlePageActions } from "../../slice/articlePageSlice"
import { fetchArticles } from "../fetchArticles"

export const initArticlesPage = createAsyncThunk<void, void, ThunkOptions<string>>(
	"articlePage/initArticlesPage",
	async (_, thunkAPI) => {
		const { getState, dispatch } = thunkAPI
		const inited = getArticlePageInit(getState())

		if (!inited) {
			dispatch(articlePageActions.initView())
			dispatch(fetchArticles({
				page: 1
			}))
		}
        
	}
)