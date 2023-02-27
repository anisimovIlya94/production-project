import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"

import type { PropsWithChildren } from "react"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { Input } from "shared/ui/Input/Input"

interface LoginFormProps {
    className?: string;
}

export function LoginForm(props: PropsWithChildren<LoginFormProps>) {
	const { className } = props
	const {t} = useTranslation()

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input placeholder={t("Введите имя")} autoFocus className={cls.input} type="text" />
			<Input placeholder={t("Введите пароль")} className={cls.input} type="text" />
			<Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>{t("Войти")}</Button>
		</div>
	)
}   