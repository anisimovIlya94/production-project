import { ArticleDetails } from "entities/Article"
import { CommentList } from "entities/Comment"
import { getArticleDetailsCommentsLoading } from "../../model/selectors/getArticleDetailsCommentsData"
import { articleDetailsCommentsReducer, getArticleDetailsComments } from "../../model/slice/articleDetailsCommentsSlice"
import { FC, Suspense, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { Text } from "shared/ui/Text/Text"
import cls from "./ArticleDetailsPage.module.scss"
import { useInitialEffects } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId"
import { useParams } from "react-router-dom"
import { AddCommentForm } from "features/addCommentFrom"
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/AddCommentForArticle/AddCommentForArticle"
import { Page } from "shared/ui/Page/Page"

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const { id } = useParams<{ id: string }>()
	
	const article = __PROJECT__ !== "storybook" ? id : "1"

	const comments = useSelector(getArticleDetailsComments.selectAll)
	const isCommentsLoading = useSelector(getArticleDetailsCommentsLoading)

	useInitialEffects(() => {
		dispatch(fetchCommentsByArticleId(article))
	})

	const onSetComment = useCallback((text) => {
		dispatch(addCommentForArticle(text))
	},[dispatch])

	return (
		<DynamicModuleLoader reducers={reducers} isUnmount>
			<Page className={classNames(cls.articleDetailsPage, {}, [className])}>
				<ArticleDetails />
				<Text className={cls.commentsTitle} title={t("Комментарии")} />
				<Suspense fallback="">
					<AddCommentForm
						onSetComment={onSetComment}
					/>
				</Suspense>
				
				<CommentList isLoading={isCommentsLoading} comments={comments} />
			</Page>
		</DynamicModuleLoader>
	)
}

export default ArticleDetailsPage
