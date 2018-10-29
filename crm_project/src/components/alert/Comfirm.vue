<!-- 菜单操作弹层 -->
<template>
	<section class="alert-model">
		<div class="mask"></div>
		<div class="alert-main">
			<span class="close-icon"></span>
			<div class="alert-tit">{{title}}</div>
			<div class="alert-body">
				<slot></slot>
			</div>
			<p class="alert-btn-box">
				<button class="cancel" @click="cancelFn">取消</button>
				<button class="confirm" type="submit" @click="submit">确定</button>
			</p>
		</div>
	</section>
</template>
<script>
	import MySelect from "@/components/MySelect"; //select 选择框
	export default {
		name: 'MenuHandleAlert',
		props: ["title"],
		components: {
			"select-dom": MySelect,
		},
		methods: {
			cancelFn(){ //取消弹层
				this.$emit("cancel");
			},
			submit(){
				this.$emit("submit");
			}
		}
	}
</script>
<style lang='scss' scoped>
	.alert-model{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 9999;
		top: 0;
		left: 0;
	}
	.mask{
		background: #000;
		opacity: .6;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.alert-main{
		position: absolute;
		z-index: 2;
		width: 600px;
		padding: 20px;
		background: #fff;
		left: 50%;
		margin-left: -300px;
		top: 20%;
		.alert-tit{
			font-size: 18px;
			margin-bottom: 20px;
		}
		.alert-btn-box{
			border-top: 1px solid $borderColor;
			padding-top: 15px;
			margin-top: 15px;
			text-align: center;
		}
		.cancel{
			margin-right: 10px;
		}
	}

	
</style>