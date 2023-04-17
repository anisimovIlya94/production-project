import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "app/App"
import { ThemeProvider } from "app/providers/themeProvider/ui/ThemeProvider"
import "app/styles/index.scss"

import "./shared/config/i18n/i18n"
import { ErrorBoundary } from "app/providers/ErrorBoundary"
import { StoreProvider } from "app/providers/StoreProvider"


const container = document.getElementById("root")

if (!container) {
	throw new Error("Контейнер root не найден. Не удалось вмонтировать react приложение")
}

const root = createRoot(container)

root.render(
	<ErrorBoundary>
		<BrowserRouter>
			<StoreProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</StoreProvider>
		</BrowserRouter>
	</ErrorBoundary>
)
