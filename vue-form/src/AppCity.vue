<template>
	<div class="form-control">
        <label for="city">Твой город</label>
        <select 
					id="city"
					:value="city"
					@input="change"
				>
        	<option 
						value="spb"
					>
						Санкт-Петербург
					</option>
          <option 
						value="msk"
					>
						Москва
				</option>
          <option 
						value="kzn"
					>
						Казань
				</option>
          <option 
						value="nsk"
					>
						Новосибирск
				</option>
        </select>
      </div>
</template>

<script>
export default {
	data() {
		return {
			id: 'input-' + Math.random()
		}
	},
	props:{
		city: String,
	},
	methods: {
		change(event) {
			this.$emit('update:city', event.target.value)
		}
	}

}
</script>