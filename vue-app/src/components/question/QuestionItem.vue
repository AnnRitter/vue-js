<template>
	<div class="question">
		<div class="question-title" @click="isOpen = !isOpen">{{ question.title }}</div>
		<div class="question-body" v-if="isOpen" style="padding-top: 30px">{{ question.text }}</div>
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	props: ['question'],
	setup() {
		return {
			isOpen: ref(false)
		}
	},
}
</script>