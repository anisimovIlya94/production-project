import { FeaturesFlags } from "../types/features"

let featuresFlags: FeaturesFlags

export const setFeaturesFlags = (newFeaturesFlags?: FeaturesFlags) => {
	if (newFeaturesFlags) {
		featuresFlags = newFeaturesFlags
	}
}

export const getFeaturesFlag = (flag: keyof FeaturesFlags) => {
	return featuresFlags[flag]
}