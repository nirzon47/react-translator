import Dropdowns from './Dropdowns'

const Inputs = () => {
	return (
		<div className='grid'>
			<h2 className='font-medium text-lg mb-4'>Input</h2>
			<textarea
				name='input'
				id='input'
				cols='30'
				rows='2'
				className='textarea textarea-bordered resize-none font-mono w-full'
			></textarea>

			<Dropdowns />

			<button className='btn btn-secondary mt-4'>Translate</button>

			<h2 className='font-medium text-lg mt-8 mb-4'>Output</h2>
			<textarea
				name='output'
				id='output'
				cols='30'
				rows='2'
				className='textarea textarea-bordered resize-none font-mono w-full'
			></textarea>
		</div>
	)
}

export default Inputs
