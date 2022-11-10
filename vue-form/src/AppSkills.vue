<template>
	<div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label>
						<input 
							type="checkbox"
							@input="change"
							
							value="Vuex"
						/> 
						Vuex
					</label>
        </div>
        <div class="checkbox">
          <label>
						<input 
							type="checkbox"
							@input="change"
						
							value="VueCLI"
						/> 
						Vue CLI
					</label>
        </div>
        <div class="checkbox">
          <label>
						<input 
							type="checkbox"
							@input="change"
						
							value="VueRouter"
						/> 
						Vue Router
					</label>
        </div>
      </div>
</template>

<script>
export default {
	data() {
		return {
			skillsArray: []
		}
	},
	props: {
		skills: Array,
	},
	methods: {
		change(event) {
			this.skillsArray.push(event.target.value)
			console.log();
			this.$emit('update:skills', this.skillsArray)
		}
	},
}
</script>