import { buildCssLoader } from "./../build/loaders/buildSccLoader"
import { BuildPath } from "./../build/types/config"
import webpack, { DefinePlugin } from "webpack"
import path from "path"

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPath = {
		entry: "",
		html: "",
		build: "",
		src: path.resolve(__dirname, "..", "..", "src"),
		locales: "", 
		buildLocales: ""
	}

	config.resolve!.alias = { "@": paths.src }
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

	config.plugins?.push(new DefinePlugin({
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify("https://testapi.ru"),
		__PROJECT__ : JSON.stringify("storybook")
	}))

	return config
}