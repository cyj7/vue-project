<!-- 菜单设置 -->
<template>
	<section> 
		<breadcrumb :data="breadcrumb"><slot>给系统角色分配菜单操作</slot></breadcrumb>
		<select-dom :data="selectData" @change="changeFn"></select-dom>
		<tree :checkbox="true" :handle="false" @checkFn="checkFn"></tree>
		<p><button class="main-btn" @click="saveFn">保存菜单设置</button></p>
		<comfirm v-show="show" @cancel="cancelFn" @submit="submitFn" title="添加|编辑菜单信息">
		  <slot>
		    确定保存改设置？
		  </slot>
		</comfirm>
	</section>
</template>
<script>
	import Breadcrumb from "@/components/Breadcrumb"; //面包屑
	import TreeHandle from "@/components/TreeHandle"; //tree
	import MySelect from "@/components/MySelect"; //select 选择框
	import Comfirm from "@/components/alert/Comfirm"; //confirm 弹出层
	export default {
		name: 'Model',
		data() {
			return {
				"breadcrumb": ["系统设置", "菜单设置"],
				"selectData": [
					{"id": 1, "value": "角色1"},
					{"id": 2, "value": "角色2"},
					{"id": 3, "value": "角色3"}
				],
				"selectItem": 0, //选中的角色
				"checkedItem": [], //选中的权限
				"show": false, //弹出层是否显示
				"alertContent": "" //弹出层内容
			}
		},
		components: {
			"breadcrumb": Breadcrumb,
			'tree': TreeHandle,
			"select-dom": MySelect
		},
		methods: {
			changeFn(val){ //角色选择
		      this.selectItem = val;
		    },
		    checkFn(val){ //导航选择
		    	this.checkedItem = val; 
		    },
		    cancelFn(){ //弹层 取消
		    	this.show = false;
		    },
		    submitFn(){ //弹层 确定
		    	this.show = false;
		    	console.log("确定保存设置");
		    },
		    saveFn(){ //保存菜单设置
		    	this.show = true;
		    	this.alertContent = "确定保存改设置？"
		    }
		}
	}
</script>
<style lang='scss' scoped>
	
</style>