import {classNames} from "shared/lib/classNames/classNames"

import { PropsWithChildren, useCallback } from "react"
import { Text } from "shared/ui/Text/Text"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { profileActions } from "entities/Profile/model/slice/profileSlice"
import { updateProfileData } from "entities/Profile/model/services/updateProfileData/updateProfileData"
import { useSelector } from "react-redux"
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData"
import { getProfileData } from "entities/Profile"
import { HStack } from "shared/ui/Stack/HStack/HStack"

interface ProfilePageHeaderProps {
    className?: string;
    readonly?: boolean
}

export function ProfilePageHeader(props: PropsWithChildren<ProfilePageHeaderProps>) {
	const { className, readonly } = props
	const { t } = useTranslation("profile")
	const dispatch = useAppDispatch()
	const authData = useSelector(getUserAuthData)
	const profileData = useSelector(getProfileData)
	const canEdit = authData?.id === profileData?.id

	const editProfile = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	},[dispatch])

	const cancelEditProfile = useCallback(() => {
		dispatch(profileActions.cancelUpdate())
	}, [dispatch])

	const onSave = useCallback(() => {
		dispatch(updateProfileData())
	},[dispatch])

	return (
		<HStack justify="between" max className={classNames("", {}, [className])}>
			<Text title={t("Профиль")} />
			{
				canEdit && 
				<HStack gap="8">
					{readonly
						? <Button onClick={editProfile} theme={ButtonTheme.OUTLINE}>{t("Редактировать")}</Button>
						: (
							<>
								<Button onClick={cancelEditProfile} theme={ButtonTheme.OUTLINE_RED}>{t("Отменить")}</Button>
								<Button onClick={onSave} theme={ButtonTheme.OUTLINE}>{t("Сохранить")}</Button>
							</>
						)}
				</HStack>
			}
			
		</HStack>
	)
}