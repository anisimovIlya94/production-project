import { classNames } from "@/shared/lib/classNames/classNames"
import { memo, PropsWithChildren } from "react"
import { useParams } from "react-router-dom"
import { Page } from "@/wigets/Page"
import { VStack } from "@/shared/ui/Stack"
import { EditableProfileCard } from "@/features/editableProfileCard"
import { Text } from "@/shared/ui/Text"
import { useTranslation } from "react-i18next"

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: PropsWithChildren<ProfilePageProps>) => {
	const { className } = props
	const { id } = useParams<{ id: string }>()
	const { t } = useTranslation("profile")

	if (!id) {
		return <Text title={t("Ошибка при получении данных пользователя")} />
	}

	return (
		<Page data-testId="ProfilePage" className={classNames("", {}, [className])}>
			<VStack gap="16" max>
				<EditableProfileCard id={id} />
			</VStack>
		</Page>
	)
})

export default ProfilePage
