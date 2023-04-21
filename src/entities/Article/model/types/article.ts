import { User } from "@/entities/User"
import { ArticleBlockType, ArticleType } from "../consts/articleConsts"

interface ArticleBaseBlock{
    id: string
    type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBaseBlock{
    type: ArticleBlockType.TEXT
    title?: string
    paragraphs: string[]
}

export interface ArticleImageBlock extends ArticleBaseBlock{
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}

export interface ArticleCodeBlock extends ArticleBaseBlock{
    type: ArticleBlockType.CODE
    code: string
}

export type ArcticleBlocks = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export interface Article {
    id: string,
    user: User,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArcticleBlocks[]
}