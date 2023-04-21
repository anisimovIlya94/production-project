import { screen, fireEvent } from "@testing-library/react"
import { componentRouter } from "@/shared/lib/tests/componentRender/componentRender"
import { Sidebar } from "./Sidebar"

describe("button", () => {
	test("Отображение", () => {
		componentRouter(<Sidebar/>)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
	})

	test("Открытие сайдбара", () => {
		componentRouter(<Sidebar/>)
		const button = screen.getByTestId("sidebar-button")
		fireEvent.click(button)
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
	})
})