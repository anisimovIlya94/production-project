import {classNames} from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss"

import { InputHTMLAttributes, PropsWithChildren, memo } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (str: string) => void;
	value?: string | number 
	readonly?: boolean
}

export const Input = memo((props: PropsWithChildren<InputProps>) => {
	const {
		className,
		onChange,
		value,
		type = "text",
		readonly,
		...otherProps
	} = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return (
		<div className={classNames(cls.Input, {[cls.readonly] : readonly}, [className])}>
			<input
				readOnly={readonly}
				type={type}
				{...otherProps}
				onChange={onChangeHandler} 
				value={value}
				className={cls.input}
			/>
		</div>
	)
})