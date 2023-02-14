import { Suspense } from "react"
import { Routes, Route } from "react-router"
import { FC } from "react"
import { routerConfig } from "shared/config/routerConfig/routerConfig"
import { PageLoader } from "shared/ui/PageLoader/PageLoader"

const AppRouter: FC = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<Routes>
				{Object.values(routerConfig).map(({path, element}) => {
					return <Route path={path} key={path} element={
						<div className='page-wrapper'>{element}</div>
					}/>
				})}
			</Routes>
		</Suspense>
	)
}

export default AppRouter

