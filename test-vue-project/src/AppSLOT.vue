<template>
	<div class="container pt-1">
		<div class="card">
			<h1> Slots</h1>
		</div>
		
		<app-list>
			<template #default="{item, index}">
				<span style="color: blueviolet"> <span style="color: brown">{{ index + 1}}: </span> {{ item }}</span>
			</template>
		</app-list>
		<app-block>
			<p>Content in component</p>
			<template #header>
				<h3>Title h3</h3>
			</template>
			<template #footer> 
				<hr>
				Footer from component
			</template>
		</app-block>
	</div>
</template>

<script>

import AppBlock from './components/AppBlock'
import AppList from './components/AppList'
	export default {
components: {
	'app-block': AppBlock,
	'app-list': AppList,
}
	}
</script>

<style scoped>

</style>