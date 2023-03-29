import { FC, MutableRefObject, ReactNode, RefObject, useRef } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"
import cls from "./Page.module.scss"

interface PageProps {
  className?: string;
  children: ReactNode
  onScroll?: () => void
}

export const Page: FC<PageProps> = (props) => {
	const { className, children, onScroll } = props
	const { t } = useTranslation()

	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

	useInfiniteScroll({triggerRef, wrapperRef, callback: onScroll})

	return <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
		{children}
		<div ref={triggerRef}/>
	</section>
}
