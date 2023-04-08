import {classNames} from "shared/lib/classNames/classNames"

import { PropsWithChildren, useCallback } from "react"
import { Select } from "shared/ui/Select/Select"
import { Currency } from "../../model/types/currency"
import { useTranslation } from "react-i18next"

interface CurrencySelectProps {
    className?: string;
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
	{ content: Currency.EUR, value: Currency.EUR },
	{ content: Currency.RUB, value: Currency.RUB },
	{ content: Currency.USD, value: Currency.USD }
]

export function CurrencySelect(props: PropsWithChildren<CurrencySelectProps>) {
	const { className, onChange, value, readonly } = props
	const {t} = useTranslation("profile")

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency)
	},[onChange])

	return (
		<div className={classNames("", {}, [className])}>
			<Select
				value={value}
				onSelect={onChangeHandler}
				label={t("Ваша валюта:")}
				readonly={readonly}
				options={options} />
                
		</div>
	)
}