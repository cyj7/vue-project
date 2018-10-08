<!-- 面包屑 -->
<!-- 用法
import Breadcrumb from "@/components/Breadcrumb"; //面包屑
<breadcrumb><span slot="text" class="bread-crumb-text">新建客户</span></breadcrumb> -->

<template>
	<section class="bread-crumb">
		<span class="crumb-lft" @click="goback"></span><slot name="text"></slot>
	</section>
</template>
<script>
	export default {
		name: 'breadcrumb',
		data(){
			return {}
		},
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
.bread-crumb{
	font-size: 16px;
	.crumb-lft{
		background: $mainColor;
		display: inline-block;
		width: 20px;
		height: 40px;
		line-height: 40px;
		position: relative;
		vertical-align: middle;
		margin-right: 20px;
		cursor: pointer;
		&:after, &:before{
			display: block;
			content: '';
			height: 0;
			width: 0;
			position: absolute;
			top: 8px;
			border: 10px dashed transparent;
			border-right: 10px solid #fff;
		}
		&:before{
			left: -6px;
		}
		&:after{
			border-right-color: $mainColor;
			left: -4px;
		}
	}
	.bread-crumb-text{
		vertical-align: middle;
	}
}
</style>