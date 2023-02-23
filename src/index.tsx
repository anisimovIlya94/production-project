import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "app/App"
import { ThemeProvider } from "app/providers/themeProvider/ui/ThemeProvider"
import "app/styles/index.scss"

import "./shared/config/i18n/i18n"
import { ErrorBoundary } from "app/providers/ErrorBoundary"
import { StoreProvider } from "app/providers/StoreProvider"

render(
	<StoreProvider>
		<ErrorBoundary>
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</ErrorBoundary>
	</StoreProvider>
	,
	document.getElementById("root")
)
