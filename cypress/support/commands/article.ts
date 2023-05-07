import { Article } from "../../../src/entities/Article/model/types/article"

const defaultArticle = {
	userId: "1",
	title: "TESTING",
	subtitle: "Что нового в JS за 2022 год?",
	img: "https://www.itsec.ru/hubfs/ISR/Golang.png",
	views: 4533,
	createdAt: "29.06.2021",
	type: [
		"IT"
	],
	blocks: []
}

export const createArticle = (article?: Article) => {
	return cy.request({
		method: "POST",
		url: "http://localhost:8000/articles",
		headers: {Authorization: "asd"},
		body: article ?? defaultArticle
	}).then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
	return cy.request({
		method: "DELETE",
		url: "http://localhost:8000/articles/" + articleId,
		headers: {Authorization: "asd"}
	})
}

declare global {
	namespace Cypress {
		interface Chainable {
        createArticle(article?: Article): Chainable<Article>
        removeArticle(articleId: string): Chainable<void>
		}
	}
}