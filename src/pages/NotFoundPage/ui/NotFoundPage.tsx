import {classNames} from "@/shared/lib/classNames/classNames"
import cls from "./NotFoundPage.module.scss"

import type { PropsWithChildren } from "react"
import { useTranslation } from "react-i18next"
import { Page } from "@/wigets/Page/Page"

interface NotFoundPageProps {
 className?: string;
}

export function NotFoundPage(props: PropsWithChildren<NotFoundPageProps>) {
	const { className } = props
	const {t} = useTranslation()

	return (
		<Page className={classNames(cls.NotFoundPage, {}, [className])}>
			{t("Страница не найдена")}
		</Page>
	)
}