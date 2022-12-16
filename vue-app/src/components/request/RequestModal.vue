<template>

	<form @submit.prevent="onSubmit">
		<div class="form-control" :class="{invalid: nError}">
			<label for="name">ФИО</label>
			<input type="text" id="name" v-model="name" @blur="nBlur">
			<small v-if="nError"> {{ nError }}</small>
		</div>

		<div class="form-control" :class="{invalid: pError}">
			<label for="phone">Телефон</label>
			<input type="text" id="phone" v-model="phone" @blur="pBlur">
			<small v-if="pError"> {{ pError }}</small>
		</div>

		<div class="form-control" :class="{invalid: aError}">
			<label for="amount">Сумма</label>
			<input type="number" id="amount" v-model.number="amount" @blur="aBlur">
			<small v-if="aError"> {{ aError }}</small>
		</div>

		<div class="form-control">
			<label for="status">Статус</label>
			<select id="status" v-model="status">
				<option value="done">Завершен</option>
				<option value="cancelled">Отменен</option>
				<option value="pending">Выполняется</option>
				<option value="active">Активный</option>
			</select>
		</div>

		<button class="btn" :disabled="isSubmitting">Создать</button>
	</form>
</template>

<script>
import { useStore } from 'vuex'
import { useRequestForm } from '../../use/request-form.js'
export default {
	emits: ['created'],
	
	setup(_, { emit }) {
		const store = useStore()
		const submit = async values => {
			await store.dispatch('request/create', values)
			emit('created')
		}

		return {
			...useRequestForm(submit)
		}
	}
}
</script>