import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

import { PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Modal } from "shared/ui/Modal/Modal"
import { Button, ButtonTheme } from "shared/ui/Button/Button"



interface NavbarProps {
  className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev)
	},[])

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
				{t("Войти")}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t("Lorem ipsum dolor, sit amet consectetur adipisicing elit.Deserunt mollitia amet ea ducimus odio velit quod accusantium, omnis ab neque!")}
			</Modal>
		</div>
	)
}
