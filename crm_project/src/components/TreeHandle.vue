<!-- tree 菜单 -->
<template>
	<ul class="tree-handle">
		<li class="nav-list" v-for="(items, index) in data" :key="index">
			<tree-item :items="items" @editFn="editFn" @addFn="addFn" :checkbox="checkbox" :handle="handle" @checkFn="checkFn"></tree-item>
		</li>
	</ul>
</template>
<script>
	import TreeHandleItem from "@/components/TreeHandleItem"; //select 选择框
	export default {
		name: 'Tree',
		data() {
			return {
				data: [{
		          label: '一级 1',
		          id: '1',
		          checked: true,
		          children: [{
		            label: '二级 1-1',
		          	id: '11'
		          }]
		        }, {
		          label: '一级 2',
		          id: '2',
        		}, {
		          label: '系统设置',
		          id: '3',
		          children: [{
		          		id: '31',
		            	label: '菜单列表',
		        		linkUrl: '/menu/list'
		        	},{
		        		id: '32',
		        		label: '菜单设置',
		        		linkUrl: '/menu/set'
		        	},{
		        		id: '33',
		        		label: '角色列表',
		        		linkUrl: '/'
		        	},{
		        		id: '34',
		        		label: '系统用户',
		        		linkUrl: '/'
		        	},{
		        		id: '35',
		        		label: '系统日志',
		        		linkUrl: '/'
		        	},{
		        		id: '36',
		        		label: '部门管理',
		        		linkUrl: '/'
		        	}]
        		}],
        		showTree: false, //显示菜单
				checkArr: [] //选中的id
			}
		},
		props: ["checkbox", "handle"],
		components: {
			'tree-item': TreeHandleItem
		},
		created(){
			let data = this.data; //菜单数据
			for(let i=0; i<data.length; i++){
				this.checkArr.push(data[i].id); //初始化 添加已选择数据
				if(data.children){
					let children = data.children;
					for(let j=0; j<children.length; j++){
						if(children[j].checked){
							this.checkArr.push(children[j].id); //初始化 添加已选择数据
						}
					}
				}
			}
		},
		methods: {
			editFn(id){ //编辑
				this.$emit("editFn", id);
			},
			addFn(id){ //添加
				this.$emit("addFn", id);
			},
			checkFn(val, action){ //checkbox 选择 val: 值， action：操作
				if(action == "add"){
					this.checkArr.push(val);
				}else{
					// this.checkArr.push(val);
					for(let i=0; i<this.checkArr.length; i++){
						if(this.checkArr[i] == val){
							this.checkArr.splice(i, 1);
							break;
						}
					}
				}
				this.$emit("checkFn", checkArr);
			}
		}
	}
</script>
<style lang='scss' scoped>
	
	.tree-handle{
		>.nav-list{
			&.active{ //点击后
				.nav-child{
					display: block;
				}
				.icon-right-arr{
					transform: rotate(90deg);
					-webkit-transform: rotate(90deg);
				}
			}
			.nav-item{
				padding: 10px;
				font-size: 16px;
				height: $navHeight;
				overflow: hidden;	
			}
		}

		.nav-child{
			font-size: 12px;
			.nav-list{
				padding: 5px 0 5px 20px;
			}
		}
		.nav-icon-box{
			display: inline-block;
			width: 20px;
			height: 20px;
			background: #f1f2f2;
			margin-right: 10px;
		}
	}

</style>