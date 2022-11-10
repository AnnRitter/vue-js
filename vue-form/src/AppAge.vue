<template>
	<div class="form-control">
        <label for="age">{{ label }}</label>
        <input 
					type="number" 
					:id="id" 
					:value="age"
					@input="change"
					max="99"
				>
      </div>
</template>

<script>
export default {
	data() {
		return {
			id: 'input-' + Math.random()
		}
	},
	props: {
		label: String,
		age: Number,
	},
	methods: {
		change(event) {
			this.$emit('update:age', event.target.value)
		}
	},
}
</script>