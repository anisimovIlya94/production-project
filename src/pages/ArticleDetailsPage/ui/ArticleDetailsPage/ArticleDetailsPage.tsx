import { ArticleDetails } from "entities/Article"
import { CommentList } from "entities/Comment"
import { getArticleDetailsCommentsLoading } from "../../model/selectors/getArticleDetailsCommentsData"
import { articleDetailsCommentsReducer, getArticleDetailsComments } from "../../model/slice/articleDetailsCommentsSlice"
import { FC } from "react"
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
	const {id} = useParams<{id: string}>()

	const comments = useSelector(getArticleDetailsComments.selectAll)
	const isCommentsLoading = useSelector(getArticleDetailsCommentsLoading)

	useInitialEffects(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	return (
		<DynamicModuleLoader reducers={reducers} isUnmount>
			<div className={classNames(cls.articleDetailsPage, {}, [className])}>
				<ArticleDetails />
				<Text className={cls.commentsTitle} title={t("Комментарии")} />
				<CommentList isLoading={isCommentsLoading} comments={comments} />
			</div>
		</DynamicModuleLoader>
	)
}

export default ArticleDetailsPage