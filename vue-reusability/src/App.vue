<template>
	<div class="container">
		<div class="card">
			<h2>{{ $i18n('app.title')}}</h2>
			<button class="btn" @click="changeLang">{{ $i18n('app.button')}}</button>
			<button class="btn primary" @click="modal = true">Open</button>
			
			<teleport to="body">
				<app-modal 
					v-if="modal"
					@close="modal = false"
			></app-modal>
			</teleport>
			

		</div>
	</div>
</template>

<script>

import AppModal from './components/AppModal.vue'

export default { 
	inject: ['i18n'],
	data() {
		return {
			lang: 'ru',
			modal: false,
		}
		
	},
	methods: {
		changeLang() {
			this.lang = this.lang === 'ru' ? 'en' : 'ru'
			this.i18n(this.lang)
			this.$forceUpdate()
		},
	},
	components: {
		'app-modal': AppModal,
	}
}
</script>