<template>
	<div class="sidebar">
		<div class="sidebar__search">
			<h2>Поиск сотрудников</h2>
			<input
				class="input"
				type="text"
				placeholder="Введите Id или имя"
				v-model="searchText"
			>
			<button @click="getUser">Сотрудники</button>
		</div>
		<div class="sidebar__results">
			<h2>Результаты</h2>
			<span v-if="isLoading">загрузка...</span>
			<div v-else>
				<span v-if="!users.length">{{ resultText }}</span>
				<div
					class="sidebar__results-list"
					v-else
				>
					<WorkerCard
						v-for="user in users"
						:key="user.id"
						:nickname="user.nickname"
						:email="user.email"
						@click="selectUser(user)"
					/>
				</div>
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
	emits: ['getUser', 'selectUser'],
	props:
	{
		isLoading:
		{
			type: Boolean,
			default: false,
		},
		users: Array,
		resultText:
		{
			type: String,
			default: '',
		},
	},
	// props, { emit }
	setup(props, { emit })
	{
		// data
		const searchText = ref('');
		const testUser = ref(
		{
			nickname: 'Elineliz',
			email: 'eline@mail.com',
		});

		// methods
		const getUser = () =>
		{
			// console.log(searchText.value);
			emit('fetch', searchText.value);
		}

		const selectUser = (user) =>
		{
			console.log('sidebar', { ...user });
			emit('select', { ...user });
		}

		return {
			//data
			searchText,
			testUser,
			//methods
			getUser,
			selectUser,
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
