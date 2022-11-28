<template >
		<div class="container flex-center" v-if="$store.state.tasks.length === 0">
			<h1 class="text-white center">Задач пока нет</h1> 
			<router-link class="btn primary" to="/new">Создать</router-link>
		</div>
		<div class="container" v-else>
			<h3 class="text-white">Всего активных задач: 0</h3>
    	<div class="card" v-for="item in $store.state.tasks" :key="item.id">
      	<h2 class="card-title">
        	{{ item.title }}
       	<app-status :type="'done'" />
      	</h2>
      	<p>
       		<strong>
          	<small>
         		{{ new Date(item.date).toLocaleDateString()  }}
        	 </small>
       		</strong>
     		</p>
     	 <router-link :to="'/task/' + item.id" class="btn primary" >Посмотреть</router-link>
   	 </div>
		</div>
</template>


<script>

import AppStatus from '../components/AppStatus'
import Task from '../views/Task'
export default {
  components: {
		'app-status': AppStatus, 
		'task': Task
	},
}
</script>


<style scoped>
	.flex-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


</style>