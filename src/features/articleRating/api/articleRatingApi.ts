import { Rating } from "@/entities/Rating"
import { rtkApi } from "@/shared/api/rtkApi"

interface rateArticleArgs {
    rate: number
    feedback?: string
    userId: string
    articleId: string
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<Rating[], { userId: string, articleId: string }>({
			query: ({ userId, articleId }) => ({
				url: "/article-rating",
				params: {
					userId,
					articleId
				}
			}),
		}),
		rateArticle: build.mutation<void, rateArticleArgs>({
			query: (args) => ({
				url: "/article-rating",
				method: "POST",
				body: args
			}),
		}),
	})
})
  
export const useArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation