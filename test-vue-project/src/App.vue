<template>
	<div class="container ">
		<div class="card">
			<h1>Динамические и асинхронные компоненты</h1>
			<app-button 
		:color="colorPrev" 
		@action="active = 'prev'"
		>prev</app-button>

		<app-button 
		:color="colorNext" 
		 @action="active = 'next'"
		 >next</app-button>
		</div>

		<keep-alive>
			<component :is="tabName"></component>
		</keep-alive>
	</div>
</template>

<script>
	import AppButton from './components/AppButton'
	import AppTextPrev from './components/AppTextPrev'
	import AppTextNext from './components/AppTextNext'
	export default {
		data() {
			return {
			active: 'prev'
			}
		},
		computed: {
			tabName() {
				return 'app-text-'+ this.active
			},
			colorPrev() {
				return this.active === 'prev' ? 'primary' : ''
			},
			colorNext() {
				return this.active === 'next' ? 'primary' : ''
			}
		},

		components: {
			'app-button': AppButton,
			'app-text-prev': AppTextPrev,
			'app-text-next': AppTextNext,
		}
	}
</script>

<style scoped>

</style>