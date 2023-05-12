import { ArticleDetails } from "@/entities/Article"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "@/shared/lib/classNames/classNames"
import {
	DynamicModuleLoader,
	ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { Text } from "@/shared/ui/Text"
import cls from "./ArticleDetailsPage.module.scss"
import { useParams } from "react-router-dom"
import { Page } from "@/wigets/Page"
import { articleDetailsPageReducer } from "../../model/slice"
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList"
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments"
import { ArticleRating } from "@/features/articleRating"
import { VStack } from "@/shared/ui/Stack"
import { getFeaturesFlag } from "@/shared/lib/features/setGetFeatures"
import { Counter } from "@/entities/Counter"

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()

	const { id = "1" } = useParams<{ id: string }>()
	const isArticleRatingEnabled = getFeaturesFlag("isArticleRatingEnabled")
	const isCounter = getFeaturesFlag("isCounterEnabled")

	if (!id) {
		return <Text title={t("Страница не найдена")} />
	}

	return (
		<DynamicModuleLoader reducers={reducers} isUnmount>
			<Page className={classNames(cls.articleDetailsPage, {}, [className])}>
				<VStack gap="16" max>
					<ArticleDetailsPageHeader />
					<ArticleDetails />
					{isArticleRatingEnabled && <ArticleRating articleId={id} />}
					{isCounter && <Counter/>}
					<ArticleRecommendationsList />
					<ArticleDetailsComments id={id} />
				</VStack>
			</Page>
		</DynamicModuleLoader>
	)
}

export default ArticleDetailsPage
