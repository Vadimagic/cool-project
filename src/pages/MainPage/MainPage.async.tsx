import { lazy } from 'react'

const MainPageLazy = lazy(() => new Promise(res => {
	setTimeout(() => {
		// @ts-ignore
		res(import('./MainPage'))
	}, 2000)
}))

export default MainPageLazy