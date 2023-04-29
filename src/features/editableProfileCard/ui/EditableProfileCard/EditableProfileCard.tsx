import { classNames } from "@/shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading"
import { profileReducer, profileActions } from "../../model/slice/profileSlice"
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError"
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly"
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm"
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors"
import { Currency } from "@/entities/Currency"
import { Country } from "@/entities/Country"
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect"
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData"
import { ProfileCard } from "@/entities/Profile"
import { Text, TextTheme } from "@/shared/ui/Text"
import { VStack } from "@/shared/ui/Stack"
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader"
import { ValidateProfileError } from "../../model/consts/profileConsts"

interface EditableProfileCardProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
	profile: profileReducer
}


export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
	const { className, id } = props
	const dispatch = useAppDispatch() 
	const { t } = useTranslation("profile")
    
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)
	const readonly = useSelector(getProfileReadonly)
	const formData = useSelector(getProfileForm)
	const validateErrors = useSelector(getProfileValidateErrors)
    
	const translatedValidateErrors = {
		[ValidateProfileError.INCORRECT_USERNAME]: t("Некорректное имя пользователя"),
		[ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
		[ValidateProfileError.INCORRECT_CITY]: t("Некорректный город"),
		[ValidateProfileError.NO_DATA]: t("Некорректные данные пользователя"),
		[ValidateProfileError.SERVER_ERROR]: t("Ошибка получения данных пользователя с сервера"),
	}
    
	const onChangeFirstName = useCallback((value: string) => {
		dispatch(profileActions.updateData({first: value || ""}))
	},[dispatch])

	const onChangeLastName = useCallback((value: string) => {
		dispatch(profileActions.updateData({lastname: value || ""}))
	}, [dispatch])
	
	const onChangeCity = useCallback((value: string) => {
		dispatch(profileActions.updateData({city: value || ""}))
	}, [dispatch])

	const onChangeUsername = useCallback((value: string) => {
		dispatch(profileActions.updateData({username: value || ""}))
	}, [dispatch])

	const onChangeAvatar = useCallback((value: string) => {
		dispatch(profileActions.updateData({avatar: value || ""}))
	}, [dispatch])

	const onChangeCurrency = useCallback((value: Currency) => {
		dispatch(profileActions.updateData({currency: value || ""}))
	}, [dispatch])

	const onChangeCountry = useCallback((value: Country) => {
		dispatch(profileActions.updateData({country: value || ""}))
	}, [dispatch])
	
	const onChangeAge = useCallback((value: string) => {
		const result = Number(value || 0)
		if (!Number.isNaN(result)) {
			dispatch(profileActions.updateData({age: result }))
		}
	}, [dispatch])
	
	useInitialEffects(() => {
		if (id) {
			dispatch(fetchProfileData(id))
		}
	})
    
	return (
		<DynamicModuleLoader reducers={reducers}>
			<VStack gap='8' max className={classNames("", {}, [className])}>
				<EditableProfileCardHeader/>
				{validateErrors?.length && validateErrors.map((err: ValidateProfileError) => {
					return <Text data-testid={"EditableProfileCard.Error"} key={err} theme={TextTheme.ERROR} text={translatedValidateErrors[err]}/>
				})}
				<ProfileCard
					readonly={readonly}
					data={formData}
					isLoading={isLoading}
					error={error}
					onChangeFirstName={onChangeFirstName}
					onChangeLastName={onChangeLastName}
					onChangeCity={onChangeCity}
					onChangeAge={onChangeAge}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</VStack>
		</DynamicModuleLoader>
	)
})