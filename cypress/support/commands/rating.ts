export const addRating = (starsCount = 5, feedback = "") => {
	cy.getByTestId("StarRating." + starsCount).click()
	cy.getByTestId("RatingCard.Input").type(feedback)
	cy.getByTestId("RatingCard.Send").click()
}

declare global {
	namespace Cypress {
		interface Chainable {
        addRating(starsCount?: number, feedback?: string): Chainable<void>
		}
	}
}