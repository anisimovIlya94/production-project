import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import cls from "./SidebarItem.module.scss"

import { memo, PropsWithChildren } from "react"
import { SidebarItemType } from "../model/types/sidebar"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { HStack } from "shared/ui/Stack/HStack/HStack"

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: PropsWithChildren<SidebarItemProps>) => {
	const { item, collapsed } = props
	const { t } = useTranslation()
	
	const isAuth = useSelector(getUserAuthData)

	if (item.authOnly && !isAuth) {
		return null
	}

	return (
		<div className={classNames("", { [cls.collapsed]: collapsed }, [])}>
			<AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={item.path}>
				<HStack gap="4">
					<item.Icon className={cls.icon} />
					<span className={cls.link}>{t(item.text)}</span>
				</HStack>
			</AppLink>
			
		</div>
	)
})