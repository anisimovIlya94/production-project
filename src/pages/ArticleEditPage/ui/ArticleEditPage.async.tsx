import { lazy } from "react"

export const ArticleEditAsyncPage = lazy(() => new Promise(resolve => {
	//@ts-ignore
	setTimeout(()=>{resolve(import("./ArticleEditPage"))},400)
}))


