<template>
	<div class="sidebar">
		<div class="sidebar__search">
			<h2>Поиск сотрудников</h2>
			<input
				class="input"
				type="text"
				placeholder="Введите Id или имя"
			>
		</div>
		<div class="sidebar__results">
			<h2>Результаты</h2>
			<div class="sidebar__results-list">
				<WorkerCard v-if="false"/>
				<span v-else>начните поиск</span>
			</div>
		</div>
	</div>
</template>

<script>
import WorkerCard from '@/components/WorkerCard.vue'
export default {
	components:
	{
		WorkerCard,
	}
}
</script>

<style lang="scss">
.sidebar
{
	min-width: 281px;
	padding: 30px 20px;
	border-right: solid 1px #E0E0E0;
}

.sidebar__search
{
	margin-bottom: 30px;
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
}
</style>
