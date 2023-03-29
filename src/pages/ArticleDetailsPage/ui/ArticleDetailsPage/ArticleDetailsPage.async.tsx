import { lazy } from "react"

export const ArticleDetailsAsyncPage = lazy(() => new Promise(resolve => {
	//@ts-ignore
	setTimeout(()=>{resolve(import("./ArticleDetailsPage"))},400)
}))


