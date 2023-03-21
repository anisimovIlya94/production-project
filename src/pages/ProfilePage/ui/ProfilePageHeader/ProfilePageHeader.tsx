import {classNames} from "shared/lib/classNames/classNames"
import cls from "./ProfilePageHeader.module.scss"

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
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<Text title={t("Профиль")} />
			{
				canEdit && 
				<div className={cls.canEditBtns}>
					{readonly
						? <Button className={cls.editBtn} onClick={editProfile} theme={ButtonTheme.OUTLINE}>{t("Редактировать")}</Button>
						: (
							<>
								<Button className={cls.editBtn} onClick={cancelEditProfile} theme={ButtonTheme.OUTLINE_RED}>{t("Отменить")}</Button>
								<Button className={cls.saveBtn} onClick={onSave} theme={ButtonTheme.OUTLINE}>{t("Сохранить")}</Button>
							</>
						)}
				</div>
			}
			
		</div>
	)
}