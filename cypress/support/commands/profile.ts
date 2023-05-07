export const updateProfile = (newFirstname: string, newLastname : string) => {
	cy.getByTestId("EditableProfileCardHeader.EditButton").click()
	cy.getByTestId("ProfileCard.firstname").clear().type(newFirstname)
	cy.getByTestId("ProfileCard.lastname").clear().type(newLastname)
	cy.getByTestId("EditableProfileCardHeader.SaveButton").click()
}

export const resetProfile = (profileId: string) => {
	cy.request({
		method: "PUT",
		url: "http://localhost:8000/profile/" + profileId,
		headers: {Authorization: "asd"},
		body: {
			id: "4",
			first: "test",
			lastname: "test",
			age: 29,
			currency: "RUB",
			country: "Russia",
			city: "TestCity",
			username: "testuser",
			avatar: "https://xakep.ru/wp-content/uploads/2015/08/41885761_xl.jpg"
		}
	})
}

declare global {
	namespace Cypress {
		interface Chainable {
        updateProfile(newFirstname: string, newLastname : string): Chainable<void>
        resetProfile(profileId: string): Chainable<void>
		}
	}
}