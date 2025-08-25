import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	// Ejemplo de rutas
	{
		path: '/',
		component: () => import('../views/home/HomeView.vue'),

		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('../views/home/HomeInformation.vue'),
			},
			{
				path: 'about',
				name: 'About',
				component: () => import('../views/home/AboutView.vue'),
			},
			{
				path: '/policies',
				name: 'policies',
				component: () => import('@/views/policies/PoliciesView.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		} else {
			return { top: 0 };
		}
	},
});

export default router;
