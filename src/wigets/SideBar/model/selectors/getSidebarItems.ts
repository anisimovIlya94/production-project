import { getUserAuthData } from "./../../../../entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { createSelector } from "@reduxjs/toolkit"
import { SidebarItemType } from "../types/sidebar"
import MainIcon from "@/shared/assets/icons/MainIcon.svg" 
import AboutIcon from "@/shared/assets/icons/AboutIcon.svg" 
import ProfileIcon from "@/shared/assets/icons/ProfileIcon.svg" 
import ArticlesIcon from "@/shared/assets/icons/ArticlesIcon.svg"
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from "@/shared/const/router"

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: getRouteMain(),
			text: "Главная",
			Icon: MainIcon
		},
		{
			path: getRouteAbout(),
			text: "О сайтe",
			Icon: AboutIcon
		}
	]
	if (userData) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.id),
				text: "Профиль",
				Icon: ProfileIcon,
				authOnly: true
			},
			{
				path: getRouteArticles(),
				text: "Статьи",
				Icon: ArticlesIcon,
				authOnly: true
			},
		)
	}
	return sidebarItemsList
})