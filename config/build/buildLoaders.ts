import MiniCssExtractPlugin from "mini-css-extract-plugin"
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
	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resourcePath: string) =>
							Boolean(resourcePath.includes(".module.")),
						localIdentName: isDev
							? "[path][name]__[local]--[hash:base64:8]"
							: "[hash:base64:8]",
					},
				},
			},
			"sass-loader",
		],
	}
	return [svgLoader, fileLoader, typescriptRules, styleLoader]
}
