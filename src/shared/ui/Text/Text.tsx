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
	M = "size_m",
	S = "size_s"
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

type HeaderTagType = "h1" | "h2" | "h3"

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	[TextSize.S]: "h3",
	[TextSize.M]: "h2",
	[TextSize.L]: "h1",
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

	const HeaderTag = mapSizeToHeaderTag[size]

	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
			{title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
})