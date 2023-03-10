import {classNames, Mods} from "shared/lib/classNames/classNames"
import cls from "./Modal.module.scss"

import { PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState, MutableRefObject } from "react"
import { Portal } from "../Portal/Portal"
import { useThemes } from "app/providers/themeProvider"

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
	onClose: () => void;
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

	const [isClosing, setIsClosing] = useState(false)
	const[isMounting, setIsMounting] = useState(false)
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

	const {theme} = useThemes()

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}

	const closeHandler = useCallback(() => {
		setIsClosing(true)
		timerRef.current = setTimeout(() => {
			onClose()
			setIsClosing(false)
		}, ANIMATION_DELAY)
	},[onClose])

	const contentClickHandler = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			closeHandler()
		}
	},[closeHandler])

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
		}
		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [isOpen, onKeyDown])
	
	useEffect(() => {
		if (isOpen) {
			setIsMounting(true)
		}
	}, [isOpen])
	
	if (lazy && !isMounting) {
		return null
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className, theme])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={contentClickHandler}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}