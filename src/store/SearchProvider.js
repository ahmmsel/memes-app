import React, { useState } from 'react'

import { SearchContext } from "./context"

export default function SearchProvider({children}) {
	const [search, setSearch] = useState("")

	const searchHandler = (e) => {
		setSearch(e.target.value)
	}

	const filterHandler = (meme) => {
		if (search.trim() === "") {
			return meme;
		} else if (meme.name.toLowerCase().includes(search.toLowerCase())) {
			return meme
		}
	}

	const logic = {
		searchHandler,
		filterHandler
	}

	return (
		<SearchContext.Provider value={logic}>
			{children}
		</SearchContext.Provider>
	)
}