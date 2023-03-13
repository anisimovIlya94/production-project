import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Avatar.module.scss"

import type { CSSProperties, PropsWithChildren } from "react"

interface AvatarProps {
    className?: string;
    size?: number
    alt?: string
    src?: string
}

export function Avatar(props: PropsWithChildren<AvatarProps>) {
	const { className, size, alt, src } = props
    
	const styles: CSSProperties = {
		width: size || 100,
		height: size || 100
	}

	return (
		<img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, {}, [className])}/>
	)
}