import { ArticleTextBlock } from "../../model/types/article"
import { FC } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Text } from "@/shared/ui/Text"
import cls from "./ArticleTextBlockComponent.module.scss"

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (
	props
) => {
	const { className, block } = props

	return (
		<div
			className={classNames(cls.articleTextBlockComponent, {}, [className])}
		>
			{block.title && <Text className={cls.title} title={block.title} />}
			{block.paragraphs.map(parag => (
				<Text className={cls.paragraph} text={parag} key={parag}/>
			))}
		</div>
	)
}
