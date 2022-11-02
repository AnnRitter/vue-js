<template>
  <div class="container">
		
		<div class="card">
			<h1>База</h1>
		</div>

	<div class="card">
		<h2>News {{ now }}</h2>
		<span>Открыто: {{ openRate }} | Прочитано: {{ readRate }}</span>
	</div>
	<app-news 
	v-for="item in news" 
	:key="item.id" 
	:title="item.title" 
	:id="item.id"
	:is-open="item.isOpen"
	:is-read="item.isRead"
	:content="item.content"
	@open-news="openRate++"
	@news-read="readNews"
	@news-unread="unreadNews"></app-news>

  </div>
</template>

<script>

import AppNews from './components/AppNews'

export default {
  data() {
		return {
			openRate: 0,
			readRate: 0,
			now: new Date().toLocaleDateString(),
			news: [
				{
					title: '(1) Lorem ipsum dolor sit amet.',
					content: '[1] Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quos molestiae placeat, a nesciunt voluptatibus facilis impedit tenetur illum et facere soluta omnis laborum natus illo ad, eaque dignissimos?',
					id: 1,
					isOpen: false,
					isRead: false,
				},
				{
					title: '(2) Lorem ipsum dolor sit amet consectetur adipisicing.',
					content: '[2] Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quos molestiae placeat, a nesciunt voluptatibus facilis impedit tenetur illum et facere soluta omnis laborum natus illo ad, eaque dignissimos?',
					id: 2,
					isOpen: false,
					isRead: false,
				},
				{
					title: '(3) Lorem ipsum dolor sit amet consectetur.',
					content: '[3] Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quos molestiae placeat, a nesciunt voluptatibus facilis impedit tenetur illum et facere soluta omnis laborum natus illo ad, eaque dignissimos?',
					id: 3,
					isOpen: false,
					isRead: false,
				},
				{
					title: '(4) Lorem ipsum dolor sit.',
					content: '[4] Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quos molestiae placeat, a nesciunt voluptatibus facilis impedit tenetur illum et facere soluta omnis laborum natus illo ad, eaque dignissimos?',
					id: 4,
					isOpen: false,
					isRead: false,
				},
			]
		}
	},
	provide() {
		return {
			title: 'Список всех новостей',
			news: this.news,
		}
	},
	methods: {
		readNews(id) {
			this.readRate++;
			const item = this.news.find(item => item.id === id);
			item.isRead = true;
			
		},
		unreadNews(id) {
			this.readRate--;
			const item = this.news.find(item => item.id === id);
			item.isRead = false;
		}
	},
	components: {
		'app-news': AppNews,
	},
  
}
</script>

<style scoped>
	h2 {
		color:darkslateblue
	}
</style>
