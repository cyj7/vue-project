<template>
	<div class="">
		<header-dom></header-dom>
		<tree></tree>
		<section class="">
			<div>sdfadf</div>
			<select-dom :data="selectDdata"></select-dom>
			<!-- <div @click="toUrl(1)">分页</div> -->
			<router-link to='/page/1'>分页</router-link>
			<!-- <date-picker></date-picker> -->
			<div>
				<echarts :option1='data1' :option2="data2" :titles="names" :xName="xName" :yName="yName" :symbolSize="symbolSize"></echarts>
			</div>
			<div>
				<upload></upload>
			</div>
			<div><router-link to='/create-new'>创建新用户</router-link></div>
			<div><router-link to='/list'>列表页</router-link></div>
		</section>
	</div>
</template>
<script>
	import Header from "@/components/Header"; //头部
	import NavTree from "@/components/NavTree"; //左侧菜单
	// import Select from "@/components/Select"; //select 选择框
	import MySelect from "@/components/MySelect"; //select 选择框
	import Page from "@/components/Page";
	import DatePicker from "@/components/DatePicker";
	import Echarts from "@/components/Echarts"; //折线图
	import Upload from "@/components/Upload"; //上传
	export default {
		name: "Index",
		data(){
			return {
				data1: [
					[0, 2], //第一个是坐标
		            [2, 5],
		            [3, 9],
		            [5, 16],
		            [7, 24],
		            [9, 18],
		            [12, 15],
		            [15, 5],
		            [17, 2],
		            [19, 1]
				],
				data2: [
					[0, 1],
		            [2, 3],
		            [3, 7],
		            [5, 13],
		            [7, 21],
		            [9, 16],
		            [12, 12],
		            [15, 3],
		            [17, 1],
		            [19, 0]
				],
				names: ["曲线1","曲线2"],
				xName: "宽度（mm)",
				yName: "高度（mm)",
				symbolSize: 5,
				selectDdata: [{"id": 0, "value": "全部选择"},{"id": 1, "value": "选择1"},{"id": 2, "value": "选择2"},{"id": 3, "value": "选择3333333"}]
			}
		},
		components: {
			"header-dom": Header,
			'tree': NavTree,
			"select-dom": MySelect,
			'page': Page,
			'date-picker': DatePicker,
			'echarts': Echarts,
			'upload': Upload
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
		}
	}
</script>