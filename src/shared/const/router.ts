export enum AppRoutes {
    "MAIN" = "main",
	"ABOUT" = "about",
	"PROFILE" = "profile",
	"ARTICLE" = "articles",
	"ARTICLE_DETAILS" = "article_details",
	"ADMIN_PANEL" = "admin_panel",
	"FORBIDDEN" = "forbidden",
	"ARTICLE_DETAILS_EDIT" = "article_details_edit",
	"ARTICLE_DETAILS_CREATE" = "article_details_create",
	//last
	"NOT_FOUND" = "not_found"
}

export const RoutesPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile/",
	[AppRoutes.ARTICLE]: "/articles",
	[AppRoutes.ADMIN_PANEL]: "/admin",
	[AppRoutes.FORBIDDEN]: "/forbidden",
	[AppRoutes.ARTICLE_DETAILS]: "/articles/",
	[AppRoutes.ARTICLE_DETAILS_EDIT]: "/articles/",
	[AppRoutes.ARTICLE_DETAILS_CREATE]: "/articles/new",
	//last
	[AppRoutes.NOT_FOUND]: "*"
}