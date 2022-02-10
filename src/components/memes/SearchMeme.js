import React, { useContext } from 'react'
import { SearchContext } from "../../store/context"

import Input from "../UI/Input"

export default function SearchMeme() {
	const { searchHandler } = useContext(SearchContext)

	return (
		<label className="search--action">	
			<Input input={{
				placeholder: "search memes...",
				onChange: searchHandler,
				}} />
				<div className="icon--btn bi bi-search"></div>
		</label>
	)
}