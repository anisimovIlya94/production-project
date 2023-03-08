import {classNames} from "shared/lib/classNames/classNames"
import { memo, PropsWithChildren, useEffect } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { profileReducer } from "entities/Profile/model/slice/profileSlice"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData"
import { ProfileCard } from "entities/Profile"

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
	profile: profileReducer
}

const ProfilePage = memo((props: PropsWithChildren<ProfilePageProps>) => {
	const { className } = props
	const dispatch = useAppDispatch() 
	
	useEffect(() => {
		dispatch(fetchProfileData())
	},[dispatch])

	return (
		<DynamicModuleLoader isUnmount reducers={reducers}>
			<div className={classNames("", {}, [className])}>
				<ProfileCard/>
			</div>
		</DynamicModuleLoader>
	)
})

export default ProfilePage  