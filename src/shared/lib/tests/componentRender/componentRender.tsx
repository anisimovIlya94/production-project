import { render } from "@testing-library/react"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"
import i18nForTests from "../../../config/i18n/i18nForTests"

interface ComponentRouterOptions {
	route?: string
	initialState?: DeepPartial<StateSchema>
}

export function componentRouter(component: ReactNode, options: ComponentRouterOptions = {}) {
	const {
		route = "/",
		initialState
	} = options
	return (
		render(
			<MemoryRouter initialEntries={[route]}>
				<StoreProvider initialState={initialState}>
					<I18nextProvider i18n={i18nForTests}>
						{component}
					</I18nextProvider>
				</StoreProvider>
			</MemoryRouter>
		)
	)
}