import { ReducersMapObject } from "@reduxjs/toolkit"
import type { PropsWithChildren, ReactNode } from "react"
import { Provider } from "react-redux"
import { useNavigate } from "react-router-dom"
import { StateSchema } from "../config/StateSchema"
import { createReduxStore } from "../config/store"

interface StoreProviderProps {
    children?: ReactNode;
	initialState?: DeepPartial<StateSchema>
	asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function StoreProvider(props: PropsWithChildren<StoreProviderProps>) {
	const { children, initialState, asyncRedusers } = props

	const navigate = useNavigate()
	const store = createReduxStore(
		initialState as StateSchema,
		asyncRedusers as ReducersMapObject<StateSchema>,
		navigate
	)

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}