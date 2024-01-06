import Dropdowns from './Dropdowns'
import { useState } from 'react'
import axios from 'axios'

const Inputs = () => {
	const [inputLanguage, setInputLanguage] = useState('auto')
	const [outputLanguage, setOutputLanguage] = useState('en')
	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')

	const handleClickTranslate = async () => {
		const encodedParams = new URLSearchParams()
		encodedParams.set('source_language', inputLanguage)
		encodedParams.set('target_language', outputLanguage)
		encodedParams.set('text', input)

		const options = {
			method: 'POST',
			url: 'https://text-translator2.p.rapidapi.com/translate',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
				'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
			},
			data: encodedParams,
		}

		try {
			const response = await axios.request(options)
			setOutput(response.data.data.translatedText)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='grid'>
			<h2 className='font-medium text-lg mb-4'>Input</h2>
			<textarea
				name='input'
				id='input'
				cols='30'
				rows='2'
				className='textarea textarea-bordered resize-none font-mono w-full mb-8'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			></textarea>

			<Dropdowns
				setInputLanguage={setInputLanguage}
				setOutputLanguage={setOutputLanguage}
			/>

			<button
				className='btn btn-secondary mt-4'
				onClick={handleClickTranslate}
			>
				Translate
			</button>

			<h2 className='font-medium text-lg mt-8 mb-4'>Output</h2>
			<textarea
				name='output'
				id='output'
				cols='30'
				rows='2'
				className='textarea textarea-bordered resize-none font-mono w-full'
				value={output}
			></textarea>
		</div>
	)
}

export default Inputs
