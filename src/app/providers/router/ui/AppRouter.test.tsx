import { componentRouter } from "@/shared/lib/tests/componentRender/componentRender"
import AppRouter from "./AppRouter"
import { getRouteAbout, getRouteAdmin, getRouteProfile } from "@/shared/const/router"
import { screen } from "@testing-library/react"
import { UserRole } from "@/entities/User"

describe("AppRouter.test", () => {
	test("Страница должна прогрузиться", async () => {
		componentRouter(<AppRouter />, {
			route: getRouteAbout()
		})
		const page = await screen.findByTestId("AboutPage")
		expect(page).toBeInTheDocument()
	})

	test("Страница не найдена", async () => {
		componentRouter(<AppRouter />, {
			route: "/dfsdfsd"
		})
		const page = await screen.findByTestId("NotFoundPage")
		expect(page).toBeInTheDocument()
	})

	test("Редирект неавторизованного пользователя на главную", async () => {
		componentRouter(<AppRouter />, {
			route: getRouteProfile("1")
		})
		const page = await screen.findByTestId("MainPage")
		expect(page).toBeInTheDocument()
	})

	test("Доступ к закрытой странице авторизованного пользователя", async () => {
		componentRouter(<AppRouter />, {
			route: getRouteProfile("1"),
			initialState: {
				user: {
					_inited: true,
					authData: {}
				}
			}
		})
		const page = await screen.findByTestId("ProfilePage")
		expect(page).toBeInTheDocument()
	})

	test("Доступ запрещен(отсутствует роль)", async () => {
		componentRouter(<AppRouter />, {
			route: getRouteAdmin(),
			initialState: {
				user: {
					_inited: true,
					authData: {}
				}
			}
		})
		const page = await screen.findByTestId("ForbiddenPage")
		expect(page).toBeInTheDocument()
	})

	test("Доступ разрешен(присутствует роль)", async () => {
		componentRouter(<AppRouter />, {
			route: getRouteAdmin(),
			initialState: {
				user: {
					_inited: true,
					authData: {
						roles: [UserRole.ADMIN]
					}
				}
			}
		})
		const page = await screen.findByTestId("AdminPanelPage")
		expect(page).toBeInTheDocument()
	})
})