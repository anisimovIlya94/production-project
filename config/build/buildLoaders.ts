import { buildCssLoader } from "./loaders/buildSccLoader"
import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	}

	const typescriptRules = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}
	const styleLoader = buildCssLoader(isDev)
	return [svgLoader, fileLoader, typescriptRules, styleLoader]
}
