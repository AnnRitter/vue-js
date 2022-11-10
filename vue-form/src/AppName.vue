<template>
	 <div class="form-control" :class="{invalid: error} ">
      <label :for="id">{{ label }}</label>
      <input 
				type="text" 
				:id="id" 
				:placeholder="placeholder"
				:value="name"
				@input="change"
			>
			<small v-if="error">{{error}}</small>
    </div>

     
</template>

<script>


export default {
	data() {
		return {
			id: 'input-' + Math.random()
		}
	},
	emits: ['update:name'],
	props: {
		name: {
			type: String,
		},
		inputType: {
			type: String,
		},	
		label: {
			type: String,
		},
		placeholder: {
			type: String,
		},
		error: {
			type: String, 
			
		}
	},
	methods: {
		change(event) {
			this.$emit('update:name', event.target.value)
		}
	},
}
</script>