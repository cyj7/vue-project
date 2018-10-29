<template>
	<header class="header-box" :class="{'nav-hide': leftNav}">
		<a href="#" class="logo-box v-middle"><img src="../images/logo.jpg" class="logo"></a>
		<span  class="nav-lft-icon" @click="toggleNav">导航</span>
		<div class="exit-box right">退出</div>
	</header>
</template>
<script>
	export default{
		name: "Header",
		data: function(){
			return{
				navDown: false, //是否现在下拉菜单, false：不显示
				leftNav: false, //右侧菜单是否缩略显示
				data: [{
		          label: '一级 1',
		          children: [{
		            label: '二级 1-1',
		            children: [{
		              label: '三级 1-1-1'
		            }]
		          }]
		        }, {
		          label: '一级 2',
		          children: [{
		            label: '二级 2-1',
		            children: [{
		              label: '三级 2-1-1'
		            }]
		          }]
		        }],
		        defaultProps: {
		          children: 'children',
		          label: 'label'
		        }
		    }
		},
		components: {
			
		},
		methods: {
			infoDownFn(){
				let nav = this.navDown
				this.navDown = !nav;
			},
			toggleNav(){
				let lft = this.leftNav;
				this.leftNav = !lft;
				if(!lft){
					document.body.className = 'nav-hide';
				}else{
					document.body.className = '';
				}
				
			}
		}
	}
</script>
<style lang="scss" scoped>

.header-box{
	background: #333;
	height: $headerHeight;
	width: 100%;
	color: #fff;
	position: relative;
	z-index: 9991;
	&.nav-hide{
		.logo-box{
			width: 0;
			overflow: hidden;
		}
	}
	.header-lft{
		padding: 10px 0;
		.nav-max{
			display: inline-block;
			li{
				float: left;
				margin-left: 40px;
				font-size: 16px;
			}
		}
	}
	.logo-box{
		display: inline-block;
		height: $headerHeight - 20;
	}
	.logo{
		height: 100%;
	}
	.nav-lft-icon{
		display: inline-block;
		width: 30px;
	}
	
}
</style>