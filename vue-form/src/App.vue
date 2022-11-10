<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>

			<app-name
				:error="errors.name"
				placeholder="Insert your name"
				label="Ваше имя"
				v-model:name="name"
			></app-name>

      <app-age
			label="Ваш возраст"
			v-model:age.number="age"
			></app-age>

			<app-city
				v-model:city="city"
			></app-city>
		
			<app-relocation
				v-model:relocate="relocate"
			></app-relocation>

			<app-skills
				v-model:skills="skills"
			></app-skills>
      
			<div class="checkbox">
          <label>
						<input 
							type="checkbox"
							v-model="agree"
						/> 
						Согласен с политикой конфидециальности
					</label>
        </div>
				<small v-if="errors.agreement">{{errors.agreement}}</small>
				<hr>
      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>

import AppName from './AppName.vue'
import AppAge from './AppAge.vue'
import AppCity from './AppCity.vue'
import AppRelocation from './AppRelocation.vue'
import AppSkills from './AppSkills.vue'

  export default {
		data() {
			return {
				name: 'default',
				age: 23,
				city: 'spb',
				relocate: 'yes',
				skills: [],
				agree: true,
				errors: {
					name: null,
					agreement: null,
				}
			}
		},
		components: {
			'app-name': AppName,
			'app-age': AppAge,
			'app-city': AppCity,
			'app-relocation': AppRelocation,
			'app-skills': AppSkills,
		},
		methods: {
			validForm() {
				let isValid = true;
				if (this.name.length === 0) {
					this.errors.name = 'Insert your name'
					isValid = false
				} else {
					this.errors.name = null
				}
				return isValid
			},
			confirmAgreement() {
				let isValid = true 
				if (!this.agree) {
					this.errors.agreement = 'You need to confirm agreement'
					isValid = false
				} else {
					this.errors.agreement = null
				}
				return isValid
			},
			submitForm() {
			
			if(this.validForm() && this.confirmAgreement()) {
				console.log(this.skills);
			} else {
				console.log('form is not valid or you need to confirm agreement');
				
			}
				
			}
		},
		
	}
</script>

<style>
small {
	color: red;
}
.form-control.invalid input {
	border-color: red;
}
</style>
