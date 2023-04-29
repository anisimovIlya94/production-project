import { ArticleImageBlock } from "../../model/types/article"
import { FC } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Text, TextAlign } from "@/shared/ui/Text"
import cls from "./ArticleImageBlockComponent.module.scss"

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (
	props
) => {
	const { className, block } = props

	return (
		<div
			className={classNames(cls.articleImageBlockComponent, {}, [className])}
		>
			<img src={block.src} alt={block.title} className={cls.image} />
			{block.title && <Text title={block.title} align={TextAlign.CENTER}/>}
		</div>
	)
}
