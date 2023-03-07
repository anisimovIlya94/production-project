import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import cls from "./SidebarItem.module.scss"

import { memo, PropsWithChildren } from "react"
import { SidebarItemType } from "../model/items"
import { useTranslation } from "react-i18next"

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: PropsWithChildren<SidebarItemProps>) => {
	const { item, collapsed } = props
	const {t} = useTranslation()

	return (
		<div className={classNames(cls.SidebarItem, {[cls.collapsed] : collapsed}, [])}>
			<AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={item.path}>
				<item.Icon className={cls.icon} />
				<span className={cls.link}>{t(item.text)}</span>
			</AppLink>
		</div>
	)
})