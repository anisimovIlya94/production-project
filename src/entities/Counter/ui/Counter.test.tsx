import { screen } from "@testing-library/react"
import {userEvent} from "@storybook/testing-library"
import { componentRouter } from "@/shared/lib/tests/componentRender/componentRender"
import { Counter } from "./Counter"

describe("counter", () => {
	test("Отображение", () => {
		componentRouter(<Counter />, {
			initialState: {
				counter: {
					value: 10
				}
			}
		})
		expect(screen.getByTestId("counter-value")).toHaveTextContent("10")
	})
	test("increment", () => {
		componentRouter(<Counter />, {
			initialState: {
				counter: {
					value: 10
				}
			}
		})
		userEvent.click(screen.getByTestId("increment"))
		expect(screen.getByTestId("counter-value")).toHaveTextContent("11")
	})
	test("decrement", () => {
		componentRouter(<Counter />, {
			initialState: {
				counter: {
					value: 10
				}
			}
		})
		userEvent.click(screen.getByTestId("decrement"))
		expect(screen.getByTestId("counter-value")).toHaveTextContent("9")
	})
})