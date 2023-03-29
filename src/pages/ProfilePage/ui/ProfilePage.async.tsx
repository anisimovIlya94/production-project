import { lazy } from "react"

export const ProfileAsyncPage = lazy(() => new Promise(resolve => {
	//@ts-ignore
	setTimeout(()=>{resolve(import("./ProfilePage"))},400)
}))


