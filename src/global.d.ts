interface IClassNames {
	[className: string]: string
}

declare module '*.css'
declare module '*.scss'

// declare module '*.css' {
//   const classNames: IClassNames;
//   export = classNames;
// }

// declare module '*.scss' {
//   const classNames: IClassNames;
//   export = classNames;
// }