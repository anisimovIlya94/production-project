import { Suspense, useCallback } from "react"
import { Routes, Route } from "react-router"
import { FC } from "react"
import { RoutePropsWithAuth, routerConfig } from "shared/config/routerConfig/routerConfig"
import { PageLoader } from "shared/ui/PageLoader/PageLoader"
import { RequireAuth } from "./RequireAuth"

const AppRouter: FC = () => {
	const renderWithWrapper = useCallback((route: RoutePropsWithAuth) => {
		const element = <Suspense fallback={<PageLoader />}>
			<div className='page-wrapper'>{route.element}</div>
		</Suspense>

		return (
			<Route
				path={route.path}
				key={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		)
	},[])

	return (
		<Routes>
			{Object.values(routerConfig).map(renderWithWrapper)}
		</Routes>
		
	)
}

export default AppRouter

