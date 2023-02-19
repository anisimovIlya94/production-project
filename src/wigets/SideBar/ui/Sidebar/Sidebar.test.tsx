import { screen, fireEvent } from "@testing-library/react"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation"
import { Sidebar } from "./Sidebar"

describe("button", () => {
	test("Отображение", () => {
		renderWithTranslation(<Sidebar/>)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
	})

	test("Открытие сайдбара", () => {
		renderWithTranslation(<Sidebar/>)
		const button = screen.getByTestId("sidebar-button")
		fireEvent.click(button)
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
	})
})