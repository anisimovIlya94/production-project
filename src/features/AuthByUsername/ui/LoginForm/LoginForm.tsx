import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"

import { memo, PropsWithChildren, useCallback } from "react"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { Input } from "shared/ui/Input/Input"
import { useDispatch, useSelector } from "react-redux"
import { loginActions } from "../../model/slice/LoginSlice"
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState"
import { loginByUserName } from "features/AuthByUsername/model/services/loginByUserName/loginByUserName"
import { Text, TextTheme } from "shared/ui/Text/Text"

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: PropsWithChildren<LoginFormProps>) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const {username, password, isLoading, error} = useSelector(getLoginState)
	
	const onChangeUserName = useCallback((value: string) => {
		dispatch(loginActions.setUserName(value))
	}, [dispatch])
	
	const onChangeUserPassword = useCallback((value: string) => {
		dispatch(loginActions.setUserPassword(value))
	}, [dispatch])
	
	const onLoginClick = useCallback(() => {
		dispatch(loginByUserName({username, password}))
	},[dispatch, username, password])

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t("Форма авторизации")}/>
			{error && <Text text={t(error)} theme={TextTheme.ERROR}/>}
			<Input value={username} onChange={onChangeUserName} placeholder={t("Введите имя")} autoFocus className={cls.input} type="text" />
			<Input value={password} onChange={onChangeUserPassword} placeholder={t("Введите пароль")} className={cls.input} type="text" />
			<Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>{t("Войти")}</Button>
		</div>
	)
})   