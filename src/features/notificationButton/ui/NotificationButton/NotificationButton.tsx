import { NotificationsList } from "entities/Notification"
import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Icon } from "shared/ui/Icon/Icon"
import { Popover } from "shared/ui/Popups"
import PopupIcon from "shared/assets/icons/PopupIcon.svg"
import cls from "./NotificationButton.module.scss"

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
	const { className } = props

	return (
		<Popover className={classNames(cls.notificationButton, {}, [className])} direction="bottom left" trigger={(
			<Button theme={ButtonTheme.CLEAR}>
				<Icon inverted Src={PopupIcon} />
			</Button>
		)}>
			<NotificationsList className={cls.notifications}/>
		</Popover>
	)
}
