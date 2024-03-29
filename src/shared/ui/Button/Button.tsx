import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

import { ButtonHTMLAttributes, memo } from "react"

export enum ButtonTheme {
	"CLEAR" = "clear",
	"CLEAR_INVERTED" = "clearInverted",
	"OUTLINE" = "outline",
	"OUTLINE_RED" = "outline_red",
	"BACKGROUND" = "background",
	"BACKGROUND_INVERTED" = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean
	fullWidth?: boolean
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl"
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		fullWidth,
		children,
		theme = ButtonTheme.OUTLINE,
		square, size = "M",
		disabled,
		...otherProps
	} = props

	const mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth
	}

	return (
		<button
			disabled={disabled}
			data-testid="button"
			className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
			{...otherProps}>
			{children}
		</button>
	)
})