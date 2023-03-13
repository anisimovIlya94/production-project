import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { BuildEnv, BuildPath } from "./config/build/types/config"
import path from "path"
import webpack from "webpack"

const paths: BuildPath = {
	entry: path.resolve(__dirname, "src", "index.tsx"),
	html: path.resolve(__dirname, "public", "index.html"),
	build: path.resolve(__dirname, "build"),
	src: path.resolve(__dirname, "src")
}

export default (env: BuildEnv) => { 
  
	const mode = env.mode || "development"
	const isDev = mode === "development"
	const PORT = env.port || 3000
	const apiUrl = env.apiUrl || "http://localhost:8000"
	const project = "frontend"
	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		apiUrl: apiUrl,
		project
	})
  
	return config
}