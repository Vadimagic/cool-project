import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildRules(options: BuildOptions): webpack.RuleSetRule[] {
	const cssLoader = {
		test: /\.(sc|sa|c)ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: /\.module\.(sc|sa|c)ss$/i,
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : "[local]-[hash:base64:8]"
					}
				},
			},
			"sass-loader",
		]
	}
	
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		cssLoader,
		typescriptLoader
	]
}

export default buildRules