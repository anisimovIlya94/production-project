import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

import type { ButtonHTMLAttributes, FC } from "react"

export enum ButtonTheme {
	"CLEAR" = "clear",
	"CLEAR_INVERTED" = "clearInverted",
	"OUTLINE" = "outline",
	"BACKGROUND" = "background",
	"BACKGROUND_INVERTED" = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl"
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, square, size = "M", ...otherProps } = props
	const mods = {
		[cls.square]: square
	}
	return (
		<button data-testid="button" className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} {...otherProps}>
			{children}
		</button>
	)
}