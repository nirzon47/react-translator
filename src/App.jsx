import Header from './Components/Header'
import Inputs from './Components/Inputs'

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
