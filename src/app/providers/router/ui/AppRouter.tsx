import { Suspense, useMemo } from "react"
import { Routes, Route } from "react-router"
import { FC } from "react"
import { routerConfig } from "shared/config/routerConfig/routerConfig"
import { PageLoader } from "shared/ui/PageLoader/PageLoader"
import { useSelector } from "react-redux"
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"

const AppRouter: FC = () => {

	const isAuth = useSelector(getUserAuthData)

	const routes = useMemo(() => {
		return Object.values(routerConfig).filter((route) => {
			if (route.authOnly && !isAuth) {
				return false
			}
			return true
		})
	},[isAuth])
	return (
		<Suspense fallback={<PageLoader/>}>
			<Routes>
				{routes.map(({path, element}) => {
					return <Route path={path} key={path} element={
						<div className='page-wrapper'>{element}</div>
					}/>
				})}
			</Routes>
		</Suspense>
	)
}

export default AppRouter

