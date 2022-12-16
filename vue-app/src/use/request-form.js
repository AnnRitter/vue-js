import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(fn) {
	const { isSubmitting, handleSubmit } = useForm({
		initialValues: {
			status: 'active'
		}
	})
	const { value: name, errorMessage: nError, handleBlur:nBlur} = useField(
		'name',
		yup
			.string()
			.trim()
			.required('Необходимо ввести ФИО')
		
	)
	const { value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
		'phone',
		yup
			.string()
			.trim()
			.required('Необходимо ввести телефон')
		)
	const { value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
		'amount',
		yup
			.number()
			.required('Необходимо ввести сумму')
			.min(0, 'Сумма не может быть меньше нуля')
		)
	const { value: status} = useField('status')

	const onSubmit = handleSubmit(fn)

	return {
		isSubmitting,
		name, 
		nError,
		nBlur,
		phone,
		pError,
		pBlur,
		amount,
		aError,
		aBlur,
		status,
		onSubmit, 
	}

}