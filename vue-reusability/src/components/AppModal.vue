<template>
	<div class="modal-backdrop" @click="$emit('close')"></div>
	<div class="modal">
		<div class="modal-cross" @click="$emit('close')"></div>
		<h2>Modal title</h2>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus adipisci, vel repellat voluptatibus alias commodi, est laborum dolore necessitatibus beatae asperiores laudantium, natus eum earum ipsam assumenda ad aliquid sapiente.</p>
	</div>

</template>

<script>
export default {
	emits: ['close']
}
</script>