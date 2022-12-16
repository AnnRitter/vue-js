<template>
	<div class="modal-backdrop" @click.prevent="$emit('close')"></div>
	<div class="modal">
		<div class="card-title">
			<h3>{{ title }}</h3>
			<span @click.prevent="$emit('close')">&times;</span>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default { 
	emits: ['close'],
	props: {
		title: {
			type: String,
			required: false,
		}
	},
	
}
</script>