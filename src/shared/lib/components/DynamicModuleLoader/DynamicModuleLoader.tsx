import { Reducer } from "@reduxjs/toolkit"
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema"
import { PropsWithChildren, useEffect } from "react"
import { ReduxStoreWithManager } from "app/providers/StoreProvider"
import { useDispatch, useStore } from "react-redux"

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    isUnmount?: boolean
}

export function DynamicModuleLoader(props: PropsWithChildren<DynamicModuleLoaderProps>) {
	const { children, isUnmount = true, reducers } = props

	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()
    
	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap()
		
		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey] 

			if (!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer)
				dispatch({type: `@INIT ${name} reducer`})
			}
		})
		
		return () => {
			if (isUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey)
					dispatch({ type: `@DEST ${name} reducer` })
				})
			}
		}
		//eslint-disable-next-line
	},[])

	return (
		<>
			{children}
		</>
	)
}