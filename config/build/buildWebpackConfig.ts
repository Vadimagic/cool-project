import webpack from 'webpack'
import path from 'path'

import { BuildOptions } from './types/config'

import buildModule from './buildModule'
import buildPlugins from './buildPlugins'
import buildResolves from './buildResolves'
import buildDevServer from './buildDevServer'

function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev } = options
	return {
		mode,
		entry: {
			main: paths.entry
		},
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true
		},
		plugins: buildPlugins(paths),
		module: buildModule(options),
		resolve: buildResolves(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}

export default buildWebpackConfig