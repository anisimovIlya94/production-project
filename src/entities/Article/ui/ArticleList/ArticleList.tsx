import { Article } from "../../model/types/article"
import { FC, HTMLAttributeAnchorTarget, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleList.module.scss"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeletons } from "../ArticleListItem/ArticleListItemSkeleton"
import { Text, TextSize } from "shared/ui/Text/Text"
import { ArticleView } from "../../model/consts/articleConsts"

interface ArticleListProps {
  className?: string;
  articles: Article[]
  isLoading?: boolean
	view?: ArticleView
	target?: HTMLAttributeAnchorTarget
}

export const ArticleList: FC<ArticleListProps> = (props) => {
	const { className, isLoading, view = ArticleView.SMALL, articles, target } = props
	const { t } = useTranslation()

	const getSkeletons = useCallback((view: ArticleView) => {
		return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => {
			return <ArticleListItemSkeletons className={cls.card} key={index} view={view}/>
		})
	},[])

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem target={target} key={article.id} className={cls.card} article={article} view={view}/>
		)
	}

	if (!isLoading && articles.length === 0) {
		return (
			<div className={classNames(cls.articleList, {}, [className, cls[view]])}>
				<Text size={TextSize.L} title={t("Cтатьи не найдены!")}/>
			</div>
		)
	}

	return (
		<div className={classNames(cls.articleList, {}, [className, cls[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null
			}
			{isLoading && getSkeletons(view)}
		</div>
	)
}
