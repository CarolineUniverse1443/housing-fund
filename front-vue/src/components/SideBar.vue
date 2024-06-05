<template>
	<div class="sidebar">
		<div class="sidebar__search">
			<h2>Поиск сотрудников</h2>
			<input
				class="input"
				type="text"
				placeholder="Введите Id или имя"
			>
			<button @click="getUsers">Сотрудники</button>
		</div>
		<div class="sidebar__results">
			<h2>Результаты</h2>
			<span v-if="!users.length">начните поиск</span>
			<div
				class="sidebar__results-list"
				v-else
			>
				<WorkerCard
					v-for="user in users"
					:key="user.id"
					:nickname="user.nickname"
					:email="user.email"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import WorkerCard from '@/components/WorkerCard.vue'
export default {
	components:
	{
		WorkerCard,
	},
	emits: ['getUsers'],
	props:
	{
		users: Array,
	},
	setup(props, { emit })
	{
		const testUser = ref(
		{
			nickname: 'Elineliz',
			email: 'eline@mail.com',
		});

		const getUsers = () =>
		{
			emit('fetch');
		}

		return {
			testUser,
			getUsers,
		}
	}
}
</script>

<style lang="scss">
.sidebar
{
	display: flex;
	flex-direction: column;
	min-width: 281px;
	padding: 30px 0;
	border-right: solid 1px #E0E0E0;

	button
	{
		width: 100%;
		height: 35px;
		background: #E31F24;
		font-size: 16px;
		font-weight: 600;
		color: white;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: .2s all;

		&:hover
		{
			background-color: rgba(227, 31, 36, .7);
		}
	}
}

.sidebar__search
{
	margin-bottom: 30px;
	padding: 0 20px;
}

.input
{
	width: 100%;
	height: 50px;
	padding: 16px 24px 16px 24px;
	font-size: 14px;
	line-height: 18px;
	border: 1px solid #E9ECEF;
	border-radius: 8px;
	color: #76787D;
	margin-bottom: 10px;
}

.sidebar__results
{
	flex-grow: 1;

	h2, span { padding: 0 20px; }
}

.sidebar__results-list
{
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 10px 20px;
	max-height: 575px;
	overflow: hidden auto;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar { display: none; }
}
</style>
