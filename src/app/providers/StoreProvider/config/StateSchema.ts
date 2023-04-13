import { rtkApi } from "shared/api/rtkApi"
import { Reducer, AnyAction, CombinedState, EnhancedStore, ReducersMapObject } from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { ArticleSchema } from "entities/Article"
import { CounterSchema } from "entities/Counter"
import { UserSchema } from "entities/User"
import { LoginSchema } from "features/AuthByUsername"
import { AddCommentFormSchema } from "features/addCommentFrom"
import { ArticlePageSchema } from "pages/ArticlePage/model/types/articlePage"
import { ScrollSaveSchema } from "features/scrollSave"
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage"
import { ProfileSchema } from "features/editableProfileCard"

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollSave: ScrollSaveSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    //асинхронные
    login?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleSchema
    addCommentForm?: AddCommentFormSchema
    articlePage?: ArticlePageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
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