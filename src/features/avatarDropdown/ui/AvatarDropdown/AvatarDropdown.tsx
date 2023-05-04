import { isUserAdmin, isUserManager, userActions } from "@/entities/User"
import { getUserAuthData } from "@/entities/User"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Avatar } from "@/shared/ui/Avatar"
import { Dropdown } from "@/shared/ui/Popups"
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router"

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const authData = useSelector(getUserAuthData)

	const onLogOut = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	const isAdmin = useSelector(isUserAdmin)
	const isManager = useSelector(isUserManager)

	const isAdminPanelAvailable = isAdmin || isManager

	if (!authData) {
		return null
	}

	return (
		<Dropdown
			className={classNames("", {}, [className])}
			direction="bottom left"
			trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
			items={[
				...(isAdminPanelAvailable
					? [
						{
							content: t("Админка"),
							href: getRouteAdmin(),
						},
					]
					: []),
				{
					content: t("Профиль"),
					href: getRouteProfile(authData.id),
				},
				{
					content: t("Выйти"),
					onClick: onLogOut,
				},
			]}
		/>
	)
}
