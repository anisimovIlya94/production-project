import {classNames} from "shared/lib/classNames/classNames"
import cls from "./AppLink.module.scss"

import { ForwardedRef, forwardRef } from "react"
import { Link, LinkProps } from "react-router-dom"



export enum AppLinkTheme {
    "PRIMARY" = "primary",
    "SECONDARY" = "secondary"
}

interface AppLinkProps extends LinkProps{
    className?: string;
	theme?: AppLinkTheme
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
	const { children,
		to,
		className,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props

	return (
		<Link ref={ref} to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</Link>
	)
})