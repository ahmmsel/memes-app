import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

import Input from "../UI/Input"
import MemesList from "./MemeList"

export default function MemeMaker() {
	const [ singleMeme, setSingleMeme ] = useState({})
	const [ meme, setMeme ] = useState({
		topText: "",
		bottomText: ""
	})

	const changeHandler = (e) => {
		const { name, value } = e.target
      setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
	}

	const { memeId } = useParams()

	const { fetchDataHandler: fetchSingleMemes } = useFetch()

	const applyMemesData = useCallback(({ data }) => {
		const meme = data.memes.find(({id}) => id === memeId)
		setSingleMeme(meme)
	}, [memeId])

	useEffect(() => {
		fetchSingleMemes({ url: "https://api.imgflip.com/get_memes" }, applyMemesData)
	}, [fetchSingleMemes, applyMemesData])
	
	return (
		<section className="section--margin single--meme container">
			<div className="meme--maker">
				<label className="meme--input">
					<h1>meme text</h1>
					<Input input={{
						name: "topText",
						placeholder: "top meme text",
						onChange: changeHandler
					}} />
					<Input input={{
						name: "bottomText",
						placeholder: "bottom meme text",
					  onChange: changeHandler
					}} />
				</label>
				<div className="meme--image">
					<img src={singleMeme.url} alt={singleMeme.name} />
					<h2 className="text top">{meme.topText}</h2>
					<h2 className="text bottom">{meme.bottomText}</h2>
				</div>
			</div>
			<MemesList />
		</section>
	)
}