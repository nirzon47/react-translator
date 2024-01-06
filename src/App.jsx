import Header from './Components/Header'
import Inputs from './Components/Inputs'

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
const App = () => {
	return (
		<div className='h-screen grid place-content-center'>
			<div className='w-72 md:w-full'>
				<Header />
				<Inputs />
			</div>
		</div>
	)
}

export default App
