import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "@/shared/ui/Button/Button"

export function BugButton() {
	const [error, setError] = useState(false)
	const {t} = useTranslation()

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	},[error])

	return (
		<Button theme={ButtonTheme.OUTLINE} onClick={()=>{setError(prev => !prev)}}>
			{t("Создать ошибку")}
		</Button>
	)
}