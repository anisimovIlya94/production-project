import { FC, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "@/shared/lib/classNames/classNames"
import { VStack } from "@/shared/ui/Stack/VStack/VStack"
import { Text } from "@/shared/ui/Text/Text"
import { StarRating } from "@/shared/ui/StarRating/StarRating"
import { Modal } from "@/shared/ui/Modal/Modal"
import { Input } from "@/shared/ui/Input/Input"
import { HStack } from "@/shared/ui/Stack/HStack/HStack"
import { Button, ButtonTheme } from "@/shared/ui/Button/Button"
import { Card } from "@/shared/ui/Card/Card"
import { Drawer } from "@/shared/ui/Drawer/Drawer"

interface RatingCardProps {
  className?: string;
  title: string
  feedbackTitle: string
  onCancel?: (starNumber: number) => void
  onAccept?: (starNumber: number, feedback?: string) => void
  hasFeedback?: boolean
  rate?: number
}

function detectDevice() {
	const isMobile = window.matchMedia
	if (!isMobile) return false
	
	const device = isMobile("(pointer:coarse)")
	return device.matches
}

export const RatingCard: FC<RatingCardProps> = (props) => {
	const {
		className,
		title,
		feedbackTitle,
		onCancel,
		onAccept,
		hasFeedback,
		rate = 0
	} = props

	const { t } = useTranslation()
	const device = detectDevice()

	const [isOpenModal, setIsOpenModal] = useState(false)
	const [startsSelect, setStarsSelect] = useState(rate)
	const [feedback, setFeedback] = useState("")

	const onSelectStars = useCallback((starNumber: number) => {
		setStarsSelect(starNumber)
		if (hasFeedback) {
			setIsOpenModal(true)
		} else {
			onAccept?.(starNumber)
		}
	}, [hasFeedback, onAccept])
  
	const onAcceptHandler = useCallback(() => {
		setIsOpenModal(false)
		onAccept?.(startsSelect, feedback)
	}, [feedback, startsSelect, onAccept])
  
	const onCancelHandler = useCallback(() => {
		setIsOpenModal(false)
		onCancel?.(startsSelect)
	}, [startsSelect, onCancel])
  
	const modalContent = (
		<>
			<Text title={feedbackTitle} />
			<Input value={feedback} onChange={setFeedback} placeholder={t("Введите ваш отзыв")} />
		</>
	)

	return (
		<Card max className={classNames("", {}, [className])}>
			<VStack align="center" gap="16">
				<Text title={ startsSelect ? t("Спасибо за оценку!") : title } />
				<StarRating size={40} onSelect={onSelectStars} selectedStars={rate}/>
			</VStack>
			{
				device
					?
					<Drawer isOpen={isOpenModal}>
						<VStack max gap="16">
							{modalContent}
							<Button fullWidth onClick={onAcceptHandler}>
								{t("Отправить")}
							</Button>
						</VStack>
					</Drawer>
					:
					<Modal lazy isOpen={isOpenModal}>
						<VStack max gap="32">
							{modalContent}
							<HStack justify="end" max gap="16">
								<Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelHandler}>
									{t("Отменить")}
								</Button>
								<Button onClick={onAcceptHandler}>
									{t("Отправить")}
								</Button>
							</HStack>
						</VStack>
					</Modal>
			}
		</Card>
	)
}
