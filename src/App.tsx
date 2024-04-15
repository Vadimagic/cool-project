import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import './styles/index.scss'
import AboutPageLazy from "./pages/AboutPage/AboutPage.async"
import MainPageLazy from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"
import classNames from "./helpers/classNames/classNames"

const App = () => {

	const { theme, toggleTheme } = useTheme()


	return (
		<div className={classNames('app', {}, [theme])}>
			<Link to={'/'}>Главная</Link>
			<hr />
			<Link to={'/about'}>О сайте</Link>
			<button onClick={() => toggleTheme()}>Change theme</button>
				<Suspense fallback={<div>Loading...</div>}>
				<Routes>
						<Route path={'/about'} element={<AboutPageLazy />}/>
						<Route path={'/'} element={<MainPageLazy />}/>
				</Routes>
			</Suspense>
			<Counter />
		</div>
	)
}

export default App