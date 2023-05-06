// import { BugButton } from "@/app/providers/ErrorBoundary"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/wigets/Page"
import { Counter } from "@/entities/Counter"

const MainPage = memo(() => {
	const { t } = useTranslation()
	return (
		<Page data-testId="MainPage"> 
			{t("Главная страница")}
			{/* <Counter/> */}
			{/* <BugButton /> */}
		</Page>
	)
})

export default MainPage
