<template>
	<div class="container">
		<div class="card">
			<h2 v-color:[type].hover="color">Директивы (v-)</h2>
			<div class="form-control">
				<label for="inp">Input</label>
				<input v-focus type="text" id="inp">
			</div>
			<button class="btn" @click="color = 'darkblue'">Click</button>
			<button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color'">Click 2</button>
			
		</div>
	</div>
</template>

<script>
import { clear } from 'console'

let interval

const mouseover= event => {
	let flag = true
	interval = setInterval(() => {
		event.target.style.color = flag ? '#fff' : binding.value
		flag = !flag
	}, 1000)
}

const mouseout = event => {
	clearInterval(interval)
}

export default {
	
	data() {
		return {
			color: 'blue',
			type: 'color',
			show: true,
		}
	},
	mounted() {
		setTimeout(() => {
			this.show = false
		}, 3000)
	},
	directives: {
		focus: 	{
			mounted(elem) {
				elem.focus()
			},
		
		},
		color: {
			mounted(el,binding) {
				el.style[binding.arg] = binding.value
	
				if(binding.modifiers.hover) {
					el.addEventListener('mouseover', mouseover);
					el.addEventListener('mouseout', mouseout);
				}
			},
			updated(el, binding) {
				el.style[binding.arg] = binding.value
			},
			unmounted(el) {
				if (interval) {
					clearInterval(interval)
				}
				el.removeEventListener('mouseover', mouseover);
				el.removeEventListener('mouseout', mouseout);
			}
	},
	
}
}
</script>