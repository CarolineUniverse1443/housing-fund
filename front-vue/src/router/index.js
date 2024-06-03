import { createRouter, createWebHistory } from 'vue-router';

// список всех страниц проекта
const routes =
[
	{
		// страница по умолчанию
		name: 'Home',
		redirect: '/',
		component: () => import('@/lays/DefaultLay.vue'),
		children:
		[
			// страница поиска сотрудников
			{
				path: '/emp',
				name: 'Emp',
				component: () => import('@/views/EmployeesPage.vue'),
			}
		]
	}
];

// создание роутера
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});


export default router;