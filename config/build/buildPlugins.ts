import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(paths.html)
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	]
}

export default buildPlugins