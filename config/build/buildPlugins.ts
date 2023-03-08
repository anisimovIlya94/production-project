import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

export function buildPlugins({paths, isDev, apiUrl}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins =  [
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css"
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl)
		}),
	]
	
	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin())
		plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
		plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }))
	} else {
		plugins.push(
			{
				apply: (compiler: webpack.Compiler) => {
					compiler.hooks.done.tap("DonePlugin", (stats) => {
						console.log("Compile is done !")
						setTimeout(() => {
							process.exit(0)
						})
					})
				}
			}
		)
	}
	return plugins
}