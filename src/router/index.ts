import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: async () => await import('../views/HomeView.vue')
		}
	]
})

export default router
