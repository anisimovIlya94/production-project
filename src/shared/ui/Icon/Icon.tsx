import { FC } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Icon.module.scss"

interface IconProps {
  className?: string;
  Src: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon: FC<IconProps> = (props) => {
	const { className, Src, inverted } = props

	return <Src className={classNames(cls.icon, {[cls.inverted]: inverted}, [className])}></Src>
}
