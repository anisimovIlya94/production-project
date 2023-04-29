import { getUserRole, UserRole } from "@/entities/User"
import { getUserAuthData } from "@/entities/User"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RoutesPath } from "@/shared/config/routerConfig/routerConfig"

interface RequireAuthProps {
	children: JSX.Element
	roles?: UserRole[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
	const auth = useSelector(getUserAuthData)
	const location = useLocation()

	const userRoles = useSelector(getUserRole)

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true
		}
		return roles?.some((role) => {
			return userRoles?.includes(role)
		})
	},[roles, userRoles])
  
	if (!auth) {
		return <Navigate to={RoutesPath.main} state={{ from: location }} replace />
	}

	if (!hasRequiredRoles) {
		return <Navigate to={RoutesPath.forbidden} state={{ from: location }} replace />
	}
  
	return children
}