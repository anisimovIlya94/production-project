import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin"
import { BuildOptions } from "../types/config"

interface buildBabelLoaderProps extends BuildOptions{
    isTsx?: boolean
}

export function buildBabelLoader({ isDev, isTsx }: buildBabelLoaderProps) {
	return {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic" }]],
				plugins: [
					[
						"i18next-extract",
						{
							locales: ["ru", "en"],
							keyAsDefaultValue: true,
						},
					],
					[
						"@babel/plugin-transform-typescript",
						{
							isTsx
						}
					],
					[
						babelRemovePropsPlugin,
						{
							props: ["data-testid"]
						}
					],
					"@babel/plugin-transform-runtime",
					isDev && require.resolve("react-refresh/babel"),
				].filter(Boolean),
			},
		},
	}
}
