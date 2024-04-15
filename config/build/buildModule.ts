import webpack from 'webpack'
import buildLoaders from './buildLoaders'
import { BuildOptions } from './types/config'

function buildModule(options: BuildOptions): webpack.ModuleOptions {
	return {
    rules: buildLoaders(options)
  }
}

export default buildModule