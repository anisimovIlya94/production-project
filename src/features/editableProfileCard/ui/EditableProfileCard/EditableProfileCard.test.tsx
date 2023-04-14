import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { Profile } from "entities/Profile"
import { profileReducer } from "../../model/slice/profileSlice"
import { $api } from "shared/api/api"
import { componentRouter } from "shared/lib/tests/componentRender/componentRender"
import { EditableProfileCard } from "./EditableProfileCard"

const profile: Profile = {
	id: "1",
	first: "admin",
	age: 28,
	lastname: "admin",
	currency: Currency.RUB,
	country: Country.Belarus,
	city: "EkB",
	username: "admin",
	avatar: "https://cq.ru/storage/uploads/posts/961737/fr.jpg"
}

describe("button", () => {
	beforeEach(() => {
		componentRouter(<EditableProfileCard id="1" />, {
			initialState: {
				profile: {
					readonly: true,
					data: profile,
					form: profile
				},
				user: {
					authData: {
						id: "1",
						username: "admin"
					}
				}
			},
			asyncRedusers: {
				profile: profileReducer
			}
		})
	})
	test("Должен измениться статуc readonly", async () => {
		await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"))
		expect(screen.getByTestId("EditableProfileCardHeader.CancelButton")).toBeInTheDocument()
	})
    
	test("Должены обнулиться значения в формах", async () => {
		await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"))

		await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))
		await userEvent.clear(screen.getByTestId("ProfileCard.lastname"))

		await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user")
		await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user")

		expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user")
		expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user")

		await userEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"))

		expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin")
		expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin")
	})
    
	test("Должена появиться ошибка", async () => {
		await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"))

		await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))

		await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"))

		expect(screen.getByTestId("EditableProfileCard.Error.Paragraph")).toBeInTheDocument()
	})
    
	test("При отсутствии ошибок валидации должен быть отправлен PUT запрос на сервер", async () => {
		const mockedAxios = jest.spyOn($api, "put")
		await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"))

		await userEvent.clear(screen.getByTestId("ProfileCard.firstname"))
		await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user")

		await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"))

		expect(mockedAxios).toHaveBeenCalled()
	})
})