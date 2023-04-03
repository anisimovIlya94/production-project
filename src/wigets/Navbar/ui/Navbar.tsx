import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

import { memo, PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { LoginModal } from "features/AuthByUsername"
import { useDispatch, useSelector } from "react-redux"
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { userActions } from "entities/User"
import { useNavigate } from "react-router-dom"
import { RoutesPath } from "shared/config/routerConfig/routerConfig"



interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: PropsWithChildren<NavbarProps>) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])
	
	const onOpenModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogOut = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])
	
	const onCreateArticle = useCallback(() => {
		navigate(RoutesPath.article_details_create)
	},[navigate])
	
	if (authData) {
		return (
			<header className={classNames(cls.Navbar, {}, [className])}>
				<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.createLink} onClick={onCreateArticle}>
					{t("Создать статью")}
				</Button>
				<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogOut}>
					{t("Выйти")}
				</Button>
			</header>
		)
	}

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onOpenModal}>
				{t("Войти")}
			</Button>
			{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
		</header>
	)
})
