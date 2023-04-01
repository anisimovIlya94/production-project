import { ReactNode, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Card, CardTheme } from "../Card/Card"
import cls from "./Tabs.module.scss"

export interface TabItem<T extends string> {
  value: T
  content: ReactNode
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[]
  value: T
  onChangeTab: (newTab: T) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
	const { className, tabs, value, onChangeTab } = props

	const onChangeTabHandler = useCallback((val: TabItem<T>) => {
		onChangeTab(val.value)
	},[onChangeTab])

	return <div className={classNames(cls.tabs, {}, [className])}>
		{tabs.map((tab) => (
			<Card
				className={cls.tab}
				theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
				key={tab.value}
				onClick={() => onChangeTabHandler(tab)}
			>
				{tab.content}
			</Card>
		))}
	</div>
}
