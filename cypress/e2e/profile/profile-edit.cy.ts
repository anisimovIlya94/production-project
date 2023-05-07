let profileId = ""
describe("Пользователь заходит на страницу профиля", () => {
	beforeEach(() => {
		cy.login().then((data) => {
			cy.visit("profile/" + data.id)
			profileId = data.id
		})
	})
	afterEach(() => {
		cy.resetProfile(profileId)
	})
	it("И данные успешно прогрузились", () => {
		cy.getByTestId("ProfileCard.firstname").should("have.value", "test")
	})
	it("И изменил данные", () => {
		const newFirstname = "firstname"
		const newLastname = "lastname"
		cy.updateProfile(newFirstname, newLastname)
		cy.getByTestId("ProfileCard.firstname").should("have.value", newFirstname)
		cy.getByTestId("ProfileCard.lastname").should("have.value", newLastname)
	})
})