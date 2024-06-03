<template>
	<div class="employees-page">
		<SideBar />
		<WorkerProfile />
	</div>
	<button @click="getUser">User</button>
</template>

<script>
import { computed } from "vue";
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
		const users = computed(()=> store.state.user.users)
		const getUser = () =>
		{
			// вызов запроса из стора
			store.dispatch("GET_USER");
			console.log(users)
		}
		return {
			getUser
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
