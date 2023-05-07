import { FC, useState } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./StarRating.module.scss"
import { Icon } from "../Icon/Icon"
import StarIcon from "../../assets/icons/Star.svg"
import { HStack } from "../Stack/HStack/HStack"

interface StarRatingProps {
  className?: string;
  onSelect?: (starNumber: number) => void
  size?: number
  selectedStars?: number
}

export const StarRating: FC<StarRatingProps> = (props) => {
	const {
		className,
		onSelect,
		size = 30,
		selectedStars = 0
	} = props

	const [isSelect, setIsSelect] = useState(Boolean(selectedStars))
	const [currentStars, setCurrentStars] = useState(selectedStars)

	const onHover = (starNumber: number) => {
		if (!isSelect) {
			setCurrentStars(starNumber)
		}
	}

	const onLeave = () => {
		if (!isSelect) {
			setCurrentStars(0)
		}
	}

	const onClick = (starNumber: number) => {
		if (!isSelect) {
			onSelect?.(starNumber)
			setCurrentStars(starNumber)
			setIsSelect(true)
		}
	}

	const stars = [1, 2, 3, 4, 5]

	return (
		<div className={classNames(cls.starRating, {}, [className])}>
			<HStack gap="8">
				{stars.map(starNumber => (
					<Icon
						className={classNames(cls.starIcon, { [cls.hover] : currentStars >= starNumber, [cls.selected]: isSelect }, [className])}
						key={starNumber}
						Src={StarIcon}
						width={size}
						height={size}
						onMouseEnter={() => onHover(starNumber)}
						onMouseLeave={onLeave}
						onClick={() => onClick(starNumber)}
						data-testId={"StarRating." + starNumber}
						data-selected={currentStars >= starNumber}
					/>
				))}
			</HStack>
		</div>
	)
}
