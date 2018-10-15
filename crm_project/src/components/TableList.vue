<!-- 标题 -->
<template>
<section>
	<div class="table-tit">
    	<table>
    		<tr>
    			<td v-for="item in titles" :align="item.align ||''">{{item.title}}</td>
    		</tr>
    	</table>
	</div>
	<div class="table-body" :style="{height: bodyHeight}">
		<table>
    		<tr v-for="list in lists">
    			<td :align="titles[0].align || ''">{{list.title}}</td>
    			<td :align="titles[1].align || ''">{{list.content}}</td>
    			<td :align="titles[2].align || ''">{{list.time}}</td>
    		</tr>
    	</table>
	</div>
</section>
	
</template>
<script>
	export default {
		name: 'TableList',
		data() {
			return {
				titList: '',
				bodyHeight: ''
			}
		},
		props: ['titles', 'lists'],
		methods: {

		},
		created(){
			//设置table高度
			let wh = document.documentElement.clientHeight; //获取浏览器高度
			this.bodyHeight = (wh - 50) +"px";
			console.log(this)
		}
	}
</script>
<style lang='scss' scoped>
	.table-tit, .table-body{
		table{
			width: 100%;
		}
		td{
			padding: 10px;
			width: 10%;
		}
	}
	.table-body{ 
		overflow-y: scroll;
		table{
			background: #fff; 
		}
	}

</style>