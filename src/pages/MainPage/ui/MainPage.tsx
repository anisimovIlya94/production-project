import { BugButton } from "@/app/providers/ErrorBoundary"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/wigets/Page/Page"

const MainPage = memo(() => {
	const { t } = useTranslation()
	return (
		<Page>
			{t("Главная страница")}
			<BugButton />
		</Page>
	)
})
 
export default MainPage