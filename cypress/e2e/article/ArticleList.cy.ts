describe("Пользователь зашел на страницу со статьями", () => {
	beforeEach(() => {
		cy.login().then(() => {
			cy.visit("articles")
		})
	})
	it("и она успешно прогрузилась", () => {
		cy.getByTestId("ArticleList").should("exist")
		cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3)
	})
})