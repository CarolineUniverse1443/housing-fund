<template>
	<div class="employees-page">
		<SideBar />
		<WorkerProfile />
	</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import WorkerProfile from '@/components/WorkerProfile.vue'
export default {
	components:
	{
		SideBar,
		WorkerProfile
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
