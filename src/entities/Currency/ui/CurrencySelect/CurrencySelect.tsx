import { classNames } from "@/shared/lib/classNames/classNames"

import { PropsWithChildren, useCallback } from "react"
import { Currency } from "../../model/types/currency"
import { useTranslation } from "react-i18next"
import { ListBox } from "@/shared/ui/Popups"

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
	{ content: Currency.EUR, value: Currency.EUR },
	{ content: Currency.RUB, value: Currency.RUB },
	{ content: Currency.USD, value: Currency.USD },
]

export function CurrencySelect(props: PropsWithChildren<CurrencySelectProps>) {
	const { className, onChange, value, readonly } = props
	const { t } = useTranslation("profile")

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency)
		},
		[onChange]
	)

	return (
		<div className={classNames("", {}, [className])}>
			<ListBox
				onChange={onChangeHandler}
				items={options}
				value={value}
				defaultValue={t("Выберете валюту")}
				readonly={readonly}
				label={t("Ваша валюта:")}
				direction="top right"
			/>
		</div>
	)
}
