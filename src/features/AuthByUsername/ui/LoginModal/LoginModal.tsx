import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LoginModal.module.scss"

import { PropsWithChildren, Suspense } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { LoginFormAsync } from "../LoginForm/LoginForm.async"
import { Loader } from "shared/ui/Loader/Loader"


interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

export function LoginModal(props: PropsWithChildren<LoginModalProps>) {
	const {
		className,
		isOpen,
		onClose
	} = props

	return (
		<Modal lazy onClose={onClose} isOpen={isOpen} className={classNames(cls.LoginModal, {}, [className])}>
			<Suspense fallback={<Loader/>}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	)
}