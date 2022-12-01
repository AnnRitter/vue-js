<template>

  <div class="card" v-if="email">
    <h2>{{ email.title }} </h2>
    <p><strong>Статус</strong>: <AppStatus :type="email.type" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(email.date).toLocaleDateString() }} </p>
    <p><strong>Описание</strong>: {{ email.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('in process')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancel')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.id }}</strong> нет.
  </h3>
	
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
	computed: {
		email() {
			return this.$store.state.tasks.find(task => task.id == this.$route.params.id)
		},
	},
	methods: {
		changeStatus(status) {
			this.email.type = status
			this.$router.push('/')
			this.$store.dispatch('changeData', {
				id: this.$route.params.id,
				type: status,
			})
		}
 	},
  components: {AppStatus},
}
</script>

<style scoped>

</style>