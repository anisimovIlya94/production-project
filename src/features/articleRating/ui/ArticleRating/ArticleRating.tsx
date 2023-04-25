import { RatingCard } from "@/entities/Rating"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useArticleRating, useRateArticle } from "../../api/articleRatingApi"
import { useSelector } from "react-redux"
import { getUserAuthData } from "@/entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"

export interface ArticleRatingProps {
  className?: string;
  articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
	const { className, articleId } = props
	const { t } = useTranslation()
	const userData = useSelector(getUserAuthData)

	const { data, isLoading } = useArticleRating({
		articleId,
		userId: userData?.id ?? ""
	})

	const [rateArticle] = useRateArticle()

	const handleAccept = useCallback((starNumber: number, feedback?: string) => {
		try {
			rateArticle({
				articleId,
				userId: userData?.id ?? "",
				rate: starNumber,
				feedback
			})
		} catch (error) {
			console.log(error)
		}
    
	}, [articleId, rateArticle, userData?.id])

	const onAccept = useCallback((starNumber: number, feedback?: string) => {
		handleAccept(starNumber, feedback)
	}, [handleAccept])
  
	const onCancel = useCallback((starNumber: number) => {
		handleAccept(starNumber)
	},[handleAccept])

	if (isLoading) {
		return <Skeleton width={"100%"} height={120}/>
	}

	const rating = data?.[0]?.rate

	return (
		<RatingCard
			title={t("Оцените статью")}
			feedbackTitle={t("Оставьте свой отзыв о статье")}
			hasFeedback
			className={className}
			rate={rating}
			onAccept={onAccept}
			onCancel={onCancel}
		/>
	)
}

export default ArticleRating