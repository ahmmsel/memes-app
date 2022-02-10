import React from 'react'
import { Switch, Route } from "react-router-dom"

import Layout from "./components/layout/Layout"
import AllMemes from "./pages/AllMemes"
import MemeMakerPage from "./pages/MemeMakerPage"

export default function Routes() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMemes />
				</Route>
				<Route path="/:memeId">
					<MemeMakerPage />
				</Route>
			</Switch>
		</Layout>
	)
}