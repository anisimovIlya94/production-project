import { EntityState } from "@reduxjs/toolkit"
import { Article, ArticleView, ArticleSortField, ArticleType } from "@/entities/Article"
import { SortOption } from "@/shared/lib/types/sort"

export interface ArticlePageSchema extends EntityState<Article>{
    isLoading: boolean
    error?: string
    limit: number
    page: number
    hasMore: boolean
    _init: boolean
    // filter
    view?: ArticleView
    order: SortOption
    sort: ArticleSortField
    search: string
    type: ArticleType
}