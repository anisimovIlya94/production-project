import { Article, ArticleView } from "../../model/types/article"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleList.module.scss"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeletons } from "../ArticleListItem/ArticleListItemSkeleton"

interface ArticleListProps {
  className?: string;
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList: FC<ArticleListProps> = (props) => {
	const { className, isLoading, view = ArticleView.SMALL, articles } = props
	const { t } = useTranslation()

	const getSkeletons = useCallback((view: ArticleView) => {
		return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => {
			return <ArticleListItemSkeletons className={cls.card} key={index} view={view}/>
		})
	},[])

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem key={article.id} className={cls.card} article={article} view={view}/>
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
