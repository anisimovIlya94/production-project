//AnimationProvider

import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react"

type SpringType = typeof import("@react-spring/web")
type GestureType = typeof import("@use-gesture/react")

interface AnimationProviderPayload {
    Spring?: SpringType
    Gesture?: GestureType
    isLoaded?: boolean
}

const AnimationProviderContext = createContext<AnimationProviderPayload>({})

export const useAnimationLibs = () => useContext(AnimationProviderContext) as Required<AnimationProviderPayload>

const getAsyncAnimationProvider = async () => {
	return Promise.all([
		import("@react-spring/web"),
		import("@use-gesture/react")
	])
}

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
	const SpringRef = useRef<SpringType>()
	const GestureRef = useRef<GestureType>()
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		getAsyncAnimationProvider().then(([Spring, Gesture]) => {
			SpringRef.current = Spring
			GestureRef.current = Gesture
			setIsLoaded(true)
		} )
	}, [])
    
	const value = useMemo(() => ({
		Spring: SpringRef.current,
		Gesture: GestureRef.current,
		isLoaded
	}),[isLoaded])

	return (
		<AnimationProviderContext.Provider value={value}>
			{children}
		</AnimationProviderContext.Provider>
	)
}