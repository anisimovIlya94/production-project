import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"

import type { ChangeEvent, PropsWithChildren } from "react"

interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options: SelectOption[]
    value?: string
    readonly?: boolean
    onSelect?: (value: string) => void
}

export function Select(props: PropsWithChildren<SelectProps>) {
	const { className, label, options, value, onSelect, readonly } = props
    
	const optionsList = options.map((opt) => {
		return (
			<option
				className={cls.option}
				value={opt.value}
				key={opt.value}>
				{opt.content}
			</option>)
	})

	const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onSelect?.(e.target.value)
	}

	return (
		<div className={classNames(cls.Wrapper, {}, [className])}>
			{label && <span className={cls.label}>{label}</span>}
			<select disabled={readonly} onChange={selectHandler} value={value} className={cls.select}>
				{optionsList}
			</select>
		</div>
	)
}