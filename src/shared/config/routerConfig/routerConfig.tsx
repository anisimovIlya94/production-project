import { AboutPage } from "pages/AboutPage"
import { ArticleDetailsPage } from "pages/ArticleDetailsPage"
import { ArticlePage } from "pages/ArticlePage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export type RoutePropsWithAuth = RouteProps & {
	authOnly?: boolean
}

export enum AppRoutes {
    "MAIN" = "main",
	"ABOUT" = "about",
	"PROFILE" = "profile",
	"ARTICLE" = "articles",
	"ARTICLE_DETAILS" = "article_details",
	//last
	"NOT_FOUND" = "not_found"
}

export const RoutesPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile/",
	[AppRoutes.ARTICLE]: "/articles",
	[AppRoutes.ARTICLE_DETAILS]: "/articles/",
	//last
	[AppRoutes.NOT_FOUND]: "*"
}

export const routerConfig: Record<AppRoutes, RoutePropsWithAuth> = {
	[AppRoutes.MAIN]: {
		path: RoutesPath.main,
		element: <MainPage/>
	},
	[AppRoutes.ABOUT]: {
		path: RoutesPath.about,
		element: <AboutPage/>
	},
	[AppRoutes.PROFILE]: {
		path: `${RoutesPath.profile}:id`,
		element: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE]: {
		path: RoutesPath.articles,
		element: <ArticlePage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutesPath.article_details}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true
	},
	//last
	[AppRoutes.NOT_FOUND]: {
		path: RoutesPath.not_found,
		element: <NotFoundPage/>
	}
}