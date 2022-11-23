<template >
		<div class="container flex-center">
			<h1 class="text-white center">Задач пока нет</h1> 
			<button class="btn primary">Создать</button>
		</div>
		<div class="container">
			<h3 class="text-white">Всего активных задач: 0</h3>
    	<div class="card">
      	<h2 class="card-title">
        	Название задачи
       	 <AppStatus :type="'done'" />
      	</h2>
      	<p>
       	 <strong>
          	<small>
         	   {{new Date().toLocaleDateString()}}
          	</small>
       	 </strong>
     	 </p>
     	 <button class="btn primary">Посмотреть</button>
   	 </div>
		</div> 
</template>


<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus}
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