import { useThemes } from "app/providers/themeProvider"
import { FC, ReactNode } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import { useModal } from "shared/lib/hooks/useModal/useModal"
import { Overlay } from "../Overlay/Overlay"
import { Portal } from "../Portal/Portal"
import cls from "./Drawer.module.scss"

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Drawer: FC<DrawerProps> = (props) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		lazy
	} = props
	const { theme } = useThemes()

	const { isClosing, isMounting, close } = useModal({
		animationDelay: 300,
		isOpen,
		onClose
	})
  
	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}
  
	if (lazy && !isMounting) {
		return null
	}

	return (
		<Portal>
			<div className={classNames(cls.drawer, mods, [className, theme])}>
				<Overlay onClick={close}/>
				<div className={cls.content}>
					{children}
				</div>
			</div>
		</Portal>
	)
}
