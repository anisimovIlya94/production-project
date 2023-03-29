import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage/model/types/ArticleDetailsCommentsSchema"
import { Reducer, AnyAction, CombinedState, EnhancedStore, ReducersMapObject } from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { ArticleSchema } from "entities/Article"
import { CounterSchema } from "entities/Counter"
import { ProfileSchema } from "entities/Profile"
import { UserSchema } from "entities/User"
import { LoginSchema } from "features/AuthByUsername"
import { AddCommentFormSchema } from "features/addCommentFrom"
import { ArticlePageSchema } from "pages/ArticlePage/model/types/articlePage"

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema,
    //асинхронные
    login?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
    articlePage?: ArticlePageSchema
}

export interface ReducerManager{
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export type StateSchemaKey = keyof StateSchema

export interface ThunkExtraArg {
    api: AxiosInstance
    // navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkOptions<T>{
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}