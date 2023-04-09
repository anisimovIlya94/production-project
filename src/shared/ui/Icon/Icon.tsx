import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Icon.module.scss"

interface IconProps {
  className?: string;
  Src: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = (props) => {
	const { className, Src } = props

	return <Src className={classNames(cls.icon, {}, [className])}></Src>
}
