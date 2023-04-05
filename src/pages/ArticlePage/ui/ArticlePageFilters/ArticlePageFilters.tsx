import { ArticleSortField, ArticleType, ArticleView } from "entities/Article"
import { ArticleViewSelector } from "entities/Article/ui/ArticleViewSelector/ArticleViewSelector"
import { articlePageActions } from "../../model/slice/articlePageSlice"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import cls from "./ArticlePageFilters.module.scss"
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector"
import { Card } from "shared/ui/Card/Card"
import { Input } from "shared/ui/Input/Input"
import { useSelector } from "react-redux"
import { getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType } from "../../model/selectors/getArticlePageSelectors"
import { SortOption } from "shared/lib/types/sort"
import { fetchArticles } from "../../model/services/fetchArticles"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { ArticleTypeTabs } from "entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs"

interface ArticlePageFiltersProps {
	className?: string;
	view: ArticleView
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = (props) => {
	const { className, view } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	const sort = useSelector(getArticlePageSort)
	const search = useSelector(getArticlePageSearch)
	const order = useSelector(getArticlePageOrder)
	const tab = useSelector(getArticlePageType)

	const fetchData = useCallback(() => {
		dispatch(fetchArticles({replace: true}))
	}, [dispatch])

	const debouncedData = useDebounce(fetchData, 500)

	const onSetView = useCallback((view: ArticleView) => {
		dispatch(articlePageActions.setView(view))
	},[dispatch])

	const onSetOrder = useCallback((newOrder: SortOption) => {
		dispatch(articlePageActions.setOrder(newOrder))
		dispatch(articlePageActions.setPage(1))
		fetchData()
	}, [dispatch, fetchData])

	const onSetType = useCallback((value: ArticleType) => {
		dispatch(articlePageActions.setType(value))
		dispatch(articlePageActions.setPage(1))
		fetchData()
	},[dispatch, fetchData])

	const onSetSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articlePageActions.setSort(newSort))
		dispatch(articlePageActions.setPage(1))
		fetchData()
	},[dispatch, fetchData])

	const onSetSearch = useCallback((newSearch: string) => {
		dispatch(articlePageActions.setSearch(newSearch))
		dispatch(articlePageActions.setPage(1))
		debouncedData()
	},[dispatch, debouncedData])

	return (
		<div className={classNames(cls.articlePageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					order={order}
					sort={sort}
					onChangeOrder={onSetOrder}
					onChangeSort={onSetSort}
				/>
				<ArticleViewSelector setView={onSetView} view={view} />
			</div>
			<Card className={cls.search}>
				<Input value={search} onChange={onSetSearch} placeholder={t("Поиск...")}/>
			</Card>
			<ArticleTypeTabs onChangeType={onSetType} value={tab}/>
			{/* <Tabs tabs={tabTypes} value={tab} onChangeTab={onSetType}/> */}
		</div>
	)
}
