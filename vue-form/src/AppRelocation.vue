<template>
	 <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label>
						<input 
							type="radio"
							
							@input="change"
							name="trip" 
							value="yes"
						/> 
						Да
					</label>
        </div>

        <div class="checkbox">
          <label>
						<input 
							type="radio" 
							
							@input="change"
							name="trip" 
							value="no"
						/> 
						Нет
					</label>
        </div>
      </div>
</template>

<script>
export default {
	props: {
		relocate: String,
	},
	methods: {
		change(event) {
			console.log(event.target.value);
			this.$emit('update:relocate', event.target.value)
		}
	},
}
</script>