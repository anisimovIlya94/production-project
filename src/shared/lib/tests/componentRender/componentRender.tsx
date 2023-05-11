import { ReducersMapObject } from "@reduxjs/toolkit"
import { render } from "@testing-library/react"
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"
import i18nForTests from "../../../config/i18n/i18nForTests"
import { Theme } from "@/shared/const/theme"
//eslint-disable-next-line
import { ThemeProvider } from "@/app/providers/themeProvider"
//eslint-disable-next-line
import "@/app/styles/index.scss"

interface ComponentRouterOptions {
	route?: string
	initialState?: DeepPartial<StateSchema>
	asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>
	theme?: Theme
}
interface TestProviderProps{
	children: ReactNode
	options?: ComponentRouterOptions
}

export function TestProvider(props: TestProviderProps) {
	const { children, options = {} } = props
	const {
		route = "/",
		initialState,
		asyncRedusers,
		theme
	} = options
	return (
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider asyncRedusers={asyncRedusers} initialState={initialState}>
				<I18nextProvider i18n={i18nForTests}>
					<ThemeProvider initialTheme={theme}>
						<div className={`app ${theme}`}>
							{children}
						</div>
					</ThemeProvider>
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	)
}

export function componentRouter(component: ReactNode, options: ComponentRouterOptions = {}) {
	return (
		render(
			<TestProvider options={options}>
				{component}
			</TestProvider>
		)
	)
}