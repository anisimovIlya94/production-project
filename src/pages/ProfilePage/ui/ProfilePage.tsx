import {classNames} from "shared/lib/classNames/classNames"

import { memo, PropsWithChildren } from "react"
import { useTranslation } from "react-i18next"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { profileReducer } from "entities/Profile/model/slice/profileSlice"

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
	profile: profileReducer
}

const ProfilePage = memo((props: PropsWithChildren<ProfilePageProps>) => {
	const { className } = props
	const {t} = useTranslation()

	return (
		<DynamicModuleLoader isUnmount reducers={reducers}>
			<div className={classNames("", {}, [className])}>
				<h1>{t("ProfilePage")}</h1>
			</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage  