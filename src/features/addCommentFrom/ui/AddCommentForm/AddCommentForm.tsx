import { getAddCommentText } from "../../model/selectors/getAddCommentSelectors"
import { addCommentFormActions, addCommentFormReducer } from "../../model/slice/addCommentFormSlice"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "@/shared/lib/classNames/classNames"
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import cls from "./AddCommentForm.module.scss"
import { HStack } from "@/shared/ui/Stack"

interface AddCommentFormProps {
  className?: string;
  onSetComment: (text: string) => void
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
}

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
	const { className, onSetComment } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const text = useSelector(getAddCommentText)
	// const error = useSelector(getAddCommentError)

	const onChangeComment = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value))
	}, [dispatch])

	const onSetCommentHandler = useCallback(() => {
		onSetComment(text)
		onChangeComment("")
	},[onSetComment, onChangeComment, text])

	return (
		<DynamicModuleLoader reducers={reducers}>
			<HStack data-testId="AddCommentForm" align="center" justify="between" max className={classNames(cls.addCommentForm, {}, [className])}>
				<Input
					className={cls.input}
					onChange={onChangeComment}
					placeholder={t("Введите комментарий")}
					value={text}
					data-testId="AddCommentForm.Input"
				/>
				<Button data-testId="AddCommentForm.Button" onClick={onSetCommentHandler}>{t("Отправить")}</Button>
			</HStack>
		</DynamicModuleLoader>
	)
}

export default AddCommentForm
