import { classNames } from "@/shared/lib/classNames/classNames"
import AppRouter from "./providers/router/ui/AppRouter"
import { Navbar } from "@/wigets/Navbar"
import { Sidebar } from "@/wigets/SideBar"
import { Suspense, useEffect } from "react"
import { useThemes } from "@/shared/lib/hooks/useThemes/useThemes"
import { getUserInited, initAuthData } from "@/entities/User"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import { PageLoader } from "@/shared/ui/PageLoader"

const App = () => {
	const { theme } = useThemes()
	const dispatch = useAppDispatch()
	const inited = useSelector(getUserInited)

	useEffect(() => {
		dispatch(initAuthData())
	}, [dispatch])
	
	if (!inited) {
		return <PageLoader/>
	}
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback=" ">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{<AppRouter />}
				</div>
			</Suspense>
		</div>
	)
}

export default App
