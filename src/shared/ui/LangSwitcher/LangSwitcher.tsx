import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./LangSwitcher.module.scss"

import { memo, PropsWithChildren } from "react"
import { Button, ButtonTheme } from "../Button/Button"
import { useTranslation } from "react-i18next"

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = memo((props: PropsWithChildren<LangSwitcherProps>) => {
	const { className, short } = props
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
	}

	return (
		<Button theme={ButtonTheme.CLEAR} onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
			{short ? t("Короткий язык") : t("Язык")}
		</Button>
	)
})