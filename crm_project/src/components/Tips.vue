<!-- 提示 -->
<!-- 用法：
<tips type="info" title="消息提示的文案"></tips> -->

<template>
	<section class='tips-box'>
		<i class="tips-icon" :class="iconClass"></i>
		<span>{{title}}</span>
	</section>
</template>
<script>
	// title: 提示的文案；  type：提示的类型，如下
	// info: 普通提示
	// error: 错误提示

	export default {
		name: 'Tips',
		data() {
			return {
				iconClass: ''
			}
		},
		props: ['title', 'type'],
		mounted() {
			let type = this.type;
			switch(type){
				case 'info':
					this.iconClass = 'info'
					break;
				case 'error':
					this.iconClass = 'error'
					break;
				case 'ok':
					this.iconClass = 'ok'
					break;
				default:
					this.iconClass = 'info'
					break;
			}
		},
		methods: {

		}
	}
</script>
<style lang='scss' scoped>
	.tips-box{
		color: #999;
		.tips-icon{
			display: inline-block;
			width: 16px;
			height: 16px;
			text-align: center;
			line-height: 16px;
			border-radius: 10px;
			vertical-align: middle;
			margin-right: 2px;
			&.info{
				background: $yellowColor;
				color: #fff;
				&:before{
					content: "!"; 
					font-size: 12px;
				}
			}
			&.error{
				background: $redColor;
				color: #fff;
				&:before{
					content: "×"; 
					font-size: 14px;
				}
			}
			&.ok{
				background: $greenColor;
				color: #fff;
				&:before{
					content: "✓"; 
					font-size: 12px;
				}
			}
		}
	}
</style>