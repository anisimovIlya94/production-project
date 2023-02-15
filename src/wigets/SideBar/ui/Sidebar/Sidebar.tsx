import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"

import { PropsWithChildren, useState } from "react"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { useTranslation } from "react-i18next"

interface SidebarProps {
 className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
	const { className } = props
    
	const [collapsed, setCollapsed] = useState(false)
	const { t } = useTranslation()

	const toggleCollapse = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
			<button data-testid="sidebar-button" onClick={toggleCollapse}>{t("Переключить")}</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.langswitcher}/>
			</div>
		</div>
	)
}