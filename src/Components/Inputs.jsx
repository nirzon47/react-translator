import Dropdowns from './Dropdowns'
import { useState } from 'react'
import axios from 'axios'

const Inputs = () => {
	const [inputLanguage, setInputLanguage] = useState('auto')
	const [outputLanguage, setOutputLanguage] = useState('en')
	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')

	/**
	 * Handles the translate button click event.
	 *
	 * @return {Promise<void>} A promise that resolves when the translation is complete.
	 */
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
			<h2 className='mb-4 text-lg font-medium'>Input</h2>
			<textarea
				name='input'
				id='input'
				cols='30'
				rows='2'
				className='w-full mb-8 font-mono resize-none textarea textarea-bordered'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			></textarea>

			<Dropdowns
				setInputLanguage={setInputLanguage}
				setOutputLanguage={setOutputLanguage}
			/>

			<button
				className='mt-4 btn btn-secondary'
				onClick={handleClickTranslate}
			>
				Translate
			</button>

			<h2 className='mt-8 mb-4 text-lg font-medium'>Output</h2>
			<textarea
				name='output'
				id='output'
				cols='30'
				rows='2'
				className='w-full font-mono resize-none textarea textarea-bordered'
				value={output}
				onChange={(e) => setOutput(e.target.value)}
			></textarea>
		</div>
	)
}

export default Inputs
