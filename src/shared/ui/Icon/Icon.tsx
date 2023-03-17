import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Icon.module.scss"

interface IconProps {
  className?: string;
  Src: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = (props) => {
	const { className, Src } = props
	const { t } = useTranslation()

	return <Src className={classNames(cls.icon, {}, [className])}></Src>
}
