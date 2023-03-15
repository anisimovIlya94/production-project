import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Text.module.scss"

import { memo, PropsWithChildren } from "react"

export enum TextAlign {
	RIGHT = "right",
	LEFT = "left",
	CENTER = "center"
}

export enum TextSize {
	L = "size_l",
	M = "size_m"
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
	theme?: TextTheme
	align?: TextAlign
	size?: TextSize
}

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error"
}

export const Text = memo((props: PropsWithChildren<TextProps>) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY,
		align = TextAlign.LEFT,
		size = TextSize.M
	} = props

	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
})