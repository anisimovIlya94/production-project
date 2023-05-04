import { classNames } from "@/shared/lib/classNames/classNames"
import UserFilledIcon from "../../assets/icons/user-filled.svg"
import cls from "./Avatar.module.scss"

import type { CSSProperties, PropsWithChildren } from "react"
import { AppImage } from "../AppImage/AppImage"
import { Skeleton } from "../Skeleton"
import { Icon } from "../Icon"

interface AvatarProps {
    className?: string;
    size?: number
    alt?: string
	src?: string
	fallbackInverted?: boolean
}

export function Avatar(props: PropsWithChildren<AvatarProps>) {
	const { className, size, alt, src, fallbackInverted } = props
    
	const styles: CSSProperties = {
		width: size || 100,
		height: size || 100
	}

	const fallback = <Skeleton width={size || 100} height={size || 100} border="50%" />
	const errorFallback = <Icon inverted={fallbackInverted} Src={UserFilledIcon}/>

	return (
		<AppImage
			fallback={fallback}
			errorFallback={errorFallback}
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.Avatar, {}, [className])}
		/>
	)
}