<!-- 面包屑 -->
<!-- 用法
import Breadcrumb from "@/components/Breadcrumb"; //面包屑
<breadcrumb data=[] datail=""></breadcrumb> -->

<template>
	<section class="">
		<p class="bread-crumb"><span>首页</span><span v-for="item in data"><span class="icon-box"></span>{{item}}</span></p>
		<div class="component-detail"><span class="line-icon"></span><span class="txt-box v-middle"><slot></slot></span></div>
	</section>
</template>
<script>
	export default {
		name: 'breadcrumb',
		data(){
			return {}
		},
		props: ['data'],
		mounted(){
			// console.log(this, this.$children);
		},
		methods: {
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="scss" scoped>
//面包屑
.bread-crumb{
	padding: 10px 20px;
	border-bottom: 1px solid $borderColor;
	color: $greyFontColor;
	.icon-box{
		display: inline-block;
		width: 5px;
		height: 5px;
		background: $greyFontColor;
		vertical-align: middle;
		border-radius: 5px;
		margin: 0 5px;
	}
}
//组件功能说明
.component-detail{
	position: relative;
	z-index: 1;
	padding: 20px;
	border-bottom: 1px solid $borderColor;
	.line-icon{
		display: inline-block;
		width: 4px;
		height: 40px;
		// position: absolute;
		margin-right: 15px;
		// top: 20px;
		background: $mainColor;
		vertical-align: middle;
	}
	.txt-box{
		display: inline-block;
	}
}
</style>