import { FC, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "@/shared/lib/classNames/classNames"
import { SortOption } from "@/shared/lib/types/sort"
import { Select, SelectOption } from "@/shared/ui/Select"
import cls from "./ArticleSortSelector.module.scss"
import { ArticleSortField } from "@/entities/Article"

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOption
  sort: ArticleSortField
  onChangeOrder: (newOrder: SortOption) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
	const { className, order, sort, onChangeOrder, onChangeSort } = props
	const { t } = useTranslation()

	const sortFieldOptions: SelectOption<ArticleSortField>[] = useMemo(() => [
		{
			value: ArticleSortField.TITLE,
			content: t("названию")
		},
		{
			value: ArticleSortField.CREATED,
			content: t("дате создания")
		},
		{
			value: ArticleSortField.VIEWS,
			content: t("просмотрам")
		},
	], [t])

	const sortDirectionOptions: SelectOption<SortOption>[] = useMemo(() => [
		{
			value: "asc",
			content: t("возрастанию")
		},
		{
			value: "desc",
			content: t("убыванию")
		}
	], [t])

	return (
		<div className={classNames(cls.articleSortSelector, {}, [className])}>
			<Select value={sort} onSelect={onChangeSort} options={sortFieldOptions} label={t("Сортировать ПО")}/>
			<Select value={order} className={cls.direction} onSelect={onChangeOrder} options={sortDirectionOptions} label={t("по")}/>
		</div>
	)
}
