import { useEffect, useState } from 'react'
import axios from 'axios'

const Dropdowns = () => {
	const [languages, setLanguages] = useState([])

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
			console.log(response.data.data.languages)
			setLanguages(response.data.data.languages)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => getLanguages, [])

	return (
		<div className='grid grid-cols-2 gap-4'>
			<label className='form-control w-full max-w-xs'>
				<div className='label'>
					<span className='label-text'>Source Language</span>
				</div>
				<select className='select select-bordered'>
					<option value={'auto'} selected>
						Auto Identify
					</option>
					{languages.map((language) => (
						<option value={language.code}>{language.name}</option>
					))}
				</select>
			</label>

			<label className='form-control w-full max-w-xs'>
				<div className='label'>
					<span className='label-text'>Source Language</span>
				</div>
				<select className='select select-bordered'>
					<option value={'en'} selected>
						English
					</option>
					{languages.map((language) =>
						language === 'en' ? null : (
							<option value={language.code}>{language.name}</option>
						)
					)}
				</select>
			</label>
		</div>
	)
}

export default Dropdowns