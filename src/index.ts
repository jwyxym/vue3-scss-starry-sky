import type { App } from 'vue';
import StarrySky from './components/StarrySky.vue';

export { StarrySky };

export default {
	install(app: App) {
		app.component('StarrySky', StarrySky);
	},
};
