import React from 'react'
import { Link } from "react-router-dom"

import SearchMeme from "../memes/SearchMeme"

export default function Header() {
	return (
		<header className="main-header">
			<div className="header--container container">
				<div className="logo">
					<Link to="/">
						<h1>memeS</h1>
					</Link>
				</div>
				<SearchMeme />
			</div>
		</header>
	)
}