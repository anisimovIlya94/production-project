import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { Card } from "shared/ui/Card/Card"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { ArticleView } from "../../model/consts/articleConsts"

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeletons: FC<ArticleListItemProps> = (props) => {
	const { className, view } = props
    
	const types = <Skeleton width={130} height={16} className={cls.types} />

	if (view === ArticleView.BIG) {
		return (
			<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
				<Card>
					<div className={cls.header}>
						<Skeleton width={30} height={30} border={"50%"} />
						<Skeleton className={cls.username} width={170} height={16}/>
						<Skeleton width={150} height={16} className={cls.date}/>
					</div>
					<Skeleton width={500} height={32} className={cls.title} />
					<Skeleton className={cls.image} width={"100%"} height={350} />
					<div className={cls.footer}>
						<Skeleton width={150} height={32}/>
					</div>
				</Card>
			</div>
		)
	}

	return (
		<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
			<Card className={cls.card}>
				<div className={cls.imageWrapper}>
					<Skeleton width={200} height={200} className={cls.image} />
				</div>
				<div className={cls.infoWrapper}>
					{types}
				</div>
				<Skeleton width={160} height={16} className={cls.title}/>
			</Card>
		</div>
	)
}
