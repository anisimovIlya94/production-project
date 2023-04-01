import { ArticleType } from "entities/Article"
import { FC, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs"

interface ArticleTypeProps {
	className?: string;
	value: ArticleType
	onChangeType: (value: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeProps> = (props) => {
	const { className, value, onChangeType } = props
	const { t } = useTranslation()

	const tabTypes = useMemo<TabItem<ArticleType>[]>(() => {
		return [
			{
				content: t("Айти"),
				value: ArticleType.IT
			},
			{
				content: t("Экономика"),
				value: ArticleType.ECONOMICS
			},
			{
				content: t("Наука"),
				value: ArticleType.SCIENCE
			},
			{
				content: t("Все статьи"),
				value: ArticleType.ALL
			},
		]
	},[t])

	return <Tabs<ArticleType> tabs={tabTypes} value={value} onChangeTab={onChangeType}  className={classNames("", {}, [className])} />
}
