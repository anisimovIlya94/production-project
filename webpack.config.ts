import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { BuildEnv, BuildPath } from "./config/build/types/config"
import path from "path"
import webpack from "webpack"

const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, 'build')
}

export default (env: BuildEnv) => { 
  
const mode = env.mode || "development"
const isDev = mode === "development"
const PORT = env.port || 3000
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
  
  return config
}