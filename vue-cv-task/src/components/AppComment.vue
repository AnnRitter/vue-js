<template>
	
	<div class="container">
    <p>
      <button class="btn primary" @click="downloadComment" v-if="!comments.length">Загрузить комментарии</button>
    </p>
    <div class="card">
      <h2>Комментарии</h2>
      <ul class="list" v-for="item in comments" :key="item.id" >
        <li class="list-item">
          <div>
            <p><strong>{{ item.email }}</strong></p>
            <small>{{ item.body}}</small>
          </div>
        </li>
      </ul>
			<app-loader v-if="loading"></app-loader>
    </div>
    
  </div>

</template>

<script>
import axios from 'axios'
import AppLoader from './AppLoader.vue'

export default {
	data() {
		return {
			comments: [],
			loading: false,
		}
	},
	methods: {
		async downloadComment() {
			try {
				this.loading = true;
				const {data} = 	await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42');
				
				this.comments = Object.keys(data).map(key => {
				return {
					name: data[key].name,
					email: data[key].email,
					body: data[key].body,
					id: key,
				}
			})
			this.loading = false;
			} catch(e) {
				this.loading = false;
				console.log(e.message);
			}
		}
	},
	components: {
		'app-loader': AppLoader,
	}
}
</script>

