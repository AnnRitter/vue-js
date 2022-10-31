<template>
	<div class="card">
		<h3>{{ title }}</h3>
		<app-button @action="openNews"> {{ newsOpen ? 'Закрыть' : 'Показать полный текст' }} </app-button>
		<div v-if="newsOpen" class="news">
			<app-button v-if="!isRead" color="primary" @action="read" >Прочитано</app-button>
			<app-button v-if="isRead" color="danger" @action="unread" >Отметить непрочитанной</app-button>
			<hr>
			<p >{{ content }}</p>
			<app-news-list></app-news-list>
		</div>
		
	</div>
</template>

<script>

import AppButton from './AppButton' 
import AppNewsList from './AppNewsList'

export default {
	emits: {
		'open-news': null,
		'news-read'(id) {
			if (id) {
				return true 
			}
			console.warn('No id in "news-read"')
			return false
		},
		'news-unread': null,
	},
	props: {
		title: {
			type: String,
			required: true,
		}, 
		content: {
			type: String,
			required: true,
		}, 
		id: {
			type: Number,
			required: true,
		}, 
		isOpen: {
			type: Boolean,
			required: false, 
			default: true,
		},
		isRead: {
			type: Boolean,
			required: false, 
		}
	},
	data() {
		return {
			newsOpen: this.isOpen,
			newsRead: this.isRead,
		}
	},
	methods: {
		openNews() {
			this.newsOpen = !this.newsOpen;
			if ( this.newsOpen) {
				this.$emit('open-news');
			}
		},
		read() {
			this.newsOpen = false; 
			this.$emit('news-read', this.id);
		
		},
		unread() {
			this.$emit('news-unread', this.id);
		}
	},
	components: {
		'app-button': AppButton,
		'app-news-list': AppNewsList,
	}
}
</script>