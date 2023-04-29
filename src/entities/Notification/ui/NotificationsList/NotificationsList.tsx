import { useNotifications } from "../../api/notificationApi"
import { FC } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Skeleton } from "@/shared/ui/Skeleton"
import { VStack } from "@/shared/ui/Stack"
import { NotificationItem } from "../NotificationItem/NotificationItem"
import cls from "./NotificationsList.module.scss"

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList: FC<NotificationsListProps> = (props) => {
	const { className } = props
	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000
	})
  
	if (isLoading) {
		return (
			<VStack max gap="16" className={classNames(cls.notificationsListSkeleton, {}, [className])}>
				<Skeleton width="100%" height={100} border={"8px"} />
				<Skeleton width="100%" height={100} border={"8px"} />
				<Skeleton width="100%" height={100} border={"8px"}/>
			</VStack>
		)
	}

	return (
		<VStack max gap="16" className={classNames(cls.notificationsList, {}, [className])}>
			{data?.map(item => (
				<NotificationItem key={item.id} item={item}/>
			))}
		</VStack>
	)
}
