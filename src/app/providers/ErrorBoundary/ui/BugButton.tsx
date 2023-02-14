import { useEffect, useState } from "react"
import { Button } from "shared/ui/Button/Button"

export function BugButton() {
	const [error, setError] = useState(false)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	},[error])

	return (
		<Button onClick={()=>{setError(prev => !prev)}}>
        toggleError
		</Button>
	)
}