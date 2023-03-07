import { RoutesPath } from "shared/config/routerConfig/routerConfig"
import MainIcon from "shared/assets/icons/MainIcon.svg" 
import AboutIcon from "shared/assets/icons/AboutIcon.svg" 
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg" 

export interface SidebarItemType {
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    text: string
}

export const sidebarItemsList: SidebarItemType[] = [
	{
		path: RoutesPath.main,
		text: "Главная",
		Icon: MainIcon
	},
	{
		path: RoutesPath.about,
		text: "О сайтe",
		Icon: AboutIcon
	},
	{
		path: RoutesPath.profile,
		text: "Профиль",
		Icon: ProfileIcon
	},
]