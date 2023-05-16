import { getArticlePageView } from "../../model/selectors/getArticlePageSelectors"
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlePage/fetchNextArticlePage"
import { articlePageReducer } from "../../model/slice/articlePageSlice"
import { FC, useCallback } from "react"
import { useSelector } from "react-redux"
import { classNames } from "@/shared/lib/classNames/classNames"
import {
	DynamicModuleLoader,
	ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect"
import { Page } from "@/wigets/Page"
import cls from "./ArticlePage.module.scss"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"
import { ArticlePageFilters } from "../ArticlePageFilters/ArticlePageFilters"
import { useSearchParams } from "react-router-dom"
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList"
import { ArticlePageGreeting } from "@/features/articlePageGreeting"

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
	articlePage: articlePageReducer,
}

const ArticlePage: FC<ArticlePageProps> = (props) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()
	const view = useSelector(getArticlePageView)

	const onLoadNext = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])

	useInitialEffects(() => {
		dispatch(initArticlesPage(searchParams))
	})

	return (
		<DynamicModuleLoader reducers={reducers} isUnmount={false}>
			<Page
				data-testId="ArticlePage"
				onScroll={onLoadNext}
				className={classNames(cls.articlePage, {}, [className])}
			>
				<ArticlePageFilters view={view} />
				<ArticleInfiniteList view={view} className={cls.list} />
				<ArticlePageGreeting/>
			</Page>
		</DynamicModuleLoader>
	)
}

export default ArticlePage
