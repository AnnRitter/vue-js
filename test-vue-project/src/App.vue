<template>
  <div class="container">

	<div class="card">
		<h2>News {{ now }}</h2>
	</div>
	<app-news 
	v-for="item in news" 
	:key="item.id" 
	:title="item.title" 
	:id="item.id"
	:is-open="item.isOpen"></app-news>

  </div>
</template>

<script>

import AppNews from './components/AppNews'

export default {
  data() {
		return {
			now: new Date().toLocaleDateString(),
			news: [
				{
					title: 'Lorem ipsum dolor sit amet.',
					id: 1,
					isOpen: false,
				},
				{
					title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
					id: 2,
					isOpen: false,
				},
				{
					title: 'Lorem ipsum dolor sit amet consectetur.',
					id: 3,
					isOpen: false,
				},
				{
					title: 'Lorem ipsum dolor sit.',
					id: 4,
					isOpen: false,
				},
			]
		}
	},
	components: {
		'app-news': AppNews,
	}
  
}
</script>

<style>

</style>
