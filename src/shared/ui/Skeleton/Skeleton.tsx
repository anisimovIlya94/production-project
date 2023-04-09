import { CSSProperties, FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Skeleton.module.scss"

interface SkeletonProps {
  className?: string;
  width: string | number
  height: string | number
  border?: string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
	const { className, width, height, border } = props
	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border
	}

	return <div style={styles} className={classNames(cls.skeleton, {}, [className])}>

	</div>
}
