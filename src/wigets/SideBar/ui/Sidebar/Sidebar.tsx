import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher"

import { PropsWithChildren, useState } from "react"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { RoutesPath } from "shared/config/routerConfig/routerConfig"
import MainIcon from "shared/assets/icons/MainIcon.svg" 
import AboutIcon from "shared/assets/icons/AboutIcon.svg" 

interface SidebarProps {
 className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
	const { className } = props
	const { t } = useTranslation()
    
	const [collapsed, setCollapsed] = useState(false)

	const toggleCollapse = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
			<Button data-testid="sidebar-button"
				square size={ButtonSize.L}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				onClick={toggleCollapse}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.items}>
				<div>
					<AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutesPath.main}>
						<MainIcon className={cls.icon} />
						<span className={cls.link}>{t("Главная")}</span>
					</AppLink>
				</div>
				<div>
					<AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutesPath.about}>
						<AboutIcon className={cls.icon}/>
						<span className={cls.link}>
							{t("О сайте")}
						</span>
						
					</AppLink>
				</div>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.langswitcher}/>
			</div>
		</div>
	)
}