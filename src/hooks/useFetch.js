import { useCallback } from "react"

export default function useFetch() {
	const fetchDataHandler = useCallback(async (config, apply) => {
		const res = await fetch(config.url, {
			method: config.method ? config.method : "GET",
			body: config.body,
			headers: config.headers
		})

		const data = await res.json()
		
		try {
			apply(data)
		} catch (error) {
			console.log(error)
		}

	}, [])

	return {
		fetchDataHandler
	}
}