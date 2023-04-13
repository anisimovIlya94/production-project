import { CommentList } from "entities/Comment"
import AddCommentForm from "features/addCommentFrom/ui/AddCommentForm/AddCommentForm"
import { getArticleDetailsComments } from "../../model/slice/articleDetailsCommentsSlice"
import { FC, Suspense, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Text } from "shared/ui/Text/Text"
import { getArticleDetailsCommentsLoading } from "../../model/selectors/getArticleDetailsCommentsData"
import { addCommentForArticle } from "../../model/services/AddCommentForArticle/AddCommentForArticle"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInitialEffects } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId"

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (
	props
) => {
	const { className, id } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const article = __PROJECT__ !== "storybook" ? id : "1"

	useInitialEffects(() => {
		dispatch(fetchCommentsByArticleId(article))
	})

	const comments = useSelector(getArticleDetailsComments.selectAll)
	const isCommentsLoading = useSelector(getArticleDetailsCommentsLoading)
	const onSetComment = useCallback((text) => {
		dispatch(addCommentForArticle(text))
	},[dispatch])

	return (
		<div className={classNames("", {}, [className])}>
			<Text title={t("Комментарии")} />
			<Suspense fallback="">
				<AddCommentForm
					onSetComment={onSetComment}
				/>
			</Suspense>
			<CommentList isLoading={isCommentsLoading} comments={comments} />
		</div>
	)
}
