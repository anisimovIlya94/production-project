import { selectByTestId } from "../helpers/selectByTestId"

describe("Роутинг", () => {
	describe("Пользователь НЕ авторизован", () => {
		it("Переход на главную страницу", () => {
			cy.visit("/")
			cy.get(selectByTestId("MainPage")).should("exist")
		})
		it("Попытка перехода на страницу профиля", () => {
			cy.visit("/profile/1")
			cy.get(selectByTestId("MainPage")).should("exist")
		})
		it("Попытка перехода на несуществующую страницу", () => {
			cy.visit("/dfdfsd")
			cy.get(selectByTestId("NotFoundPage")).should("exist")
		})
	})
	describe("Пользователь авторизован", () => {
		beforeEach(() => {
			cy.login()
		})
		it("Переход на страницу профиля", () => {
			cy.visit("/profile/1")
			cy.get(selectByTestId("ProfilePage")).should("exist")
		})
		it("Переход на страницу статей", () => {
			cy.visit("/articles")
			cy.get(selectByTestId("ArticlePage")).should("exist")
		})
	})
})