import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Flex.module.scss"

export type FlexJustify = "center" | "start" | "end" | "between"
export type FlexAlign = "center" | "start" | "end"
export type FlexDirection = "row" | "column"
export type FlexGap = "4" | "8" | "16" | "32"

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps{
  className?: string;
  children: ReactNode;
  direction: FlexDirection
  justify?: FlexJustify
  align?: FlexAlign
  gap?: FlexGap
  max?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
	center: cls.justifyCenter,
	start: cls.justifyStart,
	end: cls.justifyEnd,
	between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
	center: cls.alignCenter,
	start: cls.alignStart,
	end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string> = {
	row: cls.directionRow,
	column: cls.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	16: cls.gap16,
	32: cls.gap32,
}

export const Flex: FC<FlexProps> = (props) => {
	const {
		className,
		children,
		align = "center",
		justify = "start",
		direction,
		gap,
		max
	} = props

	const classes = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap]
	]

	return <div className={classNames(cls.flex, {[cls.max] : max}, classes)}>
		{children}
	</div>
}
