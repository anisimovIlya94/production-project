import { ArticleList, ArticleView } from "entities/Article"
import { ArticleViewSelector } from "entities/Article/ui/ArticleViewSelector/ArticleViewSelector"
import { getArticlePageError, getArticlePageLoading, getArticlePageView } from "pages/ArticlePage/model/selectors/getArticlePageSelectors"
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlePage/fetchNextArticlePage"
import { articlePageActions, articlePageReducer, getArticlePageItems } from "pages/ArticlePage/model/slice/articlePageSlice"
import { FC, useCallback } from "react"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInitialEffects } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { Page } from "shared/ui/Page/Page"
import cls from "./ArticlePage.module.scss"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
	articlePage: articlePageReducer
}

const ArticlePage: FC<ArticlePageProps> = (props) => {
	const { className } = props
	const dispatch = useAppDispatch()

	const articles = useSelector(getArticlePageItems.selectAll)
	const isLoading = useSelector(getArticlePageLoading)
	// const error = useSelector(getArticlePageError)
	const view = useSelector(getArticlePageView)
	

	const onSetView = (view: ArticleView) => {
		dispatch(articlePageActions.setView(view))
	}
	
	const onLoadNext = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])
	
	
	useInitialEffects(() => {
		dispatch(initArticlesPage())
	})

	return (
		<DynamicModuleLoader reducers={reducers} isUnmount={false}>
			<Page onScroll={onLoadNext} className={classNames(cls.articlePage, {}, [className])}>
				<ArticleViewSelector setView={onSetView} view={view} />
				<ArticleList isLoading={isLoading} view={view} articles={articles}/>
			</Page>
		</DynamicModuleLoader>
	)
}

export default ArticlePage