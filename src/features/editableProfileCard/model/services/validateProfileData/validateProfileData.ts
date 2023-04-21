import { Profile } from "@/entities/Profile"
import { ValidateProfileError } from "../../consts/profileConsts"

export const validateProfileData = (profile?: Profile) => {

	const errors: ValidateProfileError[] = []
    
	if (!profile) {
		return [ValidateProfileError.NO_DATA]
	}

	const {first, lastname, age, city} = profile
    
	if (!first || !lastname) {
		errors.push(ValidateProfileError.INCORRECT_USERNAME)
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE)
	}

	if (!city) {
		errors.push(ValidateProfileError.INCORRECT_CITY)
	}

	return errors
}