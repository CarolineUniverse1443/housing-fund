<template>
	<div class="worker-profile">
		<div class="worker-profile__wr" v-if="showProfile">
			<div class="worker-profile__img">
				<img src="../assets/img/profile-photo.png" alt="worker photo">
			</div>
			<div class="worker-profile__info">
				<h2 class="worker-profile__info-title">
					{{ name }}
				</h2>
				<p class="worker-profile__info-text">
					<span>email:</span>  {{ email }}
				</p>
				<p class="worker-profile__info-text">
					<span>phone:</span> {{ phone }}
				</p>
				<h2 class="worker-profile__info-title">О себе:</h2>
				<p class="worker-profile__info-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
		<p class="worker-profile__empty" v-else>Выберите сотрудника, чтобы посмотреть его профиль</p>
	</div>
</template>

<script>
export default {
	props:
	{
		showProfile:
		{
			type: Boolean,
			default: false,
		},
		name: String,
		email: String,
		phone: String,
	},
}
</script>

<style lang="scss">
.worker-profile
{
	width: 100%;
	padding: 30px 20px;
	height: 100%;
}

.worker-profile__wr
{
	display: flex;
	flex-wrap: wrap;
	gap: 30px 60px;
}

.worker-profile__img
{
	width: 420px;
	height: 285px;
	border: 1px solid #E0E0E0;
	background: lightblue;
	flex-shrink: 0;

	img
	{
		width: 100%;
		height: 100%;
	}
}

.worker-profile__info
{
	max-width: 440px;
}

.worker-profile__info-text
{
	span { font-weight: 600; }
}

.worker-profile__empty
{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 0;
	height: 100%;
}
</style>
