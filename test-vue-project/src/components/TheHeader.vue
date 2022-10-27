<template>
	<h2> News {{ now }}</h2>
</template>

<script>
export default {
	data() {
	return {
		title: 'New title',
		now: new Date().toLocaleDateString,
	}
}
}

</script>