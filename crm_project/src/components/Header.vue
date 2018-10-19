<template>
	<header class="header-box">
		<div class="header-lft left">
			<a href="#" class="logo-box v-middle"><img src="../images/logo.jpg" class="logo"></a>
			<ul class="nav-max v-middle">
				<li><a href="#">首页</a></li>
				<li><a href="#">数据管理</a></li>
				<li><a href="#">财务管理</a></li>
				<li><a href="#">系统管理</a></li>
			</ul>
		</div>
		<div class="header-rht right">
			<span class="header-idea v-middle">意见反馈</span>
			<a href="#" class="header-help v-middle">帮助中心</a>
			<div class="nav-email v-middle"></div>
			<div class="user-information v-middle" :class="navDown ? 'active' : ''">
				<div class="user-info-top" @click="infoDownFn">
					<span class="user-info-img"></span>
					<ul class="user-info">
						<li>哇棒（北京）移动技术有限公司（电商）</li>
						<li>二代ID : 3419</li>
						<li>小米ID : 1064552671</li>
					</ul>
					<span class="down-arr"></span>
				</div>
				<ul class="user-info-list">
					<li><a href="#">账户中心</a></li>
					<li><a href="#">退出</a></li>
				</ul>
			</div>
		</div>
		<!-- 意见反馈 -->
		<div class="idea-box">
			<div class="mask"></div>
			<div class="idea-main"></div>
		</div>
	</header>
</template>
<script>
	export default{
		name: "Header",
		data: function(){
			return{
				navDown: false //是否现在下拉菜单, false：不显示
			}
		},
		methods: {
			infoDownFn: function(){
				let nav = this.navDown
				this.navDown = !nav;
			}
		}
	}
</script>
<style lang="scss" scoped>
$headerHeight: 65px;
.header-box{
	background: #333;
	height: $headerHeight;
	width: 100%;
	color: #fff;
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
	.header-rht{
		
	}
	.header-idea, .header-help, .nav-email, .user-information{
		display: inline-block;
		margin-left: 20px;
	}
	.user-information{
		position: relative;
		font-size: 12px;
		height: $headerHeight;
		&.active{
			.user-info-list{
				display: block;
			}
		}
	}
	.user-info-top{
		height: $headerHeight;
		color: #ababab;
	}
	.user-info-list{
		background: #333;
		position: absolute;
		top: $headerHeight;
		width: 100%;
		font-size: 14px;
		display: none;
		li{
			border-top: 1px solid #2d2d2d;
			border-bottom: 1px solid #444;
			padding: 10px 20px;
		}
	}
	.idea-box{
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 100%;
		.mask{
			width: 100%;
			height: 100%;
			background: #000;
			opacity: .5;

		}
	}
}
</style>