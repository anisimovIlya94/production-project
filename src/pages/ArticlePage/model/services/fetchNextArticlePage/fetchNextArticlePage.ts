import { getArticlePageHasMore, getArticlePageLoading, getArticlePageNumber } from "./../../selectors/getArticlePageSelectors"
import { ThunkOptions } from "app/providers/StoreProvider/config/StateSchema"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchArticles } from "../fetchArticles"
import { articlePageActions } from "../../slice/articlePageSlice"

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkOptions<string>>(
	"articlePage/fetchNextArticlesPage",
	async (_, thunkAPI) => {
		const { getState, dispatch } = thunkAPI
        
		const page = getArticlePageNumber(getState())
		const isLoading = getArticlePageLoading(getState())
		const hasMore = getArticlePageHasMore(getState())
		if (hasMore && !isLoading) {
            
			dispatch(fetchArticles({
				page: page + 1
			}))
			dispatch(articlePageActions.setPage(page + 1))
		}

      
	}
)