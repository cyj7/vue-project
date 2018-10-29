<!-- tree 菜单 -->
<template>
	<div>
		<div class="nav-item">
			<span class="nav-icon-box v-middle" @click="toggle()"></span>
			<span v-if="checkbox"><input type="checkbox" name="" :value="items.id" v-model="items.checked" @change="selectAll"></span>
			<span class="list-tit v-middle">{{items.label}}</span>
			<a href="javascript:;" class="handle" @click="editFn(items.id)" v-if="handle">编辑</a>
			<a href="javascript:;" class="handle" @click="addFn(items.id)" v-if="handle">添加子菜单</a>
		</div>
		<ul class="nav-child" v-if="!!items.children" v-show="showTree">
			<li class="nav-list" v-for="item, itemIndex in items.children" :key="itemIndex">
				<!-- <router-link :to="{path: item.linkUrl}">{{item.label}}</router-link> -->
				<span class="nav-icon-box v-middle"></span>
				<span v-if="checkbox"><input type="checkbox" name="" v-model="item.checked" :value="item.id" @change="selectItem(e)"></span>
				<span class="list-tit v-middle">{{item.label}}</span>
				<span v-if="item.linkUrl">({{item.linkUrl}})</span>
				<a href="javascript:;" class="handle" @click="editFn(item.id)" v-if="handle">编辑</a>
				<a href="javascript:;" class="handle" @click="addFn(item.id)" v-if="handle">添加子菜单</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'Tree',
		data() {
			return {
        		showTree: false, //显示菜单
        		checkoId: 3, //默认选中的id
        		checkItem: false, //是否选中
			}
		},
		props: ["items", "checkbox", "handle"],
		components: {

		},
		methods: {
			toggle(){
				var bol = this.showTree;
				this.showTree = !bol;
			},
			editFn(id){ //编辑
				this.$emit("editFn", id);
			},
			addFn(id){ //添加
				this.$emit("addFn", id)
			},
			selectAll(e){
				let self = e.target;
				let selfChecked = self.checked;
				let val = self.value;
				let action = ""; //增加 or 减少
				if(selfChecked){
					action = 'add';
				}else{
					action = 'reduce';
				}
				this.$emit("checkFn", val, action); //触发父级
			},
			selectItem(){
				console.log("item");
			}
		}
	}
</script>
<style lang='scss' scoped>
	
	.tree-handle{
		>.nav-list{
			.nav-item{
				padding: 10px;
				font-size: 16px;
				height: $navHeight;
				overflow: hidden;	
			}
		}

		.nav-child{
			font-size: 14px;
			.nav-list{
				padding: 5px 0 5px 20px;
			}
		}
		.nav-icon-box{
			display: inline-block;
			width: 20px;
			height: 20px;
			background: #ccc;
			margin-right: 10px;
		}
		.handle{
			color: $blueColor;
			margin-left: 10px;
		}
	}

</style>