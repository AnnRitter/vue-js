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
       	<AppStatus :type="'done'" />
      	</h2>
      	<p>
       		<strong>
          	<small>
         		{{ item.date }}
        	 </small>
       		</strong>
     		</p>
     	 <button class="btn primary" >Посмотреть задачу {{ item.id }}</button>
   	 </div>
		</div>
</template>


<script>

import AppStatus from '../components/AppStatus'

export default {
	
	mounted() {
		this.load()
	},
	methods: {
	async	load() {
			try {
				const response = await fetch('https://vue-composition-default-rtdb.firebaseio.com/tasks.json', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',	
				},
			})
			const data = await response.json()
			
			this.$store.state.tasks = Object.keys(data).map(key => {
				return {
					title: data[key].title,
					date: data[key].date,
					description: data[key].description,
					id: key,
				}
			})
			} 
			catch(e) {
				console.log(e.message);
			}
		}
	},
	
  components: {AppStatus},
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