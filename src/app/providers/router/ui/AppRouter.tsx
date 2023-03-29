import { Suspense, useCallback } from "react"
import { Routes, Route } from "react-router"
import { FC } from "react"
import { RoutePropsWithAuth, routerConfig } from "shared/config/routerConfig/routerConfig"
import { PageLoader } from "shared/ui/PageLoader/PageLoader"
import { RequireAuth } from "./RequireAuth"

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
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
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

