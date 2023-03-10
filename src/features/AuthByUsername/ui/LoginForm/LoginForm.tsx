import {classNames} from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"

import { memo, PropsWithChildren, useCallback } from "react"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { Input } from "shared/ui/Input/Input"
import { useSelector } from "react-redux"
import { loginActions, loginReducer } from "../../model/slice/LoginSlice"
import { loginByUserName } from "features/AuthByUsername/model/services/loginByUserName/loginByUserName"
import { Text, TextTheme } from "shared/ui/Text/Text"

import { getLoginUserName } from "features/AuthByUsername/model/selectors/getLoginUserName/getLoginUserName"
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword"
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading"
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError"
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"

export interface LoginFormProps {
	className?: string;
	isSuccess?: () => void
}

const initialReducers = {
	login: loginReducer
}

const LoginForm = memo((props: PropsWithChildren<LoginFormProps>) => {
	const { className, isSuccess } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const username = useSelector(getLoginUserName)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	const onChangeUserName = useCallback((value: string) => {
		dispatch(loginActions.setUserName(value))
	}, [dispatch])
	
	const onChangeUserPassword = useCallback((value: string) => {
		dispatch(loginActions.setUserPassword(value))
	}, [dispatch])
	
	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUserName({ username, password }))
		if (result.meta.requestStatus === "fulfilled") {
			isSuccess?.()
		}
	},[dispatch, username, password, isSuccess])

	return (
		<DynamicModuleLoader isUnmount={true} reducers={initialReducers}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title={t("?????????? ??????????????????????")}/>
				{error && <Text text={t(error)} theme={TextTheme.ERROR}/>}
				<Input value={username} onChange={onChangeUserName} placeholder={t("?????????????? ??????")} autoFocus className={cls.input} type="text" />
				<Input value={password} onChange={onChangeUserPassword} placeholder={t("?????????????? ????????????")} className={cls.input} type="text" />
				<Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>{t("??????????")}</Button>
			</div>
		</DynamicModuleLoader>
	)
})   

export default LoginForm