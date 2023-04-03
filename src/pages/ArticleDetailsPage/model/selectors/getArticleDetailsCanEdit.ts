import { getArticleDetailsData } from "entities/Article"
import { createSelector } from "@reduxjs/toolkit"
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"

export const getArticleDetailsCanEdit = createSelector(
	getUserAuthData,
	getArticleDetailsData,
	(user, article) => {
		if (!user || !article) {
			return false
		}
		return user.id === article.user.id
	}
)