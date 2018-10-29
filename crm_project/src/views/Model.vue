<!-- 系统设置 -->
<template>
	<section class="wrap menu-list-view">
		<header-dom></header-dom>
		<tree></tree>
		<section class="right-wrap"> 
			<router-view></router-view>
		</section>
		<footer-dom></footer-dom>
	</section>
</template>
<script>
	import Header from "@/components/Header"; //头部
	import NavTree from "@/components/NavTree"; //左侧菜单
	import Footer from "@/components/Footer"; //底部
	export default {
		name: 'Model',
		data() {
			return {

			}
		},
		components: {
			"header-dom": Header,
			'tree': NavTree,
			"footer-dom": Footer
		},
		methods: {

		}
	}
</script>
<style lang='scss' scoped>
	//隐藏菜单
	.nav-hide{
		.right-wrap{
			margin-left: $navMinWidth;
		}
	}
</style>