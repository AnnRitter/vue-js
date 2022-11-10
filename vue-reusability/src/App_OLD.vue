<template>
  <div class="container">
		<app-alert
		v-if = "alert"
			type="primary"
			title="Alert title"
			content="Alert content"
			closable
			@close="toggleAlert"
		></app-alert>
    <div class="card">
			<button class="btn primary" @click="toggleAlert">{{alert ? 'Закрыть' : 'Показать'}} сообщение</button>
    </div>
  </div>
</template>

<script>

import AppAlert from './components/AppAlert.vue';
export default {
	data() {
		return {
			alert: false,
		}
	},
	methods: {
		toggleAlert() {
			this.alert = !this.alert 
		}
	},
	components: {
		'app-alert': AppAlert,
	}
}
</script>

