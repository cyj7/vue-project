<!-- 菜单列表 -->
<template>
	<section> 
		<breadcrumb :data="breadcrumb"><slot>待审核广告主、查询素材入口。</slot></breadcrumb>
		<p class="main-m"><button class="main-btn" @click="showModel">添加主菜单</button></p>
		<menu-alert :show="isShow" @cancel="cancelFn" @confirm="confirmFn"></menu-alert>
		<tree @editFn="editFn" @addFn="addFn" :checkbox="false" :handle="true"></tree>
	</section>
</template>
<script>
	import Breadcrumb from "@/components/Breadcrumb" //面包屑
	import MenuHandleAlert from "@/components/MenuHandleAlert" //弹层
	import TreeHandle from "@/components/TreeHandle" //tree

	export default {
		name: 'Model',
		data() {
			return {
				"breadcrumb": ["系统设置", "菜单列表"],
				"isShow": false
			}
		},
		components: {
			// "header-dom": Header,
			// 'tree': Tree,
			"breadcrumb": Breadcrumb,
			'menu-alert': MenuHandleAlert,
			"tree": TreeHandle
		},
		methods: {
			showModel(){
				this.isShow = true;
			},
			cancelFn(){
				this.isShow = false;
				console.log("cancel");
			},
			confirmFn(data){
				this.isShow = false;
				console.log("confirm", data);
			},
			editFn(id){ //编辑
				console.log(id, 'editFn');
				this.showModel();
			},
			addFn(id){ //添加
				console.log(id, 'addFn');
				this.showModel();
			}
		}
	}
</script>
<style lang='scss' scoped>
	
</style>