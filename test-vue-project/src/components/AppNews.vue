<template>
	<div class="card">
		<h3>{{ title }}</h3>
		<button class="btn" @click="isOpen = !isOpen" >Показать полный текст</button>
		<p v-if="isOpen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quos molestiae placeat, a nesciunt voluptatibus facilis impedit tenetur illum et facere soluta omnis laborum natus illo ad, eaque dignissimos?</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
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
			validator(value) {
				console.log(value);
				return true;
			},
		},
	},
	data() {
		return {
			// isOpen: false, 

		}
	}
}
</script>