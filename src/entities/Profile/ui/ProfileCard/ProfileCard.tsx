import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ProfileCard.module.scss"

import type { PropsWithChildren } from "react"
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import { Input } from "shared/ui/Input/Input"
import { Profile } from "../../model/types/profile"
import { Loader } from "shared/ui/Loader/Loader"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Currency, CurrencySelect } from "entities/Currency"
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect"
import { Country } from "entities/Country"
import { VStack } from "shared/ui/Stack/VStack/VStack"
import { HStack } from "shared/ui/Stack/HStack/HStack"
// import { HStack } from "shared/ui/Stack/HStack/HStack"


interface ProfileCardProps {
	data?: Profile
	className?: string;
	isLoading?: boolean
	error?: string
	readonly?: boolean
	onChangeFirstName?: (value: string) => void
	onChangeLastName?: (value: string) => void
	onChangeAge?: (value: string) => void
	onChangeCity?: (value: string) => void
	onChangeAvatar?: (value: string) => void
	onChangeUsername?: (value: string) => void
	onChangeCurrency?: (value: Currency) => void
	onChangeCountry?: (value: Country) => void
}

export function ProfileCard(props: PropsWithChildren<ProfileCardProps>) {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstName,
		onChangeLastName,
		onChangeAge,
		onChangeCity,
		onChangeAvatar,
		onChangeUsername,
		onChangeCurrency,
		onChangeCountry

	} = props
	const { t } = useTranslation("profile")

	if (isLoading) {
		return (
			<HStack justify="center" max className={classNames("", {}, [className, cls.loading])}>
				<Loader/>
			</HStack>
		)
	}

	if (error) {
		return (
			<HStack justify="center" className={classNames("", {}, [className, cls.error])}>
				<Text
					title={t("Произошла ошибка при закрузке данных пользователя")}
					text={t("Обновите страницу")}
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
				/>
			</HStack>
		)
	}

	return (
		<VStack gap="16" max justify="center" className={classNames(cls.ProfileCard, {[cls.edited]: !readonly}, [className])}>
			
			{/* <div className={cls.data + " " + (!readonly ? cls.edited : "")}> */}
			{data?.avatar &&
					<HStack max justify="center">
						<Avatar src={data?.avatar} />
					</HStack>
			}
			<Input readonly={readonly} onChange={onChangeFirstName} className={cls.input} value={data?.first} placeholder={t("Ваше имя")} />
			<Input readonly={readonly} onChange={onChangeLastName} className={cls.input} value={data?.lastname} placeholder={t("Ваша фамилия")} />
			<Input readonly={readonly} onChange={onChangeAge} className={cls.input} value={data?.age} placeholder={t("Ваш возраст")} />
			<Input readonly={readonly} onChange={onChangeCity} className={cls.input} value={data?.city} placeholder={t("Ваш город")} />
			<Input readonly={readonly} onChange={onChangeUsername} className={cls.input} value={data?.username} placeholder={t("Ваш никнейм")} />
			<Input readonly={readonly} onChange={onChangeAvatar} className={cls.input} value={data?.avatar} placeholder={t("Ссылка на ваш аватар")} />
			<CurrencySelect readonly={readonly} onChange={onChangeCurrency} value={data?.currency} />
			<CountrySelect readonly={readonly} onChange={onChangeCountry} value={data?.country}/>
			{/* </div> */}
		</VStack>
	)
}