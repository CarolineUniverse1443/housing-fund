<template>
	<div class="employees-page">
		<SideBar
			:users="users"
			@fetch="getUser"
		/>
		<WorkerProfile
			:show-profile="showWorkerProfile"
			:name="selectedUser.name"
			:email="selectedUser.email"
			:phone="selectedUser.phone"
		/>
	</div>
</template>

<script>
import { ref, computed } from "vue";
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
		// подключаем стор
		const store = useStore();

		// data
		const showWorkerProfile = ref(false);
		const selectedUser = ref(
		{
			name: 'Elineliz',
			email: 'eline@mail.com',
			phone: '+9 (345)-77-48',
		});

		// computed
		const users = computed(()=> store.state.user.users);

		// methods
		const getUser = () =>
		{
			// вызов запроса из стора
			store.dispatch("GET_USER");
			console.log(users);
		}

		return {
			getUser,
			showWorkerProfile,
			selectedUser,
			users,
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
