import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"

import { memo, PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui/Button"
import { LoginModal } from "@/features/AuthByUsername"
import { useSelector } from "react-redux"
import { getUserAuthData } from "@/entities/User"
import { useNavigate } from "react-router-dom"
import { HStack } from "@/shared/ui/Stack"
import { NotificationButton } from "@/features/notificationButton"
import { AvatarDropdown } from "@/features/avatarDropdown"
import { getRouteArticleCreate } from "@/shared/const/router"

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: PropsWithChildren<NavbarProps>) => {
	const { className } = props
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)
	const navigate = useNavigate()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onOpenModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onCreateArticle = useCallback(() => {
		navigate(getRouteArticleCreate())
	}, [navigate])

	if (authData) {
		return (
			<header className={classNames(cls.Navbar, {}, [className])}>
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					className={classNames(cls.createLink, {}, [className])}
					onClick={onCreateArticle}
				>
					{t("Создать статью")}
				</Button>
				<HStack gap="16" className={cls.actions}>
					<NotificationButton/>
					<AvatarDropdown/>
				</HStack>
			</header>
		)
	}

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onOpenModal}
			>
				{t("Войти")}
			</Button>
			{isAuthModal && (
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</header>
	)
})
