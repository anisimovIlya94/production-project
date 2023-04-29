import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./PageError.module.scss"

import type { PropsWithChildren } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/shared/ui/Button"

interface PageErrorProps {
 className?: string;
}

const reload = () => {
	window.location.reload()
}

export function PageError(props: PropsWithChildren<PageErrorProps>) {
	const { className } = props
	const {t} = useTranslation()
	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t("Произошла непредвиденная ошибка")}</p>
			<Button onClick={reload}>{t("Обновить страницу")}</Button>
		</div>
	)
}