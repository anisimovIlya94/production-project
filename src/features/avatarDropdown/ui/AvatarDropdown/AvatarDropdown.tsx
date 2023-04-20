import { isUserAdmin, isUserManager, userActions } from "entities/User"
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { RoutesPath } from "shared/config/routerConfig/routerConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Dropdown } from "shared/ui/Popups"

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
			trigger={<Avatar size={30} src={authData.avatar} />}
			items={[
				...(isAdminPanelAvailable
					? [
						{
							content: t("Админка"),
							href: RoutesPath.admin_panel,
						},
					]
					: []),
				{
					content: t("Профиль"),
					href: RoutesPath.profile + authData.id,
				},
				{
					content: t("Выйти"),
					onClick: onLogOut,
				},
			]}
		/>
	)
}
