import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import SearchProvider from "./store/SearchProvider"
import "./index.scss"

import App from "./App"

render(
	<BrowserRouter>
		<SearchProvider>
			<App />
		</SearchProvider>
	</BrowserRouter>,
	document.getElementById('root'))