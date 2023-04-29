import { classNames } from "@/shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useSelector } from "react-redux"
import { getUserAuthData } from "@/entities/User"
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData"
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly"
import { profileActions } from "../../model/slice/profileSlice"
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData"
import { HStack } from "@/shared/ui/Stack/HStack/HStack"
import { Text } from "@/shared/ui/Text/Text"
import { Button, ButtonTheme } from "@/shared/ui/Button/Button"

interface EditableProfileCardProps {
    className?: string;
}


export const EditableProfileCardHeader = memo((props: EditableProfileCardProps) => {
	const { className } = props
	const { t } = useTranslation("profile")
	const dispatch = useAppDispatch()
	const authData = useSelector(getUserAuthData)
	const profileData = useSelector(getProfileData)
	const canEdit = authData?.id === profileData?.id
	const readonly = useSelector(getProfileReadonly)

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
						? <Button data-testid={"EditableProfileCardHeader.EditButton"} onClick={editProfile} theme={ButtonTheme.OUTLINE}>{t("Редактировать")}</Button>
						: (
							<>
								<Button data-testid={"EditableProfileCardHeader.CancelButton"}  onClick={cancelEditProfile} theme={ButtonTheme.OUTLINE_RED}>{t("Отменить")}</Button>
								<Button data-testid={"EditableProfileCardHeader.SaveButton"}  onClick={onSave} theme={ButtonTheme.OUTLINE}>{t("Сохранить")}</Button>
							</>
						)}
				</HStack>
			}
			
		</HStack>
	)
})