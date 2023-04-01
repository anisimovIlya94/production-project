import { ArticleDetailsPageRecommendationsSchema } from "./ArticleDetailsPageRecommendationsSchema"
import { ArticleDetailsCommentsSchema } from "../../model/types/ArticleDetailsCommentsSchema"

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsPageRecommendationsSchema
}