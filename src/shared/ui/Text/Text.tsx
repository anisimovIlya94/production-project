import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Text.module.scss"

import type { PropsWithChildren } from "react"

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
}

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error"
}

export function Text(props: PropsWithChildren<TextProps>) {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY
	} = props

	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}