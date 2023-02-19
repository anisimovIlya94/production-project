import "app/styles/index.scss"
import { Story } from "@storybook/react"
import { Theme, ThemeProvider } from "app/providers/themeProvider"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
	return (
		<ThemeProvider>
			<div className={`app ${theme}`}>
				<StoryComponent/>
			</div>
		</ThemeProvider>
	)
}