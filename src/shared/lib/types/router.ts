import { UserRole } from "@/entities/User"
import { RouteProps } from "react-router-dom"

export type RoutePropsWithAuth = RouteProps & {
	authOnly?: boolean
	roles?: UserRole[]
}