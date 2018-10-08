<template>
	<section class="create-new">
		<header-dom></header-dom>
		<breadcrumb class='wrap'><span slot="text" class="bread-crumb-text">新建客户</span></breadcrumb>
		<section class="create-new-body wrap">
			<body-title title="广告主信息"></body-title>
			<tips type="info" title="消息提示的文案"></tips>
			
		</section>
    	<footer-dom></footer-dom>
	</section>
</template>
<script>
	import Header from "@/components/Header"; //头部
	import Footer from "@/components/Footer"; //底部
	// import Select from "@/components/Select"; //select 选择框
	import MySelect from "@/components/MySelect"; //select 选择框
	import Upload from "@/components/Upload"; //上传
	import Breadcrumb from "@/components/Breadcrumb"; //面包屑
	import BodyTitle from "@/components/BodyTitle"; //面包屑
	import Tips from "@/components/Tips"; //面包屑
	export default {
		name: "CreateNew",
		data(){
			return {}
		},
		components: {
			"header-dom": Header,
			"select-dom": MySelect,
			'footer-dom': Footer,
			'upload': Upload,
			'breadcrumb': Breadcrumb,
			"body-title": BodyTitle,
			"tips": Tips
		},
		methods: {
			// toUrl: function(url){
			// 	this.$route.push({
			// 		path: "/page",
			// 		query: {
			// 			id: url
			// 		}
			// 	})
			// }
		},
		mounted(){
			// console.log(this, '=========');
		}
	}
</script>
<style lang="scss" scoped>
	.create-new-body{
		border: 1px solid $borderColor;
	}
</style>