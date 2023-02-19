import { RuleSetRule } from "webpack"
import { buildCssLoader } from "./../build/loaders/buildSccLoader"
import { BuildPath } from "./../build/types/config"
import webpack from "webpack"
import path from "path"

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPath = {
		entry: "",
		html: "",
		build: "",
		src: path.resolve(__dirname, "..", "..", "src")
	}

	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push(".ts", ".tsx")

	if (config.module?.rules) {
		config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | "...") => {
			if (rule !== "..." && /svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i }
			}
        
			return rule
		})
	}
    
	config.module?.rules?.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	})

	config.module?.rules?.push(buildCssLoader(true))

	return config
}