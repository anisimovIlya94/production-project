import { Article, ArticleTextBlock } from "../../model/types/article"
import { FC, HTMLAttributeAnchorTarget } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { Text } from "@/shared/ui/Text"
import { Icon } from "@/shared/ui/Icon"
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg"
import { Card } from "@/shared/ui/Card"
import { Avatar } from "@/shared/ui/Avatar"
import { Button } from "@/shared/ui/Button"
import { useTranslation } from "react-i18next"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { AppLink } from "@/shared/ui/AppLink"
import { ArticleBlockType, ArticleView } from "../../model/consts/articleConsts"
import { getRouteArticleDetails } from "@/shared/const/router"

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
	article: Article;
	target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
	const { className, view, article, target } = props
	const { t } = useTranslation()
	const textBlock = article.blocks?.find((block) => block.type === ArticleBlockType.TEXT) as  ArticleTextBlock
	const views = (
		<>
			<Text text={String(article.views)} className={cls.views} />
			<Icon Src={EyeIcon} />
		</>
	)

	const date = <Text text={article.createdAt} className={cls.date} />
	const types = <Text text={article.type?.join(", ")} className={cls.types} />

	if (view === ArticleView.BIG) {
		return (
			<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
				<Card>
					<div className={cls.header}>
						<Avatar size={30} src={article.user.avatar} />
						<Text text={article.user.username} className={cls.username}/>
						{date}
					</div>
					<div>
						<Text title={article.title} className={cls.title} />
						{types}
					</div>
					<img className={cls.image} src={article.img} alt={article.title} />
					<ArticleTextBlockComponent className={cls.textBlock} block={textBlock}/>
					<div className={cls.footer}>
						<AppLink target={target} to={getRouteArticleDetails(article.id)}>
							<Button>{t("Читать далее...")}</Button>
						</AppLink>
						{views}
					</div>
				</Card>
			</div>
		)
	}

	return (
		<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
			<AppLink target={target} to={getRouteArticleDetails(article.id)}>
				<Card className={cls.card}>
					<div className={cls.imageWrapper}>
						<img src={article.img} alt={article.title} className={cls.image} />
						{date}
					</div>
					<div className={cls.infoWrapper}>
						{types}
						{views}
					</div>
					<Text className={cls.title} text={article.title}/>
				</Card>
			</AppLink>
		</div>
	)
}
