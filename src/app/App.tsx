import { classNames } from "shared/lib/classNames/classNames"
import { useThemes } from "app/providers/themeProvider"
import AppRouter from "./providers/router/ui/AppRouter"
import { Navbar } from "wigets/Navbar"
import { Sidebar } from "wigets/SideBar"
import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "entities/User"

const App = () => {
	const { theme } = useThemes()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(userActions.initialAuthData())
	},[dispatch])
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback=" ">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
