import { watch, computed } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginAuth() {
	const store = useStore()
	const router = useRouter()

	const PASSWORD_LENGTH = 6
	const { handleSubmit, isSubmitting, submitCount} = useForm()

	const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
		'email',
		yup
		.string()
		.trim()
		.required('email не должен быть пустым')
		.email('некорректный email')
	)
	const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
		 'password',
		yup
			.string()
			.trim()
			.required()
			.min(PASSWORD_LENGTH, `минимальная длина пароля должна быть ${PASSWORD_LENGTH}`)

		)

	const onSubmit = handleSubmit(async values => {
		try {
			await store.dispatch('auth/login', values)
			router.push('/')
		} catch (e) {

		}
		
	}) 
	
	const tooManyAttemps = computed(() => submitCount.value >= 3)

	watch(tooManyAttemps, value => {
		if (value) {
			setTimeout(() => {
				submitCount.value = 0 
			}, 3000)
		}
	})

	return {
		email,
		eError,
		eBlur,
		password,
		pError,
		pBlur,
		onSubmit,
		isSubmitting,
		tooManyAttemps,
	}
}