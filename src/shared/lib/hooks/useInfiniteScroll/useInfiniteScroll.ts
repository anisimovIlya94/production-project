import { MutableRefObject, useEffect } from "react"

interface useInfiniteScrollProps {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (props: useInfiniteScrollProps) => {
	const { callback, triggerRef, wrapperRef } = props
	const triggerRefCurrent = triggerRef.current

	useEffect(() => {
		let observer: IntersectionObserver | null = null
		if (callback && wrapperRef) {
			const options = {
				root: wrapperRef.current,
				rootMargin: "20px",
				threshold: 1.0,
			}
              
			observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback()
				}
			}, options)
			observer.observe(triggerRef.current)
		}
		return () => {
			if (observer && triggerRefCurrent) {
				observer.unobserve(triggerRefCurrent)
			}
		}
	},[wrapperRef, callback, triggerRef, triggerRefCurrent])

    
    
}