<template>
	<div class="filter">
		<div class="form-control">
			<label for="name">Фильтр по имени</label>
			<input id="name" type="text" v-model="name">
		</div>
		<div class="form-control">
			<label for="status">Фильтр по статусу</label>
			<select id="status" v-model="status">
				<option value="active">Активен</option>
				<option value="cancelled">Отменен</option>
				<option value="pending">Выполняется</option>
				<option value="done">Выполнен</option>
			</select>
		</div>
		<button class="btn" v-if="isActive" @click="clear">Очистить</button>
	</div>
</template>

<script>
import { ref, watch, computed } from 'vue'
export default { 
	emits: ['update:modelValue'],
	props: ['modelValue'],

	setup(_, { emit }) {
		const name = ref()
		const status = ref()

		watch([name, status], values => {
			emit('update:modelValue', {
				name: values[0],
				status: values[1],
			})
		})

		const isActive = computed(() => name.value || status.value)
		return {
			name,
			status,
			isActive,
			clear: () => {
				name.value = ''
				status.value = null
			}
		}
	}
}
</script>