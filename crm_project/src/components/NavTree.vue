<!-- tree 菜单 -->
<template>
	<ul class="tree-nav">
		<li class="nav-list" v-for="(items, index) in data" :class="index === showIndex || index === defaultIndex ? 'active': ''" :key="index">
			<div class="nav-item" @click="toggle(index)">
				<span class="nav-icon-box v-middle icon-homepage"></span>
				<a href="javascript:;" class="list-tit v-middle">{{items.label}}</a>
				<span class="icon-right-arr v-middle right"></span>
			</div>
			<ul class="nav-child" v-if="!!items.children">
				<li class="nav-list" v-for="item, itemIndex in items.children" :key="itemIndex">
					<router-link :to="{path: item.linkUrl}">{{item.label}}</router-link>
				</li>
			</ul>
		</li>
	</ul>
</template>
<script>
	export default {
		name: 'Tree',
		data() {
			return {
				data: [{
		          label: '一级 1',
		          children: [{
		            label: '二级 1-1'
		          }]
		        }, {
		          label: '一级 2'
        		}, {
		          label: '系统设置',
		          children: [{
		            	label: '菜单列表',
		        		linkUrl: '/menu/list'
		        	},{
		        		label: '菜单设置',
		        		linkUrl: '/menu/set'
		        	},{
		        		label: '角色列表',
		        		linkUrl: '/'
		        	},{
		        		label: '系统用户',
		        		linkUrl: '/'
		        	},{
		        		label: '系统日志',
		        		linkUrl: '/'
		        	},{
		        		label: '部门管理',
		        		linkUrl: '/'
		        	}]
        		}],
        		showIndex: null, //显示下来菜单的索引
        		defaultIndex: 2 //默认选中的菜单
			}
		},
		components: {

		},
		methods: {
			toggle(i){
				var index = this.showIndex;
				if(index == i){
					this.showIndex = null;
				}else{
					this.showIndex = i;
				}
			}
		}
	}
</script>
<style lang='scss' scoped>
	
	.tree-nav{
		width: $navWidth;
		background: $lftNavBackground;
		color: #fff;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 999;
		height: 100%;
		padding-top: $headerHeight;
		.icon-right-arr{
			transition: transform .2s;
			-webkit-transition: transform .2s;
		}
		>.nav-list{
			border-bottom: 1px solid #666;
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
			.nav-item:hover{
				background: $maxNavHoverBackground;
				.icon-right-arr{
					&:after{
						border-left-color: $maxNavHoverBackground;
					}
					
				}
			}
		}

		.nav-child{
			font-size: 12px;
			display: none;
			.nav-list{
				padding: 5px 0 5px 20px;
				&:hover{
					background: $hoverLightBackground;
				}
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
	//隐藏菜单
	.nav-hide{
		.tree-nav{
			width: $navMinWidth;
			>.nav-list{
				position: relative;
				z-index: 99;
				&.active{
					.nav-child{
						display: none;
					}
				}
				.list-tit, .icon-right-arr{
					display: none;
				}
				&:hover{
					background: $maxNavHoverBackground;
					height: $navHeight + 1;
					.nav-item{
						width: $navWidth;
						position: absolute;
						top: 0;
						left: 0;
						background: $maxNavHoverBackground;
					}
					.nav-child{
						display: block;
						position: absolute;
						width: $navWidth - $navMinWidth - 1;
						left: $navMinWidth + 1;
						top: $navHeight;
						background: $lftNavBackground;
						padding-left: 0;
					}
					.list-tit{
						padding-left: 15px;
						display: inline-block;
					}
					// .icon-right-arr{
					// 	display: none;
					// }

				}
			}
		}
	}

</style>