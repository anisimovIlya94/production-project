import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"

interface useModalProps {
    animationDelay: number
    isOpen?: boolean;
	onClose?: () => void;
}

export function useModal(props: useModalProps) {
	const {
		animationDelay,
		isOpen,
		onClose
	} = props

	const [isClosing, setIsClosing] = useState(false)
	const[isMounting, setIsMounting] = useState(false)
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
    
	const close = useCallback(() => {
		setIsClosing(true)
		timerRef.current = setTimeout(() => {
			onClose?.()
			setIsClosing(false)
		}, animationDelay)
	},[onClose, animationDelay])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			close()
		}
	},[close])

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
	return {
		isClosing,
		isMounting,
		close
	}
}