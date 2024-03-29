//eslint-disable-next-line
import "@/app/styles/index.scss"
import { Story } from "@storybook/react"
//eslint-disable-next-line
import { ThemeProvider } from "@/app/providers/themeProvider"
import { Theme } from "@/shared/const/theme"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
	return (
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StoryComponent/>
			</div>
		</ThemeProvider>
	)
}