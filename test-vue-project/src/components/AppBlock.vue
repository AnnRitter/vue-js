<template>
<div class="card">
	<h3>title</h3>
	<slot name="header">Empty title</slot>
	<slot>Empty block</slot>

<div v-if="$slots.footer">
	<slot name="footer">Empty footer</slot>
</div>
</div>
</template>

<script>
	export default {
		mounted() {
			console.log(this.$slots);
		}
	}
</script>

<style scoped>

</style>