import { addDecorator } from "@storybook/react"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator"
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator"
import {Theme} from "../../src/shared/const/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  themes: {
    default: 'light',
    list: [
      { name: 'dark', class: Theme.DARK, color: 'rgb(0 0 109)' },
      { name: 'orange', class: Theme.ORANGE, color: '#ff6c21' },
      { name: 'light', class: Theme.LIGHT, color: 'rgb(255 254 248)' }
    ],
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)