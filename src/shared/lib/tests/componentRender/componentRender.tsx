import { render } from "@testing-library/react"
import { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router-dom"
import i18nForTests from "../../../config/i18n/i18nForTests"

interface ComponentRouterOptions {
    route?: string
}

export function componentRouter(component: ReactNode, options: ComponentRouterOptions = {}) {
	const {
		route = "/"
	} = options
	return (
		render(
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		)
	)
}