import { RoutesPath } from "shared/config/routerConfig/routerConfig"
import MainIcon from "shared/assets/icons/MainIcon.svg" 
import AboutIcon from "shared/assets/icons/AboutIcon.svg" 
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg" 
import ArticlesIcon from "shared/assets/icons/ArticlesIcon.svg"

export interface SidebarItemType {
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
	text: string
	authOnly?: boolean
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
		Icon: ProfileIcon,
		authOnly: true
	},
	{
		path: RoutesPath.articles,
		text: "Статьи",
		Icon: ArticlesIcon,
		authOnly: true
	},
]