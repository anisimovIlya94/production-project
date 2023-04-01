import { User } from "entities/User"

export enum ArticleBlockType {
    TEXT = "TEXT",
    CODE = "CODE",
    IMAGE = "IMAGE"
}

export enum ArticleSortField {
    CREATED = "createdAt",
    VIEWS = "views",
    TITLE = "title"
}

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

export enum ArticleType{
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
    ALL = "ALL"
}

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

export enum ArticleView {
    BIG = "BIG",
    SMALL = "SMALL"
}