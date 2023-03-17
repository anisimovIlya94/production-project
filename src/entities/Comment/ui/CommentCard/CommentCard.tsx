import { Comment } from "../../model/types/comment"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CommentCard.module.scss"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Text } from "shared/ui/Text/Text"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

interface CommentCardProps {
  className?: string;
  comment: Comment
  isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = (props) => {
	const { className, comment, isLoading } = props
	const { t } = useTranslation()

	if (isLoading) {
		return (
			<div className={classNames(cls.commentCard, {}, [className])}>
				<div className={cls.header}>
					<Skeleton width={30} height={30} border={"50%"}/>
					<Skeleton className={cls.title} width={100} height={16}/>
				</div>
				<Skeleton width={"100%"} height={50}/>
			</div>
		)
	}

	return <div className={classNames(cls.commentCard, {}, [className])}>
		<div className={cls.header}>
			{comment.user.avatar && <Avatar size={30} src={comment.user.avatar}/>}
			<Text className={cls.title} title={comment.user.username}/>
		</div>
		<Text text={comment.text}/>
	</div>
}