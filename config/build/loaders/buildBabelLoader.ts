import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin"
import { BuildOptions } from "../types/config"

interface buildBabelLoaderProps extends BuildOptions{
    isTsx?: boolean
}

export function buildBabelLoader({ isDev, isTsx }: buildBabelLoaderProps) {
	const isProd = !isDev

	return {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				cacheDirectory: true,
				presets: ["@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic" }]],
				plugins: [
					[
						"@babel/plugin-transform-typescript",
						{
							isTsx
						}
					],
					isTsx && isProd && [
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
