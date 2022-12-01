<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" @click.prevent="create" :disabled="!invalide">Создать {{ date }}</button>
  </form>
</template>


<script>
export default {
	data() {
		return {
			title: '',
			date: '',
			description: '',
		}
	},
	computed: {
		invalide() {
			return this.title && this.date && this.description
		}
	},
	methods: {
		
		async create() {
			const type = new Date(this.date) >= new Date() ? 'active' : 'cancel';
			console.log(type);
			const response = await fetch('https://vue-composition-default-rtdb.firebaseio.com/tasks.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',	
				},
				body: JSON.stringify({
					title: this.title,
					date: this.date,
					description: this.description,
					type: type,
				}),
			})
			const firebaseData = await response.json()
			console.log(this.date);
			this.$store.state.tasks.push( {
				type: type,
				title: this.title,
				date: this.date,
				description: this.description,
				id: firebaseData.name,
			})
			this.$router.push('/')
		}
	},
	
}
</script>
