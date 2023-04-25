import { FC } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Icon.module.scss"

interface IconProps extends React.SVGProps<SVGSVGElement>{
  className?: string;
  Src: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon: FC<IconProps> = (props) => {
	const { className, Src, inverted, ...otherProps } = props

	return <Src className={classNames(cls.icon, { [cls.inverted]: inverted }, [className])} {...otherProps} />
}
