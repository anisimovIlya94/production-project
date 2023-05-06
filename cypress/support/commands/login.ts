import { USER_AUTH_KEY } from "../../../src/shared/const/localstorage"

export const login = (username = "testuser", password = "123") => {
	cy.request({
		method: "POST",
		url: "http://localhost:8000/login",
		body: {
			username,
			password
		},
	}).then(({ body }) => {
		window.localStorage.setItem(USER_AUTH_KEY, JSON.stringify(body))
	})
}