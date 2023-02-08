import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LangSwitcher.module.scss"

import type { PropsWithChildren } from "react"
import { Button, ButtonTheme } from "../Button/Button"
import { useTranslation } from "react-i18next"

interface LangSwitcherProps {
 className?: string;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
	const { className } = props
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
	}

	return (
		<Button theme={ButtonTheme.CLEAR} onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
			{t("Язык")}
		</Button>
	)
}