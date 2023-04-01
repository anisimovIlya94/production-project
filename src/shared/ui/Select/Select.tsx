import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"

import type { ChangeEvent } from "react"
 
export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    readonly?: boolean
    onSelect?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const { className, label, options, value, onSelect, readonly } = props

	const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onSelect?.(e.target.value as T)
	}
    
	const optionsList = options?.map((opt) => {
		return (
			<option
				className={cls.option}
				value={opt.value}
				key={opt.value}>
				{opt.content}
			</option>)
	})

	return (
		<div className={classNames(cls.Wrapper, {}, [className])}>
			{label && <span className={cls.label}>{label}</span>}
			<select disabled={readonly} onChange={selectHandler} value={value} className={cls.select}>
				{optionsList}
			</select>
		</div>
	)
}