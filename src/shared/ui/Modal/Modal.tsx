import {classNames, Mods} from "@/shared/lib/classNames/classNames"
import cls from "./Modal.module.scss"

import { PropsWithChildren, ReactNode } from "react"
import { Portal } from "../Portal/Portal"
import { Overlay } from "../Overlay/Overlay"
import { useModal } from "@/shared/lib/hooks/useModal/useModal"
import { useThemes } from "@/shared/lib/hooks/useThemes/useThemes"

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 300

export function Modal(props: PropsWithChildren<ModalProps>) {
	const {
		className,
		children,
		isOpen,
		onClose,
		lazy
	} = props

	const { theme } = useThemes()
	
	const { isClosing, isMounting, close } = useModal({
		animationDelay: ANIMATION_DELAY,
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
			<div className={classNames(cls.Modal, mods, [className, theme])}>
				<Overlay onClick={close}/>
				<div className={cls.content}>
					{children}
				</div>
			</div>
		</Portal>
	)
}