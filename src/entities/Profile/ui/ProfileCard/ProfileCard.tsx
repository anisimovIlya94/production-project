import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ProfileCard.module.scss"

import type { PropsWithChildren } from "react"
import { Text } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData"
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError"
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"

interface ProfileCardProps {
    className?: string;
}

export function ProfileCard(props: PropsWithChildren<ProfileCardProps>) {
	const { className } = props
	const { t } = useTranslation("profile")
    
	const data = useSelector(getProfileData)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t("Профиль")} />
				<Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t("Редактировать")}</Button>
			</div>
			<div className={cls.data}>
				<Input className={cls.input} value={data?.first} placeholder={t("Ваше имя")} />
				<Input className={cls.input} value={data?.lastname} placeholder={t("Ваша фамилия")}/>
			</div>
		</div>
	)
}