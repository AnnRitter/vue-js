<template>
  <span class="badge" :class="style" >{{ title }}</span>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			style: '',
		}
	},
	props: ['type'],
	mounted() {
		if (this.type === 'in process') {
				this.title = 'Выполняется'
				this.style = 'warning'
			} else if (this.type === 'done') {
				this.title = 'Выполнено'
				this.style = 'primary'
			} else if (this.type === 'cancel') {
				this.title = 'Отменено'
				this.style = 'danger'
			} else if (this.type === 'active') {
				this.title = 'Активно'
				this.style = 'primary'
			}
	},
	
}
</script>