import { getArticlePageItems } from "../../model/slice/articlePageSlice"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getArticlePageError, getArticlePageLoading } from "../../model/selectors/getArticlePageSelectors"
import { Text } from "@/shared/ui/Text"
import { ArticleList, ArticleView } from "@/entities/Article"

interface ArticleInfiniteListProps {
  className?: string;
  view?: ArticleView
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
	const { className, view = ArticleView.SMALL } = props
	const { t } = useTranslation()
	const articles = useSelector(getArticlePageItems.selectAll)
	const isLoading = useSelector(getArticlePageLoading)
	const error = useSelector(getArticlePageError)

	if (error) {
		return <Text title={t("Статьи не найдены!")}/>
	}

	return (
		<ArticleList className={className} isLoading={isLoading} view={view} articles={articles}/>
	)
}
