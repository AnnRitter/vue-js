<template>
	<div class="card">
		<h3>{{ title }}</h3>
		<button class="btn" @click="openNews" >{{ this.newsOpen ? 'Закрыть' : 'Показать полный текст' }}</button>
		<p v-if="newsOpen">{{ content }}</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		}, 
		content: {
			type: String,
			required: true,
		}, 
		id: {
			type: Number,
			required: true,
		}, 
		isOpen: {
			type: Boolean,
			required: false, 
			default: true,
		},
	},
	data() {
		return {
			newsOpen: this.isOpen, 

		}
	},
	methods: {
		openNews() {
			this.newsOpen = !this.newsOpen;
			if ( this.newsOpen) {
				this.$emit('open-news');
			}
		}
	}
}
</script>