import { useEffect, useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'

/**
 * Retrieves the list of languages available from the API.
 *
 * @param {void} - This function does not take any parameters.
 * @return {Promise<void>} - A Promise that resolves when the list of languages is retrieved successfully.
 */
const Dropdowns = ({ setInputLanguage, setOutputLanguage }) => {
	const [languages, setLanguages] = useState([])

	/**
	 * Retrieves the list of languages available from the API.
	 *
	 * @return {Promise<void>} - A Promise that resolves when the list of languages is retrieved successfully.
	 */
	const getLanguages = async () => {
		const options = {
			method: 'GET',
			url: 'https://text-translator2.p.rapidapi.com/getLanguages',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
				'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
			},
		}

		try {
			const response = await axios.request(options)
			setLanguages(response.data.data.languages)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Handles the change event when the input language is changed.
	 *
	 * @param {Event} e - The change event object.
	 * @return {void} This function does not return a value.
	 */
	const handleInputLanguageChange = (e) => {
		setInputLanguage(e.target.value)
	}

	/**
	 * Handles the change of the output language.
	 *
	 * @param {Event} e - The event object representing the change event.
	 * @return {void} This function does not return any value.
	 */
	const handleOutputLanguageChange = (e) => {
		setOutputLanguage(e.target.value)
	}

	useEffect(() => getLanguages, [])

	return (
		<div className='grid grid-cols-2 gap-4'>
			<label className='w-full max-w-xs form-control'>
				<div className='label'>
					<span className='label-text'>Source Language</span>
				</div>
				<select
					className='select select-bordered'
					onChange={handleInputLanguageChange}
				>
					<option value={'auto'} selected key={nanoid()}>
						Auto Identify
					</option>
					{languages.map((language) => (
						<option value={language.code} key={nanoid()}>
							{language.name}
						</option>
					))}
				</select>
			</label>

			<label className='w-full max-w-xs form-control'>
				<div className='label'>
					<span className='label-text'>Target Language</span>
				</div>
				<select
					className='select select-bordered'
					onChange={handleOutputLanguageChange}
				>
					<option value={'en'} selected key={nanoid()}>
						English
					</option>
					{languages.map((language) =>
						language === 'en' ? null : (
							<option value={language.code} key={nanoid()}>
								{language.name}
							</option>
						)
					)}
				</select>
			</label>
		</div>
	)
}

export default Dropdowns
