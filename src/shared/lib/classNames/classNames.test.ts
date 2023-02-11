import { classNames } from "./classNames"

describe("classNames", () => {
	test("test only cls", () => {
		expect(classNames("someClass")).toBe("someClass")
	})

	test("test with addictional", () => {
		expect(classNames("someClass", {}, ["class1", "class2"])).toBe("someClass class1 class2")
	})

	test("test with mods true", () => {
		expect(classNames("someClass",
			{
				"classMods1": true,
				"classMods2": true,
			},
			["class1", "class2"])).toBe("someClass class1 class2 classMods1 classMods2")
	})

	test("test with mods false", () => {
		expect(classNames("someClass",
			{
				"classMods1": true,
				"classMods2": false,
			},
			["class1", "class2"])).toBe("someClass class1 class2 classMods1")
	})

	test("test with mods undefined", () => {
		expect(classNames("someClass",
			{
				"classMods1": true,
				"classMods2": undefined,
			},
			["class1", "class2"])).toBe("someClass class1 class2 classMods1")
	})
})