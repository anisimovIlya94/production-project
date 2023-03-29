import {classNames} from "shared/lib/classNames/classNames"
import { memo, PropsWithChildren, useCallback } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { profileActions, profileReducer } from "entities/Profile/model/slice/profileSlice"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData"
import { getProfileError, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, ProfileCard } from "entities/Profile"
import { useSelector } from "react-redux"
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm"
import { Currency } from "entities/Currency"
import { Country } from "entities/Country"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { ProfilePageHeader } from ".."
import { ValidateProfileError } from "entities/Profile/model/types/profile"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { useInitialEffects } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import { Page } from "shared/ui/Page/Page"

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
	profile: profileReducer
}

const ProfilePage = memo((props: PropsWithChildren<ProfilePageProps>) => {
	const { className } = props
	const dispatch = useAppDispatch() 
	const {t} = useTranslation("profile")
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)
	const readonly = useSelector(getProfileReadonly)
	const formData = useSelector(getProfileForm)
	const validateErrors = useSelector(getProfileValidateErrors)
	const {id} = useParams<{id: string}>()

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
	
	// useEffect(() => {
	// 	if (__PROJECT__ !== "storybook") {
	// 		dispatch(fetchProfileData())
	// 	}
	// },[dispatch])

	return (
		<DynamicModuleLoader isUnmount reducers={reducers}>
			<Page className={classNames("", {}, [className])}>
				<ProfilePageHeader readonly={readonly}/>
				{validateErrors?.length && validateErrors.map((err) => {
					return <Text key={err} theme={TextTheme.ERROR} text={translatedValidateErrors[err]}/>
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
			</Page>
		</DynamicModuleLoader>
	)
})

export default ProfilePage  