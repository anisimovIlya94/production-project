import { getUserAuthData } from "./../../../../entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { createSelector } from "@reduxjs/toolkit"
import { SidebarItemType } from "../types/sidebar"
import { RoutesPath } from "@/shared/config/routerConfig/routerConfig"
import MainIcon from "@/shared/assets/icons/MainIcon.svg" 
import AboutIcon from "@/shared/assets/icons/AboutIcon.svg" 
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.svg" 
import ArticlesIcon from "@/shared/assets/icons/ArticlesIcon.svg"

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: RoutesPath.main,
			text: "Главная",
			Icon: MainIcon
		},
		{
			path: RoutesPath.about,
			text: "О сайтe",
			Icon: AboutIcon
		}
	]
	if (userData) {
		sidebarItemsList.push(
			{
				path: RoutesPath.profile + userData.id,
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
		)
	}
	return sidebarItemsList
})