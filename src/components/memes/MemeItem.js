import React from 'react'
import { useHistory, useLocation } from "react-router-dom"

import Button from "../UI/Button"

export default function MemeItem({id, title, image}) {
	const { push, replace } = useHistory()

	const { pathname } = useLocation()

	const downloadHandler = (e) => {
		e.preventDefault()
		window.open(image)
	}

	return (
		<div className="meme--item">
			<div className="image--container">
				<img src={image} alt={title} />
			</div>
			<div className="meme--content content--padding">
				<div className="meme--body">
					<p>{title}</p>
				</div>
				<div className="meme--actions">
					<Button styling="primary--btn" btn={{
						onClick: downloadHandler
					}}>
						download temp
					</Button>
					<Button styling="secondary--btn" btn={{
						onClick: () => pathname === "/" ? push("/" + id) : replace("/" + id)
					}}>
						meme maker
					</Button>
				</div>
			</div>
		</div>
	)
}