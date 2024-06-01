<template>
	<div class="container">
		<router-view />
	</div>
</template>

<style lang="scss">
* { box-sizing: border-box; }
body
{
	margin: 0;
	min-height: 100vh;
}
#app
{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
.container
{
	display: flex;
	width: 100%;
	margin: 0 auto;
	padding: 40px;
	flex: 1 0 auto;
}

h1
{
	font-weight: 600;
	font-size: 18px;
	line-height: 25px;
	margin-top: 0;
	margin-bottom: 20px;
}

h2
{
	font-weight: 600;
	font-size: 16px;
	line-height: 23px;
	margin-top: 0;
	margin-bottom: 15px;
}

p
{
	font-size: 14px;
	line-height: 20px;
	margin-top: 0;
	margin-bottom: 10px;
}
</style>