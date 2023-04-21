import { getProfileReadonly } from "./getProfileReadonly"
import { StateSchema } from "@/app/providers/StoreProvider"

describe("getProfileData.test", () => {
	test("return state", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true
			}
		}
		expect(getProfileReadonly(state as StateSchema)).toEqual(true)
	})
    
	test("return undefined", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
	})
})