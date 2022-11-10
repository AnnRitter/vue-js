<template>
	<div class="alert" :class="type">
		<p class="alert-title">{{ title }}</p>
		<p class="alert-text">{{ content }}</p>
		<button v-if="closable" @click="$emit('close')" class="btn" :class="type">Close</button>
	</div>
</template>

<script>

export default {

	emits: ['close'],
	props: {
		title: String,
		content: String,
		closable: {
			type: Boolean,
			required: false, 
			default: false,
		},
		type: {
			type: String,
			default: 'primary',
			required: false, 
			validator(value) {
				return ['primary', 'danger', 'warning'].includes(value)
			} 
		}
	}
}
</script>