import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"

import { memo, PropsWithChildren, useState } from "react"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
// import { sidebarItemsList } from "wigets/SideBar/model/types/sidebar"
import { SidebarItem } from "../../SidebarItem/SidebarItem"
import { useSelector } from "react-redux"
import { getSidebarItems } from "../../model/selectors/getSidebarItems"
import { VStack } from "shared/ui/Stack/VStack/VStack"

interface SidebarProps {
 className?: string;
}

export const Sidebar = memo((props: PropsWithChildren<SidebarProps>) => {
	const { className } = props
    
	const [collapsed, setCollapsed] = useState(false)
	const sidebarItemsList = useSelector(getSidebarItems)

	const toggleCollapse = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<section data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid="sidebar-button"
				square size={ButtonSize.L}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={toggleCollapse}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<VStack role="navigation" className={cls.items} gap="16">
				{sidebarItemsList.map((item) => {
					return <SidebarItem item={item} key={item.path} collapsed={collapsed}/>
				})}
			</VStack>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.langswitcher}/>
			</div>
		</section>
	)
})