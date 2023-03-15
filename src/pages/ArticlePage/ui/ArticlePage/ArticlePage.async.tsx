import { lazy } from "react"

export const ArticleAsyncPage = lazy(() => new Promise(resolve => {
	//@ts-ignore
	setTimeout(()=>{resolve(import("./ArticlePage"))},1500)
}))


