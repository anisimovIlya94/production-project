import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/wigets/Page/Page"

const AboutPage = memo(() => {
	const { t } = useTranslation("about")
	return (<Page>
		{t("Страница о сайте")}
	</Page> )
})
 
export default AboutPage