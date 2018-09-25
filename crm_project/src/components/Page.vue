<template>
	<div class="page-section">
		<ul class="page-main">
			<li class="text-dom index"><a href="javascript:;" :class="{'disabled':page <=1}" @click="toUrl(1)">首页</a></li>
			<li class="text-dom pre"><a href="javascript:;" :class="{'disabled':page <=1}" @click="toUrl(page-1)">上一页</a></li>
			<li v-if="pageShowMin > pageSpace"><a href="javascript:;">...</a></li>
			<li v-if="pageSize>=pageShowMax" v-for="item in pageShowMax">
				<a href="javascript:;" @click="toUrl(item+pageShowMin)" :class="{'active': (item+pageShowMin) == page}" v-if="page >= pageShowMin && (item + pageShowMin) <= pageShowMax">{{item + pageShowMin}}</a>
				<a href="javascript:;" @click="toUrl(item)" :class="{'active': item == page}" v-else-if="(item + pageShowMin) <= pageShowMax">{{item}}.{{(item + pageShowMin) <= pageShowMax}}</a>
			</li>
			<li v-if="pageSize>pageShowMax"><a href="javascript:;">...</a></li>
			<li class="text-dom next"><a href="javascript:;" @click="toUrl(page+1)" :class="{'disabled':page >=pageSize}">下一页</a></li>
			<li class="text-dom last"><a href="javascript:;" @click="toUrl(pageSize)" :class="{'disabled':page >=pageSize}">末页</a></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "Page",
		data() {
			return {
				'pageShowMax': 9,
				'pageShowMin': 0,
				"pageSpace": 4,
			}
		},
		props: ['page', 'pageSize'],
		created(){
			this.countFn();
		},
		updated(){
			this.countFn();
		},
		methods: {
			countFn(){
				let page = parseInt(this.page);
				let pageSize = parseInt(this.pageSize);
				let max = page + this.pageSpace;
				let min = page - this.pageSpace;
				if(page >= 9){
					if(max < this.pageSize){
						this.pageShowMax = max;
					}else{
						this.pageShowMax = pageSize;
					}
					if(min <= 0){
						this.pageShowMin = 1;
					}else if(max >= pageSize){
						this.pageShowMin = pageSize - this.pageSpace*2;
					}else{
						this.pageShowMin = min;
					}
				}else{
					this.pageShowMax = 9;
					this.pageShowMin = 0;
				}
			},
			toUrl(url){
				this.$router.push({
					path: '/page/'+url
				})
			}
		}
	}
</script>
<style lang='scss' scoped>
.page-section{ 
	overflow: hidden; 
	text-align: center; 
}
.page-main{ 
	margin: 10px auto; 
	display: inline-block; 
	li{ 
		float: left; 
		margin-right: -1px; 
		overflow: hidden; 
	}
	a{ 
		color: inherit; 
		display: block; 
		width:30px; 
		height: 30px; 
		line-height: 30px; 
		border: 1px solid #d1d1d1; 
		text-align: center;
		&:hover,
		&.active{
			background: #f39800; 
			color: #fff;
		}
		&.disabled, &.disabled:hover{
			color: #999; 
			cursor: not-allowed; 
			background: none;
		}
	}
	.text-dom a{ 
		padding: 0 10px; 
		width: auto; 
	}
}

</style>
