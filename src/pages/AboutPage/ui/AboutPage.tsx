import { useTranslation } from "react-i18next"

const AboutPage = () => {
	const { t } = useTranslation("about")
	return (<div>
		{t("Страница о сайте")}
	</div> )
}
 
export default AboutPage