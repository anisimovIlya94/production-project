import {classNames} from "shared/lib/classNames/classNames"
import cls from "./AppLink.module.scss"

import { memo } from "react"
import { Link, LinkProps } from "react-router-dom"



export enum AppLinkTheme {
    "PRIMARY" = "primary",
    "SECONDARY" = "secondary"
}

interface AppLinkProps extends LinkProps{
    className?: string;
	theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
	const { children,
		to,
		className,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props

	return (
		<Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</Link>
	)
})