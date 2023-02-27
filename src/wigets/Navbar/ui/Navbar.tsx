import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

import { PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { LoginModal } from "features/AuthByUsername"



interface NavbarProps {
  className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])
	
	const onOpenModal = useCallback(() => {
		setIsAuthModal(true)
	},[])

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
				{t("Войти")}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
		</div>
	)
}
