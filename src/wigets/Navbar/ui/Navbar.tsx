import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

import { memo, PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { LoginModal } from "features/AuthByUsername"
import { useDispatch, useSelector } from "react-redux"
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { userActions } from "entities/User"



interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: PropsWithChildren<NavbarProps>) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])
	
	const onOpenModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogOut = () => {
		dispatch(userActions.logout())
	}
	
	if (authData) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogOut}>
					{t("Выйти")}
				</Button>
			</div>
		)
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
				{t("Войти")}
			</Button>
			{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
		</div>
	)
})
