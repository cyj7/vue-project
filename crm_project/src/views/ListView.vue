<!-- 标题 -->
<template>
	<table-list :titles='titleList' :lists="lists">
		<table-column label="标题1"></table-column>
		<table-column label="标题2"></table-column>
	</table-list>
</template>
<script>
	import Header from "@/components/Header"; //头部
	import Footer from "@/components/Footer"; //底部
	import TableList from "@/components/TableList"; //table
	import TableColumn from "@/components/table/TableColumn"; //table
	export default {
		name: 'ListView',
		data() {
			return {
				titleList: [{title: "标题1", width: "13%", align: "center"},{title: "标题2", width: ""},{title: "标题3", width: ""}],
				lists: [{title: "列表1", content: '列表1内容', time: '列表1时间2018-10-11'},
					{title: "列表2", content: '列表1内容', time: '列表1时间2018-10-11'},
					{title: "列表3", content: '列表1内容', time: '列表1时间2018-10-11'},
					{title: "列表4", content: '列表1内容', time: '列表1时间2018-10-11'}]
			}
		},
		components: {
			"header-dom": Header,
			'footer-dom': Footer,
			"table-list": TableList,
			"table-column": TableColumn
		},
		methods: {

		}
	}
</script>
<style lang='scss' scoped>
	
</style>