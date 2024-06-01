<template>
	<div class="worker-card">
		<div class="worker-card__img">
			<img src="../assets/img/card-photo.png" alt="worker photo">
		</div>
		<div class="worker-card__info">
			<p class="worker-card__info-title">Bret</p>
			<p class="worker-card__info-email">Sincere@april.biz</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
.worker-card
{
	overflow: hidden;
	display: flex;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0,0,0,0.1);
	cursor: pointer;
	transition: .2s all;

	&:hover
	{
		background-color: #E0E0E0;
	}

	&--active
	{
		background-color: #E0E0E0;
	}
}

.worker-card__img
{
	width: 70px;
	height: 70px;
	flex-shrink: 0;
	border-right: solid 1px #E0E0E0;
	background-color: #fff;

	img
	{
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
}

.worker-card__info
{
	width: 100%;
	padding: 15px 15px 0 15px;

	p
	{
		max-width: 140px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}

.worker-card__info-title
{
	margin-bottom: 5px;
	font-weight: 600;
}

.worker-card__info-email
{
	margin-bottom: 0;
}
</style>