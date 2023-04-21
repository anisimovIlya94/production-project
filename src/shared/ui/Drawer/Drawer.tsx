import { useThemes } from "@/app/providers/themeProvider"
import { FC, ReactNode, useCallback, useEffect } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { AnimationProvider, useAnimationLibs } from "@/shared/lib/components/AnimationProvider"
import { Overlay } from "../Overlay/Overlay"
import { Portal } from "../Portal/Portal"
import cls from "./Drawer.module.scss"

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

const height = window.innerHeight - 100

const DrawerComponent: FC<DrawerProps> = (props) => {
	const {
		className,
		children,
		isOpen,
		onClose,
	} = props

	const { theme } = useThemes()
	const { Spring, Gesture } = useAnimationLibs()
	
	const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

	const openDrawer = useCallback(() => {
		api.start({ y: 0, immediate: false })
	}, [api])

	useEffect(() => {
		if (isOpen) {
			openDrawer()
		}
	}, [api, isOpen, openDrawer])

	const close = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...Spring.config.stiff, velocity },
			onResolve: onClose,
		})
	}

	const bind = Gesture.useDrag(
		({
			last,
			velocity: [, vy],
			direction: [, dy],
			movement: [, my],
			cancel,
		}) => {
			if (my < -70) cancel()

			if (last) {
				if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
					close()
				} else {
					openDrawer()
				}
			} else {
				api.start({ y: my, immediate: true })
			}
		},
		{
			from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
		},
	)

	if (!isOpen) {
		return null
	}

	const display = y.to((py) => (py < height ? "block" : "none"))

	return (
		<Portal>
			<div className={classNames(cls.drawer, {}, [className, theme])}>
				<Overlay onClick={close}/>
				<Spring.a.div
					className={cls.sheet}
					style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
					{...bind()}
				>
					{children}
				</Spring.a.div>
			</div>
		</Portal>
	)
}

const DrawerAsync: FC<DrawerProps> = (props) => {
	const { isLoaded } = useAnimationLibs()

	if (!isLoaded) {
		return null
	}

	return (
		<DrawerComponent {...props}/>
	)
}

export const Drawer: FC<DrawerProps> = (props) => {
	return (
		<AnimationProvider>
			<DrawerAsync {...props} />
		</AnimationProvider>
	)
}
