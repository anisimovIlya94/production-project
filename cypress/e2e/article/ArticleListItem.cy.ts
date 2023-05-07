let articleId = ""

describe("Пользователь заходит на страницу статьи", () => {
	beforeEach(() => {
		cy.login()
		cy.createArticle().then((data) => {
			cy.visit("articles/" + data.id)
			articleId = data.id
		})
	})
	afterEach(() => {
		cy.removeArticle(articleId)
	})
	it("и отображается содержимое", () => {
		cy.getByTestId("ArticleDetails.Info").should("exist")
	})

	it("и отображаюся рекоммендации", () => {
		cy.getByTestId("ArticleList").should("exist")
	})

	it("и отправляет комментарий", () => {
		cy.getByTestId("ArticleDetails.Info").should("exist")
		cy.getByTestId("AddCommentForm").scrollIntoView()
		cy.addComment("text")
		cy.getByTestId("CommentCard.Content").should("have.length", 1)
	})

	it("и ставит оценку статье", () => {
		cy.getByTestId("ArticleDetails.Info").should("exist")
		cy.getByTestId("RatingCard").scrollIntoView()
		cy.addRating(4, "feedback")
		cy.get("[data-selected=true]").should("have.length", 4)
	})
})