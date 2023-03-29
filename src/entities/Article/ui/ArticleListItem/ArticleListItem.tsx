import { ArticleView, Article, ArticleTextBlock, ArticleBlockType } from "../../model/types/article"
import { FC, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { Text } from "shared/ui/Text/Text"
import { Icon } from "shared/ui/Icon/Icon"
import EyeIcon from "shared/assets/icons/eye-20-20.svg"
import { Card } from "shared/ui/Card/Card"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Button } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { useNavigate } from "react-router-dom"
import { RoutesPath } from "shared/config/routerConfig/routerConfig"

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
	const { className, view, article } = props
	const { t } = useTranslation()
	const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as  ArticleTextBlock
	const views = (
		<>
			<Text text={String(article.views)} className={cls.views} />
			<Icon Src={EyeIcon} />
		</>
	)
	const navigate = useNavigate()

	const onOpenArticle = useCallback(() => {
		navigate(RoutesPath.article_details + article.id)
	},[navigate, article.id])

	const date = <Text text={article.createdAt} className={cls.date} />
	const types = <Text text={article.type.join(", ")} className={cls.types} />

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
						<Button onClick={onOpenArticle}>{t("Читать далее...")}</Button>
						{views}
					</div>
				</Card>
			</div>
		)
	}

	return (
		<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
			<Card className={cls.card} onClick={onOpenArticle}>
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
		</div>
	)
}
