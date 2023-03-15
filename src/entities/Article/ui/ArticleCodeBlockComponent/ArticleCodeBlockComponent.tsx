import { ArticleCodeBlock } from "entities/Article/model/types/article";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code/Code";
import cls from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
  props
) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
        <Code text={block?.code}></Code>
    </div>
  );
};
