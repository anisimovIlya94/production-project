import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/wigets/Page"

const AdminPanelPage = memo(() => {
	const { t } = useTranslation()
	return <Page data-testId="AdminPanelPage">{t("Страница администрирования")}</Page>
})

export default AdminPanelPage
