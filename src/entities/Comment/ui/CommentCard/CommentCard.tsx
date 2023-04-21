import { Comment } from "../../model/types/comment"
import { FC } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./CommentCard.module.scss"
import { Avatar } from "@/shared/ui/Avatar/Avatar"
import { Text } from "@/shared/ui/Text/Text"
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { RoutesPath } from "@/shared/config/routerConfig/routerConfig"

interface CommentCardProps {
  className?: string;
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = (props) => {
	const { className, comment, isLoading } = props

	if (isLoading) {
		return (
			<div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
				<div className={cls.header}>
					<Skeleton width={30} height={30} border={"50%"}/>
					<Skeleton className={cls.title} width={100} height={16}/>
				</div>
				<Skeleton width={"100%"} height={50}/>
			</div>
		)
	}

	if (!comment) {
		return null
	}

	return <div className={classNames(cls.commentCard, {}, [className])}>
		<AppLink to={`${RoutesPath.profile}${comment.user.id}`} className={cls.header}>
			{comment.user.avatar && <Avatar size={30} src={comment.user.avatar}/>}
			<Text className={cls.title} title={comment.user.username}/>
		</AppLink>
		<Text text={comment.text}/>
	</div>
}
