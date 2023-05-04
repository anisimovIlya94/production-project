import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/wigets/Page"

export const ForbiddenPage = memo(() => {
	const { t } = useTranslation()
	return <Page data-testId="ForbiddenPage">{t("У вас нет доступа к этой странице")}</Page>
})
