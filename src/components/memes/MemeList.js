import React, { useState, useContext, useEffect } from 'react'
import { SearchContext } from "../../store/context"

import useFetch from "../../hooks/useFetch"
import MemeItem from "./MemeItem"

export default function MemeList() {
	const [memeList, setMemeList] = useState([])

	const { filterHandler } = useContext(SearchContext)

	const { fetchDataHandler: fetchMemes } = useFetch()

	const applyMemesData = ({ data }) => {
		setMemeList(data.memes)
	}

	useEffect(() => {
		fetchMemes({ url: "https://api.imgflip.com/get_memes" }, applyMemesData)
	}, [fetchMemes])

	return (
		<section className="section--margin container">
			<div className="meme--list">
				{memeList.filter(filterHandler).map(meme => (
					<MemeItem
						key={meme.id}
						id={meme.id}
						title={meme.name}
						image={meme.url}
					 />
				))}
			</div>
		</section>
	)
}