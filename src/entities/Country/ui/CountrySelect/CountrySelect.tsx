import {classNames} from "shared/lib/classNames/classNames"

import { PropsWithChildren, useCallback } from "react"
import { Select } from "shared/ui/Select/Select"
import { Country } from "../../model/types/country"
import { useTranslation } from "react-i18next"


interface CountrySelectProps {
    className?: string;
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
	{ content: Country.Russia, value: Country.Russia },
	{ content: Country.Belarus, value: Country.Belarus },
	{ content: Country.Kazakhstan, value: Country.Kazakhstan }
]

export function CountrySelect(props: PropsWithChildren<CountrySelectProps>) {
	const { className, onChange, value, readonly } = props
	const {t} = useTranslation("profile")

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Country)
	},[onChange])

	return (
		<div className={classNames("", {}, [className])}>
			<Select
				value={value}
				onSelect={onChangeHandler}
				label={t("Ваша страна:")}
				readonly={readonly}
				options={options} />
                
		</div>
	)
}