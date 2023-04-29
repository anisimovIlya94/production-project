import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Page } from "@/wigets/Page"

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const { id } = useParams<{ id: string }>()

	return (
		<Page className={classNames("", {}, [className])}>
			{id ? (
				<div>{t(`Страница редактирования статьи: ${id}`)}</div>
			) : (
				<div>{t("Страница создания статьи")}</div>
			)}
		</Page>
	)
}

export default ArticleEditPage
