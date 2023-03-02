import { Reducer } from "@reduxjs/toolkit"
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema"
import { PropsWithChildren, useEffect } from "react"
import { ReduxStoreWithManager } from "app/providers/StoreProvider"
import { useDispatch, useStore } from "react-redux"

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerCortege = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    isUnmount: boolean
}

export function DynamicModuleLoader(props: PropsWithChildren<DynamicModuleLoaderProps>) {
	const { children, isUnmount, reducers } = props

	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()
    
	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducerCortege) => {
			store.reducerManager.add(name, reducer)
			dispatch({type: `@INIT ${name} reducer`})
		})
		
		return () => {
			if (isUnmount) {
				Object.entries(reducers).forEach(([name, reducer]: ReducerCortege) => {
					store.reducerManager.remove("login")
					dispatch({ type: `@DEST ${name} reducer` })
				})
			}
		}
	},[isUnmount, dispatch, reducers, store])

	return (
		<>
			{children}
		</>
	)
}