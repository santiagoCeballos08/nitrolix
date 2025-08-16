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
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
