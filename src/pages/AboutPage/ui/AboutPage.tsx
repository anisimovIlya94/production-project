import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/wigets/Page"

const AboutPage = memo(() => {
	const { t } = useTranslation("about")
	return (
		<Page data-testId="AboutPage">
			{t("Страница о сайте")}
		</Page>
	)
})
 
export default AboutPage