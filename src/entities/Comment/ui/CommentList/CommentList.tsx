import { Comment } from "../../model/types/comment"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CommentList.module.scss"
import { Text } from "shared/ui/Text/Text"
import { CommentCard } from "../CommentCard/CommentCard"

interface CommentListProps {
  className?: string;
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = (props) => {
	const { className, comments, isLoading } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.commentList, {}, [className])}>
			{comments?.length
				? comments.map((comment) => (
					<CommentCard key={comment.id} isLoading={isLoading} comment={comment}/>
				))
				: <Text title={t("Комментарии отсутствуют")}/>
			}
		</div>
	)
}