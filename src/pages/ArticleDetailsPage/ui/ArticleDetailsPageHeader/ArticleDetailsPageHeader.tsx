import { getArticleDetailsData } from "entities/Article"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RoutesPath } from "shared/config/routerConfig/routerConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button"
import { getArticleDetailsCanEdit } from "../../model/selectors/getArticleDetailsCanEdit"
import cls from "./ArticleDetailsPageHeader.module.scss"

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (
	props
) => {
	const { className } = props
	const { t } = useTranslation()
	const navigate = useNavigate()
	const isCanEdit = useSelector(getArticleDetailsCanEdit)
	const articleId = useSelector(getArticleDetailsData)
  
	const onOpenEditPage = useCallback(() => {
		navigate(`${RoutesPath.article_details_edit}${articleId?.id}/edit`)
	},[navigate, articleId?.id])

	const onOpenArticleList = useCallback(() => {
		navigate(RoutesPath.article_details)
	},[navigate])

	return (
		<div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
			<Button onClick={onOpenArticleList}>{t("К списку статей")}</Button>
			{isCanEdit && <Button className={cls.editBtn} onClick={onOpenEditPage}>{t("Редактировать")}</Button>}
		</div>
	)
}
