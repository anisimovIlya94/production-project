import { StateSchema } from "@/app/providers/StoreProvider"
import { getScrollSaveByAdress, scrollSaveActions } from "@/features/scrollSave"
import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect"
import { useTrottle } from "@/shared/lib/hooks/useTrottle/useTrottle"
import cls from "./Page.module.scss"
import { Tests } from "@/shared/lib/types/tests"

interface PageProps extends Tests{
  className?: string;
  children: ReactNode
  onScroll?: () => void
}

export const Page: FC<PageProps> = (props) => {
	const { className, children, onScroll } = props
	const dispatch = useAppDispatch()
	const {pathname} = useLocation()
	const scrollSave = useSelector((state: StateSchema) => getScrollSaveByAdress(state, pathname)) 

	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

	
	useInfiniteScroll({ triggerRef, wrapperRef, callback: onScroll })

	useInitialEffects(() => {
		wrapperRef.current.scrollTop = scrollSave
	})

	const onScrollPosition = useTrottle((e: UIEvent<HTMLDivElement>) => {
		console.log("TROTTLE")
		dispatch(scrollSaveActions.setUserName({
			path: pathname,
			position: e.currentTarget.scrollTop
		}))
	}, 400)

	return <main data-testId={props["data-testId"] ?? "Page"} onScroll={onScrollPosition} ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
		{children}
		<div className={cls.trigger} ref={triggerRef}/>
	</main>
}
