import { createRouter, createWebHistory } from 'vue-router';

const routes =
[
	{
		name: 'Home',
		redirect: '/',
		component: () => import('@/lays/DefaultLay.vue'),
		children:
		[
			{
				path: '/emp',
				name: 'Emp',
				component: () => import('@/views/EmployeesPage.vue'),
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});


export default router;