<template>
	<div class="container ">
		<div class="card">
			<h1>Динамические и асинхронные компоненты</h1>
			<app-button 
				:color="colorPrev" 
				@action="changeTab('prev')"
			>
				prev
			</app-button>

		<app-button 
			:color="colorNext" 
			@action="changeTab('next')"
		>
			next
		</app-button>
		</div>

			<app-content 
				:active="active"
			></app-content>
	</div>
</template>

<script>
	import AppButton from './components/AppButton'
	import AppTextPrev from './components/AppTextPrev'
	import AppTextNext from './components/AppTextNext'
	import AppContent from './components/AppContent'

	export default {
		data() {
			return {
			active: 'prev',
			}
		},
		methods: {
			changeTab(tab) {
				this.active = tab
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
			'app-content': AppContent,
		}
	}
</script>

<style scoped>

</style>