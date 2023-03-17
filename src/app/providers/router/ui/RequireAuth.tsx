import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RoutesPath } from "shared/config/routerConfig/routerConfig"

export function RequireAuth({ children }: { children: JSX.Element }) {
	const auth = useSelector(getUserAuthData)
	const location = useLocation()
  
	if (!auth) {
		return <Navigate to={RoutesPath.main} state={{ from: location }} replace />
	}
  
	return children
}