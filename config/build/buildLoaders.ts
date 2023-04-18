import { buildCssLoader } from "./loaders/buildSccLoader"
import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"
import { buildBabelLoader } from "./loaders/buildBabelLoader"

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	}

	const codeBabelLoader = buildBabelLoader({...options, isTsx: false})
	const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true})

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	}

	// const typescriptRules = {
	// 	test: /\.tsx?$/,
	// 	use: "ts-loader",
	// 	exclude: /node_modules/,
	// }
	const styleLoader = buildCssLoader(isDev)
	return [fileLoader, svgLoader,  codeBabelLoader, tsxCodeBabelLoader, styleLoader]
}
