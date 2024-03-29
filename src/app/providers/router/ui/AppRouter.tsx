import { Suspense, useCallback } from "react"
import { Routes, Route } from "react-router"
import { FC } from "react"
import { PageLoader } from "@/shared/ui/PageLoader"
import { RequireAuth } from "./RequireAuth"
import { routerConfig } from "../config/routeConfig"
import { RoutePropsWithAuth } from "@/shared/lib/types/router"

const AppRouter: FC = () => {
	const renderWithWrapper = useCallback((route: RoutePropsWithAuth) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				{route.element}
			</Suspense>
		)

		return (
			
			<Route
				path={route.path}
				key={route.path}
				element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
			/>
		// </Suspense>
		)
	},[])

	return (
		// <Suspense fallback={<PageLoader />}>
		<Routes>
			
			{Object.values(routerConfig).map(renderWithWrapper)}
				
		</Routes>
		//  </Suspense>
	)
}

export default AppRouter

