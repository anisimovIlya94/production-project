import { useTranslation } from "react-i18next"
import { memo, useEffect, useState } from "react"
import { Modal } from "@/shared/ui/Modal"
import { Text } from "@/shared/ui/Text"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { saveJsonSettings, useJsonSettings } from "@/entities/User"

export const ArticlePageGreeting = memo(() => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useAppDispatch()

	const { articlePageHasBeenOpened } = useJsonSettings()

	useEffect(() => {
		if (!articlePageHasBeenOpened) {
			setIsOpen(true)
			dispatch(saveJsonSettings({ articlePageHasBeenOpened: true }))
		}
	},[articlePageHasBeenOpened, dispatch])

	const onClose = () => {
		setIsOpen(false)
	}
    
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Text
				title={t("Добро пожаловать на страницу статей")}
				text={t("Здесь вы можете просматривать, сортировать и искать нужные статьи")}
			/>
		</Modal>
	)
})