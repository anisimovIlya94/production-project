import { classNames } from "@/shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ButtonTheme } from "@/shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { RoutesPath } from "@/shared/config/routerConfig/routerConfig"
import { HStack } from "@/shared/ui/Stack/HStack/HStack"
import { getArticleDetailsCanEdit } from "../../model/selectors/getArticleDetailsCanEdit"
import { getArticleDetailsData } from "@/entities/Article"

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
	const { className } = props
	const { t } = useTranslation()
	const navigate = useNavigate()
	const canEdit = useSelector(getArticleDetailsCanEdit)
	const article = useSelector(getArticleDetailsData)

	const onBackToList = useCallback(() => {
		navigate(RoutesPath.articles)
	}, [navigate])

	const onEditArticle = useCallback(() => {
		navigate(`${RoutesPath.article_details}${article?.id}/edit`)
	}, [article?.id, navigate])

	return (
		<HStack max justify="between" className={classNames("", {}, [className])}>
			<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
				{t("Назад к списку")}
			</Button>
			{canEdit && (
				<Button
					theme={ButtonTheme.OUTLINE}
					onClick={onEditArticle}
				>
					{t("Редактировать")}
				</Button>
			)}
		</HStack>
	)
})
