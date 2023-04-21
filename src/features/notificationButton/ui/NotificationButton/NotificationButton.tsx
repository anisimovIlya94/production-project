import { NotificationsList } from "entities/Notification"
import { FC, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Icon } from "shared/ui/Icon/Icon"
import { Popover } from "shared/ui/Popups"
import PopupIcon from "shared/assets/icons/PopupIcon.svg"
import cls from "./NotificationButton.module.scss"
import { Drawer } from "shared/ui/Drawer/Drawer"
import { AnimationProvider } from "shared/lib/components/AnimationProvider"

interface NotificationButtonProps {
  className?: string;
}

function detectDevice() {
	const isMobile = window.matchMedia
	if (!isMobile) return false
	
	const device = isMobile("(pointer:coarse)")
	return device.matches
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
	const { className } = props
	
	const [isOpen, setIsOpen] = useState(false)

	const drawerOpenHandler = () => {
		setIsOpen(true)
	}

	const drawerCloseHandler = () => {
		setIsOpen(false)
	}

	const device = detectDevice()

	const trigger = (
		<Button onClick={drawerOpenHandler} theme={ButtonTheme.CLEAR}>
			<Icon inverted Src={PopupIcon} />
		</Button>
	)

	if (device) {
		return (
			<>
				{trigger}
				<AnimationProvider>
					<Drawer isOpen={isOpen} onClose={drawerCloseHandler}>
						<NotificationsList/>
					</Drawer>
				</AnimationProvider>
			</>
		)
	}

	return (
		<Popover
			className={classNames(cls.notificationButton, {}, [className])}
			direction="bottom left"
			trigger={trigger}>
			<NotificationsList className={cls.notifications}/>
		</Popover>
	)
}
