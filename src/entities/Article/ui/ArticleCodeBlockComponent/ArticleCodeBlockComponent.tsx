import { ArticleCodeBlock } from "../../model/types/article"
import { FC } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Code } from "@/shared/ui/Code"
import cls from "./ArticleCodeBlockComponent.module.scss"

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
	props
) => {
	const { className, block } = props

	return (
		<div
			className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
			<Code text={block?.code}></Code>
		</div>
	)
}
