import webpack from 'webpack'

function buildResolves(): webpack.ResolveOptions {
	return {
    extensions: ['.tsx', '.ts', '.js', 'vue'],
  }
}

export default buildResolves