<template>
	<div class="employees-page">
		<SideBar
			:users="users"
			:result-text="sidebarText"
			:is-loading="isLoading"
			@search="getUser"
			@select="setProfileInfo"
		/>
		<WorkerProfile
			:show-profile="showWorkerProfile"
			:name="selectedUser.name"
			:nickname="selectedUser.nickname"
			:email="selectedUser.email"
			:phone="selectedUser.phone"
		/>
	</div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import SideBar from '@/components/SideBar.vue';
import WorkerProfile from '@/components/WorkerProfile.vue';
export default {
	components:
	{
		SideBar,
		WorkerProfile
	},
	setup()
	{
		onMounted(() => {
			console.log('примонтирован!');
			fetchUsers();
		});

		// подключаем стор
		const store = useStore();

		// data
		const sidebarText = ref('начните поиск');
		const isLoading = ref(false);
		const showWorkerProfile = ref(false);
		const selectedUser = ref(
		{
			name: 'Elineliz Graerat',
			nickname: 'Cute Elf',
			email: 'eline@mail.com',
			phone: '+9 (345)-77-48',
		});

		// computed
		const users = computed(()=> store.state.user.users);

		// methods
		const getUser = async (id) =>
		{
			// выводить полный список при пустом поиске
			if (!id)
			{
				await store.dispatch('FETCH_USERS');
				return;
			}

			isLoading.value = true;
			// вызов запроса из стора
			await store.dispatch('GET_USER', id);
			isLoading.value = false;

			if (!users.value.length)
				sidebarText.value = 'ничего не найдено';
		};

		const fetchUsers = async () =>
		{
			await store.dispatch('FETCH_USERS');
			console.log('fetched');
		};

		const setProfileInfo = (user) =>
		{
			selectedUser.value.name = user.name;
			selectedUser.value.nickname = user.nickname;
			selectedUser.value.email = user.email;
			selectedUser.value.phone = user.phone;

			showWorkerProfile.value = true;
		};

		return {
			// data
			sidebarText,
			isLoading,
			showWorkerProfile,
			selectedUser,
			users,
			// methods
			getUser,
			fetchUsers,
			setProfileInfo,
		}
	}
}
</script>

<style lang="scss">
.employees-page
{
	box-sizing: border-box;
	display: flex;
	background: #FDFDFD;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0,0,0,0.1);
	width: 100%;
}
</style>
