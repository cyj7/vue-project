<!-- 标题 -->
<template>
	<section class="body-title">
		<span class="title-icon"></span><span>{{title}}</span>
	</section>
</template>
<script>
	export default {
		name: 'BodyTitle',
		data() {
			return {}
		},
		props: ["title"],
		components: {

		},
		methods: {

		}
	}
</script>
<style lang='scss' scoped>
	.body-title{
		box-shadow: 0 2px 4px rgba(0,0,0,.1);
		backgorund: #f8f9fa;
		font-size: 16px;
		padding: 10px 20px;
		.title-icon{
			display: inline-block;
			width: 4px;
			height: 25px;
			background: $mainColor;
			vertical-align: middle;
			margin-right: 10px;
		}
	}
</style>