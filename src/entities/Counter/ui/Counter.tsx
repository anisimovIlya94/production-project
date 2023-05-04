import { useTranslation } from "react-i18next"
import { Button } from "@/shared/ui/Button"
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue"
import { useCounterActions } from "../model/slice/CounterSlice"

export function Counter() {
	const { t } = useTranslation()
	const {decrement, increment, add} = useCounterActions()

	const counterValue = useCounterValue()

	const handleIncrement = () => {
		increment()
	}

	const handleDecrement = () => {
		decrement()
	}

	const handleAddFive = () => {
		add(5)
	}

	return (
		<div>
			<h1 data-testid="counter-value">{counterValue}</h1>
			<Button data-testid="increment" onClick={handleIncrement}>{t("Increment")}</Button>
			<Button data-testid="decrement" onClick={handleDecrement}>{t("Decrement")}</Button>
			<Button data-testid="increment-five" onClick={handleAddFive}>{t("Add Five")}</Button>
		</div>
	)
}