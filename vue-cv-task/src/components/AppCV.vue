<template>
	 
	 <div class="card card-w70" >

		<div v-if="dataCV.length">
			<div v-for="item in dataCV">

				<h1 v-if="item.type === 'title'"> {{ item.value}}</h1>
     	 <div class="avatar" v-if="item.type === 'avatar'">
       	 <img :src="item.value">
     	 </div>
      	<h2 v-if="item.type === 'avatar'">{{ item.value }}</h2>
      	<p v-if="item.type === 'text'"> {{ item.value }} </p>
			</div>
		</div>

     <div v-else>
			<h3>Добавьте первый блок, чтобы увидеть результат</h3>
		 </div>
      
    </div>
  
</template>

<script>
export default {
	props: ['dataCV']

}
</script>