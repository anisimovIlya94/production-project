import { lazy } from "react"

export const AboutAsyncPage = lazy(() => new Promise(resolve => {
	//@ts-ignore
	setTimeout(() => resolve(import("./AboutPage")), 1500)
}))