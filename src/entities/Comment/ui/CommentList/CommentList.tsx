import { Comment } from "../../model/types/comment"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Text } from "@/shared/ui/Text"
import { CommentCard } from "../CommentCard/CommentCard"
import { VStack } from "@/shared/ui/Stack"

interface CommentListProps {
  className?: string;
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = (props) => {
	const { className, comments, isLoading } = props
	const { t } = useTranslation()

	if (isLoading) {
		return (
			<VStack gap="16" max className={classNames("", {}, [className])}>
				<CommentCard isLoading={isLoading} />
				<CommentCard isLoading={isLoading} />
				<CommentCard isLoading={isLoading}/>
			</VStack>
		)
	}

	return (
		<VStack gap="16" max className={classNames("", {}, [className])}>
			{comments?.length
				? comments.map((comment) => (
					<CommentCard key={comment.id} isLoading={isLoading} comment={comment}/>
				))
				: <Text title={t("Комментарии отсутствуют")}/>
			}
		</VStack>
	)
}
