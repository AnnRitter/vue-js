<template>
 <app-page back title="Часто задаваемые вопросы">
		<question-item
		v-for="question in questions" 
		:key="question.title"
		:question="question"
	></question-item>
 </app-page>
 
</template>

<script>
import AppPage from '../components/ui/AppPage.vue';
import QuestionItem from '../components/question/QuestionItem.vue';
export default {
	setup() {
		const questions = [
			{title: 'Как все работает?', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, dolores.'},
			{title: 'Как зарегистрироваться на сайте?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius, ipsa explicabo architecto a molestias!'},
			{title: 'Как использовать продукт?', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing.'},
			{title: 'Какие есть гарантии?', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione quaerat error facilis nesciunt, tempora asperiores.'},

		]
		return {
			questions
		}
	},
	components: {
		AppPage,
		QuestionItem,
	}
}
</script>
