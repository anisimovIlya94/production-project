import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/shared/ui/Button/Button"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"
import { counterActions } from "../model/slice/CounterSlice"

export function Counter() {
	const dispatch = useDispatch()
	const {t} = useTranslation()

	const counterValue = useSelector(getCounterValue)

	const increment = () => {
		dispatch(counterActions.increment())
	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid="counter-value">{counterValue}</h1>
			<Button data-testid="increment" onClick={increment}>{t("Increment")}</Button>
			<Button data-testid="decrement" onClick={decrement}>{t("Decrement")}</Button>
		</div>
	)
}