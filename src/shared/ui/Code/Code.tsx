import { FC, useCallback } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "../Button/Button"
import cls from "./Code.module.scss"
import CopyIcon from "../../assets/icons/copy-20-20.svg"

interface CodeProps {
  className?: string;
  text: string
}

export const Code: FC<CodeProps> = (props) => {
	const { className, text } = props

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text)
	},[text])

	return (
		<pre className={classNames(cls.code, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={onCopy} className={cls.copyBtn}>
				<CopyIcon className={cls.copyicon}/>
			</Button>
			<code>
				{text}
			</code>
		</pre>)
}
