<template>

  <div class="card" v-if="email">
    <h2>{{ email.title }} </h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(email.date).toLocaleDateString() }} </p>
    <p><strong>Описание</strong>: {{ email.description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
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
  components: {AppStatus},
}
</script>

<style scoped>

</style>