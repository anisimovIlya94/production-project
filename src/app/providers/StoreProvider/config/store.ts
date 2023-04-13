import { rtkApi } from "shared/api/rtkApi"
// import { NavigateOptions } from "react-router-dom"
// import { To } from "react-router-dom"
import { StateSchema, ThunkExtraArg } from "./StateSchema"
import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { counterReducer } from "entities/Counter"
import { userReducer } from "entities/User"
import { createReducerManager } from "./reducerManager"
import { $api } from "shared/api/api"
import { scrollSaveReducer } from "features/scrollSave"

export function createReduxStore(
	initialState?: StateSchema,
	asyncRedusers?: ReducersMapObject<StateSchema>,
	// navigate?: (to: To, options?: NavigateOptions) => void
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncRedusers,
		counter: counterReducer,
		user: userReducer,
		scrollSave: scrollSaveReducer,
		[rtkApi.reducerPath]: rtkApi.reducer
	}

	const reducerManager = createReducerManager(rootReducers)

	const extraArg: ThunkExtraArg = {
		api: $api,
		// navigate
	}

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg
			}
		}).concat(rtkApi.middleware)
	})

	//@ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]