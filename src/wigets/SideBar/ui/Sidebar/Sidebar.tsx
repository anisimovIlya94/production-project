import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"

import { memo, PropsWithChildren, useState } from "react"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { sidebarItemsList } from "wigets/SideBar/model/items"
import { SidebarItem } from "wigets/SideBar/SidebarItem/SidebarItem"

interface SidebarProps {
 className?: string;
}

export const Sidebar = memo((props: PropsWithChildren<SidebarProps>) => {
	const { className } = props
    
	const [collapsed, setCollapsed] = useState(false)

	const toggleCollapse = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid="sidebar-button"
				square size={ButtonSize.L}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={toggleCollapse}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				{sidebarItemsList.map((item) => {
					return <SidebarItem item={item} key={item.path} collapsed={collapsed}/>
				})}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.langswitcher}/>
			</div>
		</div>
	)
})