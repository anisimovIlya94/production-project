import { ArticleView } from "../../model/types/article"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleViewSelector.module.scss"
import ListIcon from "shared/assets/icons/list-24-24.svg"
import TiledIcon from "shared/assets/icons/tiled-24-24.svg"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Icon } from "shared/ui/Icon/Icon"

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView
  setView: (view: ArticleView) => void
}

const viewTypes = [
	{
		view: ArticleView.SMALL,
		icon: TiledIcon
	},
	{
		view: ArticleView.BIG,
		icon: ListIcon
	}
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
	const { className, view, setView } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.articleViewSelector, {}, [className])}>
			{viewTypes.map((type) => {
				return (
					<Button
						theme={ButtonTheme.CLEAR}
						onClick={() => setView(type.view)}
						key={type.view}
					>
						<Icon Src={type.icon} className={view === type.view ? cls.selected : cls.type}/>
					</Button>
				)
			})}
		</div>
	)
}
