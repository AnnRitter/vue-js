<template>
	<div class="inline">
		<p> {{ value }} </p>
		<button class="btn delete" @click="$emit('delete', this.id)">Delete</button>
	</div>
		
</template>

<script>
export default {
	props: ['value', 'id']
}
</script>

<style scoped>
	.inline {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>