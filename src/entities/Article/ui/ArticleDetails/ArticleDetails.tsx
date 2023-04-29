import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/getArticleDetailsData"
import { fetchArticleById } from "../../model/services/fetchArticleById"
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { classNames } from "@/shared/lib/classNames/classNames"
import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Avatar } from "@/shared/ui/Avatar"
import { Skeleton } from "@/shared/ui/Skeleton"
import { Text, TextAlign, TextSize } from "@/shared/ui/Text"
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg"
import CalendarIcon from "@/shared/assets/icons/calendar-20-20.svg"
import cls from "./ArticleDetails.module.scss"
import { Icon } from "@/shared/ui/Icon"
import { ArcticleBlocks } from "../../model/types/article"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent"
import { useInitialEffects } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect"
import { ArticleBlockType } from "../../model/consts/articleConsts"
import { VStack } from "@/shared/ui/Stack"

interface ArticleDetailsProps {
  className?: string;
}

const reducers = {
	articleDetails: articleDetailsReducer
}

const renderBlock = (block: ArcticleBlocks) => {
	switch (block.type) {
	case ArticleBlockType.TEXT: 
		return <ArticleTextBlockComponent className={cls.block} key={block.id} block={block} />
	case ArticleBlockType.CODE: 
		return <ArticleCodeBlockComponent className={cls.block} key={block.id} block={block}/>
	case ArticleBlockType.IMAGE: 
		return <ArticleImageBlockComponent className={cls.block} key={block.id} block={block}/>
	default: return null
	}
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const { id } = useParams()


	const isLoading = useSelector(getArticleDetailsIsLoading)
	// const isLoading = true
	const data = useSelector(getArticleDetailsData)
	const error = useSelector(getArticleDetailsError)
	const articleId = (__PROJECT__ !== "storybook") ? id : "1"
	



	if (!articleId) {
		return (
			<div className={classNames(cls.articleDetails, {}, [className])}>{t("Статья не найдена")}</div>
		)
	}
  
	// useEffect(() => {
	//   if (__PROJECT__ !== "storybook") {
	//     dispatch(fetchArticleById(articleId))
	//   } 
	// }, [dispatch, articleId])
	//eslint-disable-next-line
	useInitialEffects(() => {
		dispatch(fetchArticleById(articleId))
	})

	let content

	if (isLoading) {
		content = (
			<>
				<Skeleton className={cls.avatar} width={200} height={200} border={"50%"} />
				<Skeleton className={cls.title} width={300} height={32} />
				<Skeleton className={cls.skeleton} width={600} height={24}/>
				<Skeleton className={cls.skeleton} width={"100%"} height={200}/>
				<Skeleton className={cls.skeleton} width={"100%"} height={200} />
			</>
		)
	} else if (error) {
		content = (
			<Text
				align={TextAlign.CENTER}
				title={t("Произошла ошибка при загрузке статьи")}
			/>
		)
	} else {
		content = (
			<>
				
				<div className={cls.avatarWrapper}>
					<Avatar size={200} src={data?.img} className={cls.avatar}/>
				</div>
				<Text className={cls.title} title={data?.title} text={data?.subtitle} size={TextSize.L}/>
				<div className={cls.avatarInfo}>
					<Icon Src={EyeIcon} className={cls.icon}/>
					<Text text={String(data?.views)}/>
				</div>
				<div className={cls.avatarInfo}>
					<Icon Src={CalendarIcon} className={cls.icon}/>
					<Text text={data?.createdAt}/>
				</div>
				{data?.blocks.map(renderBlock)}
			</>
		)
	}

	return (
		<DynamicModuleLoader isUnmount reducers={reducers}>
			<VStack max className={classNames(cls.articleDetails, {}, [className])}>
				{content}
			</VStack>
		</DynamicModuleLoader>
	)
}