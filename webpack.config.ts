import webpack from 'webpack'
import path from 'path'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import { BuildPaths, EnvironmentVariables } from './config/build/types/config'

export default (env: EnvironmentVariables) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html')
	}

	const mode = env.mode || 'development'
	const PORT = env.port || 3000
	
	const isDev = mode === 'development'

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths: paths,
		isDev,
		port: PORT
	})

	return config
}