export type BuildMode = 'production' | 'development'

export interface BuildPaths {
	entry: string;
	output: string;
	html: string;
}

export interface BuildOptions {
	mode: BuildMode,
	paths: BuildPaths,
	isDev: boolean,
	port: number
}

export interface EnvironmentVariables {
	mode: BuildMode,
	port: number
}